import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getTrackSlug } from '../../data/mastery-tracks.data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  isLoading: boolean = true;
  activeTab: 'dashboard' | 'all' | 'enrolled' | 'profile' | 'orders' | 'notifications' | 'courseDetail' = 'enrolled';
  selectedCourse: any = null;
  purchasedCourseSlugs: string[] = [];
  courseWatchedLessons: Record<string, number[]> = {};
  profile: any = null;
  profileLoading: boolean = false;

  selectedLessonVideoIndex: number | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadPurchasedCourses();
    this.route.queryParamMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab === 'enrolled') {
        this.activeTab = 'enrolled';
      } else if (tab === 'profile') {
        this.activeTab = 'profile';
        this.loadProfile();
      } else if (tab === 'dashboard') {
        this.activeTab = 'enrolled';
      } else if (tab === 'all') {
        this.activeTab = 'all';
      } else {
        this.activeTab = 'enrolled';
      }
    });
    this.fetchCourses();
  }

  private loadPurchasedCourses(): void {
    const userId = this.getCurrentUserId();
    if (!userId) {
      this.purchasedCourseSlugs = [];
      this.courseWatchedLessons = {};
      return;
    }

    const raw = localStorage.getItem(`purchasedCourses-${userId}`);
    this.purchasedCourseSlugs = raw ? JSON.parse(raw) : [];

    const watchedRaw = localStorage.getItem(`watchedLessons-${userId}`);
    this.courseWatchedLessons = watchedRaw ? JSON.parse(watchedRaw) : {};
  }

  private getCurrentUserId(): string | null {
    return localStorage.getItem('openChallengeRegistrationDbId');
  }

  private parseLessons(lessons: any): any[] {
    if (Array.isArray(lessons)) {
      return lessons;
    }
    if (typeof lessons === 'string') {
      try {
        const parsed = JSON.parse(lessons);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }

  getLessonCount(course: any): number {
    return course.lectures || (course.lessons ? this.parseLessons(course.lessons).length : 0);
  }

  getCompletedLessonCount(course: any): number {
    return this.parseLessons(course.lessons).filter((lesson: any) => lesson?.completed).length;
  }

  private getFirstLessonVideo(course: any): string | null {
    const lessons = this.parseLessons(course.lessons);
    const lessonWithVideo = lessons.find((lesson: any) => lesson?.video);
    return lessonWithVideo ? lessonWithVideo.video : null;
  }

  watchLesson(index: number): void {
    if (!this.selectedCourse) {
      return;
    }
    this.selectedLessonVideoIndex = index;
  }

  submitModuleProject(index: number): void {
    const lesson = this.selectedCourse?.lessons?.[index];
    const moduleName = lesson?.title ? lesson.title.replace('Lesson', 'Module') : `Module ${index + 1}`;
    const userId = this.getCurrentUserId() || '0';
    const userName = localStorage.getItem('openChallengeParticipantName') || this.profile?.full_name || 'Participant';
    const userEmail = this.profile?.email || '';
    const courseTitle = this.selectedCourse?.title || 'Mastery Track';
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.zip,.png,.jpg,.mp4';
    fileInput.onchange = (e: any) => {
      const file = e.target?.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', userId);
        formData.append('userName', userName);
        formData.append('userEmail', userEmail);
        formData.append('courseTitle', courseTitle);
        formData.append('moduleName', moduleName);

        this.http.post('http://localhost:5001/api/upload/project', formData).subscribe({
          next: (res: any) => {
            alert(`Project "${file.name}" uploaded successfully for ${moduleName}!`);
            if (lesson) {
              lesson.projectSubmitted = true;
              lesson.submittedProjectName = file.name;
            }
          },
          error: (err) => {
            console.error('Failed to upload project:', err);
            alert(`Failed to upload project. Please try again.`);
          }
        });
      }
    };
    fileInput.click();
  }

  private sortCourses(): void {
    this.courses = [...this.courses].sort((a, b) => Number(b.isPurchased) - Number(a.isPurchased));
  }

  playLessonVideo(index: number): void {
    if (!this.selectedCourse?.lessons?.[index]?.video) {
      return;
    }
    this.selectedLessonVideoIndex = index;
  }

  onLessonVideoEnded(index: number): void {
    if (this.selectedLessonVideoIndex === index) {
      this.selectedLessonVideoIndex = null;
    }
  }

  markLessonAsWatched(index: number): void {
    const lesson = this.selectedCourse?.lessons?.[index];
    if (!lesson || lesson.completed) {
      return;
    }

    lesson.completed = true;
    const watchedLessons = this.courseWatchedLessons[this.selectedCourse.slug] || [];
    if (!watchedLessons.includes(index)) {
      watchedLessons.push(index);
      this.courseWatchedLessons[this.selectedCourse.slug] = watchedLessons;
      const userId = this.getCurrentUserId();
      if (userId) {
        localStorage.setItem(`watchedLessons-${userId}`, JSON.stringify(this.courseWatchedLessons));
      }
    }

    this.selectedCourse.completedCount = this.getCompletedLessonCount(this.selectedCourse);
    this.selectedCourse.progress = this.selectedCourse.lessons?.length
      ? Math.round((this.selectedCourse.completedCount / this.selectedCourse.lessons.length) * 100)
      : 0;
    this.courses = this.courses.map(course => course.slug === this.selectedCourse.slug ? this.selectedCourse : course);
  }

  get displayedCourses(): any[] {
    return this.activeTab === 'enrolled'
      ? this.courses.filter(course => course.isPurchased)
      : this.courses;
  }

  get purchasedCourses(): any[] {
    return this.courses.filter(c => c.isPurchased);
  }

  get lockedCourses(): any[] {
    return this.courses.filter(c => !c.isPurchased);
  }

  get inProgressCount(): number {
    return this.purchasedCourses.filter(c => c.progress > 0 && c.progress < 100).length;
  }

  get completedCount(): number {
    return this.purchasedCourses.filter(c => c.progress === 100).length;
  }

  selectTab(tab: 'dashboard' | 'all' | 'enrolled' | 'profile' | 'orders' | 'notifications' | 'courseDetail'): void {
    this.activeTab = tab;
    if (tab !== 'courseDetail') {
      this.selectedCourse = null;
    }
    if (tab === 'profile') {
      this.loadProfile();
    }
  }

  goToCourse(course: any): void {
    this.selectedCourse = course;
    this.activeTab = 'courseDetail';
  }

  backToCourses(): void {
    this.selectedCourse = null;
    this.activeTab = 'enrolled';
  }

  onCourseVideoError(event: Event, url: string): void {
    console.error('Course dashboard video failed to load:', url, event);
  }

  loadProfile(): void {
    const dbId = localStorage.getItem('openChallengeRegistrationDbId');
    if (!dbId) return;
    this.profileLoading = true;
    this.http.get<any>(`http://localhost:5001/api/challenges/registration/${dbId}`).subscribe({
      next: (data) => {
        this.profile = data;
        this.profileLoading = false;
      },
      error: () => {
        this.profileLoading = false;
      }
    });
  }

  stripHtml(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
  }

  adminDocuments: any[] = [];

  getModuleAdminDoc(index: number): any {
    if (!this.selectedCourse || !this.adminDocuments.length) return null;
    const lesson = this.selectedCourse.lessons?.[index];
    const moduleName = lesson?.title ? lesson.title.replace('Lesson', 'Module') : `Module ${index + 1}`;
    
    return this.adminDocuments.find(d => 
      d.category === 'Mastery Battles' && 
      d.course_title?.toLowerCase().trim() === this.selectedCourse.title?.toLowerCase().trim() &&
      d.module_name?.toLowerCase().trim() === moduleName.toLowerCase().trim()
    );
  }

  fetchCourses(): void {
    const userId = this.getCurrentUserId();
    
    this.http.get<any[]>('http://localhost:5001/api/admin/documents').subscribe({
      next: (docs) => { this.adminDocuments = docs || []; },
      error: () => { this.adminDocuments = []; }
    });

    this.http.get<any[]>('http://localhost:5001/api/courses').subscribe({
      next: (allCourses) => {
        if (userId) {
          this.http.get<any>(`http://localhost:5001/api/challenges/registration/${userId}`).subscribe({
            next: (reg) => {
              if (reg?.challenge_name) {
                const names = reg.challenge_name.split(',').map((n: string) => n.trim());
                this.purchasedCourseSlugs = names.map((name: string) => getTrackSlug(name)).filter(Boolean);
                localStorage.setItem(`purchasedCourses-${userId}`, JSON.stringify(this.purchasedCourseSlugs));
              } else {
                this.purchasedCourseSlugs = [];
              }
              const watchedRaw = localStorage.getItem(`watchedLessons-${userId}`);
              this.courseWatchedLessons = watchedRaw ? JSON.parse(watchedRaw) : {};
              this.applyCourseMapping(allCourses);
            },
            error: () => {
              this.loadPurchasedCourses();
              this.applyCourseMapping(allCourses);
            }
          });
        } else {
          this.loadPurchasedCourses();
          this.applyCourseMapping(allCourses);
        }
      },
      error: (err) => {
        console.error('Failed to fetch courses:', err);
        this.isLoading = false;
        this.courses = [];
      }
    });
  }

  private applyCourseMapping(allCourses: any[]): void {
    this.courses = allCourses.map(course => {
      const slug = getTrackSlug(course.title);
      const isPurchased = this.purchasedCourseSlugs.some(pSlug => {
        return pSlug === slug || pSlug.replace(/-+/g, '-') === slug.replace(/-+/g, '-');
      });

      const watchedLessons = Array.isArray(this.courseWatchedLessons[slug])
        ? this.courseWatchedLessons[slug]
        : [];
      const lessonCount = this.getLessonCount(course);
      const completedLessons = watchedLessons.length;
      const progress = lessonCount > 0 ? Math.round((completedLessons / lessonCount) * 100) : 0;
      const lessonsArray = this.parseLessons(course.lessons);
      const firstLessonVideo = this.getFirstLessonVideo(course);

      return {
        ...course,
        slug,
        image: course.image || 'assets/course-placeholder.jpg',
        isPurchased,
        completedCount: completedLessons,
        progress,
        lessons: lessonsArray,
        firstLessonVideo
      };
    });
    this.sortCourses();
    this.isLoading = false;
  }
}
