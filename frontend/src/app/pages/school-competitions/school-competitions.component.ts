import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-competitions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './school-competitions.component.html',
  styleUrls: ['./school-competitions.component.css']
})
export class SchoolCompetitionsComponent {
  activePlan: string = 'full';

  scrollToPricing() {
    const el = document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  perks = [
    { title: 'Cash Awards', subtitle: 'For Champions and top runners-up', icon: 'M2 6h20v12H2zm10 8a2 2 0 100-4 2 2 0 000 4zm-6 0h.01M18 12h.01' },
    { title: 'Custom Trophies', subtitle: 'And framed certificates', icon: 'M6 9H4a2 2 0 00-2 2v1a5 5 0 005 5h.09M18 9h2a2 2 0 012 2v1a5 5 0 01-5 5h-.09M6 3h12v10a6 6 0 01-12 0V3zM9 21h6M12 17v4' },
    { title: 'Premium Course Access', subtitle: 'For top teams', icon: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5' },
    { title: 'Scholarship Pathways', subtitle: 'Via partner schools and programs', icon: 'M12 3a5 5 0 100 10 5 5 0 000-10zm-3.5 10.5L7 21l5-2.5L17 21l-1.5-7.5' },
    { title: 'Industry Visits', subtitle: 'Virtual or in-person experiences', icon: 'M4 2h16v20H4zm5 4h2m2 0h2m-4 4h2m2 0h2m-4 4h2m2 0h2M10 22v-4h4v4' },
    { title: 'Digital Certificates', subtitle: 'For all approved participants', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M8 13h8M8 17h8' },
    { title: 'Sponsorship Introductions', subtitle: 'For outstanding teams', icon: 'M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87M12 14a4 4 0 100-8 4 4 0 000 8z' }
  ];
}
