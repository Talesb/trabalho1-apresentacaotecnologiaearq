import { Equipamento } from './../equipamento/equipamento.model';
import { Contrato } from './contrato.model';
export class ContratoManutencao extends Contrato {
    equipamentosCobertos: Equipamento[];
}