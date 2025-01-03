from flask import Flask
from flask_cors import CORS
from backend.routes.breach_check_route import breachcheck_bp
from backend.routes.news_query_route import newsquery_bp
from backend.routes.privacy_spy_route import privacyspy_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register blueprints
    app.register_blueprint(breachcheck_bp, url_prefix='/api/breachcheck')
    app.register_blueprint(newsquery_bp, url_prefix='/api/newsquery')
    app.register_blueprint(privacyspy_bp, url_prefix='/api/privacyspy')

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
