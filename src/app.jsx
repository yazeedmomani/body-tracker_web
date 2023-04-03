import { useState } from "react";
import Nav from "./layouts/nav";

export default function App() {
  const [isWeight, setIsWeight] = useState(true);

  return (
    <>
      <Nav setIsWeight={setIsWeight} />
      {isWeight ? <h1>Weight</h1> : <h1>BP</h1>}
    </>
  );
}
