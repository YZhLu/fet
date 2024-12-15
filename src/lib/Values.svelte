<script lang="ts">
  export let Vgs: number; //= 0; // Tensão de gate-source
  export let Vds: number; //= 0; // Tensão de dreno-fonte
  export let Id: number; //= 0; // Corrente de dreno
  export let Vth: number; //= 1; // Tensão de limiar (exemplo, pode ajustar conforme o MOSFET)
  export let K: number; //= 0.5; // Constante do MOSFET (exemplo, pode ajustar conforme o MOSFET)
  export let Vgs_prime: number;
  export let Iss: number;
  export let Vp: number = Vth;

  // Função para calcular a corrente Id com base nas tensões Vgs e Vds
  // function calcularId() {
  //   console.log(Vgs, Id, Vds, Vgs < Vth);
  //   if (Vgs < Vth || Vds == 0) {
  //     Id = 0; // Se Vgs for menor que Vth, o MOSFET está "desligado"
  //   } else {
  //     if (Vds < Vgs - Vth) {
  //       // Modo linear (ou triode)
  //       //Id = K * ((Vgs - Vth) * Vds - Vds ** 2 / 2);
  //       Id = Iss * (1 - Vgs / Vth) ** 2;
  //     } else {
  //       // Modo de saturação
  //       Id = (K / 2) * (Vgs - Vth) ** 2;
  //     }
  //   }
  // }

  export function calculateId(
    Iss: number,
    Vgs: number,
    Vds: number,
    Vp: number
  ): number {
    if (Vgs < Vp) return 0;
    // Calcula Idss de acordo com a fórmula fornecida
    const Idss = Iss * (1 - Vgs / Vp) ** 2;

    // Verifica a condição para Id
    if (Vds >= Vgs - Vp) {
      // Quando Vds é maior ou igual a Vgs - Vp, Id é igual a Idss
      return Idss;
    } else {
      // Caso contrário, usa a fórmula alternativa para Id
      return (Idss / (Vgs - Vp)) * Vds;
    }
  }

  // Chamada para recalcular a corrente sempre que Vgs ou Vds mudar
  $: {
    Vds;
    Vgs;
    //console.log(Vds, Vgs);
    //calcularId()
    Id = calculateId(Iss, Vgs, Vds, Vp);
  }
</script>

<main class="flex flex-col items-center p-8 py-4 card">
  <!-- <h1 class="text-2xl font-semibold">
    Cálculo da Corrente Id em MOSFET de Depleção
  </h1> -->
  <!-- {Vds < Vgs - Vth} {Vgs - Vth} -->
  <!-- Inputs para Vgs e Vds -->
  <div class="flex  items-center gap-2">
    <!-- <div>
      <label for="vgs-slider" class="text-lg">V<sub>pinchoff</sub>: {Vgs-Vp} V</label>
    </div> -->

    <div>
      <label for="vgs-slider" class="text-lg">Vgs: {Vgs.toFixed(2)}V</label>
    </div>

    <div>
      <label for="Vds-slider" class="text-lg">Vds: {Vds.toFixed(2)}V</label>
    </div>

    <div>
      <label for="Vds-slider" class="text-lg">Vp: {Vth.toFixed(2)}V</label>
    </div>
    <!-- <div>
      <label for="Vds-slider" class="text-lg">K: {K.toFixed(2)} V</label>
    </div> -->
  </div>

    <!-- Exibição da Corrente Id -->
    <div class="mt-6">
      <p class="text-xl">Corrente Id: {Id.toFixed(4)} mA</p>
    </div>
  <!-- </div> -->
</main>
