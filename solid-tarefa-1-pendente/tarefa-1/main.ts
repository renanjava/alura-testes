import Colaborador from "./Colaborador";
import { Cargos } from "./enum/cargos";
import { GeraRelatorio } from "./GeraRelatorio";
import { Pagamento } from "./Pagamento";
import { QuadroDeColaboradores } from "./QuadroColaboradores";

const geraRelatorio = new GeraRelatorio();
const quadroDeColaboradores = new QuadroDeColaboradores();
const pagamento = new Pagamento();

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroDeColaboradores.contratarColaborador(colaborador1);
quadroDeColaboradores.contratarColaborador(colaborador2);
quadroDeColaboradores.contratarColaborador(colaborador3);

console.log(geraRelatorio.gerarRelatorioJSON());

console.log(colaborador1);
pagamento.pagaColaborador(colaborador1);
console.log(colaborador1);