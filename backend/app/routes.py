from flask import Blueprint, request, jsonify
from app.services import breach_info, tos_query, scrape_news

api = Blueprint('main', __name__)

@api.route('/api/hibp', methods=['GET'])
def query_hibp():
    email_or_domain = request.args.get('query')
    if not email_or_domain:
        return jsonify({"error": "Query parameter 'query' is required"}), 400

    try:
        data = breach_info(email_or_domain)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@api.route('/api/tosdr', methods=['GET'])
def query_tosdr():
    domain = request.args.get('domain')
    if not domain:
        return jsonify({"error": "Query parameter 'domain' is required"}), 400

    try:
        tos_data = tos_query(domain)
        return jsonify(tos_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@api.route('/api/news', methods=['GET'])
def scrape_news_query():
    company_name = request.args.get('company')
    if not company_name:
        return jsonify({"error": "Query parameter 'company' is required"}), 400

    try:
        articles = scrape_news(company_name)
        return jsonify(articles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

