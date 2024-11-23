from werkzeug.security import generate_password_hash, check_password_hash
from app.utils.database import get_db

class User:
    def __init__(self, username, password, role='user'):
        self.username = username
        self.password_hash = generate_password_hash(password)
        self.role = role

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @staticmethod
    def get_by_username(username):
        db = get_db()
        user_data = db.users.find_one({'username': username})
        return user_data