import { Grid, Card, Typography, CardMedia, CardContent, Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Grid container marginBottom={"1rem"} justifyContent="space-between"
        >
          <Grid item xs={12} md={6} lg={2}>
            <Typography variant="h4" color="initial">
              Desafío Frontend
            </Typography>
            <Typography variant="body1" color="initial">
              Esta es una aplicación de demostración para el desafío Frontend de Houm
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <Logo size={200} withPokemon></Logo>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Link href="/pokedex">
              <a>
                <Card>
                  <CardMedia>
                    <Image
                      src="/images/pokedex-media.jpg"
                      alt="pokedex"
                      style={{
                        height: "auto",
                        width: "100%"
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h5" color="initial">
                      Pokedex
                    </Typography>
                    <Divider variant='fullWidth' />
                    <Typography variant="body1" color="initial">
                      Lista deslizable infinita de pokemon con sus estadísticas básicas
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Link href="/about">
              <a>
                <Card>
                  <CardMedia>
                    <Image
                      src="/images/me-5.jpeg"
                      alt="pokedex"
                      style={{
                        height: "auto",
                        width: "100%"
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h5" color="initial">
                      Acerca de mí
                    </Typography>
                    <Divider variant='fullWidth' />
                    <Typography variant="body1" color="initial">
                      Resumen de mi experiencia
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}
