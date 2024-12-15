<script lang="ts">
  export let Vgs: number;
  export let chargeUrl: string;
</script>

<div class="flex justify-around w-80">
  <div class="bg-amber-500 w-4 h-3"></div>
  {#if Vgs > 0}
    <div class="bg-gray-500 w-12 h-3 charge-plus"></div>
  {:else}
    <div class="bg-gray-500 w-12 h-3" class:charge-dash={Vgs < 0}></div>
  {/if}

  <div class="bg-amber-500 w-4 h-3"></div>
</div>

<style>
  .charge-plus {
    background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="iso-8859-1"%3F><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.364 60.364" style="enable-background:new 0 0 60.364 60.364;" xml:space="preserve"><g><path fill="white" d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>');
  }

  .charge-dash {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23fff" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/></svg>');
  }
</style>
