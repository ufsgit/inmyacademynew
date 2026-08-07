import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mastery-battles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mastery-battles.component.html',
  styleUrls: ['./mastery-battles.component.css']
})
export class MasteryBattlesComponent {
  tracks = [
    {
      id: 1,
      title: 'Diplomatic Policy Leadership',
      description: 'Dive into governance, diplomacy, and global relations — from public policy and civic leadership to persuasive debate and campaign strategy.',
      phase1: 'Submit a policy pitch or debate video for shortlisting',
      final: 'Shine in live negotiations and panel diplomacy rounds',
      extras: 'Policy templates and access to virtual youth summits',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80',
      lectures: 2
    },
    {
      id: 2,
      title: 'Legal Advocacy Professional',
      description: 'Understand justice systems, legal research, case writing, and courtroom communication.',
      phase1: 'Submit a mock-trial or advocacy video',
      final: 'Face live legal argument sessions with expert judges',
      extras: 'Legal writing guides and virtual courtroom workshops',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80',
      lectures: 7
    },
    {
      id: 3,
      title: 'Advanced Research Publication',
      description: 'Apply real-world science and engineering skills — from research design to data storytelling.',
      phase1: 'Submit a research abstract or visualisation',
      final: 'Defend your findings live before academic judges',
      extras: 'Research toolkits and academic publishing resources',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80',
      lectures: 8
    },
    {
      id: 4,
      title: 'Digital Media Strategy',
      description: 'Create high-impact media content — mastering storytelling, editing, branding, and campaign strategy.',
      phase1: 'Submit a digital media piece or article',
      final: 'Present your live strategy to industry professionals',
      extras: 'Media starter packs and virtual journalism labs',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80',
      lectures: 10
    },
    {
      id: 5,
      title: 'Entrepreneurial Visionary Accelerator',
      description: 'Turn ideas into ventures — explore innovation, market research, finance basics, and pitching mastery.',
      phase1: 'Submit a business pitch video',
      final: 'Pitch live to industry guests and investors',
      extras: 'Business plan templates and mentorship opportunities',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
      lectures: 7
    },
    {
      id: 6,
      title: 'Executive Project Management',
      description: 'Master leadership, time management, risk handling, and execution excellence.',
      phase1: 'Submit a project plan or simulation',
      final: 'Perform live project briefs under real constraints',
      extras: 'Leadership frameworks and project templates',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80',
      lectures: 4
    },
    {
      id: 7,
      title: 'Global Communication Mastery',
      description: 'Develop confident communication through structured speech, presentation, and persuasive dialogue.',
      phase1: 'Submit a communication analysis video',
      final: 'Participate in live panel discussions',
      extras: 'Public speaking guides and debate resources',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80',
      lectures: 12
    },
    {
      id: 8,
      title: 'Digital Systems Architecture',
      description: 'Design the future — from coding logic and software design to complex system building.',
      phase1: 'Submit a system design architecture plan',
      final: 'Defend your architecture live before technical experts',
      extras: 'Coding templates and cloud architecture credits',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80',
      lectures: 6
    },
    {
      id: 9,
      title: 'Investment Banking Elite',
      description: 'Understand global finance — investment banking, markets, M&A, ethics, and modelling.',
      phase1: 'Submit a financial model or market analysis',
      final: 'Present a live M&A pitch to finance professionals',
      extras: 'Financial modelling templates and industry reports',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80',
      lectures: 6
    }
  ];

  perks = [
    { title: '£10,000 Prize Pool', subtitle: 'Shared across tracks and age categories' },
    { title: 'Cash + Trophy + Certificate', subtitle: 'For each Champion' },
    { title: 'Premium Course Access', subtitle: 'For top finalists' },
    { title: 'Scholarship Pathways', subtitle: 'Via partner programs and universities' },
    { title: 'Industry Immersions', subtitle: 'In law, media, tech, business, and finance' },
    { title: 'Digital Certificates', subtitle: 'For all approved entries' },
    { title: 'Sponsorship Introductions', subtitle: 'Linking top talents with mentors and investors' }
  ];

  perkIcons = [
    'M2 6h20v12H2zm10 8a2 2 0 100-4 2 2 0 000 4zm-6 0h.01M18 12h.01', // Money / Cash
    'M6 9H4a2 2 0 00-2 2v1a5 5 0 005 5h.09M18 9h2a2 2 0 012 2v1a5 5 0 01-5 5h-.09M6 3h12v10a6 6 0 01-12 0V3zM9 21h6M12 17v4', // Trophy
    'M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5', // Graduation Cap / Course
    'M12 15l-2 5l2-1l2 1l-2-5M12 3a6 6 0 1 0 0 12a6 6 0 0 0 0-12z', // Medal / Ribbon
    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', // Building / Industry
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', // Document / Certificate
    'M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87M12 14a4 4 0 100-8 4 4 0 000 8z' // People / Sponsorship
  ];

  scrollToTracks(): void {
    const el = document.getElementById('tracks-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  getSlug(title: string): string {
    return title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  }
}
