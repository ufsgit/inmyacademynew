import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Team {
  name: string;
  category: 'Trailblazers' | 'Visioneers' | 'Strategists';
  studentsCount: number;
  maxStudents: number;
  status: string;
  filesUploaded: number;
  totalFilesRequired: number;
  files: string[];
  members: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-school-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Top Custom Header for Dashboard (matches SkillStorm branding) -->
    <header style="background: #FFFFFF; border-bottom: 1px solid #E8E8E8; padding: 16px 24px; font-family: 'Poppins', 'Inter', sans-serif;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;">
        
        <!-- Logo -->
        <div style="display: flex; align-items: center; gap: 8px; cursor: pointer;" routerLink="/skillstorm/open-challenges">
          <div style="width: 32px; height: 32px; background: #D32F2F; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: 900; font-size: 18px;">
            S
          </div>
          <span style="font-size: 20px; font-weight: 800; color: #111111; letter-spacing: -0.02em;">SkillStorm</span>
        </div>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" style="display: flex; align-items: center; gap: 28px;">
          <div style="position: relative; display: flex; align-items: center; gap: 4px; font-size: 14px; font-weight: 500; color: #666666; cursor: pointer;">
            Competitions
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 9l-7 7-7-7"/></svg>
          </div>
          <a href="#" style="font-size: 14px; font-weight: 500; color: #666666; text-decoration: none;">Courses</a>
          <a href="#" style="font-size: 14px; font-weight: 500; color: #666666; text-decoration: none;">Leaderboard</a>
          <a href="#" style="font-size: 14px; font-weight: 500; color: #666666; text-decoration: none;">About</a>
          <a href="#" style="font-size: 14px; font-weight: 500; color: #666666; text-decoration: none;">Contact</a>
        </nav>

      </div>
    </header>

    <!-- Main Content Container -->
    <div style="background: #FAFAF9; min-height: 100vh; padding: 32px 24px; font-family: 'Poppins', 'Inter', sans-serif;">
      <div style="max-width: 1000px; margin: 0 auto;">
        
        <!-- Back Link -->
        <a routerLink="/skillstorm/school-competitions" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #D32F2F; text-decoration: none; margin-bottom: 24px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to School Competitions
        </a>

        <!-- Header Titles -->
        <h1 style="font-size: 32px; font-weight: 800; color: #000000; margin: 0 0 8px 0; letter-spacing: -0.01em;">
          School Competition Dashboard
        </h1>
        <p style="font-size: 15px; color: #666666; margin: 0 0 36px 0; line-height: 1.6;">
          Welcome to your SkillStorm school portal. Manage your teams, access competition materials, and upload online phase submissions from one place.
        </p>

        <!-- Tabs Navigation -->
        <div class="tabs-nav" style="display: flex; border-bottom: 1px solid #E5E7EB; margin-bottom: 32px; gap: 32px;">
          <button (click)="activeTab = 'home'" [class.active-tab]="activeTab === 'home'" class="tab-btn">Home</button>
          <button (click)="activeTab = 'teams'" [class.active-tab]="activeTab === 'teams'" class="tab-btn">Manage Teams</button>
          <button (click)="activeTab = 'submissions'" [class.active-tab]="activeTab === 'submissions'" class="tab-btn">Upload Submissions</button>
          <button (click)="activeTab = 'kits'" [class.active-tab]="activeTab === 'kits'" class="tab-btn">Download Kits</button>
          <button (click)="activeTab = 'messages'" [class.active-tab]="activeTab === 'messages'" class="tab-btn">Messages</button>
        </div>

        <!-- ==================== HOME TAB VIEW ==================== -->
        <div *ngIf="activeTab === 'home'">
          
          <!-- Key Metrics Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 32px;">
            
            <div class="metric-card">
              <span class="metric-label">School Name</span>
              <span class="metric-val">{{ schoolName }}</span>
            </div>

            <div class="metric-card">
              <span class="metric-label">Registration ID</span>
              <span class="metric-val">{{ registrationId }}</span>
            </div>

            <div class="metric-card">
              <span class="metric-label">Teams Registered</span>
              <span class="metric-val">{{ teams.length }}</span>
            </div>

            <div class="metric-card">
              <span class="metric-label">Current Phase</span>
              <span class="metric-val">Online Phase</span>
            </div>

          </div>

          <!-- Deadline Notification Box (red border, very light pink background) -->
          <div style="background: #FFF5F5; border: 1px solid #FEE2E2; border-radius: 12px; padding: 24px 32px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
            <div>
              <div style="font-size: 15px; font-weight: 700; color: #111111; margin-bottom: 4px;">Next Submission Deadline</div>
              <div style="font-size: 14px; color: #666666;">2024-04-15</div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 16px;">
              <span style="background: #FFFFFF; border: 1px solid #EF4444; color: #EF4444; border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 700;">
                Time Sensitive
              </span>
              <span style="color: #EF4444; font-weight: 700; font-size: 15px; display: flex; align-items: center; gap: 6px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                -743 days remaining
              </span>
            </div>
          </div>

          <!-- Categories Entered -->
          <div style="background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; padding: 28px 32px; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(0,0,0,0.02);">
            <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 20px 0;">Categories Entered</h3>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <span *ngFor="let cat of categoriesEntered" class="category-badge">{{ cat }}</span>
              <span *ngIf="categoriesEntered.length === 0" style="font-size:14px; color:#999;">No categories registered yet.</span>
            </div>
          </div>

          <!-- Competition Documents -->
          <div style="background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; padding: 28px 32px; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(0,0,0,0.02);">
            <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
              </svg>
              Competition Documents
            </h3>
            
            <div *ngIf="adminDocuments.length === 0" style="font-size: 14px; color: #666666; font-style: italic;">
              No documents available yet.
            </div>

            <ul *ngIf="adminDocuments.length > 0" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
              <li *ngFor="let doc of adminDocuments" style="background: #FAFAFA; border: 1px solid #E5E7EB; border-radius: 8px; padding: 12px 16px;">
                <a href="javascript:void(0)" (click)="viewDocument(doc, $event)" style="display: flex; align-items: center; gap: 8px; color: #D32F2F; text-decoration: none; font-size: 14px; font-weight: 600;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
                  </svg>
                  {{ doc.title || 'Document' }}
                </a>
              </li>
            </ul>

            <!-- Document Viewer -->
            <div *ngIf="selectedDocument" style="margin-top: 24px; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background: #fafafa;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h5 style="margin: 0; font-size: 16px; font-weight: 700; color: #111111;">{{ selectedDocument.title || 'Document View' }}</h5>
                <button (click)="selectedDocument = null" style="background: transparent; border: none; font-size: 24px; cursor: pointer; color: #6b7280; line-height: 1;">&times;</button>
              </div>
              
              <ng-container *ngIf="isPdf(selectedDocument.file_path)">
                <iframe [src]="getSafeUrl(selectedDocument.file_path)" width="100%" height="600px" style="border: none; border-radius: 8px;"></iframe>
              </ng-container>

              <ng-container *ngIf="isImage(selectedDocument.file_path)">
                <img [src]="selectedDocument.file_path" style="max-width: 100%; border-radius: 8px;" />
              </ng-container>

              <ng-container *ngIf="isVideo(selectedDocument.file_path)">
                <video controls width="100%" style="border-radius: 8px;">
                  <source [src]="selectedDocument.file_path" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </ng-container>

              <ng-container *ngIf="!isPdf(selectedDocument.file_path) && !isImage(selectedDocument.file_path) && !isVideo(selectedDocument.file_path)">
                <div style="text-align: center; padding: 40px 20px;">
                  <p style="color: #666666; margin-bottom: 16px;">Preview not available for this file type.</p>
                  <a [href]="selectedDocument.file_path" target="_blank" style="display: inline-block; padding: 10px 20px; background: #D32F2F; color: white; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">Download / Open File</a>
                </div>
              </ng-container>
            </div>
          </div>

          <!-- Latest Notifications -->
          <div style="background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; padding: 28px 32px; box-shadow: 0 1px 4px rgba(0,0,0,0.02);">
            <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
              Latest Notifications
            </h3>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              
              <!-- Notification 1 (Deadline Reminder - Pinkish background) -->
              <div style="background: #FFF5F5; border: 1px solid #FEE2E2; border-radius: 8px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                <div>
                  <div style="font-size: 14px; font-weight: 700; color: #111111; margin-bottom: 4px;">Submission Deadline Reminder</div>
                  <div style="font-size: 13px; color: #666666;">Your Trailblazers team submission is due in 5 days.</div>
                </div>
                <span style="font-size: 12px; color: #999999; font-weight: 500;">2024-03-10</span>
              </div>

              <!-- Notification 2 (Normal Info) -->
              <div style="background: #FAFAFA; border: 1px solid #EBEBEB; border-radius: 8px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                <div>
                  <div style="font-size: 14px; font-weight: 700; color: #111111; margin-bottom: 4px;">Team Approved</div>
                  <div style="font-size: 13px; color: #666666;">Your Visioneers team has been approved for competition.</div>
                </div>
                <span style="font-size: 12px; color: #999999; font-weight: 500;">2024-03-08</span>
              </div>

              <!-- Notification 3 (Normal Info) -->
              <div style="background: #FAFAFA; border: 1px solid #EBEBEB; border-radius: 8px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                <div>
                  <div style="font-size: 14px; font-weight: 700; color: #111111; margin-bottom: 4px;">Update Available</div>
                  <div style="font-size: 13px; color: #666666;">New competition guidelines are available for download.</div>
                </div>
                <span style="font-size: 12px; color: #999999; font-weight: 500;">2024-03-05</span>
              </div>

            </div>
          </div>

        </div>

        <!-- ==================== MANAGE TEAMS TAB VIEW ==================== -->
        <div *ngIf="activeTab === 'teams'">
          <h2 style="font-size: 20px; font-weight: 800; color: #111111; margin: 0 0 8px 0;">Manage Teams</h2>
          <p style="font-size: 14px; color: #666666; margin: 0 0 24px 0;">View and manage all your registered teams</p>

          <div *ngIf="teams.length === 0" style="text-align: center; padding: 48px; color: #AAAAAA; font-size: 14px; font-style: italic;">
            No teams registered yet. Complete the registration wizard to add teams.
          </div>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div *ngFor="let team of teams" style="background: #FFFFFF; border: 1px solid #E0E0E0; border-radius: 12px; padding: 24px 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
                
                <!-- Left: Team info -->
                <div>
                  <h3 style="font-size: 17px; font-weight: 700; color: #111111; margin: 0 0 6px 0;">{{ team.name }}</h3>
                  <div style="font-size: 13px; color: #555555; margin-bottom: 4px;">
                    Category: <span style="color: #D32F2F; font-weight: 600;">{{ team.category }}</span>
                  </div>
                  <div style="font-size: 13px; color: #555555; margin-bottom: 6px;">
                    Students: <strong>{{ team.studentsCount }} / {{ team.maxStudents }}</strong>
                  </div>
                  <div>
                    <span style="background: #D32F2F; color: #FFFFFF; border-radius: 5px; padding: 3px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
                      {{ team.status }}
                    </span>
                  </div>
                </div>

                <!-- Right: Action Buttons -->
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <!-- Add Student Names -->
                  <button (click)="openAddStudentModal(team)" style="display: flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1px solid #D1D5DB; border-radius: 7px; padding: 8px 14px; font-size: 13px; font-weight: 500; color: #111111; cursor: pointer; font-family: inherit; transition: background 0.15s;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <line x1="23" y1="11" x2="17" y2="11"/>
                      <line x1="20" y1="8" x2="20" y2="14"/>
                    </svg>
                    Add Student Names
                  </button>

                  <!-- Edit -->
                  <button style="display: flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1px solid #D1D5DB; border-radius: 7px; padding: 8px 14px; font-size: 13px; font-weight: 500; color: #111111; cursor: pointer; font-family: inherit; transition: background 0.15s;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                    Edit
                  </button>

                  <!-- View -->
                  <button style="display: flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1px solid #D1D5DB; border-radius: 7px; padding: 8px 14px; font-size: 13px; font-weight: 500; color: #111111; cursor: pointer; font-family: inherit; transition: background 0.15s;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>


        <!-- ==================== UPLOAD SUBMISSIONS TAB VIEW ==================== -->
        <div *ngIf="activeTab === 'submissions'">
          <h2 style="font-size: 20px; font-weight: 800; color: #111111; margin: 0 0 8px 0;">Upload Submissions</h2>
          <p style="font-size: 14px; color: #666666; margin: 0 0 24px 0;">Upload submissions for different stages. File naming: [TeamName]_[StageName]</p>

          <!-- File Naming Format Box -->
          <div style="background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; padding: 24px 28px; margin-bottom: 24px;">
            <div style="font-size: 13px; font-weight: 700; color: #111111; margin-bottom: 12px;">File Naming Format:</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 13px; color: #666666;">
              <div style="border: 1px solid #E5E7EB; padding: 10px 14px; border-radius: 6px; background: #FAFAFA;">Example: <strong>Team1_(Online Round 1)</strong></div>
              <div style="border: 1px solid #E5E7EB; padding: 10px 14px; border-radius: 6px; background: #FAFAFA;">Example: <strong>Team1_(Online Round 2)</strong></div>
              <div style="border: 1px solid #E5E7EB; padding: 10px 14px; border-radius: 6px; background: #FAFAFA;">Example: <strong>Team1_(Online Round 3)</strong></div>
              <div style="border: 1px solid #E5E7EB; padding: 10px 14px; border-radius: 6px; background: #FAFAFA;">Example: <strong>Team1_(Finale Round)</strong></div>
            </div>
          </div>

          <!-- Teams Upload Cards -->
          <div style="display: flex; flex-direction: column; gap: 16px;">
            
            <div *ngFor="let team of teams" style="background: #FFFFFF; border: 1px solid #E8E8E8; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.02);">
              
              <!-- Card Header -->
              <div style="padding: 24px 32px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #F3F4F6; flex-wrap: wrap; gap: 16px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <h3 style="font-size: 18px; font-weight: 700; color: #111111; margin: 0;">{{ team.name }}</h3>
                    <span style="background: #F3F4F6; border-radius: 12px; padding: 2px 8px; font-size: 11px; font-weight: 600; color: #666666;">
                      {{ team.filesUploaded }} of {{ team.totalFilesRequired }} files
                    </span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px; font-size: 13px; color: #666666;">
                    <span>Category: <strong>{{ team.category }}</strong></span>
                    <span style="width: 4px; height: 4px; border-radius: 50%; background: #CCCCCC;"></span>
                    <span>Deadline: <strong>2024-04-15</strong></span>
                  </div>
                </div>

                <button (click)="team.expanded = !team.expanded" class="action-btn">
                  {{ team.expanded ? 'Collapse' : 'Expand' }}
                </button>
              </div>

              <!-- Card Body (Expanded Upload Details) -->
              <div *ngIf="team.expanded" style="padding: 24px 32px; background: #FAFAFA;">
                
                <!-- Uploaded Files List -->
                <div *ngIf="team.files.length > 0" style="margin-bottom: 20px;">
                  <div style="font-size: 13px; font-weight: 700; color: #333333; margin-bottom: 8px;">Uploaded Files:</div>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div *ngFor="let file of team.files; let idx = index" style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 6px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
                      <span style="font-size: 13px; color: #111111; font-weight: 500;">{{ file }}</span>
                      <button (click)="deleteFile(team, idx)" style="background: none; border: none; color: #EF4444; cursor: pointer; font-size: 13px; font-weight: 600;">Delete</button>
                    </div>
                  </div>
                </div>

                <!-- Upload File Box -->
                <div>
                  <div style="font-size: 13px; font-weight: 700; color: #333333; margin-bottom: 8px;">Upload New File:</div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <input type="file" (change)="onFileSelected($event, team)" style="display: none;" #fileInput />
                    <button (click)="fileInput.click()" class="action-btn" style="background: #F3F4F6; color: #333333;">Choose File</button>
                    <span style="font-size: 13px; color: #666666;">No file chosen</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        <!-- ==================== DOWNLOAD KITS TAB VIEW ==================== -->
        <div *ngIf="activeTab === 'kits'">
          <h2 style="font-size: 20px; font-weight: 800; color: #111111; margin: 0 0 8px 0;">Download Competition Kits</h2>
          <p style="font-size: 14px; color: #666666; margin: 0 0 24px 0;">Access all competition materials and resources</p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            
            <!-- Card 1 -->
            <div class="kit-download-card">
              <div style="flex: 1;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 6px 0;">Competition Handbook</h3>
                <p style="font-size: 13px; color: #666666; margin: 0 0 16px 0;">Complete rules, guidelines, and competition overview</p>
                <span style="font-size: 12px; color: #999999; font-weight: 600; text-transform: uppercase;">PDF • 2.5 MB</span>
              </div>
              <button class="kit-red-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download
              </button>
            </div>

            <!-- Card 2 -->
            <div class="kit-download-card">
              <div style="flex: 1;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 6px 0;">Teacher / Coordinator Kit</h3>
                <p style="font-size: 13px; color: #666666; margin: 0 0 16px 0;">Resources for educators and coordinators</p>
                <span style="font-size: 12px; color: #999999; font-weight: 600; text-transform: uppercase;">ZIP • 5.8 MB</span>
              </div>
              <button class="kit-red-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download
              </button>
            </div>

            <!-- Card 3 -->
            <div class="kit-download-card">
              <div style="flex: 1;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 6px 0;">Task Briefs</h3>
                <p style="font-size: 13px; color: #666666; margin: 0 0 16px 0;">Detailed task descriptions for all categories</p>
                <span style="font-size: 12px; color: #999999; font-weight: 600; text-transform: uppercase;">PDF • 1.2 MB</span>
              </div>
              <button class="kit-red-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download
              </button>
            </div>

            <!-- Card 4 -->
            <div class="kit-download-card">
              <div style="flex: 1;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 6px 0;">Submission Guidelines</h3>
                <p style="font-size: 13px; color: #666666; margin: 0 0 16px 0;">How to prepare and submit entries</p>
                <span style="font-size: 12px; color: #999999; font-weight: 600; text-transform: uppercase;">PDF • 0.8 MB</span>
              </div>
              <button class="kit-red-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download
              </button>
            </div>

            <!-- Card 5 -->
            <div class="kit-download-card">
              <div style="flex: 1;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0 0 6px 0;">Branding / Poster Pack</h3>
                <p style="font-size: 13px; color: #666666; margin: 0 0 16px 0;">Marketing materials and promotional assets</p>
                <span style="font-size: 12px; color: #999999; font-weight: 600; text-transform: uppercase;">ZIP • 15.3 MB</span>
              </div>
              <button class="kit-red-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download
              </button>
            </div>

          </div>
        </div>

        <!-- ==================== MESSAGES TAB VIEW ==================== -->
        <div *ngIf="activeTab === 'messages'">
          <h2 style="font-size: 20px; font-weight: 800; color: #111111; margin: 0 0 8px 0;">Messages & Notifications</h2>
          <p style="font-size: 14px; color: #666666; margin: 0 0 24px 0;">Stay updated with deadline reminders, approvals, and competition updates</p>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            
            <!-- Message 1 -->
            <div style="background: #FAFAFA; border: 1px solid #EBEBEB; border-radius: 12px; padding: 24px 32px; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; width: 100%;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0;">Submission Deadline Reminder</h3>
                <span style="background: #D32F2F; color: #FFFFFF; border-radius: 6px; padding: 2px 8px; font-size: 11px; font-weight: 700; text-transform: uppercase;">New</span>
              </div>
              <p style="font-size: 13.5px; color: #666666; margin: 0 0 16px 0; line-height: 1.5;">Your Trailblazers team submission is due in 5 days.</p>
              <span style="font-size: 12px; color: #999999; font-weight: 500;">2024-03-10</span>
            </div>

            <!-- Message 2 -->
            <div style="background: #FAFAFA; border: 1px solid #EBEBEB; border-radius: 12px; padding: 24px 32px; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; width: 100%;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0;">Team Approved</h3>
              </div>
              <p style="font-size: 13.5px; color: #666666; margin: 0 0 16px 0; line-height: 1.5;">Your Visioneers team has been approved for competition.</p>
              <span style="font-size: 12px; color: #999999; font-weight: 500;">2024-03-08</span>
            </div>

            <!-- Message 3 -->
            <div style="background: #FAFAFA; border: 1px solid #EBEBEB; border-radius: 12px; padding: 24px 32px; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; width: 100%;">
                <h3 style="font-size: 16px; font-weight: 700; color: #111111; margin: 0;">Update Available</h3>
              </div>
              <p style="font-size: 13.5px; color: #666666; margin: 0 0 16px 0; line-height: 1.5;">New competition guidelines are available for download.</p>
              <span style="font-size: 12px; color: #999999; font-weight: 500;">2024-03-05</span>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Student Addition Modal -->
    <div *ngIf="showAddModal" class="modal-overlay">
      <div class="modal-content">
        <h3 style="font-size: 18px; font-weight: 700; color: #111111; margin-top: 0; margin-bottom: 4px;">
          {{ selectedTeam?.name }}
        </h3>
        <p style="font-size: 13px; color: #888; margin: 0 0 20px 0;">Category: <strong>{{ selectedTeam?.category }}</strong></p>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
          <div *ngFor="let idx of [0,1,2,3,4]" style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 13px; font-weight: 600; color: #666666; width: 80px; flex-shrink: 0;">
              {{ idx === 0 ? 'Team Lead' : 'Member ' + (idx + 1) }}:
            </span>
            <input
              type="text"
              [value]="getMemberName(idx)"
              (input)="updateMember($event, idx)"
              [placeholder]="idx === 0 ? 'Team lead name (optional)' : 'Student name (optional)'"
              style="flex: 1; border: 1px solid #DDD; border-radius: 6px; padding: 8px 12px; font-size: 13.5px; outline: none;"
            />
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px;">
          <button (click)="closeAddStudentModal()" class="action-btn" style="background: #F3F4F6; color: #333333;">Cancel</button>
          <button (click)="saveStudents()" class="action-btn" style="background: #D32F2F; color: white;">Save Students</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tab-btn {
      background: none;
      border: none;
      padding: 12px 0;
      font-size: 14.5px;
      font-weight: 600;
      color: #666666;
      cursor: pointer;
      font-family: 'Poppins', 'Inter', sans-serif;
      position: relative;
      outline: none;
    }
    .tab-btn:hover {
      color: #000000;
    }
    .tab-btn.active-tab {
      color: #D32F2F;
    }
    .tab-btn.active-tab::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: #D32F2F;
    }

    .metric-card {
      background: #FFFFFF;
      border: 1px solid #E8E8E8;
      border-radius: 10px;
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 4px rgba(0,0,0,0.02);
    }
    .metric-label {
      font-size: 12px;
      font-weight: 600;
      color: #888888;
      margin-bottom: 6px;
    }
    .metric-val {
      font-size: 16px;
      font-weight: 700;
      color: #111111;
    }

    .category-badge {
      border: 1px solid #E5E7EB;
      background: #FAFAFA;
      color: #333333;
      font-size: 13.5px;
      font-weight: 500;
      border-radius: 6px;
      padding: 8px 18px;
    }

    .action-btn {
      background: #FFFFFF;
      color: #000000;
      border: 1px solid rgba(15, 37, 110, 0.1);
      border-radius: 8px;
      padding: 10px 18px;
      font-size: 12.5px;
      font-weight: 500;
      cursor: pointer;
      font-family: 'Poppins','Inter',sans-serif;
      transition: background 0.2s;
    }
    .action-btn:hover {
      background: #F9FAFB;
    }

    .kit-card {
      background: #FFFFFF;
      border: 1px solid #E8E8E8;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.02);
    }

    .kit-download-card {
      background: #FFFFFF;
      border: 1px solid #E8E8E8;
      border-radius: 12px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 1px 4px rgba(0,0,0,0.02);
      gap: 16px;
    }
    .kit-red-btn {
      background: #D32F2F;
      color: #FFFFFF;
      border: none;
      border-radius: 6px;
      padding: 10px 20px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      font-family: 'Poppins', 'Inter', sans-serif;
    }
    .kit-red-btn:hover {
      background: #B71C1C;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal-content {
      background: #FFFFFF;
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 520px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      .tabs-nav {
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 8px;
        gap: 16px !important;
      }
      .tab-btn {
        flex-shrink: 0;
      }
    }
  `]
})
export class SchoolDashboardComponent implements OnInit {
  private http = inject(HttpClient);

  activeTab: 'home' | 'teams' | 'submissions' | 'kits' | 'messages' = 'home';
  showAddModal = false;
  selectedTeam: Team | null = null;
  schoolName: string = '';
  registrationId: string = '';
  coordinatorName: string = '';
  coordinatorEmail: string = '';
  schoolEmail: string = '';
  schoolCountry: string = '';
  schoolCity: string = '';
  categoriesEntered: string[] = [];

  adminDocuments: any[] = [];
  selectedDocument: any = null;

  teams: Team[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // 1. Load school info from localStorage (set during registration)
    const savedRegRaw = localStorage.getItem('schoolRegistrationData');
    if (savedRegRaw) {
      try {
        const reg = JSON.parse(savedRegRaw);
        this.schoolName = reg.schoolName || '';
        this.schoolEmail = reg.schoolEmail || '';
        this.schoolCountry = reg.schoolCountry || '';
        this.schoolCity = reg.schoolCity || '';
        this.coordinatorName = reg.coordinatorName || '';
        this.coordinatorEmail = reg.coordinatorEmail || '';
      } catch (e) {}
    }

    // Fallback: try openChallengeParticipantName
    if (!this.schoolName) {
      this.schoolName = localStorage.getItem('openChallengeParticipantName') || 'My School';
    }

    // 2. Load registration ID
    this.registrationId = localStorage.getItem('openChallengeRegistrationId') || '';

    // 3. Build teams dynamically from teamsData saved during registration
    const teamsDataRaw = localStorage.getItem('schoolTeamsData');
    if (teamsDataRaw) {
      try {
        const teamsData = JSON.parse(teamsDataRaw);
        this.buildTeamsFromData(teamsData);
      } catch (e) {}
    }

    // 4. If we have a numeric registration ID, fetch from backend for fresh data
    const numId = this.registrationId ? this.registrationId.split('-').pop() : null;
    if (numId && /^\d+$/.test(numId)) {
      this.http.get<any>(`http://localhost:5001/api/challenges/registration/${numId}`).subscribe({
        next: (res) => {
          if (res.full_name) this.schoolName = res.full_name;
          if (res.country) this.schoolCountry = res.country;
          if (res.city) this.schoolCity = res.city;
          if (res.email) this.schoolEmail = res.email;
          if (res.parent_name) this.coordinatorName = res.parent_name;
          if (res.parent_email) this.coordinatorEmail = res.parent_email;
          if (res.teams_data) {
            this.buildTeamsFromData(res.teams_data);
          }
        },
        error: () => { /* silently ignore, use localStorage fallback */ }
      });
    }
    
    this.fetchAdminDocuments();
  }

  fetchAdminDocuments() {
    this.http.get<any[]>('http://localhost:5001/api/admin/documents').subscribe({
      next: (docs) => {
        const allDocs = docs || [];
        this.adminDocuments = allDocs.filter(d => d.category === 'School Competitions');
      },
      error: (err) => console.error('Error fetching admin documents:', err)
    });
  }

  viewDocument(doc: any, event: Event) {
    event.preventDefault();
    this.selectedDocument = doc;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  isPdf(url: string): boolean {
    return url ? url.toLowerCase().endsWith('.pdf') : false;
  }

  isImage(url: string): boolean {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.endsWith('.jpg') || lowerUrl.endsWith('.jpeg') || lowerUrl.endsWith('.png') || lowerUrl.endsWith('.gif') || lowerUrl.endsWith('.webp');
  }

  isVideo(url: string): boolean {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.endsWith('.mp4') || lowerUrl.endsWith('.webm') || lowerUrl.endsWith('.ogg') || lowerUrl.endsWith('.mov');
  }

  buildTeamsFromData(teamsData: any): void {
    const studentNames: { [key: string]: string } = teamsData.studentNames || {};
    const newTeams: Team[] = [];
    const categories: string[] = [];

    const addTeams = (count: number, categoryKey: string, categoryLabel: 'Trailblazers' | 'Visioneers' | 'Strategists') => {
      if (count > 0) {
        categories.push(categoryLabel);
        for (let i = 0; i < count; i++) {
          const members: string[] = [];
          for (let m = 1; m <= 5; m++) {
            const key = `${categoryKey}-${i}-${m}`;
            if (studentNames[key] && studentNames[key].trim()) {
              members.push(studentNames[key].trim());
            }
          }
          newTeams.push({
            name: `${categoryLabel} Team ${i + 1}`,
            category: categoryLabel,
            studentsCount: members.length,
            maxStudents: 5,
            status: 'Active',
            filesUploaded: 0,
            totalFilesRequired: 4,
            files: [],
            members: members
          });
        }
      }
    };

    addTeams(teamsData.trailblazersCount || 0, 'trailblazers', 'Trailblazers');
    addTeams(teamsData.visioneersCount || 0, 'visioneers', 'Visioneers');
    addTeams(teamsData.strategistsCount || 0, 'strategists', 'Strategists');

    this.teams = newTeams;
    this.categoriesEntered = categories;
  }

  openAddStudentModal(team: Team): void {
    this.selectedTeam = team;
    this.showAddModal = true;
  }

  closeAddStudentModal(): void {
    this.showAddModal = false;
    this.selectedTeam = null;
  }

  getMemberName(idx: number): string {
    if (this.selectedTeam && this.selectedTeam.members && this.selectedTeam.members[idx]) {
      return this.selectedTeam.members[idx];
    }
    return '';
  }

  updateMember(event: any, idx: number): void {
    if (this.selectedTeam) {
      if (!this.selectedTeam.members) {
        this.selectedTeam.members = [];
      }
      this.selectedTeam.members[idx] = (event.target as HTMLInputElement).value;
    }
  }

  saveStudents(): void {
    if (this.selectedTeam) {
      // Count non-empty member slots
      const filled = this.selectedTeam.members.filter(m => m && m.trim()).length;
      this.selectedTeam.studentsCount = filled;

      // Persist updated members back to localStorage
      const teamsDataRaw = localStorage.getItem('schoolTeamsData');
      if (teamsDataRaw) {
        try {
          const teamsData = JSON.parse(teamsDataRaw);
          const catKey = this.selectedTeam.category.toLowerCase() as string;
          const teamIdxInCat = this.teams
            .filter(t => t.category === this.selectedTeam!.category)
            .indexOf(this.selectedTeam!);

          if (teamIdxInCat >= 0) {
            if (!teamsData.studentNames) teamsData.studentNames = {};
            this.selectedTeam.members.forEach((name, mIdx) => {
              const key = `${catKey === 'trailblazers' ? 'trailblazers' : catKey === 'visioneers' ? 'visioneers' : 'strategists'}-${teamIdxInCat}-${mIdx + 1}`;
              teamsData.studentNames[key] = name || '';
            });
            localStorage.setItem('schoolTeamsData', JSON.stringify(teamsData));
          }
        } catch (e) {}
      }
    }
    this.closeAddStudentModal();
  }

  onFileSelected(event: any, team: Team): void {
    const file = event.target.files[0];
    if (file) {
      team.files.push(file.name);
      team.filesUploaded++;
    }
  }

  deleteFile(team: Team, index: number): void {
    team.files.splice(index, 1);
    team.filesUploaded--;
  }
}
