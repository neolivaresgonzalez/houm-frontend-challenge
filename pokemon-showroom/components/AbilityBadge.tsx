import { Typography } from '@mui/material'
import React from 'react'

interface AbilityBadgeProps {
    abilityName: string
}

const AbilityBadge = (props: AbilityBadgeProps) => {
    return (
        <div className="badge">
            <Typography component="p" color="initial" textAlign="center">
                {props.abilityName}
            </Typography>
        </div>
    )
}

export default AbilityBadge