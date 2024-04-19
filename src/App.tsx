import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import Header from "./components/header";
import Footer from "./components/footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <footer className="mt-20">
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
