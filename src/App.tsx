import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import Header from "./components/header";
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
