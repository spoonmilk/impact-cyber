# TODO: Add in parsing CSV to find breach information
from flask import Blueprint, request, jsonify
from backend.services.breach_check import BreachesService


# Initialize Blueprint
breach_check_bp = Blueprint('breach_check', __name__)

# Initialize the BreachesService
breaches_service = BreachesService.initialize_service()

@breach_check_bp.route('/breaches', methods=['GET'])
def get_breaches():
    company_name = request.args.get('company_name')
    if not company_name:
        return jsonify({'error': 'company_name is required'}), 400

    try:
        breaches = breaches_service.get_breaches_by_company(company_name)
        return jsonify({'company_name': company_name, 'breaches': breaches})
    except Exception as e:
        return jsonify({'error': str(e)}), 500