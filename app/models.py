from app import db

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer)
    purchase_amount = db.Column(db.Float)
    loyalty_score = db.Column(db.Float)

    def __repr__(self):
        return f'<Customer {self.name}>'