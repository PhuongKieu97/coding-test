import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin";
import ConsumerPage from "./pages/consumer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<AdminPage />} />
          <Route path="consumer" element={<ConsumerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
