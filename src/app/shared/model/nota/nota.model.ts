export class Nota {
    // tslint:disable: variable-name
    private _id: number;
    private _observacoes: string;
    private _dataCriacao: Date;

    constructor(observacoes: string, dataCriacao: Date) {
        this._observacoes = observacoes;
        this._dataCriacao = dataCriacao;
    }

    get id(): number {
        return this._id;
    }

    get observacoes(): string {
        return this._observacoes;
    }

    get dataCriacao(): Date {
        return this._dataCriacao;
    }
}