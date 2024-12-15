<script lang="ts">
  //@ts-nocheck
  import { generateVgsIdData } from "$lib/VGS_CHART_DATA";
  import { Line } from "svelte-chartjs";
  //   import { data, shift } from "./data.js";
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

  export let Iss: number; // = 7;
  export let Vp: number; // = -4;
  export let shift: number; // = 0;
  export let Vgs_max: number; // = 3;

  let xMin = -shift; //(-1)*data.shift;
  let xMax = -shift; //(-1)*data.shift,

  const data = generateVgsIdData(Iss, Vp, shift, Vgs_max);
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
    aspectRatio: 0.5, // Define a proporção (2:1, pode ajustar conforme necessário)
  }}
/>
