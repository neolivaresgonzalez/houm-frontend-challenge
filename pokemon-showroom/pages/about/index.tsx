import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../components/Logo'

const index = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Logo size={250} />
                        </Grid>
                        <Grid item> 
                            <Typography variant="h2" color="initial">
                                Nicolás Eduardo Olivares González
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h3" color="initial">
                        Prefil profesional
                    </Typography>
                    <Typography variant="body1" color="initial">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, est possimus. Aliquid, doloremque recusandae blanditiis quidem autem delectus sequi corrupti. Aliquid adipisci in corrupti doloribus, eaque beatae aliquam nulla iusto.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" color="initial">
                        Experiencia profesional
                    </Typography>
                    <Typography variant="body1" color="initial">
                        Descripción de experiencia laboral
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default index