from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename
import os

package_bp = Blueprint('package', __name__)

# Directory to store uploaded images
UPLOAD_FOLDER = '../static/uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@package_bp.route('/upload-package', methods=['POST'])
def upload_package():
    """Upload a new package (Admin-only)"""
    if not request.headers.get('isAdmin') == 'true':  # Example admin verification
        return jsonify({'error': 'Unauthorized'}), 403

    package_name = request.form.get('package_name')
    package_description = request.form.get('package_description')
    image = request.files.get('image')

    if not (package_name and package_description and image):
        return jsonify({'error': 'All fields are required'}), 400

    # Save image
    image_filename = secure_filename(image.filename)
    image_path = os.path.join(UPLOAD_FOLDER, image_filename)
    image.save(image_path)

    # Save package details in MongoDB
    package = {
        'package_name': package_name,
        'package_description': package_description,
        'image_path': image_path
    }
    db = current_app.database
    db.packages.insert_one(package)

    return jsonify({'message': 'Package uploaded successfully'}), 201


@package_bp.route('/packages', methods=['GET'])
def get_packages():
    """Fetch all packages"""
    db = current_app.database
    packages = list(db.packages.find({}, {'_id': 0}))
    return jsonify(packages)
