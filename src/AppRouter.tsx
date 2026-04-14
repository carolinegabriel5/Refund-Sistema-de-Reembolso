import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Solicitacoes from "./pages/Solicitacoes";
import Reembolso from "./pages/Reembolso";


function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Solicitacoes/>}></Route>
          <Route path="/nova-solicitacao" element={<Reembolso novoReembolso={true}/>}></Route>
          <Route path="/detalhes-reembolso:id" element={<Reembolso novoReembolso={false}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
