import { Grid, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getPokemon } from '../../api';
import PokemonInfiniteScroll from '../../components/PokemonInfiniteScroll';
import SearchBar from '../../components/SearchBar';
import { LinkItem } from '../../constants/interfaces';

const Index: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Array<LinkItem>>([]);
    const [query, setQuery] = useState<string>("")
    let offset = 0

    const handleSelectedPokemon = (poke) => {
        console.log("Se ha seleccionado un Pokemon", poke.name);
    }

    const loadMorePokemon = () => {
        getPokemon(10, offset).then(({ data }) => {
            const newPokemon = [];
            data.results.forEach((poke: LinkItem) => newPokemon.push(poke));
            setPokemonList(oldPokemon => [...oldPokemon, ...newPokemon]);
        });
        offset += 10;
    }

    const search = () => {
        var newList = pokemonList.filter((e => e.name.toLocaleLowerCase().includes(query)))
        setPokemonList(newList);
    }

    const input = (newValue: string) => {
        setQuery(newValue);
        // search();
    }

    useEffect(() => {
        loadMorePokemon()
    })
    

    return (
        <Container maxWidth="xl">
            <Typography variant="h2" color="initial">Pokedex</Typography>
            <SearchBar
                handleSearch={search}
                handleInput={input}
                query={query} 
            />
            <Grid
                container
                spacing={2}
                margin={1}
            >
                <PokemonInfiniteScroll
                    selectPokemon={handleSelectedPokemon}
                    pokemonList={pokemonList}
                    loadPokemon={loadMorePokemon}
                />
                {/* <PokemonDisplay name={selectedPokemon}/> */}
            </Grid>
        </Container>
    );
}



export default Index;