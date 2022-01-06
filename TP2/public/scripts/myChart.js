
const nbValues = 12;
const defaultValue = 1;
const MIN_VALUE = 0;
const MAX_VALUE = 10;


const allLabels = new Array(nbValues).fill(defaultValue).map( (_,i) => String.fromCharCode('A'.charCodeAt(0)+i));
//const allLabels = ['J','F','M','A','M','J','J','A','S','O','N','D'];

// l'objet Chart
let myChart;
const socket = io();

const setup = () => {
  const ctxt = document.getElementById('myChart').getContext('2d');

  myChart = new Chart(ctxt, {
    type: 'bar',
    data: {
        labels: allLabels,
        datasets: [{
            label : `mes ${nbValues} dernières données`,
            data :  new Array(nbValues).fill(defaultValue),
            backgroundColor: 'rgba(128,255,128,0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
              min: MIN_VALUE,
              max: MAX_VALUE
            }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', setup);

function addData(chart, label, data) {
  chart.data.labels.unshift(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.unshift(data);
  });
  chart.update();
}

socket.on('2', () => {
  addData(myChart, myChart.data.labels.pop(), 2)
  console.log(2)
})

socket.on('3', () => {
  addData(myChart, myChart.data.labels.pop(), 3)
  console.log(3)
})

socket.on('4', () => {
  addData(myChart, myChart.data.labels.pop(), 4)
  console.log(4)
})

socket.on('5', () => {
  addData(myChart, myChart.data.labels.pop(), 5)
  console.log(5)
})

socket.on('6', () => {
  addData(myChart, myChart.data.labels.pop(), 6)
  console.log(6)
})

socket.on('7', () => {
  addData(myChart, myChart.data.labels.pop(), 7)
  console.log(7)
})

socket.on('8', () => {
  addData(myChart, myChart.data.labels.pop(), 8)
  console.log(8)
})