import styles from './DetalhesReembolso.module.scss'
import arquivo from '../../assets/icons/arquivo.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Inputs from '../../components/Inputs';
import { useState } from 'react';
import { useSolicitacoes } from '../../context/SolicitacoesContext';

export default function DetalhesReembolso() {
    const { solicitacoes } = useSolicitacoes();
    const navigate = useNavigate();
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const { id } = useParams();
    const solicitacaoSelecionada = solicitacoes.find(s => s.id === id);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMostrarPopup(true)
    }
    const confirmarExclusao = () => {
        const index = solicitacoes.findIndex(item => item.id === id);
        if (index > -1) {
            solicitacoes.splice(index, 1);
        }
        console.log("Item excluído:", id);
        setMostrarPopup(false);
        navigate("/"); 
    };

    return (
        <div className={styles.container}>
            <h1>Solicitação de reembolso</h1>
            <p>Dados da despesa para solicitar reembolso.</p>
            <form>
                <Inputs isRealonly={true} dadosReembolso={solicitacaoSelecionada}/>
                <Link className={styles.abrir__comprovante} to='#'>
                    <img src={arquivo} alt='arquivo'/>
                    <p>Abrir comprovante</p>
                </Link> 
                <button onClick={handleClick}>Excluir Registro</button>
            </form>
              {mostrarPopup && (
                <div className={styles.overlay}>
                    <dialog open className={styles.modal}>
                        <h1>Excluir solicitação</h1>
                        <p>Tem certeza que deseja excluir essa solicitação? Essa ação é irreversível.</p>
                        
                        <button className={styles.cancelar} type="button" onClick={() => setMostrarPopup(false)}>
                            Cancelar
                        </button>
                        
                        <button className={styles.confirmar} type="button" onClick={confirmarExclusao}>
                            Confirmar
                        </button>
                    </dialog>
                </div>
            )}
        </div>
    )
}