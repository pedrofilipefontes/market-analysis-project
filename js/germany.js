//jshint esversion:6

// Germany graphs


var ctx = document.getElementById('germany1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart 
    type: 'doughnut',

    // The data 
    data: {
        labels: ['Unilever Group', 'Froneri Ltd', 'Bofrost', 'Mars Inc', 'Eismann Tiefkühl-Heimservice', 'Royal', 'General Mills'],
        datasets: [{
            backgroundColor: [
              'rgb(193, 247, 220)',
              'rgb(195, 210, 213)',
              'rgb(189, 189, 143)',
              'rgb(162, 112, 138)',
              'rgb(130, 70, 112)',
              'rgb(74, 64, 99)',
              'rgb(79, 18, 113)'
            ],
            borderColor: 'rgb(255, 255, 255)',
            data: [27, 5, 15, 23, 10, 10, 10]
        }]
    },

    // Configuration options
    options: {}
});

var ctx = document.getElementById('germany2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart 
    type: 'doughnut',

    // The data 
    data: {
        labels: ['Unilever Group', 'Froneri Ltd', 'Bofrost', 'Mars Inc', 'Eismann Tiefkühl-Heimservice', 'Royal', 'General Mills'],
        datasets: [{
            backgroundColor: [
              'rgb(193, 247, 220)',
              'rgb(195, 210, 213)',
              'rgb(189, 189, 143)',
              'rgb(162, 112, 138)',
              'rgb(130, 70, 112)',
              'rgb(74, 64, 99)',
              'rgb(79, 18, 113)'
            ],
            borderColor: 'rgb(255, 255, 255)',
            data: [27, 5, 15, 23, 10, 10, 10]
        }]
    },

    // Configuration options
    options: {}
});


var ctx = document.getElementById('germany3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart 
    type: 'line',

    // The data for 
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options
    options: {}
});


