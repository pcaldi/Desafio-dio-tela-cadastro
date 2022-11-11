import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Feed } from "./pages/Feed";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Cadastro } from './pages/Cadastro'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
     </Routes >
    </Router>
  );
}

export default App;

