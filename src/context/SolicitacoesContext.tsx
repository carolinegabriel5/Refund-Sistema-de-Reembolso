import { createContext, useState, useContext, type ReactNode } from 'react';

interface ISolicitacao {
    id: string;
    categoria: string;
    nome: string;
    valor: number ;
}

interface ISolicitacoesContext {
    solicitacoes: ISolicitacao[];
    adicionarSolicitacao: (nova: ISolicitacao) => void;
}

export const dadosIniciais: ISolicitacao[] = [
    {id: crypto.randomUUID(), categoria: 'alimentacao', nome: 'Almoço com cliente', valor: 100.00},
    {id: crypto.randomUUID(), categoria: 'transporte', nome: 'Viagem para encontro cliente', valor: 250.00},
    {id: crypto.randomUUID(), categoria: 'servicos', nome: 'Manutenção computador', valor: 100.00}
];

const SolicitacoesContext = createContext<ISolicitacoesContext | undefined>(undefined);

export function SolicitacoesProvider({ children }: { children: ReactNode }) {
    const [solicitacoes, setSolicitacoes] = useState<ISolicitacao[]>(dadosIniciais);

    const adicionarSolicitacao = (novaSolicitacao: ISolicitacao) => {
        setSolicitacoes((prev) => [...prev, novaSolicitacao]);
    };

    return (
        <SolicitacoesContext.Provider value={{ solicitacoes, adicionarSolicitacao }}>
            {children}
        </SolicitacoesContext.Provider>
    );
}

export const useSolicitacoes = () => {
    const context = useContext(SolicitacoesContext);
    if (!context) {
        throw new Error('useSolicitacoes deve ser usado dentro de um SolicitacoesProvider');
    }
    return context; 
};
