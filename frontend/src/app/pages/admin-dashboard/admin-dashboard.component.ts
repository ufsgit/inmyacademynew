import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OPEN_CHALLENGES } from '../../data/challenges.data';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  environment = environment;
  uploadsUrl = environment.uploadsUrl;

  getMediaUrl(path: string | null | undefined): string {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath.startsWith('/uploads/')) {
      return `${environment.uploadsUrl}${cleanPath.substring(8)}`;
    }
    return `${environment.uploadsUrl}${cleanPath}`;
  }

  stats: any = { totalRegistrations: 0, totalUsers: 0, totalChallenges: 0 };
  openChallenges = OPEN_CHALLENGES.filter(c => c.entryFee === 1);
  registrations: any[] = [];
  users: any[] = [];
  activeTab: string = 'dashboard';
  activeCourseTab: string = 'overview';
  
  // Leaderboard Management
  adminLeaderboardData: any[] = [];
  newLeaderboardEntry: any = {
    CompetitionFormat: 'SCHOOL',
    CompetitionPhase: 'Online Phase',
    CategoryTrack: 'All',
    ParticipantName: '',
    Country: '',
    TeamsCount: null,
    Score: null,
    Award: ''
  };
  courses: any[] = [];
  selectedCourse: any = null;
  editingCourseId: number = -1; // use DB id instead of index
  editingCourseIndex: number = -1;
  isAddingCourse: boolean = false;
  isViewingCourse: boolean = false;

  @ViewChild('editorRef') editorRef!: ElementRef;
  @ViewChild('lessonVideoUploadInput') lessonVideoUploadInput!: ElementRef<HTMLInputElement>;
  activeLessonVideoIndex: number | null = null;
  isUploadingLessonVideo: boolean = false;

  newCourseData: any = {
    title: 'New Course',
    description: '',
    difficulty: 'Intermediate',
    isPublic: true,
    pricing: 'Free',
    visibility: 'Public',
    optionsTab: 'General',
    what_will_i_learn: '',
    target_audience: '',
    duration_hours: 0,
    duration_mins: 0,
    materials_included: '',
    requirements: '',
    about_the_track: '',
    phase1: '',
    final: '',
    extras: '',
    image: '',
    lessons: [],
    lectures: 0,
    students_max: 0,
    level: 'All Levels',
    language: 'English',
    certificate: 'Yes'
  };
  additionalData: any = {
    what_will_i_learn: '',
    target_audience: '',
    duration_hours: 0,
    duration_mins: 0,
    materials_included: '',
    requirements: ''
  };
  isSavingAdditional: boolean = false;
  isLoading: boolean = true;
  selectedParticipant: any = null;
  selectedUser: any = null;
  selectedTypeFilter: string = 'all';

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    const apiUrl = `${environment.apiUrl}/admin`;
    
    this.http.get(`${apiUrl}/stats`).subscribe({
      next: (data: any) => {
        this.stats = data;
        this.checkLoading();
      },
      error: (err) => {
        console.error('Error fetching stats:', err);
        this.checkLoading();
      }
    });

    this.http.get(`${apiUrl}/registrations`).subscribe({
      next: (data: any) => {
        this.registrations = data;
        this.checkLoading();
      },
      error: (err) => {
        console.error('Error fetching registrations:', err);
        this.checkLoading();
      }
    });

    this.http.get(`${apiUrl}/users`).subscribe({
      next: (data: any) => {
        this.users = data;
        this.checkLoading();
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.checkLoading();
      }
    });

    this.fetchCourses();
  }

  moduleProjects: any[] = [];
  adminDocuments: any[] = [];

  docUploadForm: any = {
    category: 'Open Challenges',
    courseId: '',
    moduleName: '',
    title: '',
    file: null as File | null
  };

  fetchCourses() {
    this.http.get<any[]>(`${environment.apiUrl}/courses`).subscribe({
      next: (data) => { this.courses = data; },
      error: (err) => console.error('Error fetching courses:', err)
    });
  }

  fetchModuleProjects() {
    this.http.get<any[]>(`${environment.apiUrl}/admin/projects`).subscribe({
      next: (data) => { this.moduleProjects = data; },
      error: (err) => console.error('Error fetching module projects:', err)
    });
  }

  fetchAdminDocuments() {
    this.http.get<any[]>(`${environment.apiUrl}/admin/documents`).subscribe({
      next: (data) => { this.adminDocuments = data; },
      error: (err) => console.error('Error fetching admin documents:', err)
    });
  }

  deleteModuleProject(id: number) {
    if (!confirm('Are you sure you want to delete this submitted project?')) return;
    this.http.delete(`${environment.apiUrl}/admin/projects/${id}`).subscribe({
      next: () => {
        this.fetchModuleProjects();
      },
      error: (err) => console.error('Error deleting project:', err)
    });
  }

  deleteAdminDocument(id: number) {
    if (!confirm('Are you sure you want to delete this document?')) return;
    this.http.delete(`${environment.apiUrl}/admin/documents/${id}`).subscribe({
      next: () => {
        this.fetchAdminDocuments();
      },
      error: (err) => console.error('Error deleting document:', err)
    });
  }

  onDocFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.docUploadForm.file = input.files[0];
    }
  }

  getSelectedCourseModules(): any[] {
    if (!this.docUploadForm.courseId) return [];
    const course = this.courses.find(c => c.id == this.docUploadForm.courseId);
    if (!course) return [];
    
    let lessons: any[] = [];
    if (Array.isArray(course.lessons)) {
      lessons = course.lessons;
    } else if (typeof course.lessons === 'string') {
      try { lessons = JSON.parse(course.lessons); } catch(e) {}
    }
    return lessons;
  }

  uploadAdminDocument() {
    if (!this.docUploadForm.file) {
      alert('Please select a document file to upload.');
      return;
    }

    let courseTitle = '';
    if (this.docUploadForm.category === 'Mastery Battles' && this.docUploadForm.courseId) {
      const selectedCourseObj = this.courses.find(c => c.id == this.docUploadForm.courseId);
      courseTitle = selectedCourseObj ? selectedCourseObj.title : '';
    } else if (this.docUploadForm.category === 'Open Challenges' && this.docUploadForm.courseId) {
      const selectedChallengeObj = this.openChallenges.find(c => c.id == this.docUploadForm.courseId);
      courseTitle = selectedChallengeObj ? selectedChallengeObj.title : '';
    } else if (this.docUploadForm.category === 'School Competitions' && this.docUploadForm.courseId) {
      courseTitle = this.docUploadForm.courseId;
    }

    const formData = new FormData();
    formData.append('file', this.docUploadForm.file);
    formData.append('category', this.docUploadForm.category);
    formData.append('courseTitle', courseTitle);
    formData.append('moduleName', this.docUploadForm.moduleName || '');
    formData.append('title', this.docUploadForm.title || this.docUploadForm.file.name);

    this.http.post(`${environment.apiUrl}/upload/document`, formData).subscribe({
      next: (res: any) => {
        alert('Document uploaded successfully!');
        this.docUploadForm.title = '';
        this.docUploadForm.file = null;
        this.fetchAdminDocuments();
      },
      error: (err) => {
        console.error('Failed to upload document:', err);
        const errMsg = err.error?.error || err.error?.message || 'Failed to upload document.';
        alert(errMsg);
      }
    });
  }

  get publishedCoursesCount(): number {
    return this.courses.filter(c => c.visibility === 'Public').length;
  }

  checkLoading() {
    this.isLoading = false;
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getCourseDescriptionPreview(html: string): string {
    if (!html) {
      return '';
    }
    const stripped = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return stripped.length > 60 ? stripped.slice(0, 60) + '...' : stripped;
  }

  switchTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'projects') {
      this.fetchModuleProjects();
    } else if (tab === 'docUpload') {
      this.fetchAdminDocuments();
      this.fetchCourses();
    } else if (tab === 'leaderboard') {
      this.fetchAdminLeaderboard();
    }
  }

  getTabTitle(): string {
    switch(this.activeTab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'registrations': return 'Registration Entries';
      case 'users': return 'System Users';
      case 'courses': return 'Course Management';
      case 'projects': return 'Project Submissions';
      case 'docUpload': return 'Document Upload';
      case 'leaderboard': return 'Leaderboard Management';
      default: return 'Admin Dashboard';
    }
  }


  // LEADERBOARD ADMIN METHODS
  fetchAdminLeaderboard() {
    this.http.get(`${environment.apiUrl}/leaderboard/all`).subscribe({
      next: (data: any) => {
        if (data && data.success) {
          this.adminLeaderboardData = data.data;
        }
      },
      error: (err) => console.error('Error fetching admin leaderboard data:', err)
    });
  }

  addLeaderboardEntry() {
    if (!this.newLeaderboardEntry.ParticipantName || !this.newLeaderboardEntry.Country || this.newLeaderboardEntry.Score === null) {
      alert('Please fill out all required fields.');
      return;
    }
    this.http.post(`${environment.apiUrl}/leaderboard`, this.newLeaderboardEntry).subscribe({
      next: (res: any) => {
        alert('Entry added successfully!');
        this.fetchAdminLeaderboard();
        this.newLeaderboardEntry.ParticipantName = '';
        this.newLeaderboardEntry.Country = '';
        this.newLeaderboardEntry.TeamsCount = null;
        this.newLeaderboardEntry.Score = null;
        this.newLeaderboardEntry.Award = '';
      },
      error: (err) => {
        console.error('Error adding leaderboard entry:', err);
        alert('Failed to add entry.');
      }
    });
  }

  deleteLeaderboardEntry(id: number) {
    if (!confirm('Are you sure you want to delete this leaderboard entry?')) return;
    this.http.delete(`${environment.apiUrl}/leaderboard/${id}`).subscribe({
      next: () => {
        this.fetchAdminLeaderboard();
      },
      error: (err) => console.error('Error deleting entry:', err)
    });
  }



  isAddingTopic: boolean = false;
  newTopicData: any = {
    title: '',
    description: '',
    video: '',
    image: ''
  };

  // Module builder state
  expandedModules: Set<number> = new Set();
  activeModuleVideoIndex: number | null = null;
  activeSyllabusVideoIndex: number | null = null;

  selectedCourseForTopic: any = null;
  selectedCourseForAdditional: any = null;
  viewingAdditionalCourse: any = null;

  switchCourseTab(tab: string) {
    this.activeCourseTab = tab;
    // Reset topic view when switching tabs
    if (tab !== 'topic') {
      this.isAddingTopic = false;
      this.selectedCourseForTopic = null;
    }
    if (tab !== 'advanced') {
      this.selectedCourseForAdditional = null;
    }
  }

  selectCourseForTopic(course: any) {
    this.selectedCourseForTopic = { ...course };
    if (this.selectedCourseForTopic && typeof this.selectedCourseForTopic.lessons === 'string') {
      try {
        this.selectedCourseForTopic.lessons = JSON.parse(this.selectedCourseForTopic.lessons);
      } catch (e) {
        console.error('Failed to parse course lessons', e);
        this.selectedCourseForTopic.lessons = [];
      }
    }
    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }

    // Backwards-compat: migrate old flat lesson format [{title, duration, syllabus, video}]
    // to new module format [{moduleTitle, syllabusItems:[...]}]
    if (
      this.selectedCourseForTopic.lessons.length > 0 &&
      this.selectedCourseForTopic.lessons[0] !== null &&
      typeof this.selectedCourseForTopic.lessons[0] === 'object' &&
      !this.selectedCourseForTopic.lessons[0].hasOwnProperty('moduleTitle')
    ) {
      const oldLessons = this.selectedCourseForTopic.lessons;
      this.selectedCourseForTopic.lessons = [
        {
          moduleTitle: 'Module 1',
          syllabusItems: oldLessons.map((l: any) => ({
            title: l.title || '',
            duration: l.duration || '',
            description: l.syllabus || l.description || '',
            video: l.video || ''
          }))
        }
      ];
    }

    // Expand all modules by default
    this.expandedModules = new Set(
      this.selectedCourseForTopic.lessons.map((_: any, i: number) => i)
    );
    this.isAddingTopic = false;
  }

  selectCourseForAdditional(course: any) {
    this.selectedCourseForAdditional = course;
    // We could pre-fill additionalData here if it was fetched from the backend
  }

  // ── Module-level operations ──────────────────────────────

  addModule() {
    if (!this.selectedCourseForTopic) return;
    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }
    const newIndex = this.selectedCourseForTopic.lessons.length;
    this.selectedCourseForTopic.lessons.push({
      moduleTitle: `Module ${newIndex + 1}`,
      syllabusItems: []
    });
    this.expandedModules.add(newIndex);
  }

  removeModule(moduleIndex: number) {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons)) return;
    this.selectedCourseForTopic.lessons.splice(moduleIndex, 1);
    // Rebuild expanded set
    const newExpanded = new Set<number>();
    this.expandedModules.forEach(i => { if (i < moduleIndex) newExpanded.add(i); else if (i > moduleIndex) newExpanded.add(i - 1); });
    this.expandedModules = newExpanded;
  }

  toggleModule(moduleIndex: number) {
    if (this.expandedModules.has(moduleIndex)) {
      this.expandedModules.delete(moduleIndex);
    } else {
      this.expandedModules.add(moduleIndex);
    }
  }

  isModuleExpanded(moduleIndex: number): boolean {
    return this.expandedModules.has(moduleIndex);
  }

  // ── Syllabus Item operations ─────────────────────────────

  addSyllabusItem(moduleIndex: number) {
    if (!this.selectedCourseForTopic) return;
    const mod = this.selectedCourseForTopic.lessons[moduleIndex];
    if (!mod) return;
    if (!Array.isArray(mod.syllabusItems)) mod.syllabusItems = [];
    mod.syllabusItems.push({ title: '', duration: '', description: '', video: '' });
  }

  removeSyllabusItem(moduleIndex: number, itemIndex: number) {
    if (!this.selectedCourseForTopic) return;
    const mod = this.selectedCourseForTopic.lessons[moduleIndex];
    if (!mod || !Array.isArray(mod.syllabusItems)) return;
    mod.syllabusItems.splice(itemIndex, 1);
  }

  // Legacy method kept for backward compat calls in HTML
  addTopicLessonTab() {
    this.addModule();
  }

  removeTopicLesson(index: number) {
    this.removeModule(index);
  }

  toggleAddTopic(val: boolean) {
    this.isAddingTopic = val;
    if (val) {
      this.newTopicData = {
        title: '',
        description: '',
        video: '',
        image: this.selectedCourseForTopic?.displayImage || ''
      };
    }
  }



  openTopicLessonVideoUploader(index: number) {
    this.activeLessonVideoIndex = index;
    if (this.lessonVideoUploadInput?.nativeElement) {
      this.lessonVideoUploadInput.nativeElement.value = '';
      this.lessonVideoUploadInput.nativeElement.click();
    }
  }

  // New: open uploader for a specific syllabus item within a module
  openSyllabusVideoUploader(moduleIndex: number, itemIndex: number) {
    // encode both indices into a single number for the legacy upload handler
    this.activeModuleVideoIndex = moduleIndex;
    this.activeSyllabusVideoIndex = itemIndex;
    if (this.lessonVideoUploadInput?.nativeElement) {
      this.lessonVideoUploadInput.nativeElement.value = '';
      this.lessonVideoUploadInput.nativeElement.click();
    }
  }

  removeSyllabusVideo(moduleIndex: number, itemIndex: number) {
    const mod = this.selectedCourseForTopic?.lessons?.[moduleIndex];
    if (mod && Array.isArray(mod.syllabusItems) && mod.syllabusItems[itemIndex]) {
      mod.syllabusItems[itemIndex].video = '';
    }
  }

  getAttachedVideosCount(): number {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons)) return 0;
    let count = 0;
    for (const mod of this.selectedCourseForTopic.lessons) {
      if (Array.isArray(mod.syllabusItems)) {
        count += mod.syllabusItems.filter((s: any) => !!s.video).length;
      }
    }
    return count;
  }

  getModulesCount(): number {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons)) return 0;
    return this.selectedCourseForTopic.lessons.length;
  }

  getTotalSyllabusCount(): number {
    if (!this.selectedCourseForTopic || !Array.isArray(this.selectedCourseForTopic.lessons)) return 0;
    let count = 0;
    for (const mod of this.selectedCourseForTopic.lessons) {
      if (Array.isArray(mod.syllabusItems)) count += mod.syllabusItems.length;
    }
    return count;
  }

  isUploadingForModule(moduleIndex: number, itemIndex: number): boolean {
    return this.isUploadingLessonVideo &&
      this.activeModuleVideoIndex === moduleIndex &&
      this.activeSyllabusVideoIndex === itemIndex;
  }

  hasModuleVideos(mod: any): boolean {
    if (!mod || !Array.isArray(mod.syllabusItems)) return false;
    return mod.syllabusItems.some((s: any) => s.video && s.video.startsWith('http'));
  }

  removeLessonVideo(index: number) {
    if (this.selectedCourseForTopic && Array.isArray(this.selectedCourseForTopic.lessons) && this.selectedCourseForTopic.lessons[index]) {
      this.selectedCourseForTopic.lessons[index].video = '';
    }
  }

  onTopicLessonVideoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !this.selectedCourseForTopic) return;

    const formData = new FormData();
    formData.append('file', file);

    const modIdx = this.activeModuleVideoIndex;
    const sylIdx = this.activeSyllabusVideoIndex;
    this.isUploadingLessonVideo = true;

    this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
      next: (response) => {
        if (modIdx !== null && sylIdx !== null) {
          const mod = this.selectedCourseForTopic?.lessons?.[modIdx];
          if (mod && Array.isArray(mod.syllabusItems) && mod.syllabusItems[sylIdx]) {
            mod.syllabusItems[sylIdx].video = response.url;
          }
        }
        this.activeModuleVideoIndex = null;
        this.activeSyllabusVideoIndex = null;
        this.activeLessonVideoIndex = null;
        this.isUploadingLessonVideo = false;
        input.value = '';
      },
      error: (err) => {
        this.isUploadingLessonVideo = false;
        console.error('Failed to upload topic lesson video', err);
        alert('Failed to upload lesson video');
      }
    });
  }

  closeTopicModal() {
    this.selectedCourseForTopic = null;
    this.isAddingTopic = false;
  }

  saveTopic() {
    if (!this.newTopicData.title || !this.newTopicData.title.trim()) {
      alert('Topic title is required.');
      return;
    }

    const topicEntry: any = {
      title: this.newTopicData.title.trim(),
      syllabus: this.newTopicData.description || '',
      video: this.newTopicData.video || '',
      image: this.newTopicData.image || ''
    };

    if (!this.selectedCourseForTopic) {
      alert('No course selected for adding a topic.');
      return;
    }

    if (!Array.isArray(this.selectedCourseForTopic.lessons)) {
      this.selectedCourseForTopic.lessons = [];
    }
    this.selectedCourseForTopic.lessons.push(topicEntry);
    this.persistSelectedCourseForTopic('Topic added successfully!');
  }

  saveTopicChanges() {
    if (!this.selectedCourseForTopic) {
      alert('No topic selected to save.');
      return;
    }
    this.persistSelectedCourseForTopic('Topic saved successfully!');
  }

  persistSelectedCourseForTopic(successMessage: string) {
    if (!this.selectedCourseForTopic) {
      return;
    }

    const payload = {
      title: this.selectedCourseForTopic.title,
      description: this.selectedCourseForTopic.description || '',
      difficulty: this.selectedCourseForTopic.difficulty || 'Intermediate',
      pricing: this.selectedCourseForTopic.pricing || 'Free',
      visibility: this.selectedCourseForTopic.visibility || 'Public',
      is_public: this.selectedCourseForTopic.is_public !== undefined ? (this.selectedCourseForTopic.is_public ? 1 : 0) : 1,
      image: this.selectedCourseForTopic.image || '',
      about_the_track: this.selectedCourseForTopic.about_the_track || '',
      phase1: this.selectedCourseForTopic.phase1 || '',
      final: this.selectedCourseForTopic.final || '',
      extras: this.selectedCourseForTopic.extras || '',
      lessons: JSON.stringify(this.selectedCourseForTopic.lessons || []),
      what_will_i_learn: this.selectedCourseForTopic.what_will_i_learn || '',
      target_audience: this.selectedCourseForTopic.target_audience || '',
      duration_hours: Number(this.selectedCourseForTopic.duration_hours) || 0,
      duration_mins: Number(this.selectedCourseForTopic.duration_mins) || 0,
      materials_included: this.selectedCourseForTopic.materials_included || '',
      requirements: this.selectedCourseForTopic.requirements || '',
      lectures: this.getTotalSyllabusCount() || Number(this.selectedCourseForTopic.lectures) || 0,
      students_max: Number(this.selectedCourseForTopic.students_max) || 0,
      level: this.selectedCourseForTopic.level || 'All Levels',
      language: this.selectedCourseForTopic.language || 'English',
      certificate: this.selectedCourseForTopic.certificate || 'Yes'
    };

    this.http.put(`${environment.apiUrl}/courses/${this.selectedCourseForTopic.id}`, payload).subscribe({
      next: () => {
        this.fetchCourses();
        this.isAddingTopic = false;
        this.newTopicData = { title: '', description: '', video: '', image: '' };
        alert(successMessage);
      },
      error: (err) => {
        console.error('Failed to save topic:', err);
        alert('Failed to save topic. Please try again.');
      }
    });
  }

  viewAdditionalInfo(course: any) {
    this.viewingAdditionalCourse = course;
  }

  closeAdditionalModal() {
    this.viewingAdditionalCourse = null;
  }

  saveAdditional() {
    // Store in local state for now (can be linked to a specific course when selected)
    this.isSavingAdditional = true;
    console.log('Saving additional data:', this.additionalData);
    // Simulate a save confirmation
    setTimeout(() => {
      this.isSavingAdditional = false;
      alert('Additional course information saved!');
    }, 500);
  }

  toggleAddCourse(val?: boolean) {
    if (val !== undefined) {
      this.isAddingCourse = val;
    } else {
      this.isAddingCourse = !this.isAddingCourse;
    }
    if (this.isAddingCourse) {
      if (this.editingCourseId === -1) {
        this.newCourseData = {
          title: 'New Course',
          description: '',
          difficulty: 'Intermediate',
          isPublic: true,
          pricing: 'Free',
          visibility: 'Public',
          optionsTab: 'General',
          what_will_i_learn: '',
          target_audience: '',
          duration_hours: 0,
          duration_mins: 0,
          materials_included: '',
          requirements: '',
          about_the_track: '',
          phase1: '',
          final: '',
          extras: '',
          image: '',
          lessons: [],
          lectures: 0,
          students_max: 0,
          level: 'All Levels',
          language: 'English',
          certificate: 'Yes'
        };
      }
    } else {
      this.isAddingCourse = false;
      this.editingCourseId = -1;
      this.editingCourseIndex = -1;
    }
  }

  // --- Rich Text Editor Methods ---
  savedSelection: Range | null = null;

  saveSelection() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.savedSelection = selection.getRangeAt(0).cloneRange();
    }
  }

  restoreSelection() {
    const selection = window.getSelection();
    if (selection && this.savedSelection) {
      selection.removeAllRanges();
      selection.addRange(this.savedSelection);
      if (this.editorRef) {
        this.editorRef.nativeElement.focus();
      }
    }
  }

  execCommand(command: string, value: string = '') {
    this.restoreSelection();
    document.execCommand(command, false, value);
    this.updateDescriptionModel();
  }

  handleEditorCommand(command: string, value: string = '') {
    if (command !== 'formatBlock') {
      this.saveSelection();
    }
    this.execCommand(command, value);
  }

  createLink() {
    const url = prompt('Enter the link URL:');
    if (url) {
      this.execCommand('createLink', url);
    }
  }

  onEditorInput() {
    this.saveSelection();
    this.updateDescriptionModel();
  }

  updateDescriptionModel() {
    if (this.editorRef) {
      this.newCourseData.description = this.editorRef.nativeElement.innerHTML;
    }
  }

  triggerMediaUpload(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onMediaUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.execCommand('insertImage', response.url);
          input.value = ''; // Reset input
        },
        error: (err) => {
          console.error('Failed to upload media', err);
          alert('Failed to upload media');
        }
      });
    }
  }

  onTopicVideoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.newTopicData.video = response.url;
          input.value = ''; // Reset input
        },
        error: (err) => {
          console.error('Failed to upload topic video', err);
          alert('Failed to upload topic video');
        }
      });
    }
  }

  onTopicImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.newTopicData.image = response.url;
          input.value = ''; // Reset input
        },
        error: (err) => {
          console.error('Failed to upload topic image', err);
          alert('Failed to upload topic image');
        }
      });
    }
  }

  triggerLessonUpload(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onLessonVideoUpload(event: Event, lessonIndex: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          const lesson = this.newCourseData.lessons[lessonIndex];
          if (lesson) {
            lesson.video = response.url;
          }
          input.value = ''; // Reset input
        },
        error: (err) => {
          console.error('Failed to upload lesson video', err);
          alert('Failed to upload lesson video');
        }
      });
    }
  }

  addLesson() {
    if (!Array.isArray(this.newCourseData.lessons)) {
      this.newCourseData.lessons = [];
    }
    this.newCourseData.lessons.push({ title: '', duration: '', description: '', syllabus: '', video: '' });
  }

  removeLesson(index: number) {
    if (Array.isArray(this.newCourseData.lessons)) {
      this.newCourseData.lessons.splice(index, 1);
    }
  }

  triggerFeaturedImageUpload(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFeaturedImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      this.http.post<any>(`${environment.apiUrl}/upload`, formData).subscribe({
        next: (response) => {
          this.newCourseData.image = response.url;
          input.value = ''; // Reset input
        },
        error: (err) => {
          console.error('Failed to upload featured image', err);
          alert('Failed to upload featured image');
        }
      });
    }
  }

  saveCourse() {
    // Get the combined content from the editor
    const editorContent = this.editorRef?.nativeElement?.innerHTML || '';
    
    const payload = {
      title: this.newCourseData.title,
      description: editorContent,
      difficulty: this.newCourseData.difficulty,
      pricing: this.newCourseData.pricing,
      visibility: this.newCourseData.visibility,
      is_public: this.newCourseData.isPublic,
      what_will_i_learn: this.newCourseData.what_will_i_learn,
      target_audience: this.newCourseData.target_audience,
      duration_hours: Number(this.newCourseData.duration_hours) || 0,
      duration_mins: Number(this.newCourseData.duration_mins) || 0,
      materials_included: this.newCourseData.materials_included,
      requirements: this.newCourseData.requirements,
      about_the_track: this.newCourseData.about_the_track,
      phase1: this.newCourseData.phase1,
      final: this.newCourseData.final,
      extras: this.newCourseData.extras,
      image: this.newCourseData.image,
      lessons: this.newCourseData.lessons,
      lectures: Number(this.newCourseData.lectures) || 0,
      students_max: Number(this.newCourseData.students_max) || 0,
      level: this.newCourseData.level,
      language: this.newCourseData.language,
      certificate: this.newCourseData.certificate
    };

    if (this.editingCourseId >= 0) {
      // Update existing
      this.http.put(`${environment.apiUrl}/courses/${this.editingCourseId}`, payload).subscribe({
        next: () => {
          this.fetchCourses();
          this.editingCourseId = -1;
          this.editingCourseIndex = -1;
          this.isAddingCourse = false;
        },
        error: (err) => {
          console.error('Failed to update course:', err);
          alert('Failed to update course. Please try again.');
        }
      });
    } else {
      // Create new
      this.http.post(`${environment.apiUrl}/courses`, payload).subscribe({
        next: () => {
          this.fetchCourses();
          this.isAddingCourse = false;
        },
        error: (err) => {
          console.error('Failed to create course:', err);
          alert('Failed to create course. Please try again.');
        }
      });
    }
  }

  getSlug(title: string): string {
    if (!title) return '';
    return title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  }

  viewCourse(course: any) {
    this.selectedCourse = { ...course };
    if (this.selectedCourse && typeof this.selectedCourse.lessons === 'string') {
      try {
        this.selectedCourse.lessons = JSON.parse(this.selectedCourse.lessons);
      } catch (e) {
        console.error('Failed to parse course lessons', e);
        this.selectedCourse.lessons = [];
      }
    }
    if (!Array.isArray(this.selectedCourse.lessons)) {
      this.selectedCourse.lessons = [];
    }
    this.isAddingCourse = false;
    this.isViewingCourse = true;
  }

  closeCourseModal() {
    this.selectedCourse = null;
    this.isViewingCourse = false;
  }

  editCourse(index: number) {
    const course = this.courses[index];
    this.editingCourseId = course.id;
    this.editingCourseIndex = index;
    let lessonsData = [];
    if (typeof course.lessons === 'string') {
      try {
        lessonsData = JSON.parse(course.lessons);
      } catch (e) {
        console.error('Failed to parse course lessons', e);
        lessonsData = [];
      }
    } else if (Array.isArray(course.lessons)) {
      lessonsData = course.lessons;
    }

    this.newCourseData = {
      title: course.title,
      description: course.description || '',
      difficulty: course.difficulty || 'Intermediate',
      isPublic: !!course.is_public,
      pricing: course.pricing || 'Free',
      visibility: course.visibility || 'Public',
      optionsTab: 'General',
      what_will_i_learn: course.what_will_i_learn || '',
      target_audience: course.target_audience || '',
      duration_hours: course.duration_hours || 0,
      duration_mins: course.duration_mins || 0,
      materials_included: course.materials_included || '',
      requirements: course.requirements || '',
      about_the_track: course.about_the_track || '',
      phase1: course.phase1 || '',
      final: course.final || '',
      extras: course.extras || '',
      image: course.image || '',
      lessons: lessonsData,
      lectures: course.lectures || 0,
      students_max: course.students_max || 0,
      level: course.level || 'All Levels',
      language: course.language || 'English',
      certificate: course.certificate || 'Yes'
    };
    this.isAddingCourse = true;
    
    setTimeout(() => {
      if (this.editorRef) {
        // Combine description and about_the_track in the editor
        let combinedContent = this.newCourseData.description || '';
        if (this.newCourseData.about_the_track) {
          combinedContent += (combinedContent ? '<br><br>' : '') + this.newCourseData.about_the_track;
        }
        this.editorRef.nativeElement.innerHTML = combinedContent;
      }
    }, 0);
  }

  editCourseById(courseId: number) {
    const index = this.courses.findIndex(c => c.id === courseId);
    if (index !== -1) {
      this.editCourse(index);
    }
  }

  deleteCourse(index: number) {
    const course = this.courses[index];
    if (confirm(`Are you sure you want to delete "${course.title}"? This cannot be undone.`)) {
      this.http.delete(`${environment.apiUrl}/courses/${course.id}`).subscribe({
        next: () => this.fetchCourses(),
        error: (err) => {
          console.error('Failed to delete course:', err);
          alert('Failed to delete course. Please try again.');
        }
      });
    }
  }

  get filteredRegistrations() {
    if (this.selectedTypeFilter === 'all') return this.registrations;
    return this.registrations.filter(r => r.registration_type === this.selectedTypeFilter);
  }

  get registrationsCount() {
    return {
      all: this.registrations.length,
      school: this.registrations.filter(r => r.registration_type === 'school').length,
      individual: this.registrations.filter(r => r.registration_type === 'individual').length
    };
  }

  setTypeFilter(type: string) {
    this.selectedTypeFilter = type;
  }

  viewParticipant(reg: any) {
    this.selectedParticipant = { ...reg };
    if (this.selectedParticipant.teams_data && typeof this.selectedParticipant.teams_data === 'string') {
        try {
            this.selectedParticipant.parsedTeams = JSON.parse(this.selectedParticipant.teams_data);
        } catch (e) {
            console.error('Failed to parse teams data', e);
        }
    }
  }

  objectKeys(obj: any): string[] {
    if (!obj) return [];
    return Object.keys(obj).filter(key => obj[key] && obj[key].trim() !== '');
  }

  getGroupedTeams(studentNames: any): { teamName: string, members: { label: string, name: string }[] }[] {
    if (!studentNames) return [];
    const grouped: any = {};
    
    for (const key of Object.keys(studentNames)) {
      const name = studentNames[key];
      if (!name || name.trim() === '') continue;

      const parts = key.split('-');
      if (parts.length === 3) {
        const category = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        const teamNum = parseInt(parts[1]) + 1;
        const memberNum = parts[2];
        
        const teamName = `${category} Team ${teamNum}`;
        if (!grouped[teamName]) grouped[teamName] = [];
        grouped[teamName].push({ label: `Member ${memberNum}`, name: name });
      }
    }
    
    // Convert to array of objects for easier iteration in Angular template
    return Object.keys(grouped).map(teamName => ({
      teamName,
      members: grouped[teamName]
    }));
  }

  deleteParticipant(id: number) {
    if (confirm('Are you sure you want to delete this registration? This action cannot be undone.')) {
      this.http.delete(`${environment.apiUrl}/admin/registrations/${id}`).subscribe({
        next: () => {
          this.fetchData();
        },
        error: (err) => {
          console.error('Failed to delete registration', err);
          alert('Failed to delete registration. Please try again.');
        }
      });
    }
  }

  closeModal() {
    this.selectedParticipant = null;
  }

  editUser(user: any) {
    this.selectedUser = { ...user };
  }

  closeUserModal() {
    this.selectedUser = null;
  }

  saveUser(role: string) {
    if (!this.selectedUser) return;
    
    this.http.put(`${environment.apiUrl}/admin/users/${this.selectedUser.id}`, { role }).subscribe({
      next: () => {
        this.fetchData();
        this.closeUserModal();
      },
      error: (err) => {
        console.error('Failed to update user', err);
        alert('Failed to update user. Please try again.');
      }
    });
  }

  logout() {
    // Navigate back to the login page
    this.router.navigate(['/login']);
  }
}
