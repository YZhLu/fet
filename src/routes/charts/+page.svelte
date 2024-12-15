<script lang="ts">
  import { Vp } from "$lib/data";
  import Graphs from "$lib/Graphs.svelte";
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

  let Iss: number = 7;
  let span: number = 2;

  let Vds_max: number = 9;
  let Vgs_max: number = 6;
</script>

<AppBar background="bg-violet-700">
  <svelte:fragment slot="lead">
    <strong class="text-xl uppercase">FET Simulation </strong>
    <a href="/" class="btn" data-sveltekit-preload-data="hover">MOSFET</a>
    <a href="/jfet" class="btn" data-sveltekit-preload-data="hover">JFET</a>
    <a href="/chart" class="btn" data-sveltekit-preload-data="hover">Charts</a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <!-- <button class="btn btn-sm variant-ghost-surface" on:click={start}>
      Start
    </button> -->
    <!-- <button class="btn btn-sm variant-ghost-surface" on:click={stop}> Stop </button> -->
    <LightSwitch></LightSwitch>
    <!-- <button class="btn btn-sm variant-ghost-surface" on:click={reloadPage}>
      Reset
    </button> -->
  </svelte:fragment>
</AppBar>
<div class="p-2 pb-0 bg-purple-100">
  <Graphs {Vp} {Iss} {Vds_max} {Vgs_max} {span}></Graphs>
</div>
