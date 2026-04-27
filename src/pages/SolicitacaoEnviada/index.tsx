import styles from './SolicitacaoEnviada.module.scss'
import solicitacaoEnviada from '../../assets/icons/solicitacaoEnviada.svg'
import Botao from '../../components/Botao'
import { Link } from 'react-router-dom'

export default function SolicitacaoEnviada() {
    return (
        <div className={styles.container}>
            <h1>Solicitação enviada!</h1>
            <img src={solicitacaoEnviada} />
            <p>Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>
            <Link to='/nova-solicitacao'><Botao>Nova solicitação</Botao></Link>
        </div>
    )
}