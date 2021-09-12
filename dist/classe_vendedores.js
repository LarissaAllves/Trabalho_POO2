"use strict";
// Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
// venda. Crie os getters e setters e as validações. Crie um método desconto para
// calcular 8% do salário.
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
// Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
// crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
// centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
// região for sul a comissão será de 10% sobre o valor da venda. Se a região for
// sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
// comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
// será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
// será o salario mais a comissão.
// Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
// total de funcionários, crie os getters, setters e as suas validações. Crie um método
// para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
// comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
// a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
// venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
// de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
// salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
// 100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100
var Vendedores = /** @class */ (function () {
    function Vendedores(nome, salario, valordaVenda) {
        this._nome = nome;
        this._salario = salario;
        this._valordaVenda = valordaVenda;
    }
    Object.defineProperty(Vendedores.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error("Nome deve ser definido");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if (!salario) {
                throw new Error("Salario deve ser definido");
            }
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "valordaVenda", {
        get: function () {
            return this._valordaVenda;
        },
        set: function (valordaVenda) {
            if (!valordaVenda) {
                throw new Error("Valor da Venda deve ser definido");
            }
            this._valordaVenda = valordaVenda;
        },
        enumerable: false,
        configurable: true
    });
    Vendedores.prototype.calcDesc = function () {
        return this.salario * 0.08;
    };
    return Vendedores;
}());
var VendedorPF = /** @class */ (function (_super) {
    __extends(VendedorPF, _super);
    function VendedorPF(nome, salario, valordaVenda, regiao) {
        var _this = _super.call(this, nome, salario, valordaVenda) || this;
        _this._regiao = regiao;
        return _this;
    }
    Object.defineProperty(VendedorPF.prototype, "regiao", {
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            if (!VendedorPF.REGIAO.includes(regiao)) {
                throw new Error("Digite uma região válida");
            }
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });
    VendedorPF.prototype.calComission = function () {
        if (this._regiao === "Sul") {
            return this.valordaVenda * 0.1;
        }
        else if (this._regiao === "Sudeste") {
            return this.valordaVenda * 0.12;
        }
        else if (this._regiao === "Centro-Oeste") {
            return this.valordaVenda * 0.14;
        }
        else if (this._regiao === "Norte") {
            return this.valordaVenda * 0.15;
        }
        else if (this._regiao === "Nordeste") {
            return this.valordaVenda * 0.17;
        }
        return 0;
    };
    VendedorPF.prototype.salarioLiquido = function () {
        return this.salario + this.calComission();
    };
    VendedorPF.REGIAO = ["Sul", "Sudeste", "Centro-Oeste'", "Norte", "Nordeste"];
    return VendedorPF;
}(Vendedores));
var VendedorPJ = /** @class */ (function (_super) {
    __extends(VendedorPJ, _super);
    function VendedorPJ(nome, salario, valordaVenda, nomeEmpresa, quantFuncionario) {
        var _this = _super.call(this, nome, salario, valordaVenda) || this;
        _this._nomeEmpresa = nomeEmpresa;
        _this._quantFuncionario = quantFuncionario;
        return _this;
    }
    Object.defineProperty(VendedorPJ.prototype, "nomeEmpresa", {
        get: function () {
            return this._nomeEmpresa;
        },
        set: function (nomeEmpresa) {
            if (!nomeEmpresa) {
                throw new Error("Nome da Empresa deve ser definido");
            }
            this._nomeEmpresa = nomeEmpresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendedorPJ.prototype, "quantFuncionario", {
        get: function () {
            return this._quantFuncionario;
        },
        set: function (quantFuncionario) {
            if (!quantFuncionario) {
                throw new Error("Quantidade de funcionarios deve ser definido");
            }
            this._quantFuncionario = quantFuncionario;
        },
        enumerable: false,
        configurable: true
    });
    VendedorPJ.prototype.calcValor = function () {
        if (this.valordaVenda < 5000) {
            return this.valordaVenda * 0.02;
        }
        else if (this.valordaVenda >= 5000 && this.valordaVenda < 10000) {
            return this.valordaVenda * 0.04;
        }
        else if (this.valordaVenda >= 10000) {
            return this.valordaVenda * 0.06;
        }
        return 0;
    };
    VendedorPJ.prototype.salarioTotal = function () {
        if (this.quantFuncionario < 100) {
            return this.salario + this.calcValor() + 200;
        }
        else if (this.valordaVenda >= 100) {
            return this.salario + this.calcValor() + 300;
        }
        return 0;
    };
    return VendedorPJ;
}(Vendedores));
var vendedores = new Vendedores("Beatriz", 1000, 500);
console.log(vendedores);
console.log("Calculo do desconto: " + vendedores.calcDesc());
var vendedorPF = new VendedorPF("Beatriz", 1000, 500, "Sudeste");
console.log("Calculo da comiss\u00E3o da pessoa FISICA: " + vendedorPF.calComission());
console.log("Calculo do salario PESSOA FISICA: " + vendedorPF.salarioLiquido());
var vendedorPJ = new VendedorPJ("Bruno", 1500, 400, "abc", 80);
console.log("Calculo do salario total PESSOA JURIDICA: " + vendedorPJ.salarioTotal());
try {
    vendedores.nome = "TESTE";
    vendedores.salario = 1000;
    vendedores.valordaVenda = 0;
}
catch (error) {
    console.log(error.message);
}
