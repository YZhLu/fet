<script lang="ts">
  export let chargeUrl: string;
</script>

<div class="bg-purple-200 h-[364px] flex items-center pr-2">
  <div class="bg-amber-500 h-[244px] w-4 mt-10 relative overflow-hidden">
    <div
      class="absolute bottom-0 w-full h-full animate-current-down bg-[url({chargeUrl})] bg-[length:12px_14px]"
      style="animation-duration: 500ms;"
    ></div>
  </div>
</div>

<style>
  @keyframes current-flow-down {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(10%);
    }
  }

  .animate-current-down {
    animation: current-flow-down 0ms linear infinite;
  }
</style>
