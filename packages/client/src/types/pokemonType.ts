import { keyValueObj, ValueOption } from "./commonType";

export enum PokemonType {
    GRASS = 'Grass',
    POISON = 'Poison',
    FIRE = 'Fire',
    FLYING = 'Flying',
    WATER = 'Water',
    BUG = 'Bug',
    NORMAL = 'Normal',
    ELECTRIC = 'Electric',
    GROUND = 'Ground',
    FAIRY = 'Fairy',
    FIGHTING = 'Fighting',
    PSYCHIC = 'Psychic',
    ROCK = 'Rock',
    STEEL = 'Steel',
    ICE = 'Ice',
    GHOST = 'Ghost',
    DRAGON = 'Dragon'
}

export const typesToColor: keyValueObj = {
    [PokemonType.NORMAL]: '#A8A77A',
    [PokemonType.FIRE]: '#EE8130',
    [PokemonType.WATER]: '#6390F0',
    [PokemonType.ELECTRIC]: '#F7D02C',
    [PokemonType.GRASS]: '#7AC74C',
    [PokemonType.ICE]: '#96D9D6',
    [PokemonType.FIGHTING]: '#C22E28',
    [PokemonType.POISON]: '#A33EA1',
    [PokemonType.GROUND]: '#E2BF65',
    [PokemonType.FLYING]: '#A98FF3',
    [PokemonType.PSYCHIC]: '#F95587',
    [PokemonType.BUG]: '#A6B91A',
    [PokemonType.ROCK]: '#B6A136',
    [PokemonType.GHOST]: '#735797',
    [PokemonType.DRAGON]: '#6F35FC',
    [PokemonType.STEEL]: '#B7B7CE',
    [PokemonType.FAIRY]: '#D685AD'
}

export const pokemonTypesOptions: ValueOption<PokemonType>[] = [
    { value: PokemonType.NORMAL, label: PokemonType.NORMAL },
    { value: PokemonType.FIRE, label: PokemonType.FIRE },
    { value: PokemonType.WATER, label: PokemonType.WATER },
    { value: PokemonType.ELECTRIC, label: PokemonType.ELECTRIC },
    { value: PokemonType.GRASS, label: PokemonType.GRASS },
    { value: PokemonType.ICE, label: PokemonType.ICE },
    { value: PokemonType.FIGHTING, label: PokemonType.FIGHTING },
    { value: PokemonType.POISON, label: PokemonType.POISON },
    { value: PokemonType.GROUND, label: PokemonType.GROUND },
    { value: PokemonType.FLYING, label: PokemonType.FLYING },
    { value: PokemonType.PSYCHIC, label: PokemonType.PSYCHIC },
    { value: PokemonType.BUG, label: PokemonType.BUG },
    { value: PokemonType.ROCK, label: PokemonType.ROCK },
    { value: PokemonType.GHOST, label: PokemonType.GHOST },
    { value: PokemonType.DRAGON, label: PokemonType.DRAGON },
    { value: PokemonType.STEEL, label: PokemonType.STEEL },
    { value: PokemonType.FAIRY, label: PokemonType.FAIRY }
];
