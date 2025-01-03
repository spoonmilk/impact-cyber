# TODO: Add in parsing CSV to find breach information

from flask import Blueprint, request, jsonify
from services.breachcheck import breach_info

privacyspy_route = Blueprint('breachcheck_route', __name__)

@privacyspy_route.route('/privacyspy', methods=['GET'])
def get_privacy_spy_data():
    company_name = request.args.get('company_name')
    if not company_name:
        return jsonify({"error": "Company name not provided"}), 400
    data = breach_info(company_name)
    return jsonify(data)
