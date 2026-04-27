export interface IMeta {
  nextPageUrl: string | null;
  previousPageUrl: string | null;
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}