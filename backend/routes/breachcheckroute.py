# TODO: Add in parsing CSV to find breach information

from flask import Blueprint, request, jsonify
from services.breachcheck import breach_info

breachcheck_bp = Blueprint('breachcheck', __name__)

@breachcheck_bp.route('/', methods=['GET'])
def get_breach_info():
    company_name = request.args.get('company_name')
    if not company_name:
        return jsonify({"error": "Company name not provided"}), 400
    data = breach_info(company_name)
    return jsonify(data)
