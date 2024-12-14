<script lang="ts">
  export let chargeUrl: string;
</script>

<div class="bg-gray-500 w-20 h-3"></div>
<div class="bg-amber-500 w-4 h-8"></div>
<div
  class="bg-amber-500 w-80 h-4 flex justify-end items-center overflow-hidden"
>
  <div
    class="w-full h-full animate-current-left bg-[url({chargeUrl})] bg-[length:12px_14px]"
    style="animation-duration: 500ms;"
  ></div>
  <!-- <img {src} alt="?" class="w-14 h-14 transform -rotate-90 mr-7" /> -->
</div>

<style>
  @keyframes current-flow-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-5%);
    }
  }

  .animate-current-left {
    animation: current-flow-left 0ms linear infinite;
  }
</style>
