<script lang="ts">
  export let chargeUrl: string;
</script>

<div class="bg-purple-200 h-[364px] flex items-center pl-2">
  <div class="bg-amber-500 h-[244px] w-4 mt-10 overflow-hidden">
    <div
      class="w-full h-full animate-current-up bg-[url({chargeUrl})] bg-[length:12px_14px]"
      style="animation-duration: 700ms;"
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

  .animate-current-up {
    animation: current-flow-up 0ms linear infinite;
  }
</style>
