import Cliente from "../../modelo/cliente";
import Listar from "../processos/listar";

export default class ListarClientes implements Listar {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log('CPF:');
            console.table([cliente.getCpf]);
            console.log('RGs:');
            console.table(cliente.getRgs);
            console.log('Telefones:');
            console.table(cliente.getTelefones);
            console.log('Produtos Consumidos');
            console.table(cliente.getProdutosConsumidos);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}