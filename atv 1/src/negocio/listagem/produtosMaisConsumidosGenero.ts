import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Listar from "../processos/listar";

export default class ListarProdutosMaisConsumidosGenero implements Listar {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes;
        this.produtos = produtos;
    }

    public listar(): void {
        let produtosMaisConsumidosMasculino: {
            produto: string;
            quantidade: number;
        }[] = [];

        let produtosMaisConsumidosFeminino: {
            produto: string;
            quantidade: number;
        }[] = [];

        this.produtos.forEach(produto => {
            produtosMaisConsumidosMasculino.push({
                produto: produto.getNome,
                quantidade: 0
            });

            produtosMaisConsumidosFeminino.push({
                produto: produto.getNome,
                quantidade: 0
            });

            this.clientes.filter(cliente => cliente.getGenero() === 'masculino' || cliente.getGenero() === 'feminino')
                .forEach(cliente => {
                    let generoCliente = cliente.getGenero();
                    let quantidadeProdutosConsumidos = cliente.getProdutosConsumidos.filter(
                        produtoConsumido => produtoConsumido.getNome === produto.getNome && produtoConsumido.getValor > 0
                    ).length;

                    if (generoCliente === 'masculino') {
                        for (let i = 0; i < produtosMaisConsumidosMasculino.length; i++) {
                            if (produtosMaisConsumidosMasculino[i].produto === produto.getNome) {
                                produtosMaisConsumidosMasculino[i].quantidade += quantidadeProdutosConsumidos;
                                break;
                            }
                        }
                    } else if (generoCliente === 'feminino') {
                        for (let i = 0; i < produtosMaisConsumidosFeminino.length; i++) {
                            if (produtosMaisConsumidosFeminino[i].produto === produto.getNome) {
                                produtosMaisConsumidosFeminino[i].quantidade += quantidadeProdutosConsumidos;
                                break;
                            }
                        }
                    }
                });
        });

        console.log(`\nProduto mais consumido:`);
        console.log('Produto mais consumido masculino');
        console.table(
            produtosMaisConsumidosMasculino.sort((
                a: { quantidade: number },
                b: { quantidade: number }
            ) => b.quantidade - a.quantidade).slice(0, 1)
        );
        console.log('Produto mais consumido feminino');
        console.table(
            produtosMaisConsumidosFeminino.sort((
                a: { quantidade: number },
                b: { quantidade: number }
            ) => b.quantidade - a.quantidade).slice(0, 1)
        );
        console.log(`\n`);
    }
}