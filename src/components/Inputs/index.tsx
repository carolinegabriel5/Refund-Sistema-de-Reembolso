import { useEffect } from "react";
import styles from "./Inputs.module.scss";
import type { InputsProps } from "../../interfaces/IInputProps";

export default function Inputs({
  isRealonly,
  dadosReembolso,
  title,
  setTitle,
  category,
  setCategory,
  value,
  setValue,
}: InputsProps) {
  useEffect(() => {
    if (dadosReembolso) {
      if (dadosReembolso.category && setCategory) setCategory(dadosReembolso.category);
      if (dadosReembolso.title && setTitle) setTitle(dadosReembolso.title);
      if (dadosReembolso.value && setValue) setValue(String(dadosReembolso.value));
    }
   }, [dadosReembolso, setCategory, setTitle, setValue]);
  return (
    <>
      <label>NOME DA SOLICITAÇÃO</label>
      <input
        type="text"
        value={isRealonly ? (dadosReembolso?.title ?? "") : (title ?? "")}
        onChange={(e) => setTitle && setTitle(e.target.value)}
        disabled={isRealonly}
      />
      <div className={styles.categoria__valor}>
        <div className={styles.categoria}>
          <label>CATEGORIA</label>
          <select
            disabled={isRealonly}
             value={isRealonly ? (dadosReembolso?.category ?? "") : (category ?? "")}
            onChange={(e) => setCategory && setCategory(e.target.value)} 
          >
            <option value="" disabled hidden>
              Selecione uma categoria
            </option>
            <option value="food">Alimentação</option>
            <option value="hosting">Hospedagem</option>
            <option value="transport">Transporte</option>
            <option value="services">Serviços</option>
            <option value="other">Outros</option>
          </select>
        </div>
        <div className={styles.valor}>
          <label>VALOR</label>
          <input
            type="number"
            disabled={isRealonly}
            value={isRealonly ? (dadosReembolso?.value ?? "") : (value ?? "")}
            onChange={(e) => setValue && setValue(e.target.value)}
            placeholder="0,00"
          />
        </div>
      </div>
    </>
  );
}
