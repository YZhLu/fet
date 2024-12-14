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

  const src =
    "data:image/png;base64,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";
  const plus =
    "https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/plus.svg";

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
    <div class="flex items-center justify-center bg-purple-100 p-3 py-14">
      <div class="bg-purple-200 h-[364px] flex items-center pl-2">
        <div class="bg-amber-500 h-[244px] w-4 mt-10 overflow-hidden">
          <div
            class="w-full h-full animate-current-up bg-[url({plus})] bg-[length:12px_14px]"
            style="animation-duration: 700ms;"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-purple-200 py-10 w-80"
      >
        <div class="flex w-80 h-14 items-end">
          <!-- <div
            class="bg-amber-500 w-[168px] h-4 flex justify-center items-center pl-9"
          > -->
          <div
            class="bg-amber-500 w-[168px] h-4 flex justify-center items-center overflow-hidden"
          >
            <div
              class="w-[90%] h-full animate-current-right-prime bg-[url({plus})] bg-[length:12px_14px]"
              style="animation-duration: 500ms;"
            ></div>
            <!-- <img
              {src}
              alt="?"
              class="h-14 transform"
              class:-rotate-90={voltageSources[0].value < 0}
              class:rotate-90={voltageSources[0].value >= 0}
            /> -->
          </div>
          <div class="w-[96px] h-4"></div>
          <div class="bg-amber-500 w-14 h-4">
            <div
              class="w-full h-full animate-current-right bg-[url({plus})] bg-[length:12px_14px]"
              style="animation-duration: 500ms;"
            ></div>
          </div>
        </div>

        <div class="flex justify-around w-80">
          <div class="bg-amber-500 w-4 h-8">
            <div
              class="w-full h-[120%] animate-current-down bg-[url({plus})] bg-[length:12px_14px]"
              style="animation-duration: 300ms;"
            ></div>
          </div>
          <div class=" w-12 h-3 flex justify-center">
            <div class="bg-amber-500 w-4 h-8"></div>
          </div>
          <div class="bg-amber-500 w-4 h-8">
            <div
              class="w-full h-[130%] animate-current-up bg-[url({plus})] bg-[length:12px_14px]"
              style="animation-duration: 500ms;"
            ></div>
          </div>
        </div>
        <div class="flex justify-around w-80">
          <div class="bg-amber-500 w-4 h-3"></div>
          {#if voltageSources[0].value > 0}
            <div
              class="bg-gray-500 w-12 h-3 bg-[url({plus})] bg-[length:12px_14px]"
            ></div>
          {:else}
            <div class="bg-gray-500 w-12 h-3"></div>
          {/if}
          <!-- <div class="bg-gray-500 w-12 h-3 bg-[url({plus})]  bg-[length:12px_14px]"></div> -->
          <div class="bg-amber-500 w-4 h-3"></div>
        </div>

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
          <div
            class="{nChannelColor} w-12 h-14 flex justify-center items-center"
          >
            N
          </div>
          <Channel
            channelColor={nChannelColor}
            substrateColor={pChannelColor}
            bind:Vgs={voltageSources[0].value}
            {vp}
            vmax={voltageSources[0].max}
          />
          <div
            class="{nChannelColor} w-12 h-14 flex justify-center items-center"
          >
            N
          </div>
        </div>
        <div class="bg-gray-500 w-20 h-3"></div>
        <div class="bg-amber-500 w-4 h-8"></div>
        <div
          class="bg-amber-500 w-80 h-4 flex justify-end items-center overflow-hidden"
        >
          <div
            class="w-full h-full animate-current-left bg-[url({plus})] bg-[length:12px_14px]"
            style="animation-duration: 500ms;"
          ></div>
          <!-- <img {src} alt="?" class="w-14 h-14 transform -rotate-90 mr-7" /> -->
        </div>

        <!-- {voltageSources[0].value} -->
        <!-- VGS: {VGS} || vp: {vp}|| Id: {Id} || k: {K} || Vds: {voltageSources[1].value} || VGS _ vp: {VGS < vp} -->
      </div>
      <!-- <div class="h-[300px] w-14 mt-10 flex flex-col justify-between">
        <div class=" flex justify-start items-center mt-2">
          <img {src} alt="?" class="w-14 h-14  transform -rotate-90 mr-2" />
        </div>
        <div class="w-14 h-4 bg-amber-500 mb-7"></div>
      </div>
	  <div class="h-[244px] w-2 mt-10 flex flex-col justify-between">
        <div class="w-4 h-4 bg-amber-500"></div>
		<div class="w-4 h-4 bg-amber-500"></div>
      </div>
      <div class="bg-amber-500 h-[244px] w-4 mt-10"></div> -->
      <div class="bg-purple-200 h-[364px] flex items-center pr-2">
        <div class="bg-amber-500 h-[244px] w-4 mt-10 relative overflow-hidden">
          <div
            class="absolute bottom-0 w-full h-full animate-current-down bg-[url({plus})] bg-[length:12px_14px]"
            style="animation-duration: 500ms;"
          >
            <!-- <div class=" w-full h-full bg-amber-300"></div>
            <div class="w-full h-full bg-purple-400"></div>
            <div class="w-full h-full bg-amber-600"></div> -->
          </div>
        </div>
      </div>
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

<style>
  @keyframes current-flow-up {
    0% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(-10%);
    }
  }

  @keyframes current-flow-down {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(10%);
    }
  }

  @keyframes current-flow-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-5%);
    }
  }

  @keyframes current-flow-right {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(10%);
    }
  }

  @keyframes current-flow-right-prime {
    0% {
      transform: translateX(-90%);
    }
    100% {
      transform: translateX(-70%);
    }
  }
  .animate-current-up {
    animation: current-flow-up 0ms linear infinite;
    /* position: absolute;
    bottom: 0; */
    /* width: 100%;
    height: 100%; */
  }

  .animate-current-down {
    animation: current-flow-down 0ms linear infinite;
    /* position: absolute;
    bottom: 0; */
    /* width: 100%;
    height: 100%; */
  }

  .animate-current-left {
    animation: current-flow-left 0ms linear infinite;
    /* position: absolute;
    bottom: 0; */
    /* width: 100%;
    height: 100%; */
  }

  .animate-current-right {
    animation: current-flow-right 0ms linear infinite;
    /* position: absolute; */
    /* bottom: 0; */
    /* width: 100%;
    height: 100%; */
  }

  .animate-current-right-prime {
    animation: current-flow-right-prime 0ms linear infinite;
    /* position: absolute; */
    /* bottom: 0; */
    /* width: 100%;
    height: 100%; */
  }
</style>
