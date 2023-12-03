
import Layout from './components/PageLayout/Layout';
import BasicStack from './components/BasicStack/BasicStack';
import BasicGrid4Cols from './components/BasicGrid/BasicGrid4Cols';
import BasicGrid3Cols from './components/BasicGrid/BasicGrid3Cols';

import CustomRoutes from './common/CustomRoutes';

function App() {
  return (
    
    <>
      <Layout>
      <CustomRoutes/>  
        {/* <BasicGrid3Cols /> */}
        {/* <BasicGrid4Cols /> */}
        {/* <BasicStack></BasicStack> */}

      </Layout>

    </>
  );
}

export default App;
