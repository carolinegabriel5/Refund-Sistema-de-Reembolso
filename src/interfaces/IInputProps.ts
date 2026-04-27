export interface InputsProps {
  isRealonly: boolean;
  title?: string;
  setTitle?: (valor: string) => void; 
  category?: string;
  setCategory?: (valor: string) => void;
  value?: number | string; 
  setValue?: (valor: string) => void; 
  dadosReembolso?: { 
    title: string;
    category: string;
    value: number;
  };
}