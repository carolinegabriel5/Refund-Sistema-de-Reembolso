import styles from './Inputs.module.scss';

interface InputsProps {
    isRealonly: boolean;
    dadosReembolso?: {
        nome: string;
        categoria: string;
        valor: number;
    };
}
export default function Inputs({ isRealonly, dadosReembolso }: InputsProps) {   
    return (
    <>
        <label>NOME DA SOLICITAÇÃO</label>
        <input type='text' defaultValue={dadosReembolso?.nome || ""} disabled={isRealonly} />
        <div className={styles.categoria__valor}>
            <div className={styles.categoria}>
                <label>CATEGORIA</label>
                <select defaultValue={dadosReembolso?.categoria} disabled={isRealonly}>
                    <option value='alimentacao'>Alimentação</option>
                    <option value='hospedagem'>Hospedagem</option>
                    <option value='transporte'>Transporte</option>
                    <option value='servicos'>Serviços</option>
                    <option value='outros'>Outros</option>
                </select>
            </div>
            <div className={styles.valor}>
                <label>VALOR</label>
                <input type='number'defaultValue={dadosReembolso?.valor} disabled={isRealonly}/>
            </div>
        </div>
    </>)
    
}