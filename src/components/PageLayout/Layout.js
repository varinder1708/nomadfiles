import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {

    return (<Container>
        <Box sx={{ bgcolor: '#fff' }}>Header</Box>
        <Box sx={{ bgcolor: '#fff' }}>
            {children}
        </Box>
        <Box sx={{ bgcolor: '#fff' }}>Footer</Box>
    </Container>)

}
export default Layout;