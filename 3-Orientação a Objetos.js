class cliente {
    nome;
    cpf;
    rg;
}

class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    depositar(valor){
        if (valor > 0){
            this.saldo += valor;
        }
    }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

 cliente1.nome = "ricardo";
 cliente1.cpf = 12345678910;
 cliente1.rg = 456378294;

 cliente2.nome = "Alice";
 cliente2.cpf = 09876543217;
 cliente2.rg = 345237654;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.depositar (300);
contaCorrenteRicardo.depositar (-400); // apartir do momento que criamos a função depositar ela entende que por mais que tenha um sinal de menos e para depositar!
contaCorrenteRicardo.depositar (20);
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(100); 

let valorSacado = 200;
if(contaCorrenteRicardo >= valorSacado){
    contaCorrenteRicardo.saldo -= valorSacado;
}
console.log(contaCorrenteRicardo.saldo);

console.log(cliente1);
console.log(cliente2);
