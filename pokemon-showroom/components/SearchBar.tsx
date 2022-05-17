import { Grid, TextField, InputAdornment, IconButton, FilledInput, styled, TextFieldProps, OutlinedInputProps } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'


const SearchBar = () => {
    const [pokemonToSearch, setPokemonToSearch] = useState("");

    const handleChange = () => {
        console.log("Cambio");

    }

    const handleSearch = () => {
        console.log("Buscar");

    }

    const CssTextField = styled((props: TextFieldProps) => (
        <TextField
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton disableRipple={true} size="large" onClick={handleSearch}>
                        <SearchIcon></SearchIcon>
                        </IconButton>
                    </InputAdornment>
                )
            } as Partial<OutlinedInputProps>}
            {...props}
        />))({
    
            '& label.Mui-focused': {
                color: 'green',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
                borderRadius: '2rem'
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'transparent',
                    borderRadius: '2rem'
                },
                '&:hover fieldset': {
                    borderColor: 'transparent',
                    borderRadius: '2rem'
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'orange',
                }
            },
        });
    

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                <div className='searchbar'>
                    <CssTextField
                        id="custom-css-outlined-input"
                        label=""
                        placeholder="Busca por nombre o id"
                        onChange={handleChange}
                    />
                    {/* <FilledInput
                        id='pokedex-search-filled-input'
                        disableUnderline
                        className="search-input"
                        fullWidth
                        placeholder="Busca por nombre o id"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton disableRipple={true} size="large" onClick={handleSearch}>
                                <SearchIcon></SearchIcon>
                                </IconButton>
                            </InputAdornment>
                        }
                        
                        />
                    <TextField
                        id="pokedex-search-text-field"
                        label=""
                        type="text"
                        variant="filled"
                        color="primary"
                        placeholder="Busca por id o nombre"
                        fullWidth 
                        defaultValue=""
                        onChange={handlSearchInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"></InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton disableRipple={true} size="large" onClick={handleSearch}>
                                    <SearchIcon></SearchIcon>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}

                    /> */}
                </div>
            </Grid>
            <Grid item md={5}>
                Filtros
            </Grid>
        </Grid>
    )
}

export default SearchBar