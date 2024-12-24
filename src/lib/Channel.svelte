<script lang="ts">
  export let Vgs: number; // Tensão de gate-source (Vgs)
  export let isOn: boolean;
  export let speed: number;
  let base: number = 800;

  let channelHeight = 0;

  export let Vp: number = -5;
  export let vmax = Vp;
  export let classes = "h-20 md:w-44 w-44"; //w-32";
  export let channelColor = "bg-green-500";
  export let substrateColor = "bg-rose-500";

  export let Vds: number;
  export let Vds_max: number;

  let pinchoff = 0;
  let strangle = 0;
  // Função para calcular o aumento do canal com base em Vgs
  $: {
    pinchoff = Math.round(((50 * Vds) / Vds_max) * ((Vgs - Vp) / (vmax - Vp)));
    if (Vgs <= 0) {
      strangle = (100 * Vgs) / Vp;
      channelHeight = Vp * -10;
    } else if (Vgs >= Vp - 1 /* && Vgs < vmax */) {
      channelHeight = Vp * -10 + Vgs * 10; // Ajuste os valores conforme necessário
    } else if (Vgs >= vmax) {
      channelHeight = 100;
    } else {
      channelHeight = 0;
    }
  }
</script>

<div class="{classes} {substrateColor} overflow-hidden rounded-b-3xl">
  <div
    class="{channelColor} bg-repeat bg-[length:35px_20px] transition-all duration-300 ease-in-out rounded-b-4x"
    class:flex={Vgs > Vp}
    class:flex-col={Vgs > Vp}
    style="height: {channelHeight}%;"
  >
    <div
      class="{substrateColor} bg-repeat bg-[length:30px_10px] transition-all duration-300 ease-in-out rounded-b-4xl flex justify-center bg-[url(https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/plus.svg)]"
      class:items-end={strangle < 35}
      class:items-center={strangle >= 35}
      class:items-start={strangle >= 90}
      style="height: {strangle}%;"
    ></div>
    <!-- {Vds_max}-{pinchoff} -->
    {#if Vgs > Vp}
      <div class="flex items-center h-full">
        <div class="w-full h-4 overflow-hidden">
          <div
            class="w-[150%] h-full animate-current-right"
            class:charge={isOn}
            style="animation-duration: {base * speed}ms;"
          ></div>
        </div>
      </div>
      <div
        style="border-bottom: {pinchoff}px solid indigo;"
        class="self-end w-0 h-0 border-l-[200px] border-r-0 border-l-transparent border-r-transparent border-b-indigo-900"
      />
    {/if}
  </div>
</div>

<style>
  @keyframes current-flow-right {
    0% {
      transform: translateX(-30%);
    }
    100% {
      transform: translateX(-10%);
    }
  }

  .animate-current-right {
    animation: current-flow-right 0ms linear infinite;
  }

  .charge {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23FFF" class="bi bi-toggle2-off" viewBox="0 0 16 16"><g transform="rotate(180 8 8)"><path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"/><path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"/></g></svg>');
  }
</style>
