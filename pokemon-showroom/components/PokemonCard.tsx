import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Pokemon } from '../constants/interfaces'
import { toCapitalName } from '../utils'

interface PokemonCardProps{
    pokemon: Pokemon
}

const PokemonCard = (props: PokemonCardProps) => {
    return (
            <Card>
                <CardMedia
                    component="img"
                    alt="pokemon"
                    height="auto"
                    image={props.pokemon.sprites.other.home.front_default}
                >
                </CardMedia>
                <CardContent>
                    <div>
                        <Typography gutterBottom component="p">
                            Pokemon
                        </Typography>
                    </div>
                    <Typography variant="h4" color="initial">
                        {toCapitalName(props.pokemon.name)}
                    </Typography>
                    <Typography variant="body2" color="initial">
                        Habilidades
                    </Typography>
                    <Grid container spacing={1}>
                        {props.pokemon.abilities.map((ability, i) => {
                            return (
                                <Grid item key={i}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="body2" color="initial">
                                                {ability.ability.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </CardContent>
            </Card>
    )
}

export default PokemonCard