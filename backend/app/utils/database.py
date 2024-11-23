from flask import current_app
from pymongo import MongoClient

def get_db():
    if not hasattr(current_app, 'database'):
        client = MongoClient(current_app.config['MONGODB_URI'])
        current_app.database = client.cookticket
    return current_app.database