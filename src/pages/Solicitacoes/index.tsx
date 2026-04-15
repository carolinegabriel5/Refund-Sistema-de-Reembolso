import styles from './Solicitacoes.module.scss'
import Solicitacao from './Solicitacao';
import buscar from '../../assets/icons/Vector.png'
import seta_esquerda from  '../../assets/icons/paginacao-esquerda.png'
import seta_direita from  '../../assets/icons/paginacao-direita.png'
import BotaoIcone from '../../components/BotaoIcone';
import { useSolicitacoes } from '../../context/SolicitacoesContext';

export default function Solicitacoes() {
    const { solicitacoes } = useSolicitacoes();
    return (
        <div className={styles.solicitacoes}>
            <h1>Solicitações</h1>
            <div className={styles.solicitacoes__buscar}>
                <input type='text' placeholder="Pesquisar pelo nome" />
                <BotaoIcone>
                    <img src={buscar}/>
                </BotaoIcone>
            </div>
            <hr/>
            {
                solicitacoes.map((solicitacao) => {
                   return <Solicitacao {...solicitacao} key={solicitacao.id}/>
                })
            } 
            <div className={styles.paginacao}>
                <BotaoIcone>
                    <img src={seta_esquerda} alt="" />
                </BotaoIcone>
                <p>1/3</p>
                <BotaoIcone>
                    <img src={seta_direita} alt="" />
                </BotaoIcone>
            </div>
        </div>
    );
}