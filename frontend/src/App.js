import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Singlebook from "./components/singleBook/Singlebook";
function App() {
  return (
  <Router>
  <Header/>
  </Router>
  );
}

export default App;
