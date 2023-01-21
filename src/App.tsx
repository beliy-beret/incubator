import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import Select from "./components/Select/Select";

const options = ['apple', 'orange', 'cherry', 'banana'];

function App() {
  return (
    <>
      <Rating value={0} />
      <Accordion title={"Menu:"} collapsed={false} />
      <Select options={options} value='orange' />
    </>
  );
}

export default App;
