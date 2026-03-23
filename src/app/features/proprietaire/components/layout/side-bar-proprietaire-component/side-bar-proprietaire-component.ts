import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';



export interface NavItem {
  id: string;
  route: string;
  label: string;
  icon: string;
  badge?: string;
}


@Component({
  selector: 'app-side-bar-proprietaire-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar-proprietaire-component.html',
  styleUrl: './side-bar-proprietaire-component.css',
})
export class SideBarProprietaireComponent {

  collapsed = input.required<boolean>();
  open = input.required<boolean>();

  toggleCollapse = output<void>();
  close = output<void>();

  readonly router = inject(Router);

  readonly navItems: NavItem[] = [
    { id: 'dashboard', route: '/proprietaire/dashboard', label: "Vue d'ensemble", icon: '📊' },
    { id: 'boulangeries', route: '/proprietaire/boulangeries', label: 'Mes boulangeries', icon: '🏪', badge: '4' },
    { id: 'comptes', route: '/proprietaire/comptes', label: 'Comptes gérants', icon: '👤', badge: '4' },
    { id: 'approvisionnements', route: '/proprietaire/approvisionnements', label: 'Approvisionnements', icon: '📦' },
    { id: 'commandes', route: '/proprietaire/commandes', label: 'Commandes', icon: '📦' },
    //  { id: 'investissements', route: '/proprietaire/investissements', label: 'Investissements', icon: '💼' },
    //  { id: 'depenses', route: '/proprietaire/depenses', label: 'Depenses', icon: '💼' }
  ];

  deconnecter(): void {
    this.router.navigate(['/auth/login']);
  }


}
