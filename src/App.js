import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState(null);

  const dataFRomback = async () => {
    console.log(process.env.REACT_APP_API_URL);
    let data = await fetch(`${process.env.REACT_APP_API_URL}/test`);
    let res = await data.json();
    setdata(res);
  };

  useEffect(() => {
    setInterval(() => {
      dataFRomback();
    }, 1000);
  }, []);

  return (
    <>
      <h1>Hi there 👋 , this is react Library</h1>
      <h4>{data}</h4>
    </>
  );
};

export default App;
