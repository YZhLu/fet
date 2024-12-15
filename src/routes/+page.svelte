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
  import Cover from "$lib/Cover.svelte";
  import Gate from "$lib/Gate.svelte";
  import BottomWire from "$lib/BottomWire.svelte";
  import RightWire from "$lib/RightWire.svelte";
  import LeftWire from "$lib/LeftWire.svelte";
  import VerticalTopWire from "$lib/VerticalTopWire.svelte";
  import TopWire from "$lib/TopWire.svelte";
  import Graphs from "$lib/Graphs.svelte";

  const nChannelColor = "bg-blue-500";
  const pChannelColor = "bg-rose-500";

  const chargeUrl =
    "https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/plus.svg";

  const step = 0.5;

  let isOn: boolean = true;
  let speed: number = 0.1;

  let span: number = 2;

  let Vp = -4;
  let Id: number = 1;
  let Iss: number = 7;
  let K: number = 0.5;
  // let Vgs: number;
  // let Vds: number;
  let Vds_max: number = 9;
  let Vgs_max: number = 3;

  const voltageSources = [
    { name: "Vgs", value: 0, color: "bg-pink-500", min: Vp - 1, max: Vgs_max },
    {
      name: "Vds",
      value: 0,
      color: "bg-green-500",
      min: 0,
      max: Vds_max + span - Vp - 1,
    },
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

  $: {
    isOn = Id > 0;
    speed = 4 / Id;
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
      bind:Vgs={voltageSources[0].value}
      bind:Id
      {K}
      {Iss}
      Vds={voltageSources[1].value}
      Vth={Vp}
      Vgs_prime={voltageSources[0].max}
    ></Values>
    <div>
      <Graphs {Vp} {Iss} {Vds_max} {Vgs_max} {span}></Graphs>
    </div>
   
    <!-- <Animation trens={$trainsStore} /> -->
    <div class="flex items-center justify-center bg-purple-100 p-3 py-1">
      <LeftWire {isOn} {speed} />

      <div
        class="flex flex-col items-center justify-center bg-purple-100 py-10 w-80"
      >
        <TopWire {isOn} Vgs={voltageSources[0].value} {speed} />
        <VerticalTopWire {isOn} {speed} />

        <Gate bind:Vgs={voltageSources[0].value} />
        <Cover />

        <div
          class="flex justify-center flex-col {pChannelColor} w-64 md:w-72 h-28 rounded-b-lg"
        >
          <div
            class="flex justify-center {pChannelColor} w-64 md:w-72 h-28 rounded-b-lg"
          >
            <div
              class="{nChannelColor} w-12 h-14 flex justify-center items-center"
            >
              N
            </div>
            <Channel
              channelColor={nChannelColor}
              substrateColor={pChannelColor}
              bind:Vgs={voltageSources[0].value}
              {Vp}
              {isOn}
              vmax={voltageSources[0].max}
              {speed}
            />
            <div
              class="{nChannelColor} w-12 h-14 flex justify-center items-center"
            >
              N
            </div>
          </div>
          <span class="flex justify-center pb-2">P</span>
        </div>

        <BottomWire {isOn} {speed} />
      </div>
      <RightWire {isOn} {speed} />
    </div>

    <div
      class="flex flex-col md:flex-row justify-center items-center gap-2 p-2 border"
    >
      {#each voltageSources as vs, i}
        <div class="py-4 px-6 w-full {vs.color}">
          <RangeSlider
            name="range-slider"
            bind:value={vs.value}
            max={vs.max}
            {step}
            min={vs.min}
            ticked
            on:change={(event) => handleVoltageChange(event, vs.name)}
          >
            <div class="flex justify-between items-center">
              <div class="font-bold">{vs.name}</div>
              <div class="text-xs">{vs.value} V</div>
            </div>
          </RangeSlider>
        </div>
      {/each}
    </div>
  </main>
</AppShell>
