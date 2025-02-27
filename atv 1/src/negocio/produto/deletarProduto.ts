import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "../processos/deletar";

export default class DeletarProduto implements Deletar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public deletar(): void {
        console.log(`\Delete do Produto`);
        console.table(this.produtos);
        let escolhaProduto = this.entrada.receberNumero(`Escolha o produto para deletar pelo código(index): `);
        this.produtos.splice(escolhaProduto, 1);

        console.log(`\nDelete concluído :)\n`);
    }
}