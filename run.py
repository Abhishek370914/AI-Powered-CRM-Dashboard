from app import create_app, db
from app.models import Customer
import random

app = create_app()

def create_sample_data():
    with app.app_context():
        db.drop_all()
        db.create_all()

        for i in range(100):
            customer = Customer(
                name=f"Customer {i+1}",
                email=f"customer{i+1}@example.com",
                age=random.randint(18, 80),
                purchase_amount=random.uniform(50, 1000),
                loyalty_score=random.uniform(0, 1)
            )
            db.session.add(customer)

        db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        create_sample_data()
    app.run(debug=True)