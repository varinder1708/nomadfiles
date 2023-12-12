import BasicGrid3Cols from '../components/BasicGrid/BasicGrid3Cols';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';



function Listingpage() {
  const params = useParams();
  const imagePath=`/${params.subcategory}/images/`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch(`/${params.subcategory}/data.json`);
      let result = await response.json();
    
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
  fetchData();

  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (<>
    <BasicGrid3Cols {...data} path={imagePath} />
  </>)

}

export default Listingpage;