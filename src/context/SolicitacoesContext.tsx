import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from "react";
import type { ISolicitacao } from "../interfaces/ISolicitacoes";
import type { IPaginacao } from "../interfaces/IPaginacao";
import http from "../http";

const SolicitacoesContext = createContext<{
  solicitacoes: ISolicitacao[];
  adicionarSolicitacao: (nova: ISolicitacao) => void;
  removerSolicitacao: (id: string) => void;
  irProxima: () => void;
  irAnterior: () => void;
  buscarSolicitacoes: (termo: string) => void;
  proximaPagina: string | null;
  paginaAnterior: string | null;
  paginaAtualNumero: number;
  totalPaginas: number;
}>({
  solicitacoes: [],
  adicionarSolicitacao: () => {},
  removerSolicitacao: () => {},
  irProxima: () => {},
  irAnterior: () => {},
  buscarSolicitacoes: () => {},
  proximaPagina: null,
  paginaAnterior: null,
  paginaAtualNumero: 1,
  totalPaginas: 1,
});

export function SolicitacoesProvider({ children }: { children: ReactNode }) {
  const [solicitacoes, setSolicitacoes] = useState<ISolicitacao[]>([]);
  const [proximaPagina, setProximaPagina] = useState<string | null>(null);
  const [paginaAnterior, setPaginaAnterior] = useState<string | null>(null);
  const [paginaAtual, setPaginaAtual] = useState<string>("refunds/");
  const [paginaAtualNumero, setPaginaAtualNumero] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);

  const buscarSolicitacoes = (termo: string) => {
    const url = termo ? `refunds/?q=${termo}` : "refunds/";
    carregarSolicitacoes(url);
  };

  const carregarSolicitacoes = (url: string) => {
    http
      .get<IPaginacao<ISolicitacao>>(url)
      .then((resposta) => {
        const dados = resposta.data.refunds;
        setSolicitacoes(dados.data);
        setProximaPagina(dados.meta.nextPageUrl);
        setPaginaAnterior(dados.meta.previousPageUrl);
        setPaginaAtual(url);
        setPaginaAtualNumero(dados.meta.currentPage);
        setTotalPaginas(dados.meta.lastPage);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const irProxima = () => {
    if (!proximaPagina) return;
    const url =
      proximaPagina.startsWith("?") || proximaPagina.startsWith("/")
        ? `refunds${proximaPagina}`
        : proximaPagina;
    carregarSolicitacoes(url);
  };

  const irAnterior = () => {
    if (!paginaAnterior) return;
    const url =
      paginaAnterior.startsWith("?") || paginaAnterior.startsWith("/")
        ? `refunds${paginaAnterior}`
        : paginaAnterior;
    carregarSolicitacoes(url);
  };
  useEffect(() => {
    carregarSolicitacoes("refunds/");
  }, []);

  const adicionarSolicitacao = (novaSolicitacao: ISolicitacao) => {
    setSolicitacoes((prev) => [...prev, novaSolicitacao]);
    carregarSolicitacoes(paginaAtual);
  };

  const removerSolicitacao = (id: string) => {
    setSolicitacoes((prev) => prev.filter((s) => s.id !== id));
    carregarSolicitacoes(paginaAtual);
  };

  return (
    <SolicitacoesContext.Provider
      value={{
        solicitacoes,
        irAnterior,
        irProxima,
        adicionarSolicitacao,
        removerSolicitacao,
        proximaPagina,
        paginaAnterior,
        paginaAtualNumero,
        totalPaginas,
        buscarSolicitacoes,
      }}
    >
      {children}
    </SolicitacoesContext.Provider>
  );
}

export function useSolicitacoes() {
  const context = useContext(SolicitacoesContext);
  return context;
}
