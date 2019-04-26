//jshint esversion:6

// Poland graphs


var ctx = document.getElementById('poland1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart 
    type: 'doughnut',

    // The data 
    data: {
        labels: ['Lodziarne Firmowe Sp Zoo Sp k', 'Ice Mastry Sp j', 'Nordis Chlodnie Polskie Sp zoo', 'Mondelez International Inc', 'General Mills Inc', 'Nestlé SA', 'Private Label', 'Others'],
        datasets: [{
            backgroundColor: [
              'rgb(86, 113, 164)',
              'rgb(148, 72, 69)',
              'rgb(145, 164, 85)',
              'rgb(106, 88, 140)',
              'rgb(100, 150, 173)',
              'rgb(198, 131, 168)',
              'rgb(153, 168, 205)',
              'rgb(193, 145, 145)'
            ],
            borderColor: 'rgb(255, 255, 255)',
            data: [8, 8, 5, 3, 2, 12, 37, 25]
        }]
    },

    // Configuration options
    options: {}
});

var ctx = document.getElementById('poland2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart 
    type: 'doughnut',

    // The data 
    data: {
        labels: ['Unilever Group','PPL Koral Sp j','Froneri Ltd', 'Lodziarnie Firmowe Sp zoo Sp k', 'Ice Mastry Sp j', 'Nordis Chlodnie Polskie Sp zoo', 'Mondelez International Inc', 'General Mills Inc', 'Private Label', 'Others'],
        datasets: [{
            backgroundColor: [
              'rgb(86, 113, 164)',
              'rgb(148, 72, 69)',
              'rgb(145, 164, 85)',
              'rgb(106, 88, 140)',
              'rgb(100, 150, 173)',
              'rgb(198, 131, 168)',
              'rgb(153, 168, 205)',
              'rgb(193, 145, 145)',
              'rgb(189, 204, 151)',
              'rgb(164, 154, 186)'
            ],
            borderColor: 'rgb(255, 255, 255)',
            data: [27, 13, 13, 14, 10, 6, 2, 1, 23, 15]
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


