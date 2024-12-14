<script lang="ts">
  export let bgColor: string = "bg-amber-500";
  export let isOn: boolean;
  export let speed: number;
  let base1: number = 1100;
  let base2: number = 270;

  const src = "/dc.svg";
</script>

<div class="bg-gray-500 w-20 h-3"></div>
<div class="{bgColor} w-4 h-8"></div>

<div class="flex h-4 items-center">
  <div class="{bgColor} w-56 h-4 overflow-hidden">
    <div
      class="h-full w-[150%] animate-current-left"
      class:charge={isOn}
      style="animation-duration: {base1 * speed}ms;"
    ></div>
  </div>

  <div class="rounded-xl bg-emerald-500">
    <img {src} alt="?" class="h-14" />
  </div>
  <div class="{bgColor} w-10 h-4 overflow-hidden">
    <div
      class="h-full w-[150%] animate-current-left"
      class:charge={isOn}
      style="animation-duration: {base2 * speed}ms;"
    ></div>
  </div>
</div>

<style>
  @keyframes current-flow-left {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(-30%);
    }
  }

  .animate-current-left {
    animation: current-flow-left 0ms linear infinite;
  }

  .charge {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23FFF" class="bi bi-toggle2-off" viewBox="0 0 16 16"><path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"/><path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"/></svg>');
  }
</style>
