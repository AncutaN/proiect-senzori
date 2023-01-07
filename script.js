var xValues = [
  [18, "35%"],
  [18, "25%"],
  [19, "25%"],
  [18, "25%"],
  [19, "25%"],
  [20, "25%"],
  [22, "20%"],
  [21, "22%"],
  [22, "23%"],
  [23, "25%"],
  [21, "24%"],
  [21, "27%"],
  [21, "20%"],
  [20, "22%"],
  [18, "27%"],
  [22, "29%"],
  [21, "30%"],
  [17, "32%"],
  [18, "35%"],
  [23, "37%"],
  [20, "37%"],
  [17, "39%"],
  [21, "35%"],
  [23, "35%"],
];
var yValues = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
        label: "Temperatura & Umiditate",
      },
    ],
  },
  options: {
    legend: { display: true },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 23, stepSize: 1 } }],
    },
  },
});
