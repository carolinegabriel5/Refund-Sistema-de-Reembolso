import Botao from '../../components/Botao';
import styles from './SolicitacaoReembolso.module.scss'
import arquivoAdicionar from '../../assets/icons/arquivo-adicionar.png'
import Inputs from '../../components/Inputs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolicitacoes } from '../../context/SolicitacoesContext';

export default function SolicitacaoReembolso() {
    const navigate = useNavigate();
    const { adicionarSolicitacao } = useSolicitacoes();
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState("");
    const [comprovante, setComprovante] = useState<any>(null);

    const aoEnviar = ({ nome, categoria, valor, comprovante }: any) => {
        const novaSolicitacao = {
            id: crypto.randomUUID(),
            nome,
            categoria,
            valor,
            comprovante
        };
        adicionarSolicitacao(novaSolicitacao);
        navigate('/solicitacao-enviada', { state: { novaSolicitacao } });
    };

    return (
        <div className={styles.container}>
            <h1>Nova solicitação de reembolso</h1>
            <p>Dados da despesa para solicitar reembolso.</p>
            <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, categoria, valor, comprovante});
            }}>
                <Inputs 
                    isRealonly={false}  
                    nome={nome} setNome={setNome} 
                    categoria={categoria} setCategoria={setCategoria}
                    valor={Number(valor)} setValor={setValor}/>
                <div className={styles.arquivo}>
                    <label>COMPROVANTE</label>
                    <div className={styles.arquivo__input}>
                        <span id="file-name">{comprovante ? comprovante.name : "nome do arquivo.pdf"}</span>
                        <label htmlFor="arquivo" className="botao-escolher">
                            <img src={arquivoAdicionar} alt="Ícone" width="20"/>
                        </label>
                        <input 
                            type='file' 
                            id="arquivo" 
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
    )
}