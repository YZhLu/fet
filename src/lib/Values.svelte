<script lang="ts">
  export let Vgs: number; //= 0; // Tensão de gate-source
  export let Vds: number; //= 0; // Tensão de dreno-fonte
  export let Id: number; //= 0; // Corrente de dreno
  export let Vth: number; //= 1; // Tensão de limiar (exemplo, pode ajustar conforme o MOSFET)
  export let K: number; //= 0.5; // Constante do MOSFET (exemplo, pode ajustar conforme o MOSFET)
  export let Vgs_prime: number;

  // Função para calcular a corrente Id com base nas tensões Vgs e Vds
  function calcularId() {
    if (Vgs < Vth) {
      Id = 0; // Se Vgs for menor que Vth, o MOSFET está "desligado"
    } else {
      if (Vds < Vgs - Vth) {
        // Modo linear (ou triode)
        Id = K * ((Vgs - Vth) * Vds - Vds ** 2 / 2);
      } else {
        // Modo de saturação
        Id = (K / 2) * (Vgs - Vth) ** 2;
      }
    }
  }

  // Chamada para recalcular a corrente sempre que Vgs ou Vds mudar
  $: {
    Vds;
    Vgs;
    calcularId();
  }
</script>

<main class="flex flex-col items-center p-8 space-y-6 card">
  <h1 class="text-2xl font-semibold">
    Cálculo da Corrente Id em MOSFET de Depleção
  </h1>
  <!-- {Vds < Vgs - Vth} {Vgs - Vth} -->
  <!-- Inputs para Vgs e Vds -->
  <div class="flex flex-col items-center space-y-4">
    <div>
      <label for="vgs-slider" class="text-lg">Vgs': {Vgs_prime} V</label>
    </div>

    <div>
      <label for="vgs-slider" class="text-lg">Vgs: {Vgs.toFixed(2)} V</label>
    </div>

    <div>
      <label for="Vds-slider" class="text-lg">Vds: {Vds.toFixed(2)} V</label>
    </div>

    <div>
      <label for="Vds-slider" class="text-lg">Vp: {Vth.toFixed(2)} V</label>
    </div>
    <div>
      <label for="Vds-slider" class="text-lg">K: {K.toFixed(2)} V</label>
    </div>
  </div>

  <!-- Exibição da Corrente Id -->
  <div class="mt-6">
    <p class="text-xl">Corrente Id: {Id.toFixed(4)} mA</p>
  </div>
</main>
