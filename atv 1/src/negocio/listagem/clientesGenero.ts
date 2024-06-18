import Cliente from "../../modelo/cliente";
import Listar from "../processos/listar";

export default class ListarClientesPorGenero implements Listar {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }
    
    public listar(): void {
      let clientesPorGenero = {
        masculino: []as string[],
        feminino: []as string[]
      };

      this.clientes.forEach(cliente => {
        if (cliente.getGenero() === 'masculino') {
          clientesPorGenero.masculino.push(cliente.nome);
        } else if (cliente.getGenero() === 'feminino') {
          clientesPorGenero.feminino.push(cliente.nome);
        }
      });

      console.log(`\nClientes por gênero:`);
      console.table(clientesPorGenero);
      console.log(`\n`);
    }
}