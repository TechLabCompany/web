import "nprogress/nprogress.css";
import "../styles/reset.css"
import Head from 'next/head'
import Router from "next/router"
import type { AppProps } from 'next/app'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar';
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../lib/theme'
import createEmotionCache from '../lib/createEmotionCache'
import NProgress from "nprogress"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': { minHeight: 128 },
}));
NProgress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const AniAndCo = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={{ zIndex: 10 }}>
          <StyledToolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end', fontFamily: "" }} align="center">
              Ani & Co.
            </Typography>
          </StyledToolbar>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default AniAndCo