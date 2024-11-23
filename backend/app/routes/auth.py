from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import check_password_hash
import jwt
import datetime
from app.models.user import User
from app.utils.database import get_db
import logging


auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Log incoming data for debugging (do not log passwords in production)
    logging.debug(f"Login attempt for username: {username}")

    # Initialize database connection
    db = get_db()
    
    # Check if user exists
    user = db.users.find_one({'username': username})
    if not user:
        logging.warning(f"User not found: {username}")
        return jsonify({'message': 'Invalid credentials'}), 401

    # Check password match
    if check_password_hash(user['password'], password):
        logging.info(f"Login successful for user: {username}")
        token = jwt.encode({
                'username': user['username'],
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
            }, current_app.config['SECRET_KEY'], algorithm='HS256')

        return jsonify({
            'token': token,
            'message': 'Login successful'
        })
    else:
        logging.warning(f"Incorrect password for user: {username}")
        return jsonify({'message': 'Invalid credentials'}), 401

# Add a route to initialize admin user
@auth_bp.route('/api/admin/init', methods=['POST'])
def init_admin():
    try:
        db = get_db()
        # Check if admin already exists
        if db.users.find_one({'username': current_app.config['ADMIN_USERNAME']}):
            return jsonify({'message': 'Admin already exists'}), 400
        
        # Create admin user
        from werkzeug.security import generate_password_hash
        admin_user = {
            'username': current_app.config['ADMIN_USERNAME'],
            'password': generate_password_hash(current_app.config['ADMIN_PASSWORD']),
            'role': 'admin'
        }
        db.users.insert_one(admin_user)
        return jsonify({'message': 'Admin user created successfully'}), 201
    except Exception as e:
        return jsonify({'message': f'Error creating admin: {str(e)}'}), 500

# Add a middleware for protected routes
def token_required(f):
    from functools import wraps

    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            try:
                token = auth_header.split(" ")[1]
            except IndexError:
                return jsonify({'message': 'Token format is incorrect'}), 401

        if not token:
            return jsonify({'message': 'Token is missing'}), 401

        try:
            data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
            db = get_db()
            current_user = db.users.find_one({'username': data['username']})
            if not current_user:
                return jsonify({'message': 'Invalid token'}), 401
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired'}), 401
        except jwt.InvalidTokenError as e:
            return jsonify({'message': f'Invalid token: {str(e)}'}), 401

        return f(current_user, *args, **kwargs)

    return decorated

# Example protected route
@auth_bp.route('/api/admin/check', methods=['GET'])
@token_required
def check_auth(current_user):
    return jsonify({
        'message': 'Authenticated',
        'user': {
            'username': current_user['username'],
            'role': current_user['role']
        }
    })