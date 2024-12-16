<script lang="ts">
  //@ts-nocheck

  import { generateIdsData } from "$lib/VDS_CHART_DATA";
  import { Line } from "svelte-chartjs";

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
    LogarithmicScale
  );

  export let Iss: number; // = 7;
  export let Vp: number; // = -4;
  export let Vds_max: number; // = 10;
  export let span: number; // = 0;
  export let Vgs_max: number; // = 3;

  const data = generateIdsData(Iss, Vp, Vds_max, span, Vgs_max);
</script>

<Line
  {data}
  options={{
    scales: {
      x: {
        display: true, // Exibe o eixo X
        title: {
          display: true,
          text: "Vds (V)", // Título do eixo X
        },
      },
      y: {
        display: true, // Exibe o eixo Y
        title: {
          display: true,
          text: "Id (mA)", // Título do eixo Y
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda (sem rótulo ou quadrado)
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Permite que o gráfico seja redimensionado automaticamente
    aspectRatio: 0.5, // Define a proporção (2:1, pode ajustar conforme necessário)
  }}
/>
