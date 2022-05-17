import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { FC, MouseEvent, useEffect, useState } from 'react'
import { getPokemon, getPokemonByName } from '../api';
import { LinkItem, Pokemon } from '../constants/interfaces';
import PokemonCard from './PokemonCard';

interface InfiniteScrollProps {
    selectPokemon: (poke: Pokemon) => void
}

const PokemonInfiniteScroll: FC<InfiniteScrollProps> = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const loadMorePokemon = () => {
        getPokemon(10).then(({ data }) => {
            const newPokemon = [];
            data.results.forEach((poke: LinkItem) => {
                getPokemonByName(poke.name).then(({ data }) => {
                    newPokemon.push(data);
                    newPokemon.sort((a, b) => {
                        if (a.id < b.id) {
                            return -1;
                        }
                        if (a.id > b.id) {
                            return 1;
                        }
                        // a debe ser igual b
                        return 0;
                    })
                    setPokemon(newPokemon);
                });

            });
        });
    }

    function handleScroll(this: HTMLElement) {
        console.log(this.scrollTop);
        console.log(window.innerHeight);
        console.log(this.scrollHeight);
        console.log("I'm scrolling");

    }

    function handleSelection(e: MouseEvent, poke: Pokemon) {
        props.selectPokemon(poke);

    }

    const toCapital = (word: string) => {
        var first = word.charAt(0);
        return first.toUpperCase() + word.slice(1);
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
                                <PokemonCard pokemon={p}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </Grid>
    )
}

export default PokemonInfiniteScroll