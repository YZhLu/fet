<script>
// @ts-nocheck

    export let VGS = 0; // Tensão de gate-source (VGS)
    let channelHeight = 0;
    let electronPositions = []; // Posições dos elétrons
    let holePositions = []; // Posições das lacunas
  
    // Função para calcular o aumento do canal com base em VGS
    $: {
      if (VGS >= 0) {
        // O canal cresce para baixo com base em VGS
        channelHeight = Math.min(50 + VGS * 10, 300);
        electronPositions = []; // Em VGS positivo, o canal é preenchido com elétrons
        holePositions = [];
        for (let i = 0; i < Math.floor(channelHeight / 10); i++) {
          // Simula a distribuição dos elétrons no canal (de forma uniforme)
          electronPositions.push(10 + i * 10);
        }
      } else {
        // Quando VGS for negativo, o canal diminui (efeito de depleção)
        channelHeight = 0;
        electronPositions = [];
        holePositions = [];
        // Simula a depleção, onde lacunas aparecem
        for (let i = 0; i < Math.floor(300 * (Math.abs(VGS) / 10)); i++) {
          holePositions.push(10 + i * 10); // Lacunas aparecem com base no valor de VGS negativo
        }
      }
    }
  </script>
  
  <div class="w-16 bg-gray-300 rounded-lg overflow-hidden relative">
    <!-- Canal -->
    <div
      class="bg-green-500 transition-all duration-500 ease-out"
      style="height: {channelHeight}px"
    ></div>
  
    <!-- Elétrons (representados por círculos) -->
    {#each electronPositions as pos}
      <div
        class="absolute w-2 h-2 bg-blue-500 rounded-full"
        style="bottom: {pos}px; left: 50%; transform: translateX(-50%)"
      ></div>
    {/each}
  
    <!-- Lacunas (representadas por círculos vazios ou de outra cor) -->
    {#each holePositions as pos}
      <div
        class="absolute w-2 h-2 border-2 border-red-500 rounded-full"
        style="bottom: {pos}px; left: 50%; transform: translateX(-50%)"
      ></div>
    {/each}
  </div>

  <div class="w-16 bg-gray-300 rounded-lg overflow-hidden">
	<div
	  class="transition-all duration-500 ease-out"
	  style="height: {channelHeight}px; background-color: {VGS >= 0 ? 'green' : 'red'}"
	></div>
  </div>
  
  