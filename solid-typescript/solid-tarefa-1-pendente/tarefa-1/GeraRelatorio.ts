import { CalculaSalario } from "./CalculaSalario";
import Colaborador from "./Colaborador";

export class GeraRelatorio{
    constructor(
        private _quadroDeColaboradores: Colaborador[],
        private _servicoCalculaSalario: CalculaSalario
    ){}
    gerarJSON() {
        const relatorio = this._quadroDeColaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this._servicoCalculaSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}