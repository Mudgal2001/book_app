import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Singlebook from "./components/singleBook/Singlebook";
import Login from "./pages/Login/Login";
function App() {
  return (
  <Router>
  <Login/>
  </Router>
  );
}

export default App;
