import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getPortfolioData() {
    return [
      { asset: 'Stocks', quantity: 0, purchasePrice: 100, value: 12000, growth: 10 },
      { asset: 'Bonds', quantity: 30, purchasePrice: 150, value: 5000, growth: 3 },
      { asset: 'Real Estate', quantity: 1, purchasePrice: 20000, value: 22000, growth: 8 },
      { asset: 'Cryptocurrency', quantity: 10, purchasePrice: 1000, value: 15000, growth: 50 },
      { asset: 'Commodities', quantity: 20, purchasePrice: 500, value: 12000, growth: 5 },
      { asset: 'Mutual Funds', quantity: 60, purchasePrice: 90, value: 8000, growth: 7 },
      { asset: 'Index Funds', quantity: 40, purchasePrice: 110, value: 10000, growth: 6 }
    ];
  }

  getSummary() {
    return {
      assetAllocation: 'Stocks: 60%, Bonds: 30%, Cash: 10%',
      marketTrends: 'S&P 500 up 2.3% this month',
      performanceMetrics: 'Total return: +12.5% YTD'
    };
  }
}
