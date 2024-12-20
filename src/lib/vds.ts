export const Iss = 7;
export const Vp = -4;
export const Vds_max = 10;
export const step = 0;
export const shift = Vp - step;
export const max = 3;
export let Idss = 0;

// Calcula o número de pontos no gráfico
const numVds = Vds_max - shift;
const Ids: number[][] = Array.from({ length: numVds }, () => Array(numVds).fill(0));

let z = 0;  // Usado para controlar a iteração de Vgs

// Loop para gerar os valores de Ids
for (let _Vgs = Vp; _Vgs <= max; _Vgs++) {
  for (let _Vds = 0; _Vds < numVds; _Vds++) {
    // Fórmula de Idss
    Idss = Iss * (1 - _Vgs / Vp) ** 2;

    if (z > 0) {
      // Calcula Ids com base no valor de _Vgs e _Vds
      Ids[z][_Vds] = _Vds < z ? _Vds * (Idss / z) : Idss;
    }

    // Depuração (pode remover dependendo do que deseja ver)
    console.log(z, _Vds < -Vp, _Vds);
  }
  z++;
}

// Labels para o eixo X (simplesmente os índices de Ids)
const labels = Array.from({ length: numVds }, (_, i) => i);

// Criação dos datasets para o gráfico
export const data = {
  labels,
  datasets: Ids.map((_data, i) => ({
    label: `Dataset ${i}`,  // Rótulo do dataset
    fill: true,
    lineTension: 0.3,
    backgroundColor: "rgba(225, 204,230, .3)",
    borderColor: "rgb(205, 130, 158)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgb(205, 130,158)",
    pointBackgroundColor: "rgb(255, 255, 255)",
    pointBorderWidth: 3,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgb(0, 0, 0)",
    pointHoverBorderColor: "rgba(220, 220, 220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: _data,
  })),
};

console.log('Data for Chart:', data);
