import { Grid } from '@mui/material';
import React, { MouseEvent, useEffect, useState } from 'react'
import { LinkItem, Pokemon } from '../constants/interfaces';
import PokemonCard from './PokemonCard';

interface InfiniteScrollProps {
    pokemonList: Array<LinkItem>
    selectPokemon: (poke: LinkItem) => void
    loadPokemon: () => void
}

const PokemonInfiniteScroll = (props: InfiniteScrollProps) => {
    function handleScroll(this: HTMLElement) {
        if (
            window.innerHeight + this.scrollTop + 1 >=
            this.scrollHeight
        ) {
            props.loadPokemon()
        }

    }

    function handleSelection(e: MouseEvent, poke: LinkItem) {
        props.selectPokemon(poke);

    }

    useEffect(() => {
        window.document.getElementById('infinite-scroll-root').addEventListener('scroll', handleScroll)
    });
    return (
        <Grid item xs={12} md={12}>
            <div id="infinite-scroll-root">
                <Grid container spacing={2} >
                    {props.pokemonList.map((p, i) => {
                        return (
                            <Grid item xs={12} sm={6} lg={3} key={i} 
                                // onClick={(e) => handleSelection(e, p)}
                            >
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