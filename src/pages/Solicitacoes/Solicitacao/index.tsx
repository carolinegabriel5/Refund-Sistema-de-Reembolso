import styles from './Solicitacao.module.scss'
import alimentacaoIcon from '../../../assets/icons/alimentacao.png'
import transporteIcon from '../../../assets/icons/transporte.png'
import hospedagemIcon from '../../../assets/icons/hospedagem.png'
import servicosIcon from '../../../assets/icons/servicos.png'
import outrosIcon from '../../../assets/icons/outros.png'
import { Link } from 'react-router-dom';

export default function Solicitacao({category, title, value, id}: {category:string, title: string, value:number, id:string}) {

    const iconeMap:Record<typeof category, string> = {
        food: alimentacaoIcon,
        transport: transporteIcon,
        hosting: hospedagemIcon,
        services: servicosIcon,
        other: outrosIcon
    }
    return (
        <Link to={`/detalhes-reembolso/${id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.solicitacao}> 
                <div className={styles.solicitacao__dados}>
                    <div className={styles.icone}>
                        <img src={iconeMap[category]}/>
                    </div>
                    <div className={styles.solicitacao__dados__nome}>
                        <h3>{title}</h3>
                        <p>{category}</p>
                    </div>
                </div>
                <div className={styles.solicitacao__valores}>
                    <p>R$</p>
                    <h3>{value}</h3>
                </div>
            </div>
        </Link>
    );
}