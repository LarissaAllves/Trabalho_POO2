"use strict";
// Crie uma classe Fatura com os atributos números, descrição, quantidade
// Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
// comprada pelo preço
var Fatura = /** @class */ (function () {
    function Fatura(numeros, descricao, quantidadeComprada, preco) {
        this._numeros = numeros;
        this._descricao = descricao;
        this._quantidadeComprada = quantidadeComprada;
        this._preco = preco;
    }
    Object.defineProperty(Fatura.prototype, "numeros", {
        get: function () {
            return this._numeros;
        },
        set: function (numeros) {
            this._numeros = numeros;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "quantidadeComprada", {
        get: function () {
            return this.quantidadeComprada;
        },
        set: function (quantidadeComprada) {
            this._quantidadeComprada = quantidadeComprada;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "preco", {
        get: function () {
            return this.preco;
        },
        set: function (preco) {
            this.preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Fatura.prototype.calculoFatura = function () {
        return this._quantidadeComprada * this._preco;
    };
    return Fatura;
}());
var fatura = new Fatura("10", "blusa", 2, 40);
console.log(fatura);
console.log(fatura.calculoFatura());
