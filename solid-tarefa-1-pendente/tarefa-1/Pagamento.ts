import { CalculaSalario } from "./CalculaSalario";
import Colaborador from "./Colaborador";

export class Pagamento{
    private _servicoCalculaSalario: CalculaSalario = new CalculaSalario;

    public pagaColaborador(colaborador: Colaborador): void {
        const salarioColaborador = this._servicoCalculaSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}