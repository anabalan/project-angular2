import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  get<T>(key: string): T {
    try {
      const localStockValue = localStorage.getItem(key);
      if (localStockValue !== null) {
        return JSON.parse(localStockValue);
      }
      return undefined;
    } catch {
      console.error('Falha ao recuperar do Stock');
    }
  }

  set<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Falha ao salvar no Stock');
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Falha ao remover do Stock');
    }
  }
}
