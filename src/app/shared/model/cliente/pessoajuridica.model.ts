import { Cliente } from './cliente.model';
export class PessoaJuridica extends Cliente {
    cnpj: string;
    razaoSocial: string;
    telContato: string;
}