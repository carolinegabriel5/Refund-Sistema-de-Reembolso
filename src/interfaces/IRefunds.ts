import type { IMeta } from "./IMeta";

export interface IRefunds<T> {
  meta: IMeta;
  data: T[];
}