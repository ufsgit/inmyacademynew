import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses-catalog.component.html',
  styleUrls: ['./courses-catalog.component.css']
})
export class CoursesCatalogComponent {
  courses = [
    {
      id: 1,
      title: 'Diplomatic Policy Leadership',
      lessons: 2,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80'
    },
    {
      id: 2,
      title: 'Legal Advocacy Professional',
      lessons: 7,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80'
    },
    {
      id: 3,
      title: 'Advanced Research Publication',
      lessons: 8,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80'
    },
    {
      id: 4,
      title: 'Digital Media Strategy',
      lessons: 10,
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80'
    },
    {
      id: 5,
      title: 'Entrepreneurial Visionary Accelerator',
      lessons: 7,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80'
    },
    {
      id: 6,
      title: 'Executive Project Management',
      lessons: 4,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80'
    },
    {
      id: 7,
      title: 'Global Communication Mastery',
      lessons: 12,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80'
    },
    {
      id: 8,
      title: 'Digital Systems Architecture',
      lessons: 6,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80'
    },
    {
      id: 9,
      title: 'Investment Banking Elite',
      lessons: 6,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80'
    }
  ];

  getSlug(title: string): string {
    return title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  }

  scrollToCourses(): void {
    const el = document.getElementById('courses-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
