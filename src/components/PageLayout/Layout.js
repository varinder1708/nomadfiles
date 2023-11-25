import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {

    return (<>
        <Container>
            <Box><Header /></Box>
            <Box>
                {children}
            </Box>
            <Box></Box>
        </Container>
        <Footer />
    </>
    )

}
export default Layout;