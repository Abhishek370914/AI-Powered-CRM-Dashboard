# AI-Powered Customer Insights Dashboard

## Overview

This project is an AI-powered Customer Insights Dashboard for Customer Relationship Management (CRM) using cloud computing concepts. It provides real-time analytics and visualizations of customer data, including churn risk prediction and customer segmentation.

## Features

- Real-time data updates using WebSockets
- Customer data visualization with interactive charts
- AI-powered customer segmentation
- Churn risk prediction
- Responsive and modern UI design

## Technologies Used

- Backend: Python, Flask, Flask-SocketIO
- Frontend: HTML, CSS, JavaScript
- Database: SQLite (easily adaptable to other databases)
- Machine Learning: scikit-learn
- Data Visualization: Chart.js

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/customer-insights-dashboard.git
   cd customer-insights-dashboard
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. Run the application:
   ```
   python run.py
   ```

2. Open a web browser and navigate to `http://localhost:5000`

3. The dashboard will load with sample data and start updating in real-time.

## Project Structure

```
customer_insights_dashboard/
│
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes.py
│   └── ml_model.py
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── dashboard.js
│
├── templates/
│   └── index.html
│
├── requirements.txt
└── run.py
```

## Customization

- To modify the machine learning models, edit the `app/ml_model.py` file.
- To change the UI design, modify the `static/css/style.css` and `templates/index.html` files.
- To adjust data update frequency, edit the `background_update_task` function in `app/routes.py`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/)
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/)
- [Chart.js](https://www.chartjs.org/)
- [scikit-learn](https://scikit-learn.org/)

## Contact

For any queries or suggestions, please open an issue on GitHub or contact [your-email@example.com](mailto:your-email@example.com).
