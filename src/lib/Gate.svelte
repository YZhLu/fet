<script lang="ts">
    export let Vgs: number
    export let chargeUrl: string
</script>

<div class="flex justify-around w-80">
  <div class="bg-amber-500 w-4 h-3"></div>
  {#if Vgs> 0}
    <div
      class="bg-gray-500 w-12 h-3 bg-[url({chargeUrl})] bg-[length:12px_14px]"
    ></div>
  {:else}
    <div class="bg-gray-500 w-12 h-3"></div>
  {/if}

  <div class="bg-amber-500 w-4 h-3"></div>
</div>
