import { Button, Typography, Grid, Container } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PokemonDisplay from '../../components/PokemonDisplay';
import PokemonInfiniteScroll from '../../components/PokemonInfiniteScroll';
import SearchBar from '../../components/SearchBar';
import StyledEmotionButton from '../../components/StyledEmotionButton';
import { Pokemon } from '../../constants/interfaces';

const Index: React.FC =() => {
    const [selectedPokemon, setSelectedPokemon] = useState<string>("bulbasaur");

    const handleSelectedPokemon = (poke) =>{
        console.log("Se ha seleccionado un Pokemon", poke.name);
        // setSelectedPokemon(name);
    }
    return (
        <Container maxWidth="xl">
            <SearchBar/>
            <Grid
                container
                spacing={2}
            >
                <PokemonInfiniteScroll selectPokemon={handleSelectedPokemon} />
                {/* <PokemonDisplay name={selectedPokemon}/> */}
            </Grid>
        </Container>
        );
}



export default Index;