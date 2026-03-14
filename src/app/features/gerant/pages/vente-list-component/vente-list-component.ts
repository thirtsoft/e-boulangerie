import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livraison, Production } from '../../../../core/models';
import { DataService } from '../../../../shared/data.service';


type Vue = 'apercu' | 'livreurs' | 'livraisons' | 'production' | 'ventes';

export interface Livreur {
  id: string; nom: string; prenom: string; telephone: string;
  zone: string; statut: 'actif' | 'en_conge' | 'inactif';
  commandesToday: number; montantToday: number;
  moto: string; dateEmbauche: string;
}


@Component({
  selector: 'app-vente-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vente-list-component.html',
  styleUrl: './vente-list-component.css',
})
export class VenteListComponent {

  protected readonly Math = Math;
  ds = inject(DataService);

  vue = signal<Vue>('ventes');


  naviguer(id: Vue) {
    this.vue.set(id);
  }

  //  totalVentes = computed(() => this.ds.livraisons.reduce((s, l) => s + l.montant, 0) + 85000);
  //  livsTerminees = computed(() => this.ds.livraisons.filter(l => l.statut === 'livre').length);
  livsEnCours = computed(() => this.ds.livraisons.filter(l => l.statut === 'en_cours').length);
  livsEnRetard = computed(() => this.ds.livraisons.filter(l => l.statut === 'en_retard').length);
  //  prodsEnCours = computed(() => this.ds.productions.filter(p => p.statut === 'en_cours').length);
  //  stockCrit = computed(() => this.ds.produits.filter(p => p.stock < 10).length);
  //  maxVentes = () => Math.max(...this.ds.ventesHeure.map(v => v.ventes));
  totalCommandes = computed(() => this.ds.livraisons.reduce((s, l) => s + l.commandes, 0));
  panierMoyen = computed(() => Math.round(this.totalVentes() / Math.max(this.totalCommandes(), 1)));



  totalVentes = computed(() => this.ds.livraisons.reduce((s, l) => s + l.montant, 0) + 85000);
  livsTerminees = computed(() => this.ds.livraisons.filter(l => l.statut === 'livre').length);
  prodsEnCours = computed(() => this.ds.productions.filter(p => p.statut === 'en_cours').length);
  stockCrit = computed(() => this.ds.produits.filter(p => p.stock < 10).length);

  maxVentes(): number {
    return Math.max(...this.ds.ventesHeure.map(v => v.ventes));
  }

  barHeight(ventes: number): number {
    return Math.round((ventes / this.maxVentes()) * 100);
  }

  fmtK(n: number): string {
    return (n / 1000).toFixed(0) + 'k';
  }

  initiales(lr: Livreur) { return (lr.prenom[0] + lr.nom[0]).toUpperCase(); }

  statLiv(l: Livraison) {
    const m: Record<string, { label: string; cls: string }> = {
      en_cours: { label: 'En cours', cls: 'warning' },
      livre: { label: 'Livré', cls: 'success' },
      en_retard: { label: 'En retard', cls: 'danger' },
    };
    return m[l.statut] ?? { label: l.statut, cls: 'info' };
  }


  pctProd(p: Production) { return Math.round(p.quantiteRealisee / p.quantitePlanifiee * 100); }
  fmtCFA(n: number) { return new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'; }

}
