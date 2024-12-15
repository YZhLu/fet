export function generateVgsIdData(
  Iss: number,
  Vp: number,
  shift: number,
  Vgs_max: number
) {
  const max = Vgs_max - shift + 1;
  // Inicializando o array de Ids com o valor inicial 0
  const Ids: number[] = Array(max).fill(0);

  // Preenchendo o array de Ids com os cálculos necessários
  for (let i = 2; i < max; i++) {
    Ids[i] = Iss * (1 - (i + shift) / Vp) ** 2;
  }

  // Labels para o eixo X (simplesmente os índices de Ids ajustados pelo shift)
  const labels = Ids.map((_, i) => i + shift);

  // Retorna a estrutura de dados pronta para o gráfico
  return {
    labels,
    datasets: [
      {
        label: "Id",
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
        data: Ids,
      },
    ],
  };
}
