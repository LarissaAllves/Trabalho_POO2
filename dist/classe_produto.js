"use strict";
var Produtos = /** @class */ (function () {
    function Produtos(produto, preco, quantidade) {
        this._produto = produto;
        this._preco = preco;
        this._quantidade = quantidade;
    }
    Object.defineProperty(Produtos.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if (!produto) {
                throw new Error("Produto não pode ser vazio");
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (!preco || preco === 0) {
                throw new Error("Preço não pode ser vazio ou 0");
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (!quantidade || quantidade === 0) {
                throw new Error("Quantidade não pode ser vazio ou 0");
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Produtos.prototype.desconto = function () {
        if (this.quantidade <= 10) {
            return 0;
        }
        else if (this.quantidade > 10 || this.quantidade <= 20) {
            return this.preco * 0.1;
        }
        if (this.quantidade > 21 || this.quantidade <= 50) {
            return this.preco * 0.2;
        }
        if (this.quantidade > 50) {
            return this.preco * 0.25;
        }
    };
    Produtos.prototype.valorFinal = function () {
        return this.quantidade * this.preco - this.desconto();
    };
    return Produtos;
}());
var produtos = new Produtos("Camisa", 2800, 11);
console.log("O produto " + produtos.produto + " de pre\u00E7o " + produtos.preco + ", quantidade comprada de " + produtos.quantidade + ", teve o desconto de " + produtos.desconto() + "  e o valor pago foi " + produtos.valorFinal() + "}");
//try {
// produtos.produto = "";
//produtos.quantidade = 0;
//produtos.preco = 0;
//} catch (error) {
//console.log(error.message);
//}
