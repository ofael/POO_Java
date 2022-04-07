class ContaBancaria{
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return _saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;    
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero,saldo);

        this.tipo = 'corrente'
        this.cartaoCredito = cartaoCredito;

    }

    get cartaoCredito(){
        return this.cartaoCredito;
    }

    set cartaoCredito(valor){
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero,saldo){
        super(agencia,numero,saldo,tipo)
        this.tipo = 'poupança'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero,saldo){
        super(agencia,numero,saldo,tipo)
        this.tipo = 'universitaria'
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada!"
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}