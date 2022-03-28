import { useQuery } from '@apollo/client';
import { Button, Card, Input, Select, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { FILTER_POKEMON_BY_TYPE, LOAD_POKEMON } from '../../GraphQL/Queries';
import { PageInfo } from '../../types/pageInfo';
import { Pokemon } from '../../types/pokemon';
import { pokemonTypesOptions, typesToColor } from '../../types/pokemonType';
import { ErrorPage } from '../error-page/ErrorPage';
import { Loading } from '../loading/Loading';
import './pokemonDashboard.scss';


const PokemonDashboard = () => {
    const { Search } = Input;
    const [pokemons, setPokemons] = useState([]);
    const [pageInfo, setPageInfo] = useState(new PageInfo());
    const [isLoading, setIsLoading] = useState(false);
    const [typeFilter, setTypeFilter] = useState('');

    const { error, loading, data, fetchMore } = useQuery(LOAD_POKEMON, { variables: { after: null, q: '' } });
    const { fetchMore: getMore } = useQuery(FILTER_POKEMON_BY_TYPE, { variables: { after: null, type: '' } })


    useEffect(() => {
        if (data) {
            setPokemons(data.pokemons.edges.map((e: any) => e.node));
            setPageInfo(data.pokemons.pageInfo);
            setIsLoading(loading);
        }

    }, [data])

    const onSearch = (value: string) => {
        fetchMore({
            variables: { q: value },
            updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                fetchMoreResult.pokemons.edges = [
                    ...fetchMoreResult.pokemons.edges
                ];
                setPokemons(fetchMoreResult.pokemons.edges.map((e: any) => e.node));
                setPageInfo(fetchMoreResult.pokemons.pageInfo);
                return fetchMoreResult;
            }
        });
    };

    const getMorePokemon = () => {
        const { endCursor } = pageInfo;

        if (!typeFilter) {
            fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                    fetchMoreResult.pokemons.edges = [
                        ...prevResult.pokemons.edges,
                        ...fetchMoreResult.pokemons.edges
                    ];
                    setPokemons(fetchMoreResult.pokemons.edges.map((e: any) => e.node));
                    setPageInfo(fetchMoreResult.pokemons.pageInfo);
                    return fetchMoreResult;
                }
            });
        } else {
            getMore({
                variables: { after: endCursor, type: typeFilter },
                updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                    fetchMoreResult.pokemonsByType.edges = [
                        ...prevResult.pokemonsByType.edges,
                        ...fetchMoreResult.pokemonsByType.edges
                    ];

                    setPokemons(fetchMoreResult.pokemonsByType.edges.map((e: any) => e.node));
                    setPageInfo(fetchMoreResult.pokemonsByType.pageInfo);
                    return fetchMoreResult;
                }
            });
        }
    }

    const onChange = (value: string) => {
        setTypeFilter(value);

        if (!value) {
            fetchMore({
                variables: { after: null },
                updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                    fetchMoreResult.pokemons.edges = [
                        ...fetchMoreResult.pokemons.edges
                    ];
                    setPokemons(fetchMoreResult.pokemons.edges.map((e: any) => e.node));
                    setPageInfo(fetchMoreResult.pokemons.pageInfo);
                    return fetchMoreResult;
                }
            });
        } else {
            getMore({
                variables: { type: value },
                updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
                    fetchMoreResult.pokemonsByType.edges = [
                        ...fetchMoreResult.pokemonsByType.edges
                    ];

                    setPokemons(fetchMoreResult.pokemonsByType.edges.map((e: any) => e.node));
                    setPageInfo(fetchMoreResult.pokemonsByType.pageInfo);
                    return fetchMoreResult;
                }
            });
        }
    }

    return (
        <>
            {error && <ErrorPage />}
            {(!error && (isLoading || !pokemons.length)) && <Loading />}
            {(!error && pokemons.length) && <div className="dashbaord">
                <div className="filters">
                    <Search className="input-search" placeholder="Search" allowClear onSearch={onSearch} style={{ width: 200 }} />
                    <Select className="type-filter" allowClear showArrow options={pokemonTypesOptions} placeholder="Pokemon type" onChange={onChange} />
                </div>

                <div className="card-container">
                    {pokemons.map((p: Pokemon) =>
                        <Card className="card" key={p.id} title={`#${p.id} ${p.name}`} bordered style={{ width: 250 }}>
                            <p>{p.classification}</p>
                            <p>{p.types.map((type: string) => <Tag color={typesToColor[type]} key={type}>{type.toUpperCase()}</Tag>)}</p>
                        </Card>)}
                </div>

                <div className="footer">
                    <Button type="primary" disabled={!pageInfo.hasNextPage} danger shape="round" size="large" onClick={getMorePokemon}>More Pokemon</Button>
                </div>
            </div>}
        </>
    );
};

export default PokemonDashboard;