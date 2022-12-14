import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUser } from "./redux/userSlice";
import { getListProduits } from "./redux/CartSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getListProduits());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
