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
    const [searchValue, setSearchValue] = useState<string>("")

    const handleSelectedPokemon = (poke) =>{
        console.log("Se ha seleccionado un Pokemon", poke.name);
    }

    return (
        <Container maxWidth="xl">
            <SearchBar/>
            <Grid
                container
                spacing={2}
            >
                <PokemonInfiniteScroll selectPokemon={handleSelectedPokemon} limit={10} />
                {/* <PokemonDisplay name={selectedPokemon}/> */}
            </Grid>
        </Container>
        );
}



export default Index;