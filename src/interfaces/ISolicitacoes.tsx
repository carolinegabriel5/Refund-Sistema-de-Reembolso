export interface ISolicitacao {
    id: string;
    category: string;
    title: string;
    value: number ;
    receipt: {
        id: string;
    }
}