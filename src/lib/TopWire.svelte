<script lang="ts">
  export let chargeUrl: string;
</script>

<div class="flex w-80 h-14 items-end">
  <div
    class="bg-amber-500 w-[168px] h-4 flex justify-center items-center overflow-hidden"
  >
    <div
      class="w-[90%] h-full animate-current-right-prime bg-[url({chargeUrl})] bg-[length:12px_14px]"
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
      class="w-full h-full animate-current-right bg-[url({chargeUrl})] bg-[length:12px_14px]"
      style="animation-duration: 500ms;"
    ></div>
  </div>
</div>

<style>
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

  .animate-current-right {
    animation: current-flow-right 0ms linear infinite;
  }

  .animate-current-right-prime {
    animation: current-flow-right-prime 0ms linear infinite;
  }
</style>
