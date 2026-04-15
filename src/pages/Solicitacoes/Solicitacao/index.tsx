import styles from './Solicitacao.module.scss'
import alimentacaoIcon from '../../../assets/icons/alimentacao.png'
import transporteIcon from '../../../assets/icons/transporte.png'
import hospedagemIcon from '../../../assets/icons/hospedagem.png'
import servicosIcon from '../../../assets/icons/servicos.png'
import outrosIcon from '../../../assets/icons/outros.png'
import { Link } from 'react-router-dom';

export default function Solicitacao({categoria, nome, valor, id}: {categoria:string, nome: string, valor:number, id:string}) {

    const iconeMap:Record<typeof categoria, string> = {
        alimentacao: alimentacaoIcon,
        transporte: transporteIcon,
        hospedagem: hospedagemIcon,
        servicos: servicosIcon,
        outros: outrosIcon
    }
    return (
        <Link to={`/detalhes-reembolso/${id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.solicitacao}> 
                <div className={styles.solicitacao__dados}>
                    <div className={styles.icone}>
                        <img src={iconeMap[categoria]}/>
                    </div>
                    <div className={styles.solicitacao__dados__nome}>
                        <h3>{nome}</h3>
                        <p>{categoria}</p>
                    </div>
                </div>
                <div className={styles.solicitacao__valores}>
                    <p>R$</p>
                    <h3>{valor}</h3>
                </div>
            </div>
        </Link>
    );
}