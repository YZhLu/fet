<script lang="ts">
  import Chart from "$lib/Chart.svelte";
  import Graph from "$lib/Graph.svelte"; // Importe o componente do gráfico
  import Vds from "$lib/VDS.svelte";
</script>

<div class="overflow-auto flex w-full h-full flex-col md:flex-row">
  <main class="p-3 bg-gray-100 h-full w-full md:w-1/2">
    <Graph />
    <!-- Inclua o componente do gráfico -->
  </main>
  <main class="p-3 bg-gray-50 h-full w-full md:w-1/2">
    <Vds />
    <!-- Inclua o componente do gráfico -->
  </main>
  <!-- <div class="p-6 bg-gray-100 w-1/3">
    <Chart></Chart>
  </div> -->
</div>
