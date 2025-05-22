import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { PortfolioService } from '../../../services/portfolio.service';

export interface PortfolioItem {
  asset: string;
  quantity: number;
  purchasePrice: number;
  value: number;
  growth: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {

  assetAllocation = '';
  marketTrends = '';
  performanceMetrics = '';
  portfolios: PortfolioItem[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPotfolioAndSummaryData();
  }

  getPotfolioAndSummaryData() {
    const summary = this.portfolioService.getSummary();
    this.assetAllocation = summary.assetAllocation;
    this.marketTrends = summary.marketTrends;
    this.performanceMetrics = summary.performanceMetrics;
    this.portfolios = this.portfolioService.getPortfolioData();
  }

}
