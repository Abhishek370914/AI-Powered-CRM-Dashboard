document.addEventListener('DOMContentLoaded', () => {
    fetchCustomerData();
});

async function fetchCustomerData() {
    try {
        const response = await fetch('/api/customer_insights');
        const data = await response.json();
        updateOverview(data);
        renderCustomerTable(data);
        renderChurnRiskChart(data);
        renderCustomerSegmentsChart(data);
    } catch (error) {
        console.error('Error fetching customer data:', error);
    }
}

function updateOverview(data) {
    const totalCustomers = data.length;
    const avgPurchase = data.reduce((sum, customer) => sum + customer.purchase_amount, 0) / totalCustomers;
    const avgLoyalty = data.reduce((sum, customer) => sum + customer.loyalty_score, 0) / totalCustomers;

    document.querySelector('#total-customers .card-value').textContent = totalCustomers;
    document.querySelector('#avg-purchase .card-value').textContent = `$${avgPurchase.toFixed(2)}`;
    document.querySelector('#avg-loyalty .card-value').textContent = avgLoyalty.toFixed(2);
}

function renderCustomerTable(data) {
    const tableBody = document.getElementById('customer-table-body');
    tableBody.innerHTML = '';

    data.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.age}</td>
            <td>$${customer.purchase_amount.toFixed(2)}</td>
            <td>${customer.loyalty_score.toFixed(2)}</td>
            <td>${customer.churn_risk}</td>
            <td>${customer.segment}</td>
        `;
        tableBody.appendChild(row);
    });
}

function renderChurnRiskChart(data) {
    const churnRiskCounts = {
        'Low': 0,
        'Medium': 0,
        'High': 0
    };

    data.forEach(customer => {
        churnRiskCounts[customer.churn_risk]++;
    });

    const ctx = document.getElementById('churn-risk-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(churnRiskCounts),
            datasets: [{
                data: Object.values(churnRiskCounts),
                backgroundColor: ['#2ecc71', '#f39c12', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

function renderCustomerSegmentsChart(data) {
    const segmentCounts = {};

    data.forEach(customer => {
        segmentCounts[customer.segment] = (segmentCounts[customer.segment] || 0) + 1;
    });

    const ctx = document.getElementById('customer-segments-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(segmentCounts),
            datasets: [{
                label: 'Number of Customers',
                data: Object.values(segmentCounts),
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Add smooth scrolling for navigation
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Update active link
        document.querySelector('.sidebar a.active').classList.remove('active');
        this.classList.add('active');
    });
});