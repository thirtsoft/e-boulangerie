import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  route: string;
  ico: string;
  label: string;
}

@Component({
  selector: 'app-side-bar-gerant-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-gerant-component.html',
  styleUrl: './side-bar-gerant-component.css',
})
export class SideBarGerantComponent {


  // ── Inputs depuis MainLayoutGerant ────────────────────
  collapsed = input<boolean>(false);
  open = input<boolean>(false);

  // ── Outputs vers MainLayoutGerant ────────────────────
  toggleCollapse = output<void>();
  close = output<void>();

  constructor(private router: Router) { }

  nav: NavItem[] = [
    { route: '/gerant/dashboard', ico: '📊', label: 'Aperçu' },
    { route: '/gerant/livreurs', ico: '👷', label: 'Livreurs' },
    { route: '/gerant/livraison', ico: '🚚', label: 'Livraisons' },
    { route: '/gerant/production', ico: '🏭', label: 'Production' },
    { route: '/gerant/ventes', ico: '💰', label: 'Ventes' },
  ];

  isActive(route: string): boolean {
    const segment = route.split('/').pop() ?? '';
    return this.router.url.includes(segment);
  }

  naviguer(route: string): void {
    this.router.navigate([route]);
    this.close.emit();
  }

  deconnecter(): void {
    this.router.navigate(['/auth/login']);
  }

}