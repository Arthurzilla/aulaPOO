class Pessoa{
    nome;
    sobrenome;
    idade;
    cidade;

    constructor(nome, sobrenome, idade, cidade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cidade = cidade;
    }

    nomeCompleto(){
        return this.nome + "" + this.sobrenome;
    }
}

class Aluno extends Pessoa{
    matricula;
    sala;

    constructor(nome, sobrenome, idade, cidade, sala){
        super(nome, sobrenome, idade, cidade);
        this.sala = sala;
    }

    matricular(){
        var matricula = parseInt(Math.random() * 10000);
        this.matricula = matricula;
        return console.log(this.nomeCompleto());
    }
}

class Professor extends Pessoa{
    #uniCurricular; //define esses atributos como privados
    #valorHora;
    #horasTrabalhadas;
    constructor(nome, sobrenome, idade, cidade, uniCurricular, valorHora, horasTrabalhadas){
        super(nome, sobrenome, idade, cidade);
        this.#uniCurricular = uniCurricular;
        this.#valorHora = valorHora;
        this.#horasTrabalhadas = horasTrabalhadas;
    }

    //criação dos "getters" estes que retornam os atributos privados
    get getUc(){
        return this.#uniCurricular;
    }
    get getVh(){
        return this.#valorHora;
    }
    get getHt(){
        return this.#horasTrabalhadas
    }

    //criação dos "setters" estes que definem os atributos privados
    set setUc(uc){
        this.uniCurricular = uc;
    }

    set setVh(vh){
        this.valorHora = vh;
    }

    set setHt(ht){
        this.horasTrabalhadas = ht;
    }

    calcularSalario(){ 
        //o seu salário é (usa um getter de valor hora X um getter de horas trabalhadas)
        return console.log("O seu salário é: ", this.getVh * this.getHt);
    }

    mostrarDados(){
        //mostra as imformações do professor, getUc, getVh, e getHt são getters
        return console.log(this.nome, this.sobrenome, "/", this.cidade, "/", this.getUc, "/", this.getVh, "/", this.getHt)
    }

  
}

var aluno = new Aluno(
    'arthur','cardoso',16,'içara', 107
);

var professor = new Professor(
    'Afonso', 'Padilha', 45, 'criciúma', 'Filosofia', 30, 40
);

professor.uniCurricular = "História"
professor.mostrarDados()
professor.calcularSalario()
