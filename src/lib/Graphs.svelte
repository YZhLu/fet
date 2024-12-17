<script lang="ts">
  import Graph from "$lib/Graph.svelte";
  import VDS from "$lib/VDS.svelte";
  import VGS from "./VGS.svelte";

  export let Iss: number; // = 7;
  export let Vp: number; // = -4;
  export let Vds_max: number; // = 10;
  export let span: number; // = 0;
  export let Vgs_max: number; // = 3;
  export let Vgs: number;
  export let Vds: number;
  //export let shift: number = Vp - span;
  export let Id: number;
</script>

<div class="overflow-auto flex w-full h-full flex-col md:flex-row">
  <div class="p-3 bg-gray-100 h-full w-full md:w-1/2">
    <VGS {Vgs} {Vgs_max} {Vp} {Iss} {Id} {span}/>
  </div>
  <div class="p-3 bg-gray-100 h-full w-full md:w-1/2">
    <VDS {Vds} {Iss} {Vp} {Vds_max} {span} {Vgs_max} {Id} />
  </div>
</div>
