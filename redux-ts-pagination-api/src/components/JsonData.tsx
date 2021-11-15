import { useLocation } from "react-router-dom";

const JsonData = () => {
  const location = useLocation();
  console.log("hello from jasonData");
  const jsondata = location.state;
  console.log(jsondata);
  const data = JSON.stringify(jsondata);
  console.log(data);
  return <div>{data}</div>;
};

export default JsonData;
