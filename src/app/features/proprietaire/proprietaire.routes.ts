import { Routes } from '@angular/router';
import { MainLayoutProprietaireCompoment } from './components/layout/main-layout-proprietaire-compoment/main-layout-proprietaire-compoment';
import { DashboardProprietaire } from './pages/dashboard-proprietaire/dashboard-proprietaire';


export const PROPRIETAIRE_ROUTES: Routes = [
  {
    path: 'dashboard-proprietaire',
    component: DashboardProprietaire
  },


  {
    path: '',
    component: MainLayoutProprietaireCompoment,
    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard-component/dashboard-component')
            .then(m => m.DashboardComponent),
        title: 'Dashboard - Propriétaire'
      },

      {
        path: 'boulangeries',
        loadComponent: () =>
          import('./pages/boulangerie/boulangerie-list-component/boulangerie-list-component')
            .then(m => m.BoulangerieListComponent),
        title: 'Boulangeries - Propriétaire'
      },

      {
        path: 'comptes',
        loadComponent: () =>
          import('./pages/compte-agent-list-component/compte-agent-list-component')
            .then(m => m.CompteAgentListComponent),
        title: 'Comptes gérants - Propriétaire'
      },

      {
        path: 'commandes',
        loadComponent: () =>
          import('./pages/commande/commande-list-component/commande-list-component')
            .then(m => m.CommandeListComponent),
        title: 'Commandes - Propriétaire'
      },

      {
        path: 'commandes/details',
        loadComponent: () =>
          import('./pages/commande/commande-details-component/commande-details-component')
            .then(m => m.CommandeDetailsComponent),
        title: 'Détails Commande - Propriétaire'
      },

      {
        path: 'historique-commandes',
        loadComponent: () =>
          import('./pages/commande/historique-commande-component/historique-commande-component')
            .then(m => m.HistoriqueCommandeComponent),
        title: 'Historique des commandes'
      },


      {
        path: 'approvisionnements',
        loadComponent: () =>
          import('./pages/approvisionnement/approvisionnement-list-component/approvisionnement-list-component')
            .then(m => m.ApprovisionnementListComponent),
        title: 'Approvisionnement - Propriétaire'
      },

      {
        path: 'approvisionnements/details',
        loadComponent: () =>
          import('./pages/approvisionnement/approvisionnement-details-component/approvisionnement-details-component')
            .then(m => m.ApprovisionnementDetailsComponent),
        title: 'Détails Approvisionnement - Propriétaire'
      },

      {
        path: 'depenses',
        loadComponent: () =>
          import('./pages/depense-list-component/depense-list-component')
            .then(m => m.DepenseListComponent),
        title: 'Dépenses',
      },

      {
        path: 'investissements',
        loadComponent: () =>
          import('./pages/investissement-list-component/investissement-list-component')
            .then(m => m.InvestissementListComponent),
        title: 'Investissements - Propriétaire'
      },

      {
        path: 'typedepenses',
        loadComponent: () =>
          import('./pages/type-depense-list-component/type-depense-list-component')
            .then(m => m.TypeDepenseListComponent),
        title: 'TypeDépense',
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

];
