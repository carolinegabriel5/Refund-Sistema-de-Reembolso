import styles from "./Solicitacoes.module.scss";
import Solicitacao from "./Solicitacao";
import buscar from "../../assets/icons/Vector.png";
import seta_esquerda from "../../assets/icons/paginacao-esquerda.png";
import seta_direita from "../../assets/icons/paginacao-direita.png";
import BotaoIcone from "../../components/BotaoIcone";
import { useSolicitacoes } from "../../context/SolicitacoesContext";
import { useEffect, useState } from "react";

export default function Solicitacoes() {
  const {
    solicitacoes,
    irProxima,
    irAnterior,
    proximaPagina,
    paginaAnterior,
    paginaAtualNumero,
    totalPaginas,
    buscarSolicitacoes,
  } = useSolicitacoes();
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      buscarSolicitacoes(filtro);
    }, 500);
    return () => clearTimeout(handler);
  }, [filtro]);

  return (
    <div className={styles.solicitacoes}>
      <h1>Solicitações</h1>
      <div className={styles.solicitacoes__buscar}>
        <input
          type="text"
          placeholder="Pesquisar pelo nome"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <BotaoIcone>
          <img src={buscar} />
        </BotaoIcone>
      </div>
      <hr />
      {solicitacoes.map((solicitacao) => {
        return <Solicitacao {...solicitacao} key={solicitacao.id} />;
      })}
      <div className={styles.paginacao}>
        <BotaoIcone onClick={irAnterior} disabled={!paginaAnterior}>
          <img src={seta_esquerda} alt="" />
        </BotaoIcone>
        <p>
          {paginaAtualNumero}/{totalPaginas}
        </p>
        <BotaoIcone onClick={irProxima} disabled={!proximaPagina}>
          <img src={seta_direita} alt="" />
        </BotaoIcone>
      </div>
    </div>
  );
}
