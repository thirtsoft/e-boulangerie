import { Component, inject, signal } from '@angular/core';
import { BoulangerieService } from '../../services/boulangerie.service';
import { GerantService } from '../../services/gerant.service';
import { InvestissementService } from '../../services/investissement.service';
import { DataService } from '../../../../shared/data.service';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../../components/shared/kpi-card-component/kpi-card-component';
import { Periode, PeriodeSelectorComponent } from '../../components/shared/periode-selector-component/periode-selector-component';


type PeriodeType = 'jour' | 'semaine' | 'mois';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, PeriodeSelectorComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

  private boulangerieService = inject(BoulangerieService);
  private gerantService = inject(GerantService);
  private investissementService = inject(InvestissementService);
  private dataService = inject(DataService);

  periode = signal<Periode>('jour');
  protected readonly Math = Math;

  // Données - on garde les signaux
  readonly boulangeries = this.boulangerieService.boulangeries;
  readonly statsBoulangeries = this.boulangerieService.getStats();
  readonly statsGerants = this.gerantService.stats; // C'est un Signal<GerantStats>
  readonly statsInvestissements = this.investissementService.stats; // C'est un Signal<InvestissementStats>
  readonly ventesHebdo = this.dataService.ventesHebdo;

  // Computed
  readonly ventesMaxHebdo = () => Math.max(...this.ventesHebdo.map(v => v.ventes));
  readonly getMaxVenteBoulangerie = () => Math.max(...this.boulangeries().map(b => b.objectifJour));

  // Méthodes utilitaires
  getTauxCls(taux: number): string {
    return taux >= 100 ? 'success' : taux >= 80 ? 'warning' : 'danger';
  }

  getTendanceCls(tendance: string): string {
    const classes: Record<string, string> = {
      hausse: 'success',
      baisse: 'danger',
      stable: 'info'
    };
    return classes[tendance] || '';
  }

  getTendanceIco(tendance: string): string {
    const icons: Record<string, string> = {
      hausse: '↑',
      baisse: '↓',
      stable: '→'
    };
    return icons[tendance] || '';
  }

  formatCFA(n: number): string {
    return n >= 1_000_000 
      ? (n / 1_000_000).toFixed(1) + 'M FCFA'
      : n >= 1_000 
        ? (n / 1_000).toFixed(0) + 'k FCFA'
        : n + ' FCFA';
  }

  formatCFAFull(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(n) + ' FCFA';
  }

  onPeriodeChange(periode: Periode): void {
    console.log('Période changée:', periode);
    // Logique pour charger les données selon la période
  }
}
