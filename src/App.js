import { Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/layout/layout"
import HomePage from "./pages/home/home"


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
  );
}

export default App;
