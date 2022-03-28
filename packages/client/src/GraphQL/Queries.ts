import { gql } from '@apollo/client';

export const LOAD_POKEMON = gql`
    query getPokemons($after: ID, $q: String) {
        pokemons (after: $after, q: $q) {
            edges {
                node {
                    id,
                    name,
                    types,
                    classification
                }
            },
            pageInfo {
                endCursor,
                hasNextPage
            }
        }
    }
`;

export const FILTER_POKEMON_BY_TYPE = gql`
    query filterPokemonByType($type: String, $after: ID) {
        pokemonsByType(type: $type, after: $after) {
            edges {
                node {
                    id,
                    name,
                    types,
                    classification
                }
            },
            pageInfo {
                endCursor,
                hasNextPage
            }
        }
    }

`

