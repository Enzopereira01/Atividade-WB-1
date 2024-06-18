import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Cpf from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Rg from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import CadastrarCliente from "../negocio/cliente/cadastroCliente";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListarClientes from "../negocio/cliente/listarCliente";
import ListarClientesConsumidores from "../negocio/listagem/clientesConsumidores";
import ListarClientesPorGenero from "../negocio/listagem/clientesGenero";
import ListarClientesMConsumidores from "../negocio/listagem/clientesMConsumidores";
import ListarClientesValor from "../negocio/listagem/clientesValor";
import ListarProdutosMaisConsumidos from "../negocio/listagem/produtosMaisConsumidos";
import ListarProdutosMaisConsumidosGenero from "../negocio/listagem/produtosMaisConsumidosGenero";
import CadastrarProduto from "../negocio/produto/cadastroProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import ListarProdutos from "../negocio/produto/listarProduto";

console.log(`Bem-vindo ao cadastro e gerenciamento de nosso clientes.`)
let empresa = new Empresa();
for (let i = 1; i <= 20; i++) {
    empresa.getProdutos.push(new Produto(`Produto ${i}`, Math.random() * 1000));
}

for (let i = 1; i <= 20; i++) {
    empresa.getServicos.push(new Servico(`Serviço ${i}`));
}

for (let i = 1; i <= 30; i++) {
    let cpf = new Cpf(`123.456.789-${i % 10}0`, new Date());
    let rgs = [new Rg(`MG-${i % 10}0`, new Date())];
    let telefones = [new Telefone( `12`, `98765-432${i % 10}`)];
    let produtosConsumidos = empresa.getProdutos.slice(0, Math.floor(Math.random() * empresa.getProdutos.length));
    let servicosConsumidos = empresa.getServicos.slice(0, Math.floor(Math.random() * empresa.getServicos.length));
    
    let cliente = new Cliente(
        `Cliente ${i}`,
        `Nome Social ${i}`,
        cpf,
        rgs,
        telefones,
        produtosConsumidos,
        servicosConsumidos,
        i % 2 === 0 ? 'masculino' : 'feminino'
    );
    
    empresa.getClientes.push(cliente);
}
let execucao = true;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Listagens`);
    console.log(`4 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let execucaoAreaCliente = true;
            while (execucaoAreaCliente) {
                console.log(`\n1 - Cadastrar cliente`);
                console.log(`2 - Deletar algum cliente.`);
                console.log(`3 - Listar todos os clientes.`);
                console.log(`4 - Voltar ao lobby.`);

                let opcaoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcaoCliente) {
                    case 1:
                        let cadastroCliente = new CadastrarCliente(
                            empresa.getClientes,
                            empresa.getProdutos,
                            empresa.getServicos
                        )
                        cadastroCliente.cadastrar()
                        break;
                    case 2:
                        let exclusaoCliente = new DeletarCliente(empresa.getClientes);
                        exclusaoCliente.deletar();
                        break;
                    case 3:
                        let listagemClientes = new ListarClientes(empresa.getClientes)
                        listagemClientes.listar()
                        break;
                    case 0:
                        execucaoAreaCliente = false
                        console.log(`\n`)
                        break;
                    default:
                        console.log(`...\n`);
                        break;
                }
            }
            break;
        case 2:
            let execucaoAreaProduto = true;
            while (execucaoAreaProduto) {
                console.log(`\n1 - Cadastrar Produto`);
                console.log(`2 - Deletar os Produto`);
                console.log(`3 - Listar os Produtos`);
                console.log(`4 - Voltar ao lobby.`);

                let opcaoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcaoProduto) {
                    case 1:
                        let cadastroProduto = new CadastrarProduto(empresa.getProdutos);
                        cadastroProduto.cadastrar();
                        break;
                    case 2:
                        let exclusaoProduto = new DeletarProduto(empresa.getProdutos);
                        exclusaoProduto.deletar();
                        break;
                    case 3:
                        let listagemProdutos = new ListarProdutos(empresa.getProdutos);
                        listagemProdutos.listar();
                        break;
                    case 0:
                        execucaoAreaProduto = false
                        console.log(`\n`)
                        break;
                    default:
                        console.log(`Operação não entendida :(\n`);
                        break;
                }
            }
            break;
        case 3:
            let execucaoListagem = true;
            while (execucaoListagem) {
                console.log(`\n1 - Listar os 10 clientes que mais consumiram os produtos.`);
                console.log(`2 - Listar os 10 clientes que menos consumiram os produtos.`);
                console.log(`3 - Listar os 5 clientes que mais consumiram produtos pelo valor.`);
                console.log(`4 - Listagem dos cliente por gênero.`);
                console.log(`5 - Produto mais consumido.`);
                console.log(`6 - Produto mais consumido por certo gênero.`);
                console.log(`7 - Voltar ao lobby.`);

                let opcaoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `);

                switch (opcaoProduto) {
                    case 1:
                        let listarClientesConsumidores = new ListarClientesConsumidores(empresa.getClientes);
                        listarClientesConsumidores.listar();
                        break;
                    case 2:
                        let listarClientesMConsumidores = new ListarClientesMConsumidores(empresa.getClientes);
                        listarClientesMConsumidores.listar();
                        break;
                    case 3:
                        let listarClientesValor = new ListarClientesValor(empresa.getClientes);
                        listarClientesValor.listar();
                        break;

                    case 4:
                        let listarClientesporGenero = new ListarClientesPorGenero(empresa.getClientes);
                        listarClientesporGenero.listar();
                        break;
                    case 5:
                        let listarProdutosMaisConsumidos = new ListarProdutosMaisConsumidos(
                            empresa.getClientes,
                            empresa.getProdutos
                        );
                        listarProdutosMaisConsumidos.listar();
                        break;
                    case 6:
                        let listarProdutosMaisConsumidosGenero = new ListarProdutosMaisConsumidosGenero(
                            empresa.getClientes,
                            empresa.getProdutos
                        );
                        listarProdutosMaisConsumidosGenero.listar();
                        break;
                    case 7:
                        execucaoListagem = false
                        console.log(`\n`)
                        break;
                    default:
                        console.log(`...\n`);
                        break;
                }
            }
            break;
        case 4:
            execucao = false
            console.log(`O sistema será fechado.`)
            break;
        default:
            console.log(`...\n`)
    }
}