import { Component, computed, inject, signal } from '@angular/core';
import { LigneCommande, Produit } from '../../../../core/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../shared/data.service';
import { ModePaiementListComponent } from '../../../gerant/pages/mode-paiement-list-component/mode-paiement-list-component';


type VueVendeur = 'caisse' | 'commandes' | 'stock' | 'historique';

type FiltreHisto = 'tout' | 'ok' | 'annule';

interface VenteHisto {
  id: string; date: Date; articles: number;
  total: number; mode: ModePaiement; statut: 'ok' | 'annule';
}

//interface LigneCommande { produit: Produit; quantite: number; sousTotal: number; }
interface VenteHisto {
  id: string; date: Date; articles: number;
  total: number; mode: ModePaiement; statut: 'ok' | 'annule';
}

type Categorie = 'Tout' | 'Pain' | 'Viennoiserie' | 'Pâtisserie' | 'Snacking' | 'Boissons';
type ModePaiement = 'especes' | 'carte' | 'mobile';

interface VenteHisto {
  id: string; date: Date; articles: number;
  total: number; mode: ModePaiement; statut: 'ok' | 'annule';
}

@Component({
  selector: 'app-caisse-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caisse-component.html',
  styleUrl: './caisse-component.css',
})
export class CaisseComponent {

  protected readonly Math = Math;
  ds = inject(DataService);

  panierOpen = signal(false);
  catActive = signal<Categorie>('Tout');
  search = signal('');
  panier = signal<LigneCommande[]>([]);
  modePay = signal<ModePaiement>('especes');
  showModal = signal(false);
  flashSucces = signal(false);

  categories: Categorie[] = ['Tout', 'Pain', 'Viennoiserie', 'Pâtisserie', 'Snacking', 'Boissons'];

  modesPaiement = [
    { id: 'especes' as ModePaiement, label: 'Espèces', ico: '💵' },
    { id: 'carte' as ModePaiement, label: 'Carte', ico: '💳' },
    { id: 'mobile' as ModePaiement, label: 'Mobile', ico: '📱' },
  ];

  heure = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  produitsFiltres = computed(() =>
    this.ds.produits.filter(p =>
      (this.catActive() === 'Tout' || p.categorie === this.catActive()) &&
      p.nom.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  total = computed(() => this.panier().reduce((s, l) => s + l.sousTotal, 0));
  nbArticles = computed(() => this.panier().reduce((s, l) => s + l.quantite, 0));
  totalTTC = computed(() => Math.round(this.total() * 1.18));

  historique = signal<VenteHisto[]>([]);

  addProduit(p: Produit) {
    if (p.stock === 0) return;
    this.panier.update(lines => {
      const ex = lines.find(l => l.produit.id === p.id);
      if (ex) {
        return lines.map(l => l.produit.id === p.id
          ? { ...l, quantite: l.quantite + 1, sousTotal: (l.quantite + 1) * p.prix }
          : l);
      }
      return [...lines, { produit: p, quantite: 1, sousTotal: p.prix }];
    });
  }

  changeQty(id: string, delta: number) {
    this.panier.update(lines => {
      const l = lines.find(l => l.produit.id === id);
      if (!l) return lines;
      const nq = l.quantite + delta;
      if (nq <= 0) {
        return lines.filter(l => l.produit.id !== id);
      }
      return lines.map(l => l.produit.id === id
        ? { ...l, quantite: nq, sousTotal: nq * l.produit.prix }
        : l);
    });
  }

  viderPanier() { this.panier.set([]); this.panierOpen.set(false); }
  encaisser() { if (this.panier().length) this.showModal.set(true); }
  fermerModal() { this.showModal.set(false); }

  valider() {
    const v: VenteHisto = {
      id: 'V' + String(this.historique().length + 1).padStart(3, '0'),
      date: new Date(),
      articles: this.nbArticles(),
      total: this.total(),
      mode: this.modePay(),
      statut: 'ok'
    };
    this.historique.update(h => [v, ...h]);
    this.panier.set([]);
    this.showModal.set(false);
    this.panierOpen.set(false);
    this.flashSucces.set(true);
    setTimeout(() => this.flashSucces.set(false), 3000);
  }

  qtyDansPanier(id: string) {
    return this.panier().find(l => l.produit.id === id)?.quantite ?? 0;
  }

  fmtCFA(n: number) {
    return new Intl.NumberFormat('fr-FR').format(n) + ' FCFA';
  }
}
