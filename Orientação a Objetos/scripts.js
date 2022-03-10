class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // sempre que a propriedade for ter um get colocar o _na frente para que a função get e set
                            // possa ter o nome saldo e a propriedade não
        
    }
    get saldo() {
      return this._saldo; 
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return 'Operação negada por saldo insuficiente'
        }

        this._saldo = this._saldo - valor;
        return this._saldo
        }

        depositar(valor) {
            this._saldo = this._saldo + valor;
            return this._saldo
        }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
        }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
    
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Negada!';
        }
       this._saldo = this._saldo - valor; 
    }
    
}



