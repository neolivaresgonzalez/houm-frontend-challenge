import { Card, Container, Grid, Paper, Typography } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { getPokemonById, getPokemonByName } from '../api';
import { Pokemon } from '../constants/interfaces';
interface PokemonDisplayProps {
    id?: Number,
    name?: string
};


const PokemonDisplay : FC<PokemonDisplayProps> = (props) => {
    const [pokemon, setPokemon] = useState<Pokemon>(undefined)

    const loadPokemonData =()=>{
        if(props.id !== undefined){
            getPokemonById(props.id).then((response)=>{
                setPokemon(response.data);
            })
            return;
        }
        if(props.name !== undefined){
            getPokemonByName(props.name).then((response)=>{
                setPokemon(response.data);
            })
            return;
        }

    };

    useEffect(() => {
      loadPokemonData();
    }, [])
    
    return (
        <Grid item xs={12} md={7}>
            <Card>
                <Typography variant="body1" color="initial">
                    {pokemon? pokemon.name: ""}
                </Typography>
            </Card>
        </Grid>
    )
}

export default PokemonDisplay