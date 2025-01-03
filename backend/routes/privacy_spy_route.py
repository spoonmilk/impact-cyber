from flask import Blueprint, request, jsonify
from backend.services.privacy_spy import fetch_privacy_spy_data

privacyspy_bp = Blueprint('privacyspy', __name__)

@privacyspy_bp.route('/', methods=['GET'])
def get_privacy_spy_data():
    company_name = request.args.get('company_name')
    if not company_name:
        return jsonify({"error": "Company name not provided"}), 400
    data = fetch_privacy_spy_data(company_name)
    return jsonify(data)
