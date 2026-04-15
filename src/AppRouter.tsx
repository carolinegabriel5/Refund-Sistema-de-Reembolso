import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Solicitacoes from "./pages/Solicitacoes";
import SolicitacaoReembolso from "./pages/SolicitacaoReembolso";
import DetalhesReembolso from "./pages/DetalhesReembolso";
import SolicitacaoEnviada from "./pages/SolicitacaoEnviada";
import { SolicitacoesProvider } from "./context/SolicitacoesContext";


function AppRouter() {
  return (
    <Router>
      <div className="App">
        <SolicitacoesProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Solicitacoes />} />
            <Route path="/nova-solicitacao" element={<SolicitacaoReembolso />} />
            <Route path="/detalhes-reembolso/:id" element={<DetalhesReembolso />} />
            <Route path="/solicitacao-enviada" element={<SolicitacaoEnviada />} />
          </Routes>
        </SolicitacoesProvider>
      </div>
    </Router>
  );
}

export default AppRouter;
