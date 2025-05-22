import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PortfolioItem } from '../dashboard/dashboard.component';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  portfolios: PortfolioItem[] = [];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Portfolio Asset Performance vs Benchmark (YTD)',
        font: { size: 18 }
      },
      legend: { position: 'top' }
    }
  };

  public barChartLabels: string[] = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };
  public barChartType: ChartType = 'bar';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolios = this.portfolioService.getPortfolioData();

    this.barChartLabels = this.portfolios.map(p => p.asset);

    const portfolioGrowth = this.portfolios.map(p => p.growth);
    const benchmarkGrowth = this.portfolios.map(() => this.generateBenchmark());

    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          label: 'My Portfolio',
          data: portfolioGrowth,
          backgroundColor: '#1abc9c'
        },
        {
          label: 'S&P 500 Benchmark',
          data: benchmarkGrowth,
          backgroundColor: '#34495e'
        }
      ]
    };
  }

  private generateBenchmark(): number {
    return +(Math.random() * 10 + 2).toFixed(1);
  }
}
