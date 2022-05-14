// From https://github.com/mui/material-ui/tree/master/examples/nextjs
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import theme from '../styles/theme';
import '../styles/globals.css'
import createEmotionCache from '../lib/createEmotionCache';
import { AppProps } from 'next/app';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps{
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <title>Pokemon showroom</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
  )
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
