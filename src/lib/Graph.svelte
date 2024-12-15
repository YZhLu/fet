<script lang="ts">
  //@ts-nocheck
  import { Line } from "svelte-chartjs";
  import { data, shift } from "./data.js";
  import annotationPlugin from "chartjs-plugin-annotation";

  let xMin = -shift; //(-1)*data.shift;
  let xMax = -shift; //(-1)*data.shift,

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

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    LogarithmicScale,
    plugins,
  } from "chart.js";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    LogarithmicScale,
    annotationPlugin
  );
</script>

<Line
  {data}
  options={{
    scales: {
      x: {
        display: true, // Exibe o eixo X
        title: {
          display: true,
          text: "Vgs", // Título do eixo X
        },
      },
      y: {
        display: true, // Exibe o eixo Y
        title: {
          display: true,
          text: "Id", // Título do eixo Y
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
            xMin,
            xMax,
            borderColor: "rgb(05, 09, 02)",
            borderWidth: 2,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Permite que o gráfico seja redimensionado automaticamente
    aspectRatio: 1, // Define a proporção (2:1, pode ajustar conforme necessário)
  }}
/>
