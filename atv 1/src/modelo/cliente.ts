import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente {
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private rgs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    private genero: string;

    constructor(
        nome: string,
        nomeSocial: string,
        cpf: CPF,
        rgs: Array<RG>,
        telefones: Array<Telefone>,
        produtosConsumidos: Array<Produto>,
        servicosConsumidos: Array<Servico>,
        genero: string
    ) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = rgs;
        this.dataCadastro = new Date();
        this.telefones = telefones;
        this.produtosConsumidos = produtosConsumidos;
        this.servicosConsumidos = servicosConsumidos;
        this.genero = genero;
    }

    public get getCpf(): CPF {
        return this.cpf;
    }
    public get getRgs(): Array<RG> {
        return this.rgs;
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }
    public getGenero(): string {
        return this.genero;
    }

    public set setCpf(cpf: CPF) {
        this.cpf = cpf;
    }
    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs;
    }
    public set setDataCadastro(dataCadastro: Date) {
        this.dataCadastro = dataCadastro;
    }
    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones;
    }
    public set setProdutosConsumidos(produtosConsumidos: Array<Produto>) {
        this.produtosConsumidos = produtosConsumidos;
    }
    public set setServicosConsumidos(servicosConsumidos: Array<Servico>) {
        this.servicosConsumidos = servicosConsumidos;
    }
    public setGenero(genero: string) {
        this.genero = genero;
    }
}
