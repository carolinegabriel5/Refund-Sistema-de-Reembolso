import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Solicitacoes from "./pages/Solicitacoes";
import Reembolso from "./pages/SolicitacaoReembolso";
import SolicitacaoReembolso from "./pages/SolicitacaoReembolso";
import DetalhesReembolso from "./pages/DetalhesReembolso";


function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Solicitacoes/>}></Route>
          <Route path="/nova-solicitacao" element={<SolicitacaoReembolso/>}></Route>
          <Route path='/detalhes-reembolso/:id' element={<DetalhesReembolso/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
