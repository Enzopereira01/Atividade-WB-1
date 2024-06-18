import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../processos/deletar";

export default class DeletarCliente implements Deletar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public deletar(): void {
        console.log(`\nDelete do Cliente`);
        console.table(this.clientes.map(({ nome }) => nome));
        let escolhaCliente = this.entrada.receberNumero(`Escolha o cliente para deletar pelo código(index): `);
        this.clientes.splice(escolhaCliente, 1);

        console.log(`\nDelete concluída :)\n`);
    }
}