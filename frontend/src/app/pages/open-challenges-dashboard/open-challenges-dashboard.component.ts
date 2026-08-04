import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-open-challenges-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-challenges-dashboard.component.html',
  styleUrls: ['./open-challenges-dashboard.component.css']
})
export class OpenChallengesDashboardComponent implements OnInit {
  activeTab = 'home';
  participantName = 'Jordan Smith';
  selectedChallenge = 'Storytelling Challenge';
  registrationId = 'OC-2024-78934';

  selectedVideo: File | null = null;
  selectedImage: File | null = null;
  summary: string = '';

  videoError: string = '';
  imageError: string = '';
  uploadSuccess: boolean = false;
  isUploading: boolean = false;
  uploadProgress: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const name = localStorage.getItem('openChallengeParticipantName');
    const challenge = localStorage.getItem('openChallengeSelectedChallenge');
    const regId = localStorage.getItem('openChallengeRegistrationId');

    if (name) this.participantName = name;
    if (challenge) this.selectedChallenge = challenge;
    if (regId) this.registrationId = regId;
  }

  onFileSelected(event: any, type: 'video' | 'image'): void {
    const file = event.target.files[0];
    if (!file) return;

    if (type === 'video') {
      if (!file.type.startsWith('video/')) {
        this.videoError = 'Invalid format. Only video files (MP4, MOV, WebM) are allowed.';
        this.selectedVideo = null;
        return;
      }
      
      const maxVideoSize = 500 * 1024 * 1024; // 500 MB
      if (file.size > maxVideoSize) {
        this.videoError = 'Video file size exceeds the 500 MB limit.';
        this.selectedVideo = null;
      } else {
        this.videoError = '';
        this.selectedVideo = file;
      }
    } else if (type === 'image') {
      if (file.type !== 'application/pdf' && !file.type.startsWith('image/')) {
        this.imageError = 'Invalid format. Only Images (JPG, PNG) or PDFs are allowed.';
        this.selectedImage = null;
        return;
      }

      const maxImageSize = 20 * 1024 * 1024; // 20 MB
      if (file.size > maxImageSize) {
        this.imageError = 'Image file size exceeds the 20 MB limit.';
        this.selectedImage = null;
      } else {
        this.imageError = '';
        this.selectedImage = file;
      }
    }
  }

  onSummaryChange(event: any): void {
    this.summary = event.target.value;
  }

  triggerFileInput(inputId: string): void {
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onSubmitEntry(): void {
    if (!this.selectedVideo) {
      alert('Please upload a video entry.');
      return;
    }
    
    const dbRegId = localStorage.getItem('openChallengeRegistrationDbId');
    if (!dbRegId) {
      alert('Your registration could not be found. Please register again or log in.');
      return;
    }

    const formData = new FormData();
    formData.append('video', this.selectedVideo);
    if (this.selectedImage) {
      formData.append('poster', this.selectedImage);
    }
    formData.append('summary', this.summary);

    this.isUploading = true;
    this.uploadProgress = 0;

    // Importing HttpEventType locally to avoid changing the main imports block if not needed
    // or we can assume 1 is UploadProgress and 4 is Response based on Angular source code
    // Actually, we'll just check event.type
    this.http.post(`http://localhost:5001/api/challenges/upload/${dbRegId}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe({
      next: (event: any) => {
        if (event.type === 1) { // HttpEventType.UploadProgress
          if (event.total) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          }
        } else if (event.type === 4) { // HttpEventType.Response
          this.isUploading = false;
          this.uploadSuccess = true;
          setTimeout(() => {
            this.uploadSuccess = false;
            this.selectedVideo = null;
            this.selectedImage = null;
            this.summary = '';
            this.uploadProgress = 0;
            this.activeTab = 'home';
          }, 3000);
        }
      },
      error: (err) => {
        this.isUploading = false;
        this.uploadProgress = 0;
        console.error('Upload failed', err);
        alert('Upload failed. Please try again.');
      }
    });
  }
}
