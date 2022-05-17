import { Grid, Card, Typography, CardMedia } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Typography variant="h1" >
          Read{' '}
          <Link href="/pokemon/list">
            <a>this page!</a>
          </Link>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card>
              <Link href="/pokedex">
                <a>
                  <Typography variant="body1" color="initial">
                  Pokedex
                  </Typography>
                </a>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
