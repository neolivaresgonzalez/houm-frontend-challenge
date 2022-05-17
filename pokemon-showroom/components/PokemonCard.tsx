import { Container, Card, CardContent, CardMedia, Grid, ImageList, ImageListItem, Paper, Typography, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getPokemonByName } from '../api'
import { Factory, LinkItem, Pokemon } from '../constants/interfaces'
import { decimalPoint, toCapitalName } from '../utils'
import AbilityBadge from './AbilityBadge'
import TypeBadge from './TypeBadge'

interface PokemonCardProps {
    pokemon: LinkItem,
    name?: string
}

const PokemonCard = (props: PokemonCardProps) => {
    const [pokemonData, setPokemonData] = useState<Pokemon>();

    const loadPokemonData = () => {
        getPokemonByName(props.pokemon.name).then(({ data }) => {
            setPokemonData(data);
        });
    }

    useEffect(() => {
        loadPokemonData();
    }, []);
    return (
        <Card>
            <CardMedia
                component="img"
                alt="pokemon"
                height="auto"
                image={pokemonData ? pokemonData.sprites.other.home.front_default : ""}
            >
            </CardMedia>
            <CardContent>
                <Grid container spacing={1} justifyContent="space-around">
                    <Grid item xs={6}>
                        <Typography gutterBottom component="p">
                            Pokemon
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                            {pokemonData ? pokemonData.types.map((t, i) => {
                                return (
                                    <Grid item key={i}>
                                        <TypeBadge typeName={t.type.name} />
                                    </Grid>
                                )
                            }) : ""}
                        </Grid>
                    </Grid>
                </Grid>
                <Typography variant="h4">
                    {pokemonData ? toCapitalName(pokemonData.name) : ""}
                </Typography>
                <div className='card-key-value-field'>
                    <Typography gutterBottom component="p">
                        National ID
                    </Typography>
                    <Typography gutterBottom component="p">
                        {pokemonData ? pokemonData.id : ""}
                    </Typography>
                </div>
                <div className='card-key-value-field'>
                    <Typography gutterBottom component="p">
                        Weight
                    </Typography>
                    <Typography gutterBottom component="p">
                        {pokemonData ? `${pokemonData.weight} lb. (${decimalPoint(pokemonData.weight, 0.45)} Kg.)` : ""}
                    </Typography>
                </div>
                <div className='card-key-value-field'>
                    <Typography gutterBottom component="p">
                        Height
                    </Typography>
                    <Typography gutterBottom component="p">
                        {pokemonData ? `${pokemonData.height} in. (${decimalPoint(pokemonData.height, 0.0254)} m.)` : ""}
                    </Typography>
                </div>
                <Divider variant="fullWidth" sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography variant="body1" sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                            Abilities
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container spacing={1} >
                            {pokemonData ? pokemonData.abilities.map((ability, i) => {
                                return (
                                    <Grid item xs={12} key={i}>
                                        <AbilityBadge abilityName={ability.ability.name} />
                                    </Grid>
                                )
                            }) : ""}
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PokemonCard