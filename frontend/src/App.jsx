import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar schoolName="SchoolCMS Template" />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
