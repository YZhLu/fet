<script lang="ts">
  //@ts-nocheck
  import { Line } from "svelte-chartjs";
  import { data } from "./data.js";

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
</script>

<Line
  {data}
  options={{
    responsive: true,
    maintainAspectRatio: false, // Permite que o gráfico seja redimensionado automaticamente
    aspectRatio: 0.1, // Define a proporção (2:1, pode ajustar conforme necessário)
  }}
/>
