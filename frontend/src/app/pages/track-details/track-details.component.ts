import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getTrackSlug } from '../../data/mastery-tracks.data';
import { RegistrationFormComponent } from '../../components/registration-form/registration-form.component';

@Component({
  selector: 'app-track-details',
  standalone: true,
  imports: [RouterModule, CommonModule, RegistrationFormComponent],
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {
  slug: string = '';
  track: any = null;
  openLessonIndex: number | null = null;
  previewVideoIndex: number | null = null;
  registerOnly: boolean = false;
  isPurchased: boolean = false;
  watchedLessonIndices: number[] = [];
  courseProgress: number = 0;

  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(qp => {
      this.registerOnly = qp.get('register') === 'true';
    });

    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      
      this.http.get<any[]>('http://localhost:5001/api/courses').subscribe({
        next: (courses) => {
          this.track = courses.find(t => getTrackSlug(t.title) === this.slug);
          if (this.track && typeof this.track.lessons === 'string') {
            try {
              this.track.lessons = JSON.parse(this.track.lessons);
            } catch (e) {
              console.error('Failed to parse lessons JSON', e);
              this.track.lessons = [];
            }
          }
          this.openLessonIndex = null;
          this.loadTrackState();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Failed to fetch course details', err);
          this.isLoading = false;
        }
      });
    });
  }

  toggleLesson(index: number): void {
    if (this.openLessonIndex === index) {
      this.openLessonIndex = null;
      this.previewVideoIndex = null;
    } else {
      this.openLessonIndex = index;
      this.previewVideoIndex = null;
    }
  }

  toggleVideoPreview(index: number): void {
    if (this.previewVideoIndex === index) {
      this.previewVideoIndex = null;
    } else {
      this.previewVideoIndex = index;
    }
  }

  onLessonVideoEnded(index: number): void {
    this.markLessonAsWatched(index);
  }

  getLessonProgressLabel(): string {
    if (!this.isPurchased) {
      return 'Not enrolled';
    }
    if (this.courseProgress === 100) {
      return 'Completed';
    }
    if (this.courseProgress > 0) {
      return 'In Progress';
    }
    return 'Not started';
  }

  private getCurrentUserId(): string | null {
    return localStorage.getItem('openChallengeRegistrationDbId');
  }

  private getPurchasedCourses(): string[] {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return [];
    }
    const raw = localStorage.getItem(`purchasedCourses-${userId}`);
    return raw ? JSON.parse(raw) : [];
  }

  private getWatchedLessons(): number[] {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return [];
    }
    const raw = localStorage.getItem(`watchedLessons-${userId}`);
    if (!raw) {
      return [];
    }
    const data = JSON.parse(raw);
    return Array.isArray(data?.[this.slug]) ? data[this.slug] : [];
  }

  private saveWatchedLessons(): void {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return;
    }
    const raw = localStorage.getItem(`watchedLessons-${userId}`);
    const data = raw ? JSON.parse(raw) : {};
    data[this.slug] = this.watchedLessonIndices;
    localStorage.setItem(`watchedLessons-${userId}`, JSON.stringify(data));
  }

  private loadTrackState(): void {
    this.isPurchased = this.getPurchasedCourses().includes(this.slug);
    this.watchedLessonIndices = this.getWatchedLessons();
    this.updateTrackProgress();
  }

  private updateTrackProgress(): void {
    const totalLessons = Array.isArray(this.track?.lessons) ? this.track.lessons.length : 0;
    this.courseProgress = totalLessons > 0
      ? Math.round((this.watchedLessonIndices.length / totalLessons) * 100)
      : 0;
  }

  isLessonWatched(index: number): boolean {
    return this.watchedLessonIndices.includes(index);
  }

  markLessonAsWatched(index: number): void {
    if (!this.watchedLessonIndices.includes(index)) {
      this.watchedLessonIndices.push(index);
      this.saveWatchedLessons();
      this.updateTrackProgress();
    }
  }

  purchaseCourse(): void {
    const userId = this.getCurrentUserId();
    if (!userId) {
      console.warn('Cannot purchase course without a logged-in user');
      return;
    }

    const purchased = this.getPurchasedCourses();
    if (!purchased.includes(this.slug)) {
      purchased.push(this.slug);
      localStorage.setItem(`purchasedCourses-${userId}`, JSON.stringify(purchased));
    }
    this.loadTrackState();
    this.router.navigate([], { queryParams: { register: 'true' } });
  }

  goBack(): void {
    window.history.back();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
