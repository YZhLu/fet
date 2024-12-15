<script lang="ts">
  export let bgColor: string = "bg-amber-500";
  export let isOn: boolean;
  export let speed: number;
  let base: number = 1100;
</script>

<div class="bg-purple-100 h-[364px] flex items-center pr-2">
  <div class=" h-[244px] w-4 mt-10">
    <div class="size-4 {bgColor}"></div>
    <div class="{bgColor} h-[212px] w-4 overflow-hidden">
      <div
        class="w-full h-[150%] animate-current-down"
        class:charge={isOn}
        style="animation-duration: {base * speed}ms;"
      ></div>
    </div>
    <div class="size-4 {bgColor}"></div>
  </div>
</div>

<style>
  @keyframes current-flow-down {
    0% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(-10%);
    }
  }

  .animate-current-down {
    animation: current-flow-down 0ms linear infinite;
  }

  .charge {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23FFF" class="bi bi-toggle2-off" viewBox="0 0 16 16"><g transform="rotate(-90 8 8)"><path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"/><path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"/></g></svg>');
  }
</style>
