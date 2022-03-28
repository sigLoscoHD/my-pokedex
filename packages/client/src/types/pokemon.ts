export class Pokemon {

    id: string = '';
    name: string = '';
    types: string[] = [];
    classification: string = '';

    constructor(pokemon?: any) {
        if (pokemon) {
            this.id = pokemon.id || '';
            this.name = pokemon.name || '';
            this.types = pokemon.types || [];
            this.classification = pokemon.classification || '';
        }
    }

}