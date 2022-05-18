import { Grid, TextField, InputAdornment, IconButton, FilledInput, styled, TextFieldProps, OutlinedInputProps, InputBaseComponentProps, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { ChangeEvent, useState } from 'react'
import { LinkItem } from '../constants/interfaces';

interface SearchBarProps {
    handleInput: (newValue: string) => void
    handleSearch: () => void,
    query: string
}

const SearchBar = (props: SearchBarProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.handleInput(event.target.value)
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    const handleSearch = () => {
        console.log("Buscar");
        props.handleSearch()
    }



    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                <div className='searchbar'>
                    <OutlinedInput
                        id="search-input"
                        label=""
                        placeholder="Busca por nombre o id"
                        defaultValue=""
                        fullWidth
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        endAdornment={
                            (
                                <InputAdornment position="end">
                                    <IconButton disableRipple={true} size="large" onClick={handleSearch}>
                                        <SearchIcon></SearchIcon>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }

                        sx={
                            {
                                '& label.MuiOutlinedInput-focused': {
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
                                    '&.MuiOutlinedInput-focused fieldset': {
                                        borderColor: 'orange',
                                    }
                                },
                            }
                        }
                    />
                </div>
            </Grid>
            <Grid item md={5}>
                Filtros
            </Grid>
        </Grid>
    )
}

export default SearchBar