import { useState, useEffect } from "react";
import Nav from "./layouts/nav";
import Main from "./layouts/main/main";

export default function App() {
  const [isWeight, setIsWeight] = useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const endpoint = isWeight
        ? "https://dry-shelf-19816.herokuapp.com/api/v1/weight"
        : "https://dry-shelf-19816.herokuapp.com/api/v1/bp";
      const response = await fetch(endpoint);
      const fetchedData = await response.json();
      setData(fetchedData.data);
      setLoading(false);
    }
    getData();
  }, [isWeight, dataChanged]);

  console.log(data);

  return (
    <>
      <Nav setIsWeight={setIsWeight} />
      <Main
        setDataChanged={setDataChanged}
        isWeight={isWeight}
        isLoading={loading}
        data={data}
      />
    </>
  );
}
