interface I_Conta {
    nomeTitular: string,
    saldo?: number
}

class Conta {
    private nomeTitular: string
    private saldo: number
    private active: boolean = true

    constructor({ nomeTitular, saldo = 0 }: I_Conta) {
        this.nomeTitular = nomeTitular
        this.saldo = saldo
        console.log(`${this.nomeTitular}, bem-vindo(a) ao DIO Bank`)
    }

    meuSaldo = (): void | number => {
        if (this.active) {
            return this.saldo
        } else {
            this.erro('Sua conta está desativada.')
        }
    }

    dioDeposito = (valor: number): void => {
        if (this.active) {
            this.saldo += valor
            console.log(`Deposito de R$${valor} bem sucedido. Seu saldo atual é de R$${this.saldo}`)
        } else {
            this.erro('Sua conta está desativada.')
        }
    }

    dioSaque = (valor: number): void => {
        if (this.active) {
            if (valor <= this.saldo) {
                this.saldo -= valor
                console.log(`Saque de R$${valor} bem sucedido. Seu saldo atual é de R$${this.saldo}`)
            } else {
                console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo}`)
            }
        } else {
            this.erro('Sua conta está desativada.')
        }
    }

    cancelarConta = (): void => {
        this.saldo === 0 ? this.active = false : console.log(`Impossível desativar conta de ${this.nomeTitular}, você está com pendências: R$${this.saldo}`)
    }

    erro = (message: string): void => {
        console.log(`Erro: ${message}`)
    }
}

// Vamos criar o DIO Bank!

// Criar uma conta

const contaA: Conta = new Conta({ nomeTitular: "Sherman" })

// Depositar na conta

contaA.dioDeposito(2000)

// Sacar da conta

contaA.dioSaque(2000)

// Encerrar a conta

contaA.cancelarConta()