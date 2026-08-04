import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getTrackSlug } from '../../data/mastery-tracks.data';

@Component({
  selector: 'app-learning-lessons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './learning-lessons.component.html',
  styleUrls: ['./learning-lessons.component.css']
})
export class LearningLessonsComponent implements OnInit {
  slug: string = '';
  track: any = null;
  openLessonIndex: number | null = null;
  previewVideoIndex: number | null = null;
  isPurchased: boolean = false;
  watchedLessonIndices: number[] = [];
  courseProgress: number = 0;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, public router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.loadTrack();
    });
  }

  private getCurrentUserId(): string | null {
    return localStorage.getItem('openChallengeRegistrationDbId');
  }

  private loadTrack(): void {
    this.isLoading = true;
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
        this.loadTrackState();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch course details', err);
        this.isLoading = false;
      }
    });
  }

  getLessonCount(): number {
    if (!this.track) {
      return 0;
    }
    if (Array.isArray(this.track.lessons)) {
      return this.track.lessons.length;
    }
    if (typeof this.track.lessons === 'string') {
      try {
        const parsed = JSON.parse(this.track.lessons);
        return Array.isArray(parsed) ? parsed.length : 0;
      } catch {
        return 0;
      }
    }
    return 0;
  }

  private loadTrackState(): void {
    const userId = this.getCurrentUserId();
    this.isPurchased = Boolean(this.getPurchasedCourses(userId).includes(this.slug));
    this.watchedLessonIndices = this.getWatchedLessons(userId);
    this.updateCourseProgress();
  }

  private getPurchasedCourses(userId: string | null): string[] {
    if (!userId) {
      return [];
    }
    const raw = localStorage.getItem(`purchasedCourses-${userId}`);
    return raw ? JSON.parse(raw) : [];
  }

  private getWatchedLessons(userId: string | null): number[] {
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

  private updateCourseProgress(): void {
    const totalLessons = this.getLessonCount();
    this.courseProgress = totalLessons > 0
      ? Math.round((this.watchedLessonIndices.length / totalLessons) * 100)
      : 0;
  }

  isLessonWatched(index: number): boolean {
    return this.watchedLessonIndices.includes(index);
  }

  toggleLesson(index: number): void {
    this.openLessonIndex = this.openLessonIndex === index ? null : index;
    if (this.openLessonIndex !== index) {
      this.previewVideoIndex = null;
    }
  }

  toggleVideoPreview(index: number): void {
    this.previewVideoIndex = this.previewVideoIndex === index ? null : index;
  }

  markLessonAsWatched(index: number): void {
    if (!this.isPurchased) {
      return;
    }
    if (!this.watchedLessonIndices.includes(index)) {
      this.watchedLessonIndices.push(index);
      this.saveWatchedLessons();
      this.updateCourseProgress();
    }
  }

  onLessonVideoEnded(index: number): void {
    this.markLessonAsWatched(index);
  }

  getProgressLabel(): string {
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

  onVideoError(event: Event, url: string): void {
    console.error('Learning page video failed to load:', url, event);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  get backLink(): string[] {
    return ['/skillstorm/tracks', this.slug];
  }
}
