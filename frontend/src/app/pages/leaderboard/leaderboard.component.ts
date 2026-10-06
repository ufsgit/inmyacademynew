import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  activeLeaderboardTab: string = 'school';
  leaderboardFormat: string = 'SCHOOL';
  leaderboardPhase: string = 'Online Phase';
  leaderboardCategory: string = 'All';
  leaderboardData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.switchLeaderboardTab(this.activeLeaderboardTab);
  }

  switchLeaderboardTab(tab: string) {
    this.activeLeaderboardTab = tab;
    if (tab === 'school') {
      this.leaderboardFormat = 'SCHOOL';
      this.leaderboardPhase = 'Online Phase';
      this.leaderboardCategory = 'All';
    } else if (tab === 'mastery') {
      this.leaderboardFormat = 'MASTERY';
      this.leaderboardPhase = 'Online Shortlisting';
      this.leaderboardCategory = 'All';
    } else if (tab === 'open') {
      this.leaderboardFormat = 'OPEN';
      this.leaderboardPhase = '';
      this.leaderboardCategory = 'All';
    }
    this.fetchLeaderboardData();
  }

  fetchLeaderboardData() {
    let url = `http://localhost:5001/api/leaderboard?format=${encodeURIComponent(this.leaderboardFormat)}`;
    if (this.leaderboardPhase) {
      url += `&phase=${encodeURIComponent(this.leaderboardPhase)}`;
    }
    if (this.leaderboardCategory) {
      url += `&category=${encodeURIComponent(this.leaderboardCategory)}`;
    }
    this.http.get(url).subscribe({
      next: (data: any) => {
        if (data && data.success) {
          this.leaderboardData = data.data;
        }
      },
      error: (err) => console.error('Error fetching leaderboard data:', err)
    });
  }

  setLeaderboardPhase(phase: string) {
    this.leaderboardPhase = phase;
    this.fetchLeaderboardData();
  }
}
