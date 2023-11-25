import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FCard from '../FCard/FCard';

const BasicGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <FCard theme={'Grid'}>Item 1</FCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FCard theme={'Grid'}>Item 1</FCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FCard theme={'Grid'}> Item 1</FCard>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <FCard theme={'Grid'}>Item 1</FCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FCard theme={'Grid'}>Item 1</FCard>
                </Grid>


            </Grid>
        </Box>
    );
}
export default BasicGrid;