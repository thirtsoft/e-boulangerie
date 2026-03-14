import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { SideBarGerantComponent } from '../side-bar-gerant-component/side-bar-gerant-component';

interface NavItem {
  route: string;
  ico: string;
  label: string;
}

@Component({
  selector: 'app-main-layout-gerant-compoment',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarGerantComponent],
  templateUrl: './main-layout-gerant-compoment.html',
  styleUrl: './main-layout-gerant-compoment.css',
})
export class MainLayoutGerantCompoment {


  sidebarCollapsed = signal(false);
  sidebarOpen = signal(false);

  constructor(private router: Router) { }

  nav: NavItem[] = [
    { route: '/gerant/dashboard', ico: '📊', label: 'Aperçu' },
    { route: '/gerant/livreurs', ico: '👷', label: 'Livreurs' },
    { route: '/gerant/livraison', ico: '🚚', label: 'Livraisons' },
    { route: '/gerant/production', ico: '🏭', label: 'Production' },
    { route: '/gerant/ventes', ico: '💰', label: 'Ventes' },
  ];

  dateAuj = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  get sectionLabel(): string {
    const url = this.router.url;
    if (url.includes('dashboard')) return 'Aperçu';
    if (url.includes('livreurs')) return 'Livreurs';
    if (url.includes('livraison')) return 'Livraisons';
    if (url.includes('production')) return 'Production';
    if (url.includes('ventes')) return 'Ventes';
    return 'Gérant';
  }

  isActive(route: string): boolean {
    const segment = route.split('/').pop() ?? '';
    return this.router.url.includes(segment);
  }

  naviguer(route: string): void {
    this.router.navigate([route]);
  }

  onToggleCollapse(): void {
    this.sidebarCollapsed.update(v => !v);
  }

  onSidebarClose(): void {
    this.sidebarOpen.set(false);
  }
}

