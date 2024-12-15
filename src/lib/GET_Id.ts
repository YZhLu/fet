export function calculateId(Iss: number, Vgs: number, Vds: number, Vp: number): number {
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