import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Dashboard, Tasks } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
