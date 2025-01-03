from flask import Blueprint, request, jsonify
from services.privacyspy import fetch_privacy_spy_data

privacyspy_route = Blueprint('privacyspy_route', __name__)

@privacyspy_route.route('/privacyspy', methods=['GET'])
def get_privacy_spy_data():
    company_name = request.args.get('company_name')
    if not company_name:
        return jsonify({"error": "Company name not provided"}), 400
    data = fetch_privacy_spy_data(company_name)
    return jsonify(data)