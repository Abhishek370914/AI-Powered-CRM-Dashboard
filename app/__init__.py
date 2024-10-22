from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
print(f"Template folder: {os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'templates'))}")
print(f"Static folder: {os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static'))}")
db = SQLAlchemy()

def create_app():
    app = Flask(__name__, 
                template_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'templates')),
                static_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static')))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crm.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    

    db.init_app(app)

    with app.app_context():
        from app import routes
        app.register_blueprint(routes.bp)

    return app