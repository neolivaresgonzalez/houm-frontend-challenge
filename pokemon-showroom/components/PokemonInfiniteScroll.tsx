import { Grid, Typography } from '@mui/material';
import React, { MouseEvent, useEffect, useState } from 'react'
import { getPokemon } from '../api';
import { LinkItem, Pokemon } from '../constants/interfaces';
import PokemonCard from './PokemonCard';

interface InfiniteScrollProps {
    limit: number
    selectPokemon: (poke: Pokemon) => void
}

const PokemonInfiniteScroll = (props: InfiniteScrollProps) => {
    let offset = 0;
    const [pokemon, setPokemon] = useState([]);
    const loadMorePokemon = () => {
        getPokemon(props.limit, offset).then(({ data }) => {
            const newPokemon = [];
            data.results.forEach((poke: LinkItem) => newPokemon.push(poke));
            setPokemon(oldPokemon => [...oldPokemon, ...newPokemon]);
            offset = offset + props.limit;
        });
    }

    function handleScroll(this: HTMLElement) {
        if (this.scrollTop + window.innerHeight >= this.scrollHeight - 1) {
            console.log("Hit bottom");
            loadMorePokemon();
        }

    }

    function handleSelection(e: MouseEvent, poke: Pokemon) {
        props.selectPokemon(poke);

    }

    useEffect(() => {
        loadMorePokemon()
        window.document.getElementById('infinite-scroll-root').addEventListener('scroll', handleScroll)
    }, []);
    return (
        <Grid item xs={12} md={7}>
            <Typography variant="h2" color="initial">Pokedex</Typography>
            <div id="infinite-scroll-root">
                <Grid container spacing={2} >
                    {pokemon.map((p, i) => {
                        return (
                            <Grid item xs={12} sm={6} lg={4} key={i} onClick={(e) => handleSelection(e, p)}>
                                <PokemonCard pokemon={p} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </Grid>
    )
}

export default PokemonInfiniteScroll