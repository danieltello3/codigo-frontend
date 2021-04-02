var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Mi primera tabla',
            backgroundColor: '#223399',
            borderColor: '#fff',
            data: [0, 10, 5, 2, 20, 30, 27]
        }]
    },

    // Configuration options go here
    options: {}
});