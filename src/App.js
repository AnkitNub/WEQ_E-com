import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Product/Products";
import LoginForm from "./Form";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" exact element={<LoginForm />} />
          <Route path="/ecom" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
