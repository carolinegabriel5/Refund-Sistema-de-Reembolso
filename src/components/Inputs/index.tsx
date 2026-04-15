import styles from "./Inputs.module.scss";

interface InputsProps {
  isRealonly: boolean;
  nome?: string;
  setNome?: (valor: string) => void; 
  categoria?: string;
  setCategoria?: (valor: string) => void;
  valor?: number;
  setValor?: (valor: string) => void; 
  dadosReembolso?: { 
    nome: string;
    categoria: string;
    valor: number;
  };
}
export default function Inputs({isRealonly, dadosReembolso,
  nome, 
  setNome, 
  categoria, 
  setCategoria, 
  valor, 
  setValor 
}: InputsProps) {
  return (
    <>
      <label>NOME DA SOLICITAÇÃO</label>
      <input
        type="text"
        value={isRealonly ? dadosReembolso?.nome : nome} 
        onChange={(e) => setNome?.(e.target.value)} 
        disabled={isRealonly} 
      />
      <div className={styles.categoria__valor}>
        <div className={styles.categoria}>
          <label>CATEGORIA</label>
          <select
            defaultValue={dadosReembolso?.categoria}
            disabled={isRealonly}
            value={isRealonly ? dadosReembolso?.categoria : categoria} 
            onChange={(e) => setCategoria?.(e.target.value)} 
          >
            <option value="alimentacao">Alimentação</option>
            <option value="hospedagem">Hospedagem</option>
            <option value="transporte">Transporte</option>
            <option value="servicos">Serviços</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <div className={styles.valor}>
          <label>VALOR</label>
          <input
            type="number"
            defaultValue={dadosReembolso?.valor}
            disabled={isRealonly}
            value={isRealonly ? dadosReembolso?.valor : valor} 
            onChange={(e) => setValor?.(e.target.value)} 
          />
        </div>
      </div>
    </>
  );
}
