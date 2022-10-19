class cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new cliente();
const cliente2 = new cliente();

 cliente1.nome = "ricardo";
 cliente1.cpf = 12345678910;
 cliente1.agencia = 1001;
 cliente1.saldo = 0;
 cliente1.rg = 456378294;

 cliente2.nome = "Alice";
 cliente2.cpf = 09876543217;
 cliente2.agencia = 1001;
 cliente2.saldo = 0;
 cliente2.rg = 345237654;


console.log(cliente1, cliente2);
