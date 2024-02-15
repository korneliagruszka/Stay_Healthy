import "./App.scss";
import Banner from "./components/Banner/banner";
import Planning from "./components/Planning/planning";
import Header from "./components/common/Header/header";

function App() {
  return (
    <div className="App">
      <section>
        <Header />
        <Banner />
      </section>
      <section>
        <Planning />
      </section>
    </div>
  );
}

export default App;