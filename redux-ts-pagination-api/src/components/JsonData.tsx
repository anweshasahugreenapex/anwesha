import { useLocation } from "react-router-dom";

const JsonData = () => {
  const location = useLocation();

  const jsondata = location.state;

  const data = JSON.stringify(jsondata);
  console.log(data);
  return <div>{data}</div>;
};

export default JsonData;
