export function generateIdsData(
  Iss: number,
  Vp: number,
  Vds_max: number,
  span: number,
  Vgs_max: number
) {
  const shift = Vp - span; // Definido a partir de Vp e span
  let Idss = 0;

  // Calcula o número de pontos no gráfico
  const numVds = Vds_max - shift;
  const Ids: number[][] = Array.from({ length: numVds }, () =>
    Array(numVds).fill(0)
  );

  let z = 0; // Usado para controlar a iteração de Vgs

  // Loop para gerar os valores de Ids
  for (let _Vgs = Vp; _Vgs <= Vgs_max; _Vgs++) {
    for (let _Vds = 0; _Vds < numVds; _Vds++) {
      // Fórmula de Idss
      Idss = Iss * (1 - _Vgs / Vp) ** 2;

      if (z > 0) {
        // Calcula Ids com base no valor de _Vgs e _Vds
        Ids[z][_Vds] = _Vds < z ? _Vds * (Idss / z) : Idss;
      }
    }
    z++;
  }

  // Labels para o eixo X (simplesmente os índices de Ids)
  const labels = Array.from({ length: numVds }, (_, i) => i);

  // Criação dos datasets para o gráfico
  const data = {
    labels,
    datasets: Ids.map((_data, i) => ({
      label: `Vgs(${i + Vp}V) -> Id`, // Rótulo do dataset
      fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3)",
      borderColor: "rgb(6, 29, 49)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(6, 29, 49)",
      pointBackgroundColor: "rgb(55, 255, 55)",
      pointBorderWidth: 4,
      pointHoverRadius: 15,
      pointHoverBackgroundColor: "rgb(253, 220, 0)",
      pointHoverBorderColor: "rgba(3, 0, 0,1)",
      pointHoverBorderWidth: 8,
      pointRadius: 1,
      pointHitRadius: 10,
      data: _data,
    })),
  };

  return data;
}
