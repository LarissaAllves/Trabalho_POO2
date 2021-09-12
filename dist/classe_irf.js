"use strict";
// Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
// atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
// uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
// com saúde, crie os getter e setter com a validação.
//Crie uma classe filha Pessoa
// Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
// getter e o setter com a validação.
// Regras para os cálculos
// Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
// Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
// pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
// Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
// com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
// Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
// possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
// Trabalho de POO II 2
// cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
// 14% = 56.000,00
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Irf = /** @class */ (function () {
    function Irf(nome, rendaAnual) {
        this._nome = nome;
        this._rendaAnual = rendaAnual;
    }
    Object.defineProperty(Irf.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error("NOme não pode ser vazio");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Irf.prototype, "rendaAnual", {
        get: function () {
            return this._rendaAnual;
        },
        set: function (rendaAnual) {
            if (!rendaAnual) {
                throw new Error("Renda anual deve ser informada");
            }
            this._rendaAnual = rendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return Irf;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, rendaAnual, gastosSaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._gastosSaude = gastosSaude;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "gastosSaude", {
        get: function () {
            return this._gastosSaude;
        },
        set: function (gastosSaude) {
            if (!gastosSaude) {
                throw new Error("Valor deve ser informado");
            }
            this._gastosSaude = gastosSaude;
        },
        enumerable: false,
        configurable: true
    });
    PessoaFisica.prototype.irfPF = function () {
        //arrumar
        if (this.rendaAnual < 20000) {
            return this.rendaAnual * 0.15;
        }
        else if (this.rendaAnual >= 20000 && (this === null || this === void 0 ? void 0 : this.gastosSaude)) {
            return (this.rendaAnual * 0.25 - this.gastosSaude * 0.5).toFixed(2);
        }
    };
    return PessoaFisica;
}(Irf));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, numerodeFunc) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._numerodeFunc = numerodeFunc;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "numerodeFunc", {
        get: function () {
            return this._numerodeFunc;
        },
        set: function (numerodeFunc) {
            if (!numerodeFunc) {
                throw new Error("Numero de funcionarios deve ser informado");
            }
            this._numerodeFunc = numerodeFunc;
        },
        enumerable: false,
        configurable: true
    });
    PessoaJuridica.prototype.irfPJ = function () {
        if (this.numerodeFunc >= 10) {
            return this.rendaAnual * 0.14;
        }
        else {
            return this.rendaAnual * 0.16;
        }
    };
    return PessoaJuridica;
}(Irf));
var pf = new PessoaFisica("Fatima", 10000, 2000);
console.log("Calculo imposto de renda pessoa f\u00EDsica " + pf.irfPF());
var pj = new PessoaJuridica("abc", 400000, 5);
console.log("Calculo imposto de renda pessoa juridica " + pj.irfPJ().toFixed(2));
try {
    pf.nome = "Larissa";
    pf.rendaAnual = 1000;
    pf.gastosSaude = 200;
    pj.nome = "HGS";
    pj.numerodeFunc = 10;
    pj.rendaAnual = 4500;
}
catch (err) {
    console.log(err.message);
}
