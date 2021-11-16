import { useLocation,useParams } from "react-router-dom";
import { useEffect } from "react";
const JsonData = () => {
    const title=useParams()
    console.log(title) 
  const location = useLocation();
//   useEffect(() => {
//      console.log(`location:${location.state}`)
//   }, [location])

  console.log("hello from jasonData");

  const jsondata = location.state;
  console.log(jsondata);
  const data = JSON.stringify(jsondata);
  console.log(data);
  return <div>{data}</div>;
};

export default JsonData;
