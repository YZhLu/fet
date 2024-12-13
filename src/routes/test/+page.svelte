<!-- <script>
	import Channel from '$lib/Channel.svelte';
  
	let VGS = 0; // Tensão de gate-source inicial
  </script>
  
  <main class="flex flex-col items-center p-8 space-y-6">
	<h1 class="text-2xl font-semibold">Animação do Canal N de MOSFET Depletion</h1>
  
	<Channel {VGS} />
  
	<div class="flex flex-col items-center">
	  <label for="vgs-slider" class="text-lg">VGS: {VGS}</label>
	  <input
		type="range"
		id="vgs-slider"
		min="-10"
		max="10"
		bind:value={VGS}
		step="0.1"
		class="mt-4 w-72"
	  />
	</div>
  </main>
   -->

<script>
  import Channel from "$lib/Channel.svelte";
  import Test from "$lib/Test.svelte";

  let VGS = 0; // Tensão de gate-source inicial
</script>

<main class="flex flex-col items-center p-8 space-y-6">
  <h1 class="text-2xl font-semibold">
    Animação do Canal N de MOSFET Depletion
  </h1>

  <Test {VGS} />

  <div class="flex flex-col items-center">
    <label for="vgs-slider" class="text-lg">VGS: {VGS.toFixed(1)} V</label>
    <input
      type="range"
      id="vgs-slider"
      min="-10"
      max="10"
      bind:value={VGS}
      step="0.1"
      class="mt-4 w-72"
    />
  </div>
</main>
