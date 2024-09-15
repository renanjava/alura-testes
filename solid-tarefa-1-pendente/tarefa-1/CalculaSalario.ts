import { Cargos } from "./enum/cargos";

export class CalculaSalario {
    private _salarioBase: number = 1000;
    private _cargoMultiplicador = {
        [Cargos.Estagiario]: { multiplicador: 1.2 },
        [Cargos.Junior]: { multiplicador: 3 },
        [Cargos.Pleno]: { multiplicador: 5 },
        [Cargos.Senior]: { multiplicador: 7 },
    };

    public calcular(cargo: Cargos): number {
        return this._salarioBase * this._cargoMultiplicador[cargo].multiplicador;
    }
}