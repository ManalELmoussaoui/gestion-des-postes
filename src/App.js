import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUser } from "./redux/UserSlice";
import { getPosts } from "./redux/PostsSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Acceuil from "./Component/Aceuil"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Acceuil />
      </div>
    </Router>
  );
}

export default App;