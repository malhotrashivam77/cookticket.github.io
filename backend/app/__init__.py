from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from app.config.config import Config
import logging

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
    # logging.basicConfig(level=logging.DEBUG)

    # Load config
    app.config.from_object(Config)
    
    # Initialize MongoDB connection
    client = MongoClient(app.config['MONGODB_URI'])
    app.mongodb_client = client
    app.database = client.cookticket
    
    # Register blueprints
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    from app.routes.package import package_bp
    app.register_blueprint(package_bp, url_prefix='/packages')  # Add prefix for package routes
    
    # Add a test route
    @app.route('/test')
    def test_route():
        return {'message': 'Server is running!'}
    
    return app
