import React from 'react';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Accordion title={"Menu:"} collapsed={true} />
      <Accordion title={"Menu:"} collapsed={false} />
    </>
  );
}

export default App;
