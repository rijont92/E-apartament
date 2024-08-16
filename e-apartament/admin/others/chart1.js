// chart1.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lineChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: '$ Earnings',
                data: [12400, 9040, 7000, 10000, 11000, 14000],
                borderWidth: 2,
                backgroundColor: [
                    '#299b63'
                ],

                borderColor: [
                    '#299b63'
                ]

            }]
        },

        options: {
            responsive: true
        }
    });
});

// dougnout.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Vushtrri', 'Prishtinë', 'Pejë', 'Mitrovicë', 'Ferizaj', 'Gjilan'],
            datasets: [{
                label: 'Number of properties',
                data: [104, 133, 43, 72, 39, 9],
                borderWidth: 2,
                backgroundColor: [
                    '#299b63',
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#9966ff',
                    '#4bc0c0'
                ],
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true
        }
    });
});
    