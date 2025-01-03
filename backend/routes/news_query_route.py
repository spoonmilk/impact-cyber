from flask import Blueprint, request, jsonify
from backend.services.news_scrape import scrape_news

newsquery_bp = Blueprint("newsquery", __name__)


@newsquery_bp.route("/", methods=["GET"])
def scrape_news_query():
    company_name = request.args.get("company")
    if not company_name:
        return jsonify({"error": "Query parameter 'company' is required"}), 400

    try:
        articles = scrape_news(company_name)
        return jsonify(articles)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
