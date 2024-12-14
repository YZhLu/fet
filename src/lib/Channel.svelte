<script lang="ts">
  export let Vgs = 0; // Tensão de gate-source (Vgs)
  //   let channelWidth = 0;
  let channelHeight = 0;

  let svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>
  `;
  let dash = encodeURIComponent(svg); // Codificando o SVG

  export let vp = -5;
  export let vmax = vp;
  export let classes = "h-20 md:w-44 w-44"; //w-32";
  export let channelColor = "bg-green-500";
  export let substrateColor = "bg-rose-500";
  let substrateText = "";
  let channelText = "";

  let strangle = 0;
  // Função para calcular o aumento do canal com base em Vgs
  $: {
    if (Vgs <= 0) {
      strangle = (100 * Vgs) / vp;
      channelHeight = vp * -10;
      substrateText = "+ ".repeat(strangle / 5);
      //   channelText = "";
    } else if (Vgs >= vp - 1 /* && Vgs < vmax */) {
      //   channelWidth = Math.min(50 + Vgs * 2, 200); // Ajuste esses parâmetros conforme necessário
      //channelHeight = Math.min(vp * -10 + Vgs * 10, 100); // Ajuste os valores conforme necessário
      channelHeight = vp * -10 + Vgs * 10; // Ajuste os valores conforme necessário
      //channelText = "- ".repeat((channelHeight - 50));\
      substrateText = "";
      //   channelText = "- ".repeat(15);
    } else if (Vgs >= vmax) {
      channelHeight = 100;
    } else {
      //   channelWidth = 0;
      channelHeight = 0;
    }
  }
</script>

<!-- <div class="w-full h-12 bg-gray-300 rounded-lg overflow-hidden">
  <div
    class="h-full bg-green-500 transition-all duration-300"
    style="width: {channelWidth}%"
  ></div>
</div>

<div class="bg-red-500 h-40 py-1">
  <div class="w-48 bg-gray-300 rounded-lg overflow-hidden">
    <div
      class="{channelColor} transition-all duration-300 ease-in-out"
      style="height: {channelHeight}px"
    ></div>
  </div>
</div> -->
<!-- {channelHeight} _ Vgs:{Vgs} _ {50 + Vgs * 5} _ {Math.min(50 + Vgs * 5, 100)}
vp:{vp}
vmax{vmax} -->

<div class="{classes} {substrateColor} overflow-hidden rounded-b-3xl">
  <div
    class="{channelColor} bg-repeat bg-[length:35px_20px] transition-all duration-300 ease-in-out rounded-b-4xl"
    style="height: {channelHeight}%;"
  >
    <div
      class="{substrateColor} bg-repeat bg-[length:30px_10px] transition-all duration-300 ease-in-out rounded-b-4xl flex justify-center bg-[url(https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/plus.svg)]"
      class:items-end={strangle < 35}
      class:items-center={strangle >= 35}
      class:items-start={strangle >= 90}
      style="height: {strangle}%;"
    >
      <!-- <sup>{substrateText}</sup> -->
    </div>
    {channelText}
  </div>
</div>
