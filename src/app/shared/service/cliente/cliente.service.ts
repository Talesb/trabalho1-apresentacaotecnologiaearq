import { PessoaJuridica } from './../../model/cliente/pessoajuridica.model';
import { PessoaFisica } from './../../model/cliente/pessoafisica.model';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {

    const pessoaFisica = new PessoaFisica();
    pessoaFisica.id = 1;
    pessoaFisica.cpf = '12323412315';
    pessoaFisica.endereco = 'Avenida Ricardo Abraao, 132, Laranjeiras';
    pessoaFisica.telefone = '993433945';
    pessoaFisica.nome = 'Pedro Henrique Silveira';

    const pessoaJuridica = new PessoaJuridica();
    pessoaJuridica.cnpj = '12323412315432';
    pessoaJuridica.endereco = 'Rua Marcio da Costa, 254, Bangu';
    pessoaJuridica.telContato = '2669-2034';
    pessoaJuridica.telefone = '99430-4323';
    pessoaJuridica.id = 2;
    pessoaJuridica.razaoSocial = 'Tirulipa Comercios LTDA';

    const listaClientes: Cliente[] = [];
    listaClientes.push(pessoaFisica);
    listaClientes.push(pessoaJuridica);

    sessionStorage.setItem('clientes', JSON.stringify(listaClientes));

  }

  obterTodosOsClientes(): Cliente[] {
    const clientes = JSON.parse(sessionStorage.getItem('clientes'));
    return clientes;
  }

  cadastrarNovoCliente(cliente: Cliente) {
    const clientes = this.obterTodosOsClientes();
    clientes.push(cliente);
    sessionStorage.setItem('clientes', JSON.stringify(clientes));
  }

  removerCliente(id: number) {
    const clientesFiltrados = this.obterTodosOsClientes().filter(cliente => cliente.id !== id);
    sessionStorage.setItem('clientes', JSON.stringify(clientesFiltrados));
  }
}
