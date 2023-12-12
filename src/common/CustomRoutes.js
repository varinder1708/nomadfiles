import BasicGrid3Cols from '../components/BasicGrid/BasicGrid3Cols';
import { Routes, Route } from 'react-router-dom'
import Listingpage from '../pages/listingpage';
function CustomRoutes() {
    return (

        <Routes>
            <Route exact path="/" element={<>Landingpage</>} />
            <Route exact path="/home" element={<>Home</>} />
            <Route exact path="/about" element={<>About</>} />
            <Route exact path="/:category/:subcategory" element={<Listingpage/>} />
        </Routes>
    );
}
export default CustomRoutes;
