import Cliente from "../../modelo/cliente";
import Listar from "../processos/listar";

export default class ListarClientesConsumidores implements Listar {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    
    public listar(): void {
        let consumoCliente: { 
          nome: string, 
          quantidadeConsumo: number 
        }[] = this.clientes.map(({
          nome, 
          getProdutosConsumidos: produtosConsumidos,
        }) => ({
          nome,
          quantidadeConsumo: produtosConsumidos.length
        }));
        
        let consumoClienteOrdenado = consumoCliente.sort((
          a: { quantidadeConsumo: number },
          b: { quantidadeConsumo: number }
        ) => b.quantidadeConsumo - a.quantidadeConsumo);

        console.log(`\nLista dos 10 clientes que mais consumiram:`);
        console.table(consumoClienteOrdenado.slice(0, 10));
        console.log(`\n`);
    }
}