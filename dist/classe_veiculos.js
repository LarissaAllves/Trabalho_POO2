"use strict";
// Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
// quantidade de dias.
//Crie os getters e setters. No setters crie validações para não
// aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
// zero.
//Crie um método passeio para receber a quantidade de dias e o valor da
// locação. O sistema calcule o total que será a multiplicação da quantidade de dias
// pelo valor da locação.
var Veiculos = /** @class */ (function () {
    function Veiculos(modelo, marca, ano, valorLocacao, quantidade) {
        this._modelo = modelo;
        this._marca = marca;
        this._ano = ano;
        this._valorLocacao = valorLocacao;
        this._quantidade = quantidade;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if (!modelo) {
                throw new Error("Modelo não pode ser vazio.");
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (!marca) {
                throw new Error("Marca não pode ser vazio");
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (!ano) {
                throw new Error("Ano não pode ser vazio");
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (!valorLocacao) {
                throw new Error("Valor não pode ser vazio");
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (!quantidade) {
                throw new Error("Quantidade não pode ser vazio");
            }
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return this._quantidade * this._valorLocacao;
    };
    return Veiculos;
}());
var veiculos = new Veiculos("LOGAN", "RENaUlT", "2015", 200, 2);
console.log(veiculos);
console.log(veiculos.passeio());
try {
    veiculos.modelo = "logan";
    veiculos.marca = "renault";
    veiculos.ano = "2015";
    veiculos.valorLocacao = 100;
    veiculos.quantidade = 2;
    console.log(veiculos);
    console.log(veiculos.passeio());
}
catch (error) {
    console.log(error.message);
}
