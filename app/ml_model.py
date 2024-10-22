from sklearn.cluster import KMeans
import numpy as np

def customer_segmentation(data):
    # Simple K-means clustering for customer segmentation
    kmeans = KMeans(n_clusters=3, random_state=42)
    features = np.array(data)
    kmeans.fit(features)
    return kmeans.labels_

def predict_churn(age, purchase_amount, loyalty_score):
    # Simple rule-based churn prediction
    if loyalty_score < 0.3 and purchase_amount < 100:
        return "High"
    elif loyalty_score < 0.7 and purchase_amount < 500:
        return "Medium"
    else:
        return "Low"