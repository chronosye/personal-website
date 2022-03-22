import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
