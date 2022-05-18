import { Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getMoveByName } from '../api'
import { MoveDetail, MovesItem } from '../constants/interfaces'
import TypeBadge from './TypeBadge'
interface MoveDetailsProps {
    moveName: string
}
const MoveDetails = (props: MoveDetailsProps) => {
    const [moveData, setMoveData] = useState<MoveDetail>(undefined)

    const loadMoveData = () => {
        console.log(props.moveName);
        getMoveByName(props.moveName)
            .then(({ data }) => {
                setMoveData(data)
                console.log(data);

            })
    }
    useEffect(() => {
        if(props.moveName !== ""){
            loadMoveData()
        }
    })
    return (
        <Grid item xs={12} md={12}>
            <Typography variant="body1" color="initial">
                Move stats
            </Typography>
            <div className='card-key-value-field'>
                <Typography gutterBottom component="p">
                    Power
                </Typography>
                <Typography gutterBottom component="p">
                    {moveData ? moveData.power : ""}
                </Typography>
            </div>
            <div className='card-key-value-field'>
                <Typography gutterBottom component="p">
                    Accuracy
                </Typography>
                <Typography gutterBottom component="p">
                    {moveData ? moveData.accuracy : "--"}{"%"}
                </Typography>
            </div>
            <div className='card-key-value-field'>
                <Typography gutterBottom component="p">
                    PP
                </Typography>
                <Typography gutterBottom component="p">
                    {moveData ? moveData.pp : "--"}{"PP"}
                </Typography>
            </div>
            <div className='card-key-value-field'>
                <Typography gutterBottom component="p">
                    Priority
                </Typography>
                <Typography gutterBottom component="p">
                    {moveData ? moveData.priority : "--"}{""}
                </Typography>
            </div>
        </Grid>
    )
}

export default MoveDetails