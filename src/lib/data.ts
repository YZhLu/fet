const Iss = 7;
export const Vp = -4;
export const Ids = [0, 0];

export const shift = Vp - 2;
const max = 10;

for (let i = 2; i < max; i++) {
  Ids[i] = Iss * (1 - (i + shift) / Vp) ** 2;
  console.log(i - shift);
}

for (let i = 2; i < max; i++) {
  Ids[i] = Iss * (1 - (i + shift) / Vp) ** 2;
  //console.log(i - shift);
}


const labels = Ids.map((_, i) => i + shift);
console.log(Ids);
export const data = {
  labels,
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
      data: Ids,
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
