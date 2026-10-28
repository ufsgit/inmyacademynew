import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-courses-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses-catalog.component.html',
  styleUrls: ['./courses-catalog.component.css']
})
export class CoursesCatalogComponent implements OnInit {
  private http = inject(HttpClient);

  courses: any[] = [
    {
      id: 1,
      title: 'Diplomatic Policy Leadership',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80'
    },
    {
      id: 2,
      title: 'Legal Advocacy Professional',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80'
    },
    {
      id: 3,
      title: 'Advanced Research Publication',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80'
    },
    {
      id: 4,
      title: 'Digital Media Strategy',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80'
    },
    {
      id: 5,
      title: 'Entrepreneurial Visionary Accelerator',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80'
    },
    {
      id: 6,
      title: 'Executive Project Management',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80'
    },
    {
      id: 7,
      title: 'Global Communication Mastery',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80'
    },
    {
      id: 8,
      title: 'Digital Systems Architecture',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80'
    },
    {
      id: 9,
      title: 'Investment Banking Elite',
      lessons: 0,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80'
    }
  ];

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.http.get<any[]>(`${environment.apiUrl}/courses`).subscribe({
      next: (apiCourses) => {
        if (Array.isArray(apiCourses) && apiCourses.length > 0) {
          this.courses = apiCourses.map(c => {
            const defaultMatch = this.courses.find(
              dc => dc.title.trim().toLowerCase() === c.title.trim().toLowerCase()
            );
            return {
              ...c,
              id: c.id,
              title: c.title,
              lessons: this.getLessonCount(c),
              image: c.image || defaultMatch?.image || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80'
            };
          });
        }
      },
      error: (err) => {
        console.error('Failed to fetch courses from API:', err);
      }
    });
  }

  getLessonCount(course: any): number {
    if (!course) return 0;
    
    // 1. If lessons is already parsed array
    if (Array.isArray(course.lessons)) {
      return course.lessons.length;
    }

    // 2. If lessons is a JSON string from MySQL database
    if (typeof course.lessons === 'string' && course.lessons.trim()) {
      try {
        const parsed = JSON.parse(course.lessons);
        if (Array.isArray(parsed)) {
          return parsed.length;
        }
      } catch (e) {
        // Ignore JSON parse error
      }
    }

    // 3. Fallback to lectures column if present
    if (course.lectures !== undefined && course.lectures !== null) {
      return Number(course.lectures) || 0;
    }

    return 0;
  }

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
