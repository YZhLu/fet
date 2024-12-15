<script lang="ts">
  //@ts-nocheck
  import { Line } from "svelte-chartjs"; // Importando o gráfico de linha do Chart.js
  import annotationPlugin from "chartjs-plugin-annotation";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from "chart.js";

  // Registrando os módulos necessários do Chart.js
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    annotationPlugin
  );

  // Gerar dados para a função y = x^2
  const xValues = Array.from({ length: 21 }, (_, i) => i - 10); // Gera valores de x de -10 a 10
  const yValues = xValues.map((x) => x * x); // Calcula y = x^2

  // Dados do gráfico
  export const data = {
    labels: xValues, // Valores de x
    datasets: [
      {
        label: "y = x²", // Título da linha
        fill: false, // Não preenche a área abaixo da linha
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204, 230, 0.3)",
        borderColor: "rgb(75, 192, 192)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(75, 192, 192)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: yValues, // Valores de y = x²
      },
    ],
  };

  const verticalLinePlugin = {
    getLinePosition: function (chart, pointIndex) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return data[pointIndex].x;
    },

    renderVerticalLine: function (chartInstance, pointIndex) {
      const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
      const scale = chartInstance.scales.y;
      const context = chartInstance.ctx;
      // render vertical line
      context.beginPath();
      context.strokeStyle = "#ff0000";
      context.moveTo(lineLeftOffset, scale.top);
      context.lineTo(lineLeftOffset, scale.bottom);
      context.stroke();

      // write label
      context.fillStyle = "#ff0000";
      context.textAlign = "center";
      context.fillText(
        "MY TEXT",
        lineLeftOffset,
        (scale.bottom - scale.top) / 2 + scale.top
      );
    },

    beforeDatasetsDraw: function (chart, easing) {
      if (chart.config._config.lineAtIndex)
        chart.config._config.lineAtIndex.forEach((pointIndex) =>
          this.renderVerticalLine(chart, pointIndex)
        );
    },
  };
</script>

<Line
  {data}
  options={{
    responsive: true,
    maintainAspectRatio: false, // Para o gráfico redimensionar conforme o tamanho do container
    aspectRatio: 2, // Ajuste da proporção (2:1)
    scales: {
      x: {
        display: true, // Exibe o eixo X
        title: {
          display: true,
          text: "x", // Título do eixo X
        },
        grid: {
          display: true, // Exibe a grade do eixo X
          borderColor: "black", // Cor da borda da grade
          borderWidth: 1, // A espessura da borda
          drawBorder: false, // Não desenha borda na linha do eixo X
        },
        ticks: {
          beginAtZero: true, // Garante que os ticks do eixo X comecem em zero
          stepSize: 1, // Passo entre as marcas do eixo X
          maxRotation: 0, // Sem rotação nos ticks do eixo X
        },
      },
      y: {
        display: true, // Exibe o eixo Y
        title: {
          display: true,
          text: "y = x²", // Título do eixo Y
        },
        grid: {
          display: true, // Exibe a grade do eixo Y
          borderColor: "black", // Cor da borda da grade
          borderWidth: 1, // A espessura da borda
          drawBorder: false, // Não desenha borda na linha do eixo Y
        },
        ticks: {
          beginAtZero: true, // Garante que os ticks do eixo Y comecem em zero
          stepSize: 10, // Passo entre as marcas do eixo Y
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda (sem rótulo ou quadrado)
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: 40,
            yMax: 40,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
          },
        },
      },
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
    },
    lineAtIndex: 2,

    // Agora, aqui está a parte importante
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    elements: {
      line: {
        tension: 0.1, // Desativando a curvatura da linha
      },
    },
  }}
/>
