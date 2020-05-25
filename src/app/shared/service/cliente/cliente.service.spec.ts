import { PessoaJuridica } from './../../model/cliente/pessoajuridica.model';
import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { PessoaFisica } from '../../model/cliente/pessoafisica.model';

describe('O serviço ClienteService', () => {

  let clienteService: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteService]
    });
    clienteService = TestBed.get(ClienteService);
  });

  it('Deve ser instanciado', () => {
    expect(clienteService).toBeTruthy();
  });

  it('Testa obterTodosOsClientes', () => {

    const list = clienteService.obterTodosOsClientes();
    expect(list.length).toBe(2);

    expect((list[0]).id).toBe(1);
    expect((list[0]).endereco).toBe('Avenida Ricardo Abraao, 132, Laranjeiras');
    expect((list[0]).telefone).toBe('993433945');

    expect((list[1]).id).toBe(2);
    expect((list[1]).endereco).toBe('Rua Marcio da Costa, 254, Bangu');
    expect((list[1]).telefone).toBe('99430-4323');

    expect((list[0] as PessoaFisica).cpf).toBe('12323412315');
    expect((list[0] as PessoaFisica).nome).toBe('Pedro Henrique Silveira');

    expect((list[1] as PessoaJuridica).razaoSocial).toBe('Tirulipa Comercios LTDA');
    expect((list[1] as PessoaJuridica).cnpj).toBe('12323412315432');
    expect((list[1] as PessoaJuridica).telContato).toBe('2669-2034');

  });


  it('Testa cadastrarNovoCliente', () => {

    const novoCliente = new PessoaFisica();
    novoCliente.id = 3;
    novoCliente.endereco = 'Rua de Teste, 123, Rio de Janeiro';
    novoCliente.cpf = '1231234567';
    novoCliente.telefone = '993422345';
    novoCliente.nome = 'Teste Nome';

    clienteService.cadastrarNovoCliente(novoCliente);

    const listaAtualizada = clienteService.obterTodosOsClientes();
    expect(listaAtualizada.length).toBe(3);

    expect((listaAtualizada[2]).id).toBe(3);
    expect((listaAtualizada[2]).endereco).toBe('Rua de Teste, 123, Rio de Janeiro');
    expect((listaAtualizada[2]).telefone).toBe('993422345');
    expect((listaAtualizada[2] as PessoaFisica).cpf).toBe('1231234567');
    expect((listaAtualizada[2] as PessoaFisica).nome).toBe('Teste Nome');

  });


  it('Testa removerCliente', () => {

    clienteService.removerCliente(2);

    const listaAtualizada = clienteService.obterTodosOsClientes();
    expect(listaAtualizada.length).toBe(1);

    expect((listaAtualizada[0]).id).toBe(1);
    expect((listaAtualizada[0]).endereco).toBe('Avenida Ricardo Abraao, 132, Laranjeiras');
    expect((listaAtualizada[0]).telefone).toBe('993433945');
    expect((listaAtualizada[0] as PessoaFisica).cpf).toBe('12323412315');
    expect((listaAtualizada[0] as PessoaFisica).nome).toBe('Pedro Henrique Silveira');

  });


  afterEach(() => {
    sessionStorage.clear();
  });


});
