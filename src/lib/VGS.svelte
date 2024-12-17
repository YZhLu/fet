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
  export let Vgs_max: number; // = 3;
  export let Vgs: number;
  export let Id: number;
  export let span: number;
  export let shift: number = Vp - span;

  let xMin = -shift; //(-1)*data.shift;
  let xMax = -shift; //(-1)*data.shift,

  let data = generateVgsIdData(Iss, Vp, Vgs_max, span);
  $: {
    xMin = -Vp + span; //(-1)*data.shift;
    xMax = -Vp + span; //(-1)*data.shift,
    data = generateVgsIdData(Iss, Vp, Vgs_max, span);
  }
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
            borderColor: "rgb(155, 159, 152)",
            borderWidth: 3,
          },
          line2: {
            type: "line",
            xMin: Vgs,
            xMax: Vgs,
            borderColor: "rgb(236, 72, 153)",
            borderWidth: 5,
          },
          line3: {
            type: "line",
            yMin: Id,
            yMax: Id,
            borderColor: "rgb(245, 158, 11)",
            borderWidth: 5,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Permite que o gráfico seja redimensionado automaticamente
    aspectRatio: 0.5, // Define a proporção (2:1, pode ajustar conforme necessário)
  }}
/>
