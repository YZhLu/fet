<script lang="ts">
  export let bgColor: string = "bg-amber-500";
  export let Vgs: number;
  export let isOn: boolean;
  export let speed: number;
  let base: number = 500;

  const src =
    "data:image/png;base64,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";
</script>

<div class="flex w-80 h-14 items-end">
  <div class="{bgColor} w-[168px] h-4 flex justify-start items-center">
    <div class="h-4 w-10 overflow-hidden">
      <div
        class="w-[150%] h-full animate-current-right"
        class:charge={isOn}
        style="animation-duration: {base * speed}ms;"
      ></div>
    </div>
    <div class="size-4 {bgColor}"></div>
    <div class="p-5">
      <img
        {src}
        alt="?"
        class="h-14 transform"
        class:-rotate-90={Vgs < 0}
        class:rotate-90={Vgs >= 0}
      />
    </div>
  </div>
  <div class="w-[96px] h-4"></div>
  <div class="size-4 {bgColor}"></div>
  <div class="{bgColor} w-10 h-4 overflow-hidden">
    <div
      class="w-[150%] h-full animate-current-right"
      class:charge={isOn}
      style="animation-duration: {base * speed}ms;"
    ></div>
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
