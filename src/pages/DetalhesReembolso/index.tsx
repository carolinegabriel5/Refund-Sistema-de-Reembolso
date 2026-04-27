import styles from "./DetalhesReembolso.module.scss";
import arquivo from "../../assets/icons/arquivo.svg";
import { useNavigate, useParams } from "react-router-dom";
import Inputs from "../../components/Inputs";
import { useState } from "react";
import { useSolicitacoes } from "../../context/SolicitacoesContext";
import type { ISolicitacao } from "../../interfaces/ISolicitacoes";
import http from "../../http";

export default function DetalhesReembolso() {
  const { solicitacoes } = useSolicitacoes();
  const navigate = useNavigate();
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { id } = useParams();
  const { removerSolicitacao } = useSolicitacoes();
  const solicitacaoSelecionada = solicitacoes.find((s) => String(s.id) === id);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMostrarPopup(true);
  };

  const confirmarExclusao = (solicitacaoAhSerExcluida: ISolicitacao) => {
    http.delete(`/refunds/${solicitacaoAhSerExcluida.id}`)
    .then(() => {
        removerSolicitacao(solicitacaoAhSerExcluida.id);
      alert("Solicitação excluída com sucesso!");
      navigate("/");
    });
  };

  const handleDownload = async (receiptId: string) => {
    try {
      const resposta = await http.get(`/receipts/download/${receiptId}`);
      const urlRelativa = resposta.data.url;
      const urlCompleta = `${http.defaults.baseURL}${urlRelativa}`;

      window.open(urlCompleta, "_blank");
    } catch (error) {
      console.error("Erro ao obter link do recibo:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Solicitação de reembolso</h1>
      <p>Dados da despesa para solicitar reembolso.</p>
      <form>
        <Inputs isRealonly={true} dadosReembolso={solicitacaoSelecionada} />
        <a
          className={styles.abrir__comprovante}
          onClick={() =>
            handleDownload(solicitacaoSelecionada?.receipt.id || "")
          }
        >
          <img src={arquivo} alt="arquivo" />
          <p>Abrir comprovante</p>
        </a>
        <button onClick={handleClick}>Excluir</button>
      </form>
      {mostrarPopup && (
        <div className={styles.overlay}>
          <dialog open className={styles.modal}>
            <h1>Excluir solicitação</h1>
            <p>
              Tem certeza que deseja excluir essa solicitação? Essa ação é
              irreversível.
            </p>

            <button
              className={styles.cancelar}
              type="button"
              onClick={() => setMostrarPopup(false)}
            >
              Cancelar
            </button>

            <button
              className={styles.confirmar}
              type="button"
              onClick={() => {
                confirmarExclusao(solicitacaoSelecionada as ISolicitacao);
                setMostrarPopup(false);
              }}
            >
              Confirmar
            </button>
          </dialog>
        </div>
      )}
    </div>
  );
}
