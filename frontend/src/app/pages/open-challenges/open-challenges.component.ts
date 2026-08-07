import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { OPEN_CHALLENGES } from '../../data/challenges.data';

@Component({
  selector: 'app-open-challenges',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './open-challenges.component.html',
  styleUrls: ['./open-challenges.component.css']
})
export class OpenChallengesComponent {
  private router = inject(Router);
  challenges = OPEN_CHALLENGES;
  
  perks = [
    { id: 1, title: '£1,000 Cash Prize', subtitle: 'For each category champion' },
    { id: 2, title: 'Engraved Trophy', subtitle: 'And frame certificate.' },
    { id: 3, title: 'Flagship Course Access', subtitle: 'Complimentary for top 100 candidates.' },
    { id: 4, title: 'Scholarship Pathways', subtitle: 'Selected universities' },
    { id: 5, title: 'Industry Immersions', subtitle: 'Virtual or on-site visits' },
    { id: 6, title: 'Digital Certificates', subtitle: 'For every valid entry' },
    { id: 7, title: 'Sponsorship Pathways', subtitle: 'To sponsors connected' }
  ];

  getBadgeClasses(color: string): string {
    switch (color) {
      case 'green': return 'bg-[#ecfdf5] text-[#10b981] border border-[#a7f3d0]'; // emerald
      case 'blue': return 'bg-[#e0e7ff] text-[#4f46e5] border border-[#c7d2fe]'; // blue/indigo match screenshot
      case 'red': return 'bg-[#fef2f2] text-[#ef4444] border border-[#fecaca]'; // red
      case 'orange-outline': return 'bg-transparent text-[#f97316] border border-[#f97316]'; // open to all ages
      case 'orange':
      default: return 'bg-[#fff7ed] text-[#f97316] border border-[#fed7aa]'; // orange
    }
  }

  getIconSvg(iconName: string): string {
    switch (iconName) {
      case 'book-open':
        // Open book icon (Creative Storytelling)
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>';
      case 'message-circle':
        // Speech / Oratory chat bubble icon (Global Oratory)
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>';
      case 'lightbulb':
        // Lightbulb idea icon (Entrepreneurship)
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path>';
      case 'smartphone':
        // Mobile phone / app icon (App Design)
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>';
      case 'chef-hat':
        // Chef Hat / Culinary icon (QuickChef Culinary)
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 10.58 0A4 4 0 0 1 18 13.87V21H6zM6 17h12"></path>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path>';
    }
  }

  getPerkIcon(perkId: number): string {
    const icons = {
      // 1: £1,000 Cash Prize (Cash Note)
      1: '<rect x="2" y="6" width="20" height="12" rx="2" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke-width="1.8"/><line x1="6" y1="12" x2="6.01" y2="12" stroke-width="2"/><line x1="18" y1="12" x2="18.01" y2="12" stroke-width="2"/>',
      // 2: Engraved Trophy (Trophy Cup)
      2: '<path stroke-width="1.8" d="M6 9H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h.09"/><path stroke-width="1.8" d="M18 9h2a2 2 0 0 1 2 2v1a5 5 0 0 1-5 5h-.09"/><path stroke-width="1.8" d="M6 3h12v10a6 6 0 0 1-12 0V3z"/><path stroke-width="1.8" d="M9 21h6"/><path stroke-width="1.8" d="M12 17v4"/>',
      // 3: Flagship Course Access (Graduation Cap)
      3: '<path stroke-width="1.8" d="M22 10L12 5 2 10l10 5 10-5z"/><path stroke-width="1.8" d="M6 12v5c3 3 9 3 12 0v-5"/>',
      // 4: Scholarship Pathways (Award Ribbon Medal)
      4: '<circle cx="12" cy="8" r="5" stroke-width="1.8"/><path stroke-width="1.8" d="M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11"/>',
      // 5: Industry Immersions (Building)
      5: '<rect x="4" y="2" width="16" height="20" rx="2" stroke-width="1.8"/><path stroke-width="1.8" d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"/>',
      // 6: Digital Certificates (Document Sheet)
      6: '<path stroke-width="1.8" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline stroke-width="1.8" points="14 2 14 8 20 8"/><line stroke-width="1.8" x1="16" y1="13" x2="8" y2="13"/><line stroke-width="1.8" x1="16" y1="17" x2="8" y2="17"/>',
      // 7: Sponsorship Pathways (People Mentors)
      7: '<path stroke-width="1.8" d="M17 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4" stroke-width="1.8"/><path stroke-width="1.8" d="M23 21v-2a4 4 0 0 0-3-3.87"/><path stroke-width="1.8" d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    };
    return icons[perkId as keyof typeof icons] || icons[1];
  }

  enterChallenge(challenge: any) {
    this.router.navigate([
      '/skillstorm/challenges',
      challenge.slug
    ]);
  }

  scrollToChallenges() {
    const el = document.getElementById('challenges-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
