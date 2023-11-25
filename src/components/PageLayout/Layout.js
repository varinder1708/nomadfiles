import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../Header/Header'

const Layout = ({ children }) => {

    return (<Container>
        <Box><Header/></Box>
        <Box>
            {children}
        </Box>
        <Box>Footer</Box>
    </Container>)

}
export default Layout;