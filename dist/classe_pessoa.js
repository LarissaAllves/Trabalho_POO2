"use strict";
// Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
// setters. No setters valide se o nome for em branco retorne uma mensagem de nome
// inválido.
//Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
// inválida.
//Se a idade for 0 retorne uma mensagem de idade inválida.
//Crie um método
// para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
// maior de idade, caso contrário exibir a mensagem pessoa menor de idade.
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, sexo) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade === 0) {
                throw new Error("Idade invalido");
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (!Pessoa.DEFINE_SEXO.includes(sexo)) {
                throw new Error("Sexo Invalido");
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error("Nome Invalido");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.CheckIdade = function (idade) {
        if (idade >= 18) {
            console.log("Maior de Idade");
        }
        else {
            console.log("Menor de Idade");
        }
    };
    Pessoa.DEFINE_SEXO = ["Feminino", "Masculino"];
    return Pessoa;
}());
var pessoa = new Pessoa("Larissa", 23, "feminino");
console.log(pessoa);
console.log(pessoa.nome, pessoa.idade, pessoa.sexo);
try {
    pessoa.nome = "Larissa";
    pessoa.sexo = "Feminino";
    pessoa.idade = 17;
    Pessoa.CheckIdade(pessoa.idade);
}
catch (error) {
    console.log(error.message);
}
