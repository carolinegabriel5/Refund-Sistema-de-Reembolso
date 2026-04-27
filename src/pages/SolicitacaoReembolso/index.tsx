import Botao from "../../components/Botao";
import styles from "./SolicitacaoReembolso.module.scss";
import arquivoAdicionar from "../../assets/icons/arquivo-adicionar.png";
import Inputs from "../../components/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSolicitacoes } from "../../context/SolicitacoesContext";
import http from "../../http";

export default function SolicitacaoReembolso() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [comprovante, setComprovante] = useState<File | null>(null);
  const { adicionarSolicitacao } = useSolicitacoes();

  const aoEnviar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      if (!comprovante) {
        alert("Por favor, selecione um comprovante primeiro.");
        return;
      }
      formData.append("receiptFile", comprovante);
      const resReceipt = await http.post("/receipts", formData);
      const receiptIdDoBanco = resReceipt.data.receipt.id;
      const dadosRefund = {
        title: title,
        category: category,
        value: Number(value),
        receipt: receiptIdDoBanco,
      };
      const resRefund = await http.post("/refunds", dadosRefund);
      adicionarSolicitacao(resRefund.data.refund);
      navigate("/solicitacao-enviada");
    } catch (error: any) {
      console.error("Erro no processo:", error.response?.data);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Nova solicitação de reembolso</h1>
      <p>Dados da despesa para solicitar reembolso.</p>
      <form onSubmit={aoEnviar}>
        <Inputs
          isRealonly={false}
          title={title}
          setTitle={setTitle}
          category={category}
          setCategory={setCategory}
          value={Number(value)}
          setValue={setValue}
        />
        <div className={styles.arquivo}>
          <label>COMPROVANTE</label>
          <div className={styles.arquivo__input}>
            <span id="file-name">
              {comprovante ? comprovante.name : "nome do arquivo.pdf"}
            </span>
            <label htmlFor="comprovante" className="botao-escolher">
              <img src={arquivoAdicionar} alt="Ícone" width="20" />
            </label>
            <input
              type="file"
              id="comprovante"
              onChange={(event) => {
                const arquivo = event.target.files?.[0];
                if (arquivo) setComprovante(arquivo);
              }}
            />
          </div>
        </div>
        <Botao type="submit">Enviar Solicitação</Botao>
      </form>
    </div>
  );
}
