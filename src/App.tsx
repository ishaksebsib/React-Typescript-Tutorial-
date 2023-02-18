import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Heading title="Hello world" />
      <Section title="Suuuuii">
        {" "}
        <h1>RONANDO</h1>{" "}
      </Section>
      <Counter />
    </>
  );
}

export default App;
