import { FormControl, InputLabel, MenuItem, Popover, Select, Typography } from '@mui/material'
import React from 'react'
import { MovesItem } from '../constants/interfaces'

interface MoveBadgeProps {
    move: MovesItem,
    value: string
}

const MoveBadge = (props: MoveBadgeProps) => {
    return (
        <MenuItem value={props.move.move.name}>
            <div className="badge">
                <Typography component="p" color="initial" textAlign="center">
                    {props.move.move.name}
                </Typography>
            </div>
        </MenuItem>
    )
}

export default MoveBadge