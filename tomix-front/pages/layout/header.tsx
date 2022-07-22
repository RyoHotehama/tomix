import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Styles from '../../styles/layout/header.module.scss';

const Header = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <AppBar color="transparent" position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Typography className={Styles.header}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              m: 'auto',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            tomix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default Header;