import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface HistoriqueCommande {
  id: string;
  date: Date;
  type: 'livreur' | 'fournisseur';
  destinataire: string;
  produits: { nom: string; quantite: number; prix: number }[];
  total: number;
  statut: 'en_attente' | 'validee' | 'livree' | 'annulee';
  note?: string;
}

@Component({
  selector: 'app-historique-commandes-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historique-commandes-component.html',
  styleUrl: './historique-commandes-component.css',
})
export class HistoriqueCommandesComponent {

  router = inject(Router);

  protected readonly Math = Math;

  showDetailsModal = signal(false);
  selectedCommande = signal<HistoriqueCommande | null>(null);

  filtreNumero = signal('');
  filtreStatut = signal<string>('tous');
  filtreType = signal<string>('tous');
  filtreMois = signal<string>('tous');
  filtreAnnee = signal<string>('toutes');

  currentPage = signal(1);
  itemsPerPage = signal(10);
  itemsPerPageOptions = [5, 10, 20, 50, 100];

  // Données mockées (toutes les commandes historiques)
  allCommandes = signal<HistoriqueCommande[]>([
    {
      id: 'CMD001',
      date: new Date(2024, 2, 15, 10, 30),
      type: 'livreur',
      destinataire: 'Moussa Thiaw',
      produits: [
        { nom: 'Baguette tradition', quantite: 50, prix: 500 },
        { nom: 'Croissant', quantite: 30, prix: 450 },
        { nom: 'Pain au chocolat', quantite: 20, prix: 500 }
      ],
      total: 48500,
      statut: 'livree',
      note: 'Livraison effectuée avec succès - Client très satisfait'
    },
    {
      id: 'CMD002',
      date: new Date(2024, 2, 14, 9, 15),
      type: 'livreur',
      destinataire: 'Ibrahima Sow',
      produits: [
        { nom: 'Baguette complète', quantite: 40, prix: 600 },
        { nom: 'Palmier', quantite: 25, prix: 400 }
      ],
      total: 34000,
      statut: 'livree',
      note: ''
    },
    {
      id: 'CMD003',
      date: new Date(2024, 2, 10, 14, 0),
      type: 'fournisseur',
      destinataire: 'Grands Moulins de Dakar',
      produits: [
        { nom: 'Farine T55', quantite: 100, prix: 650 },
        { nom: 'Levure fraîche', quantite: 20, prix: 4500 }
      ],
      total: 155000,
      statut: 'livree',
      note: 'Commande reçue en bon état'
    },
    {
      id: 'CMD004',
      date: new Date(2024, 2, 5, 11, 45),
      type: 'fournisseur',
      destinataire: 'Société Laitière du Sénégal',
      produits: [
        { nom: 'Beurre 84%', quantite: 30, prix: 5200 },
        { nom: 'Oeufs frais', quantite: 15, prix: 3500 }
      ],
      total: 208500,
      statut: 'annulee',
      note: 'Annulé pour rupture de stock fournisseur'
    },
    {
      id: 'CMD005',
      date: new Date(2024, 1, 20, 8, 30),
      type: 'livreur',
      destinataire: 'Omar Faye',
      produits: [
        { nom: 'Pain de campagne', quantite: 25, prix: 800 },
        { nom: 'Éclair au chocolat', quantite: 15, prix: 650 }
      ],
      total: 29750,
      statut: 'livree',
      note: ''
    },
    //
    {
      id: 'CMD006',
      date: new Date(2024, 2, 5, 11, 45),
      type: 'fournisseur',
      destinataire: 'Société Laitière du Sénégal',
      produits: [
        { nom: 'Beurre 84%', quantite: 30, prix: 5200 },
        { nom: 'Oeufs frais', quantite: 15, prix: 3500 }
      ],
      total: 208500,
      statut: 'livree',
      note: 'Livrée partielle par le fournisseur'
    },
    {
      id: 'CMD007',
      date: new Date(2024, 2, 5, 11, 45),
      type: 'fournisseur',
      destinataire: 'Société Laitière du Sénégal',
      produits: [
        { nom: 'Beurre 84%', quantite: 30, prix: 5200 },
        { nom: 'Oeufs frais', quantite: 15, prix: 3500 }
      ],
      total: 208500,
      statut: 'annulee',
      note: 'Annulé pour rupture de stock fournisseur'
    },
     {
      id: 'CMD008',
      date: new Date(2024, 2, 5, 11, 45),
      type: 'fournisseur',
      destinataire: 'Société Laitière du Sénégal',
      produits: [
        { nom: 'Beurre 84%', quantite: 30, prix: 5200 },
        { nom: 'Oeufs frais', quantite: 15, prix: 3500 }
      ],
      total: 208500,
      statut: 'annulee',
      note: 'Annulé pour rupture de stock fournisseur'
    },
     {
      id: 'CMD009',
      date: new Date(2024, 2, 5, 11, 45),
      type: 'fournisseur',
      destinataire: 'Société Laitière du Sénégal',
      produits: [
        { nom: 'Beurre 84%', quantite: 30, prix: 5200 },
        { nom: 'Oeufs frais', quantite: 15, prix: 3500 }
      ],
      total: 208500,
      statut: 'annulee',
      note: 'Annulé pour rupture de stock fournisseur'
    },
     {
      id: 'CMD0010',
      date: new Date(2024, 2, 5, 11, 45),
      type: 'fournisseur',
      destinataire: 'Société Laitière du Sénégal',
      produits: [
        { nom: 'Beurre 84%', quantite: 30, prix: 5200 },
        { nom: 'Oeufs frais', quantite: 15, prix: 3500 }
      ],
      total: 208500,
      statut: 'annulee',
      note: 'Annulé pour rupture de stock fournisseur'
    },
  ]);

  // Générer des années disponibles (de 2020 à année courante)
  anneesDisponibles = computed(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 2020; i--) {
      years.push(i.toString());
    }
    return years;
  });

  // Mois disponibles (Janvier à Décembre)
  moisDisponibles = [
    { value: 'tous', label: 'Tous les mois' },
    { value: '1', label: 'Janvier' }, { value: '2', label: 'Février' },
    { value: '3', label: 'Mars' }, { value: '4', label: 'Avril' },
    { value: '5', label: 'Mai' }, { value: '6', label: 'Juin' },
    { value: '7', label: 'Juillet' }, { value: '8', label: 'Août' },
    { value: '9', label: 'Septembre' }, { value: '10', label: 'Octobre' },
    { value: '11', label: 'Novembre' }, { value: '12', label: 'Décembre' }
  ];

  // Statuts disponibles
  statutsDisponibles = [
    { value: 'tous', label: 'Tous' },
    { value: 'en_attente', label: '⏳ En attente' },
    { value: 'validee', label: '✓ Validée' },
    { value: 'livree', label: '✅ Livrée' },
    { value: 'annulee', label: '❌ Annulée' }
  ];

  // Types disponibles
  typesDisponibles = [
    { value: 'tous', label: 'Tous' },
    { value: 'livreur', label: '🏍️ Livreur' },
    { value: 'fournisseur', label: '🏭 Fournisseur' }
  ];

  // Commandes filtrées
  commandesFiltrees = computed(() => {
    let result = this.allCommandes();

    const numero = this.filtreNumero().toLowerCase();
    if (numero) {
      result = result.filter(c => c.id.toLowerCase().includes(numero));
    }

    if (this.filtreStatut() !== 'tous') {
      result = result.filter(c => c.statut === this.filtreStatut());
    }

    if (this.filtreType() !== 'tous') {
      result = result.filter(c => c.type === this.filtreType());
    }

    if (this.filtreAnnee() !== 'toutes') {
      result = result.filter(c => c.date.getFullYear().toString() === this.filtreAnnee());
    }

    if (this.filtreMois() !== 'tous' && this.filtreAnnee() !== 'toutes') {
      result = result.filter(c => (c.date.getMonth() + 1).toString() === this.filtreMois());
    }

    return result.sort((a, b) => b.date.getTime() - a.date.getTime());
  });

  // Pagination
  totalPages = computed(() => {
    return Math.ceil(this.commandesFiltrees().length / this.itemsPerPage());
  });

  commandesPaginees = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.commandesFiltrees().slice(start, end);
  });

  constructor() {
    effect(() => {
      this.filtreNumero();
      this.filtreStatut();
      this.filtreType();
      this.filtreMois();
      this.filtreAnnee();
      this.itemsPerPage();
      this.currentPage.set(1);
    });
  }

  resetFiltres(): void {
    this.filtreNumero.set('');
    this.filtreStatut.set('tous');
    this.filtreType.set('tous');
    this.filtreMois.set('tous');
    this.filtreAnnee.set('toutes');
    this.currentPage.set(1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  changeItemsPerPage(items: number): void {
    this.itemsPerPage.set(items);
    this.currentPage.set(1);
  }

  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 2;
    const range = [];

    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }

    if (current - delta > 2) {
      range.unshift(-1);
    }
    if (current + delta < total - 1) {
      range.push(-1);
    }

    range.unshift(1);
    if (total !== 1) {
      range.push(total);
    }

    return range;
  }

  voirDetails(commande: HistoriqueCommande): void {
    this.selectedCommande.set(commande);
    this.showDetailsModal.set(true);
  }

  fermerModal(): void {
    this.showDetailsModal.set(false);
    this.selectedCommande.set(null);
  }

  // Méthode d'impression PDF
  imprimerPDF(): void {
    const commande = this.selectedCommande();
    if (!commande) return;

    // Créer un conteneur pour l'impression
    const printContent = document.createElement('div');
    printContent.className = 'print-container';

    // Générer le contenu HTML pour l'impression
    printContent.innerHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Facture - Commande ${commande.id}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
            padding: 40px;
            background: white;
            color: #3D3028;
          }
          .print-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #C1654A;
          }
          .print-logo {
            font-size: 48px;
            margin-bottom: 10px;
          }
          .print-title {
            font-size: 24px;
            font-weight: bold;
            color: #C1654A;
            font-family: 'Playfair Display', serif;
          }
          .print-subtitle {
            font-size: 14px;
            color: #8C7B72;
            margin-top: 5px;
          }
          .info-section {
            margin-bottom: 30px;
            background: #F5F0EE;
            padding: 20px;
            border-radius: 8px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .info-item {
            display: flex;
            flex-direction: column;
          }
          .info-label {
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
            color: #8C7B72;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .info-value {
            font-size: 14px;
            font-weight: 500;
            color: #3D3028;
          }
          .info-value strong {
            color: #C1654A;
          }
          .table-section {
            margin: 30px 0;
          }
          .table-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #3D3028;
            border-left: 3px solid #C1654A;
            padding-left: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          th {
            background: #F5E6DC;
            padding: 12px;
            text-align: left;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            color: #8C7B72;
            border-bottom: 2px solid #C1654A;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #F5E6DC;
            font-size: 13px;
          }
          .total-row {
            background: #FDF4F1;
            font-weight: bold;
          }
          .total-row td {
            border-top: 2px solid #C1654A;
            padding-top: 12px;
          }
          .grand-total {
            font-size: 18px;
            color: #C1654A;
          }
          .note-section {
            margin-top: 30px;
            padding: 15px;
            background: #F5F0EE;
            border-radius: 8px;
          }
          .note-label {
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
            color: #8C7B72;
            margin-bottom: 8px;
          }
          .note-content {
            font-size: 13px;
            color: #3D3028;
            line-height: 1.5;
          }
          .print-footer {
            margin-top: 40px;
            text-align: center;
            font-size: 11px;
            color: #8C7B72;
            border-top: 1px solid #F5E6DC;
            padding-top: 20px;
          }
          @media print {
            body {
              padding: 20px;
            }
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-header">
          <div class="print-logo">🥖</div>
          <div class="print-title">BOULANGERIE ROSE</div>
          <div class="print-subtitle">Facture de commande</div>
        </div>

        <div class="info-section">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">N° Commande</span>
              <span class="info-value"><strong>#${commande.id}</strong></span>
            </div>
            <div class="info-item">
              <span class="info-label">Date</span>
              <span class="info-value">${this.formatDateLong(commande.date)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Type de commande</span>
              <span class="info-value">${commande.type === 'livreur' ? '🏍️ Livreur' : '🏭 Fournisseur'}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Destinataire</span>
              <span class="info-value"><strong>${commande.destinataire}</strong></span>
            </div>
            <div class="info-item">
              <span class="info-label">Statut</span>
              <span class="info-value">${this.getStatutInfo(commande.statut).icon} ${this.getStatutInfo(commande.statut).label}</span>
            </div>
          </div>
        </div>

        <div class="table-section">
          <div class="table-title">📦 Détail des produits commandés</div>
          <table>
            <thead>
              <tr>
                <th>Produit</th>
                <th style="text-align: center">Quantité</th>
                <th style="text-align: right">Prix unitaire</th>
                <th style="text-align: right">Total</th>
              </tr>
            </thead>
            <tbody>
              ${commande.produits.map(produit => `
                <tr>
                  <td>${produit.nom}</td>
                  <td style="text-align: center">${produit.quantite}</td>
                  <td style="text-align: right">${this.formatCFA(produit.prix)}</td>
                  <td style="text-align: right">${this.formatCFA(produit.quantite * produit.prix)}</td>
                </tr>
              `).join('')}
              <tr class="total-row">
                <td colspan="3" style="text-align: right"><strong>Total général</strong></td>
                <td style="text-align: right"><strong class="grand-total">${this.formatCFA(commande.total)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        ${commande.note ? `
          <div class="note-section">
            <div class="note-label">📝 Observations</div>
            <div class="note-content">${commande.note}</div>
          </div>
        ` : ''}

        <div class="print-footer">
          <p>Merci pour votre confiance - Boulangerie Rose</p>
          <p>Ce document fait office de facture officielle</p>
          <p>Généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
        </div>
      </body>
      </html>
    `;

    // Ouvrir une nouvelle fenêtre pour l'impression
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.close();

      // Attendre que le contenu soit chargé puis imprimer
      printWindow.onload = () => {
        printWindow.print();
        // Optionnel : fermer la fenêtre après impression
        // printWindow.onafterprint = () => printWindow.close();
      };
    } else {
      alert('Veuillez autoriser les popups pour imprimer');
    }
  }

  // Helpers
  getStatutInfo(statut: string): { label: string; class: string; icon: string } {
    const map: Record<string, { label: string; class: string; icon: string }> = {
      en_attente: { label: 'En attente', class: 'warning', icon: '⏳' },
      validee: { label: 'Validée', class: 'info', icon: '✓' },
      livree: { label: 'Livrée', class: 'success', icon: '✅' },
      annulee: { label: 'Annulée', class: 'danger', icon: '❌' }
    };
    return map[statut] || { label: statut, class: 'info', icon: '📦' };
  }

  getTypeInfo(type: string): { label: string; icon: string } {
    return type === 'livreur'
      ? { label: 'Livreur', icon: '🏍️' }
      : { label: 'Fournisseur', icon: '🏭' };
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  formatDateLong(date: Date): string {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  formatCFA(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(n) + ' FCFA';
  }

  // Total des commandes affichées (dynamique)
  totalAffiche = computed(() => {
    return this.commandesPaginees().reduce((sum, cmd) => sum + cmd.total, 0);
  });


  //

  // Export Excel
  exporterExcel(): void {
    const commandes = this.commandesPaginees();
    if (commandes.length === 0) {
      alert('Aucune donnée à exporter');
      return;
    }

    // Préparer les données pour Excel
    const data = commandes.map(cmd => ({
      'N° Commande': cmd.id,
      'Date': this.formatDate(cmd.date),
      'Type': cmd.type === 'livreur' ? 'Livreur' : 'Fournisseur',
      'Destinataire': cmd.destinataire,
      'Statut': this.getStatutInfo(cmd.statut).label,
      'Produits': cmd.produits.map(p => `${p.quantite}x ${p.nom}`).join(', '),
      'Observations': cmd.note || '-',
      'Montant (FCFA)': cmd.total
    }));

    // Ajouter la ligne de total
    data.push({
      'N° Commande': '',
      'Date': '',
      'Type': '',
      'Destinataire': '',
      'Statut': '',
      'Produits': '',
      'Observations': 'TOTAL GÉNÉRAL',
      'Montant (FCFA)': this.totalAffiche()
    });

    // Convertir en CSV
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(';'));

    for (const row of data) {
      const values = headers.map(header => {
        let value = row[header as keyof typeof row]?.toString() || '';
        value = value.replace(/"/g, '""');
        return `"${value}"`;
      });
      csvRows.push(values.join(';'));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `commandes_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Export PDF
  exporterPDF(): void {
    const commandes = this.commandesPaginees();
    if (commandes.length === 0) {
      alert('Aucune donnée à exporter');
      return;
    }

    const printContent = document.createElement('div');
    printContent.className = 'print-container';

    const dateExport = new Date().toLocaleDateString('fr-FR');
    const heureExport = new Date().toLocaleTimeString('fr-FR');

    printContent.innerHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Export_Commandes_${dateExport}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'DM Sans', Arial, sans-serif;
            padding: 30px;
            background: white;
            color: #3D3028;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #C1654A;
          }
          .logo { font-size: 48px; margin-bottom: 10px; }
          .title { font-size: 24px; font-weight: bold; color: #C1654A; font-family: 'Playfair Display', serif; }
          .subtitle { font-size: 12px; color: #8C7B72; margin-top: 5px; }
          .filters-info {
            background: #F5F0EE;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 12px;
          }
          th {
            background: #F5E6DC;
            padding: 10px 8px;
            text-align: left;
            font-weight: bold;
            border-bottom: 2px solid #C1654A;
          }
          td {
            padding: 8px;
            border-bottom: 1px solid #F5E6DC;
          }
          .total-row {
            background: #FDF4F1;
            font-weight: bold;
          }
          .total-row td {
            border-top: 2px solid #C1654A;
          }
          .grand-total {
            font-size: 14px;
            color: #C1654A;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #8C7B72;
            border-top: 1px solid #F5E6DC;
            padding-top: 15px;
          }
          @media print {
            body { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">🥖</div>
          <div class="title">BOULANGERIE ROSE</div>
          <div class="subtitle">Export des commandes</div>
        </div>
        
        <div class="filters-info">
          <strong>Filtres appliqués :</strong><br>
          ${this.filtreNumero() ? `N° commande: ${this.filtreNumero()}<br>` : ''}
          ${this.filtreStatut() !== 'tous' ? `Statut: ${this.getStatutInfo(this.filtreStatut()).label}<br>` : ''}
          ${this.filtreType() !== 'tous' ? `Type: ${this.filtreType() === 'livreur' ? 'Livreur' : 'Fournisseur'}<br>` : ''}
          ${this.filtreAnnee() !== 'toutes' ? `Année: ${this.filtreAnnee()}<br>` : ''}
          ${this.filtreMois() !== 'tous' ? `Mois: ${this.moisDisponibles.find(m => m.value === this.filtreMois())?.label}<br>` : ''}
          <strong>Nombre de commandes: ${commandes.length}</strong>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>N° Commande</th>
              <th>Date</th>
              <th>Type</th>
              <th>Destinataire</th>
              <th>Statut</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            ${commandes.map(cmd => `
              <tr>
                <td>${cmd.id}</td>
                <td>${this.formatDate(cmd.date)}</td>
                <td>${cmd.type === 'livreur' ? '🏍️ Livreur' : '🏭 Fournisseur'}</td>
                <td>${cmd.destinataire}</td>
                <td>${this.getStatutInfo(cmd.statut).icon} ${this.getStatutInfo(cmd.statut).label}</td>
                <td style="text-align: right">${this.formatCFA(cmd.total)}</td>
              </tr>
            `).join('')}
            <tr class="total-row">
              <td colspan="5" style="text-align: right"><strong>TOTAL GÉNÉRAL</strong></td>
              <td style="text-align: right"><strong class="grand-total">${this.formatCFA(this.totalAffiche())}</strong></td>
            </tr>
          </tbody>
        </table>
        
        <div class="footer">
          <p>Document généré le ${dateExport} à ${heureExport}</p>
          <p>Boulangerie Rose - Tous droits réservés</p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      alert('Veuillez autoriser les popups pour exporter');
    }
  }


  //

  retourListeCommandes(): void {
    this.router.navigate(['/gerant/commandes']);
  }


}