export class Equipamento {
    // tslint:disable: variable-name
    private _numSerie: number;
    private _marca: string;
    private _modelo: string;


    constructor(numSerie: number, marca: string, modelo: string) {
        this._numSerie = numSerie;
        this._marca = marca;
        this._modelo = modelo;
    }


    public get numSerie(): number {
        return this._numSerie;
    }

    public get marca(): string {
        return this._marca;
    }

    public get modelo(): string {
        return this._modelo;
    }


}