<script>
    export let VGS = 0; // Tensão de gate-source (VGS)
    let channelHeight = 0; // Altura do canal
    let channelText = ''; // Texto para representar os elétrons e lacunas
    let currentFlow = 0; // Representa o "fluxo de corrente" (0 a 1)
    let flowAnimationDuration = 0; // Duração da animação da corrente (em segundos)
  
    const plus =
    "https://raw.githubusercontent.com/AulaZero/icons/refs/heads/main/icons/plus.svg";


    // Função para gerar o fundo de texto e a animação de corrente
    $: {
      // Atualiza o tamanho do canal com base em VGS
      if (VGS >= 0) {
        channelHeight = Math.min(50 + VGS * 10, 300); // A altura do canal com base em VGS positivo
        channelText = '-'.repeat(Math.floor(channelHeight / 10)); // Elétrons no canal
        // A corrente aumenta com a tensão positiva
        currentFlow = Math.min(Math.abs(VGS) / 10, 1); // Corrente proporcional a VGS positivo
        // A duração da animação é inversamente proporcional a VGS (quanto maior VGS, mais rápida a animação)
        flowAnimationDuration = Math.max(1, 5 - Math.abs(VGS)); // Limita a duração da animação
      } else {
        channelHeight = 0; // Canal depletado quando VGS é negativo
        channelText = '+'.repeat(Math.floor(300 * (Math.abs(VGS) / 10))); // Lacunas
        // A corrente diminui com VGS negativo
        currentFlow = Math.max(0, 1 - Math.abs(VGS) / 10); // Corrente diminui com VGS negativo
        // Quando VGS é negativo, a animação fica mais lenta
        flowAnimationDuration = Math.max(1, 5 - Math.abs(VGS));
      }
    }
  </script>
  
  <div class="w-16 bg-gray-300 rounded-lg overflow-hidden relative">
    <!-- Canal: Um fundo de texto representando os elétrons e lacunas -->
    <div
      class="text-xs font-mono whitespace-nowrap"
      style="height: {channelHeight}px; line-height: 1.2em; font-family: monospace;"
    >
      {channelText}
    </div>
  
    <!-- Animação da corrente -->
    <div
      class="absolute bg-blue-500 bg-[url({plus})]  bg-[length:12px_14px]"
      style="
        bottom: 0;
        left: 0;
        width: 5px; /* Aumentei a largura para tornar mais visível */
        height: {channelHeight}px;
        animation: currentFlowAnimation {flowAnimationDuration}s infinite linear;
      "
    ></div>
  </div>
  
  <style>
    @keyframes currentFlowAnimation {
      0% { transform: translateX(-100%); } /* Começa fora da tela, à esquerda */
      100% { transform: translateX(100%); } /* Move até fora da tela, à direita */
    }
  </style>
  