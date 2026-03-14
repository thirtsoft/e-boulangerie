
import { Routes } from '@angular/router';
import { MainLayoutGerantCompoment } from './components/main-layout-gerant-compoment/main-layout-gerant-compoment';
import { DashboardGerant } from './pages/dashboard-gerant/dashboard-gerant';

export const GERANT_ROUTES: Routes = [
  {
    path: 'dashboard-gerant',
    component: DashboardGerant
  },
  {
    path: '',
    component: MainLayoutGerantCompoment,
    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard-gerant-component/dashboard-gerant-component')
            .then(m => m.DashboardGerantComponent),
        title: 'Aperçu — Gérant',
      },

      // ── Livreurs ──────────────────────────────────────
      // 👉 Adapter le chemin selon votre structure réelle
      {
        path: 'livreurs',
        loadComponent: () =>
          import('./pages/livreur-list-component/livreur-list-component')
            .then(m => m.LivreurListComponent),
        title: 'Livreurs',
      },

      // ── Livraisons ────────────────────────────────────
      {
        path: 'livraison',
        loadComponent: () =>
          import('./pages/livraison-list-component/livraison-list-component')
            .then(m => m.LivraisonListComponent),
        title: 'Livraisons',
      },

      // ── Production ────────────────────────────────────
      {
        path: 'production',
        loadComponent: () =>
          import('./pages/production-list-component/production-list-component')
            .then(m => m.ProductionListComponent),
        title: 'Production',
      },

      // ── Ventes ────────────────────────────────────────
      {
        path: 'ventes',
        loadComponent: () =>
          import('./pages/vente-list-component/vente-list-component')
            .then(m => m.VenteListComponent),
        title: 'Ventes',
      },

      {
        path: 'retours',
        loadComponent: () =>
          import('./pages/retour-commande-list-component/retour-commande-list-component')
            .then(m => m.RetourCommandeListComponent),
        title: 'Retours',
      },

      {
        path: 'personnel',
        loadComponent: () =>
          import('./pages/compte-agent-local-list-component/compte-agent-local-list-component')
            .then(m => m.CompteAgentLocalListComponent),
        title: 'Personnels',
      },

      {
        path: 'depenses',
        loadComponent: () =>
          import('./pages/depense-list-component/depense-list-component')
            .then(m => m.DepenseListComponent),
        title: 'Dépenses',
      },

      // ── Redirection par défaut ────────────────────────
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

