from flask import Blueprint, render_template, jsonify
from app.models import Customer
from app.ml_model import customer_segmentation, predict_churn

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/api/customer_insights')
def customer_insights():
    customers = Customer.query.all()
    data = [
        {
            'id': c.id,
            'name': c.name,
            'email': c.email,
            'age': c.age,
            'purchase_amount': c.purchase_amount,
            'loyalty_score': c.loyalty_score,
            'churn_risk': predict_churn(c.age, c.purchase_amount, c.loyalty_score)
        }
        for c in customers
    ]
    
    # Perform customer segmentation
    segmentation_data = [[c.age, c.purchase_amount, c.loyalty_score] for c in customers]
    segments = customer_segmentation(segmentation_data)
    
    for i, segment in enumerate(segments):
        data[i]['segment'] = int(segment)

    return jsonify(data)