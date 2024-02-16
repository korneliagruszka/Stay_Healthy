import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Banner from "./components/Banner/banner";
import Planning from "./components/Planning/planning";
import Footer from "./components/common/Footer/footer";
import Header from "./components/common/Header/header";
import Training from "./components/Training/training";
import Progress from "./components/Progress/progress";
import BMICalculator from "./components/BMICalculator/bmiCalculator";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Planning />
              </>
            }
          />
          <Route path="/training" element={<Training />} />
          <Route path="/bmiCalculator" element={<BMICalculator />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;