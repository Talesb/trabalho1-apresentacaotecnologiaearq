import { Gerente } from './../gerente/gerente.model';
import { Nota } from './../nota/nota.model';
import { Cliente } from './../cliente/cliente.model';
import { EscopoContrato } from '../enum/escopocontrato.enum';
import { StatusContrato } from '../enum/statuscontrato.enum';
export abstract class Contrato {
    id: number;
    duracao: number;
    status: StatusContrato;
    valor: number;
    dataInicio: Date;
    escopo: EscopoContrato;
    cliente: Cliente;
    notas: Nota[];
    gerente: Gerente;
}
