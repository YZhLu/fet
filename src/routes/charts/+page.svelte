<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import { AppBar, AppShell, RangeSlider } from "@skeletonlabs/skeleton";

  import Values from "$lib/Values.svelte";

  import Graphs from "$lib/Graphs.svelte";

  const VgsColor: string = "bg-pink-500";
  const VdsColor: string = "bg-green-500";

  const step = 0.5;

  let isOn: boolean = true;
  let speed: number = 0.1;

  let span: number = 2;

  let Vp = -4;
  let Id: number = 0;
  let Iss: number = 7;

  let Vds: number = 0;
  let Vgs: number = 0;

  let Vgs_chart: number;
  let Vds_chart: number;
  let Vds_max: number = 9;
  let Vgs_max: number = 6;


  $: {
    isOn = Id > 0;
    speed = 4 / Id;
    Vgs_chart = /* voltageSources[0].value */ Vgs - Vp + span;
    Vds_chart = /* voltageSources[1].value */ Vds;
    // voltageSources[0] = {
    //   name: "Vgs",
    //   value: 0,
    //   color: "bg-pink-500",
    //   min: Vp - 2,
    //   max: Vgs_max,
    // };
    // voltageSources[1] = {
    //   name: "Vds",
    //   value: 0,
    //   color: "bg-green-500",
    //   min: 0,
    //   max: Vds_max + span - Vp - 1,
    // };
  }
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar background="bg-violet-700">
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">FET Simulation </strong>
        <a href="/" class="btn" data-sveltekit-preload-data="hover">MOSFET</a>
        <a href="/jfet" class="btn" data-sveltekit-preload-data="hover">JFET</a>
        <a href="/charts" class="btn" data-sveltekit-preload-data="hover">
          Charts
        </a>
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
  </svelte:fragment>
  <main class="h-full w-screen overflow-auto border bg-gray-100">
    <div class="p-2 pb-0 bg-purple-100 ">
      <Graphs
        Vgs={Vgs_chart}
        Vds={Vds_chart}
        {Vp}
        {Iss}
        {Vds_max}
        {Vgs_max}
        {span}
        {Id}
      ></Graphs>
    </div>
    <div class="card flex gap-2">
      <label class="label flex items-center p-4 gap-2 w-36">
        <span>span:</span>
        <input
          class="input"
          type="number"
          placeholder="Input"
          bind:value={span}
          min={0}
        />
      </label>
      <label class="label flex items-center p-4 gap-2 w-36">
        <span>Iss:</span>
        <input
          class="input"
          type="number"
          placeholder="Input"
          bind:value={Iss}
        />
      </label>
      <label class="label flex items-center p-4 gap-2 w-36">
        <span>VP:</span>
        <input
          class="input"
          type="number"
          placeholder="Input"
          bind:value={Vp}
        />
      </label>
      <label class="label flex items-center p-4 gap-2 w-36">
        <span>Vgs Max:</span>
        <input
          class="input"
          type="number"
          placeholder="Input"
          bind:value={Vgs_max}
          min={0}
          max={Vds_max + 1}
        />
      </label>
      <label class="label flex items-center p-4 gap-2 w-36">
        <span>Vds Max:</span>
        <input
          class="input"
          type="number"
          placeholder="Input"
          bind:value={Vds_max}
          min={Math.max(Vgs_max - 1, 1)}
        />
      </label>
    </div>

    <Values {Vgs} bind:Id {Iss} {Vds} Vth={Vp}></Values>
  </main>
  <svelte:fragment slot="footer">
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-2 p-2 border"
    >
      <div class="py-4 px-6 w-full {VgsColor}">
        <RangeSlider
          name="range-slider"
          bind:value={Vgs}
          max={Vgs_max}
          {step}
          min={Vp - span}
          ticked
        >
          <div class="flex justify-between items-center">
            <div class="font-bold">Vgs</div>
            <div class="text-xs">{Vgs} V</div>
          </div>
        </RangeSlider>
      </div>
      <div class="py-4 px-6 w-full {VdsColor}">
        <RangeSlider
          name="range-slider"
          bind:value={Vds}
          max={Vds_max + span - Vp - 1}
          {step}
          min={0}
          ticked
        >
          <div class="flex justify-between items-center">
            <div class="font-bold">Vds</div>
            <div class="text-xs">{Vds} V</div>
          </div>
        </RangeSlider>
      </div>
    </div>
  </svelte:fragment>
</AppShell>
