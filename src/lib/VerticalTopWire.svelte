<script lang="ts">
  export let chargeUrl: string;
</script>

<div class="flex justify-around w-80">
  <div class="bg-amber-500 w-4 h-8">
    <div
      class="w-full h-[120%] animate-current-down bg-[url({chargeUrl})] bg-[length:12px_14px]"
      style="animation-duration: 300ms;"
    ></div>
  </div>
  <div class=" w-12 h-3 flex justify-center">
    <div class="bg-amber-500 w-4 h-8"></div>
  </div>
  <div class="bg-amber-500 w-4 h-8">
    <div
      class="w-full h-[130%] animate-current-up bg-[url({chargeUrl})] bg-[length:12px_14px]"
      style="animation-duration: 500ms;"
    ></div>
  </div>
</div>

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

  .animate-current-up {
    animation: current-flow-up 0ms linear infinite;
  }

  .animate-current-down {
    animation: current-flow-down 0ms linear infinite;
  }
</style>
