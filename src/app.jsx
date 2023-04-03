import { useState } from "react";
import Nav from "./layouts/nav";
import Main from "./layouts/main/main";

const DUMMY_WEIGHT = [
  {
    id: 1,
    date: "2023-03-25T00:00:00.000+00:00",
    weight: 104.3,
  },
  {
    id: 2,
    date: "2023-03-25T00:00:00.000+00:00",
    weight: 103.3,
  },
  {
    id: 3,
    date: "2023-03-25T00:00:00.000+00:00",
    weight: 102.3,
  },
  {
    id: 4,
    date: "2023-03-25T00:00:00.000+00:00",
    weight: 101.3,
  },
];

const DUMMY_BP = [
  {
    id: 1,
    date: "2023-03-25T00:00:00.000+00:00",
    time: "Morning",
    high: 150,
    low: 99,
  },
  {
    id: 2,
    date: "2023-03-25T00:00:00.000+00:00",
    time: "Morning",
    high: 150,
    low: 99,
  },
  {
    id: 3,
    date: "2023-03-25T00:00:00.000+00:00",
    time: "Morning",
    high: 150,
    low: 99,
  },
];

export default function App() {
  const [isWeight, setIsWeight] = useState(true);

  return (
    <>
      <Nav setIsWeight={setIsWeight} />
      <Main
        isWeight={isWeight}
        data={isWeight ? DUMMY_WEIGHT : DUMMY_BP}
      />
    </>
  );
}
