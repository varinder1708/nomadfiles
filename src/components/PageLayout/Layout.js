import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CoverImage from '../CoverImage/CoverImage';

const Layout = ({ children }) => {

    const theme = useTheme();
    return (<>
        <Box><Header /></Box>
        <CoverImage />
        <Container disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}>
            <Box>
                {children}
            </Box>
        </Container>
        <Footer />
    </>
    )

}
export default Layout;