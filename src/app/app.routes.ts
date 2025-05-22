import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/layout',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        loadComponent: () => import('../app/components/layout/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('../app/components/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'chart',
                loadComponent: () => import('../app/components/pages/chart/chart.component').then(m => m.ChartComponent)
            },
            {
                path: 'Create-investment',
                loadComponent: () => import('../app/components/pages/investment-creation/investment-creation.component').then(m => m.InvestmentCreationComponent)
            }
        ]
    }
];
