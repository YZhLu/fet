const Iss = 7;
const Ids = [0];
for (let i = 1; i < 15; i++) {
  Ids[i] = Iss * (1 - (i-5) / -4) ** 2;
  console.log(Ids)
}

export const data = {
  labels: [
    "-5",
    "-4",
    "-3",
    "-2",
    "-1",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ],
  datasets: [
    {
      label: "Vgs x Id",
      fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3)",
      borderColor: "rgb(205, 130, 158)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(205, 130,1 58)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // data: [
      //   0, 0, 0.625, 2.5, 5.625, 10, 16.625, 22.5, 30.625, 40, 50.625, 62.5,
      //   75.625, 90, 105.625,
      // ],
      data:Ids
    },
    // {
    //   label: "My Second dataset",
    //   fill: true,
    //   lineTension: 0.3,
    //   backgroundColor: "rgba(184, 185, 210, .3)",
    //   borderColor: "rgb(35, 26, 136)",
    //   borderCapStyle: "butt",
    //   borderDash: [],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: "miter",
    //   pointBorderColor: "rgb(35, 26, 136)",
    //   pointBackgroundColor: "rgb(255, 255, 255)",
    //   pointBorderWidth: 10,
    //   pointHoverRadius: 5,
    //   pointHoverBackgroundColor: "rgb(0, 0, 0)",
    //   pointHoverBorderColor: "rgba(220, 220, 220, 1)",
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 1,
    //   pointHitRadius: 10,
    //   data: [2, 4, 4, 1, 8, 2, 9],
    // },
  ],
};
