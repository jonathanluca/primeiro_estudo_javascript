export class cliente {
    nome;
    cpf;
    rg;
}

export class contaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0)
        {
            return;
        }
        
        this._saldo += valor;
    }
}


import {cliente} from"./cliente.js"
import {contaCorrente} from"./contaCorrente"

const cliente1 = new cliente();
const cliente2 = new cliente();

 cliente1.nome = "ricardo";
 cliente1.cpf = 12345678910;
 cliente1.rg = 456378294;

 cliente2.nome = "Alice";
 cliente2.cpf = 79976543217;
 cliente2.rg = 345237654;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo._saldo = 100;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (100);

const valorSacado = contaCorrenteRicardo.sacar(50); 
console.log(valorSacado);

console.log(contaCorrenteRicardo);
