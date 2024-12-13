<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import {
    startTrains,
    //updateTrainVoltage,
    stopTrains,
  } from "$lib/train";
  import { AppBar, AppShell, RangeSlider } from "@skeletonlabs/skeleton";
  import Channel from "$lib/Channel.svelte";
  import Values from "$lib/Values.svelte";

  const nChannelColor = "bg-blue-500";
  const pChannelColor = "bg-rose-500";

  const step = 0.5;
  let vp = -4;
  let Id: number = 1;
  let K: number = 0.5;

  const voltageSources = [
    { name: "Vgs", value: 0, color: "bg-amber-500", min: vp - 1, max: 7 },
    { name: "Vds", value: 0, color: "bg-green-500", min: 0, max: 25 },
  ];

  function handleVoltageChange(event: Event, trainNumber: string) {
    const newVoltage = parseInt((event.target as HTMLInputElement).value);
    //updateTrainVoltage(trainNumber, newVoltage);
  }

  const start = () => {
    startTrains();
  };

  const stop = () => {
    stopTrains();
  };

  function reloadPage() {
    window.location.reload();
  }
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar background="bg-violet-700">
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">FET Simulation </strong>
        <a href="/" class="btn" data-sveltekit-preload-data="hover">MOSFET</a>
        <a href="/turbo" class="btn" data-sveltekit-preload-data="hover">JFET</a
        >
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <button class="btn btn-sm variant-ghost-surface" on:click={start}>
          Start
        </button>
        <!-- <button class="btn btn-sm variant-ghost-surface" on:click={stop}> Stop </button> -->
        <LightSwitch></LightSwitch>
        <button class="btn btn-sm variant-ghost-surface" on:click={reloadPage}>
          Reset
        </button>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <main class="h-screen w-screen overflow-auto border bg-gray-100">
    <Values
      Vgs={voltageSources[0].value}
      {Id}
      {K}
      Vds={voltageSources[1].value}
      Vth={vp}
      Vgs_prime={voltageSources[0].max}
    ></Values>

    <!-- <Animation trens={$trainsStore} /> -->
    <div
      class="flex flex-col items-center justify-center bg-amber-200 p-3 py-14"
    >
      <div class="bg-gray-500 w-12 h-3"></div>
      <div class="flex">
        <div class="bg-gray-400 w-3 h-3"></div>
        <div class="bg-gray-500 w-10 h-3"></div>
        <div class="bg-gray-400 w-[184px] h-3"></div>
        <div class="bg-gray-500 w-10 h-3"></div>
        <div class="bg-gray-400 w-3 h-3"></div>
      </div>
      <div
        class="flex justify-center {pChannelColor} w-64 md:w-72 h-28 rounded-b-lg"
      >
        <div class="{nChannelColor} w-12 h-14 flex justify-center items-center">
          N
        </div>
        <Channel
          channelColor={nChannelColor}
          substrateColor={pChannelColor}
          bind:Vgs={voltageSources[0].value}
          {vp}
          vmax={voltageSources[0].max}
        />
        <div class="{nChannelColor} w-12 h-14 flex justify-center items-center">
          N
        </div>
      </div>
      <div class="bg-gray-500 w-20 h-3"></div>

      <!-- {voltageSources[0].value} -->
      <!-- VGS: {VGS} || vp: {vp}|| Id: {Id} || k: {K} || Vds: {voltageSources[1].value} || VGS _ vp: {VGS < vp} -->
    </div>
    <!-- <div class="card">
      {voltageSources[1].value}
    </div> -->

    <div
      class="flex flex-col md:flex-row justify-center items-center gap-2 p-2 border"
    >
      {#each voltageSources as vs, i}
        <div class="py-4 px-6 w-full {vs.color}">
          <RangeSlider
            name="range-slider"
            bind:value={vs.value}
            max={vs.max + 2}
            {step}
            min={vs.min}
            ticked
            on:change={(event) => handleVoltageChange(event, vs.name)}
          >
            <div class="flex justify-between items-center">
              <div class="font-bold">{vs.name}</div>
              <div class="text-xs">{vs.value}</div>
            </div>
          </RangeSlider>
        </div>
      {/each}
    </div>
  </main>
</AppShell>
