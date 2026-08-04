import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mastery-battles-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mastery-battles-dashboard.component.html',
  styleUrls: ['./mastery-battles-dashboard.component.css']
})
export class MasteryBattlesDashboardComponent implements OnInit {
  activeTab = 'home';
  participantName = 'Jordan Smith';
  selectedChallenge = 'Mastery Battle Challenge';
  registrationId = 'MB-2024-78934';

  ngOnInit(): void {
    const name = localStorage.getItem('openChallengeParticipantName');
    const challenge = localStorage.getItem('openChallengeSelectedChallenge');
    const regId = localStorage.getItem('masteryBattleRegistrationId');

    if (name) this.participantName = name;
    if (challenge) this.selectedChallenge = challenge;
    if (regId) this.registrationId = regId;
  }
}
