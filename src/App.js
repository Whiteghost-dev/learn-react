import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <>
      {/* <h1 className="bg-green-400 text-center justify-center flex p-4 w-1/4 m-auto mt-40 rounded-lg mb-6">
        Hello world!
      </h1> */}

      <Card name="pruthvi" btnDetails="Contact Us" />
      <Card name="sagar" />
      <Card />
    </>
  );
}

export default App;
