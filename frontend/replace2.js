const fs = require('fs');
let html = fs.readFileSync('src/app/pages/admin-dashboard/admin-dashboard.component.html', 'utf8');

// For Mastery and Open, their tbodys are identical to each other but slightly different from School (no Teams count).
const masteryOpenReplacement = `<tbody>
                <tr *ngFor="let row of leaderboardData" style="border-bottom: 1px solid #f3f4f6; transition: background-color 0.15s ease;">
                  <td style="padding: 16px 24px; font-weight: 800; color: #111827; font-size: 14px;">#{{ row.Rank }}</td>
                  <td style="padding: 16px 24px; font-weight: 600; color: #1f2937; font-size: 14px;">{{ row.ParticipantName }}</td>
                  <td style="padding: 16px 24px; color: #6b7280; font-size: 14px;">{{ row.Country }}</td>
                  <td style="padding: 16px 24px; text-align: center; font-weight: 700; color: #ef4444; font-size: 15px;">{{ row.Score | number }}</td>
                  <td style="padding: 16px 24px; text-align: center;">
                    <span *ngIf="row.Award === 'Champion'" style="background: #fef08a; color: #854d0e; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Champion</span>
                    <span *ngIf="row.Award === 'Runner-Up'" style="background: #e5e7eb; color: #4b5563; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2"></path></svg> Runner-Up</span>
                    <span *ngIf="row.Award === '3rd Place'" style="background: #ffedd5; color: #9a3412; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2"></path></svg> 3rd Place</span>
                    <span *ngIf="row.Award === 'Finalist'" style="background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Finalist</span>
                    <span *ngIf="!row.Award" style="color: #9ca3af; font-weight: 600;">—</span>
                  </td>
                </tr>
              </tbody>`;

let tbodys = html.match(/<tbody>[\s\S]*?<\/tbody>/g);

if (tbodys && tbodys.length >= 3) {
    // 0 is School (already replaced)
    // 1 is Mastery
    // 2 is Open
    html = html.replace(tbodys[1], masteryOpenReplacement);
    html = html.replace(tbodys[2], masteryOpenReplacement);
}

fs.writeFileSync('src/app/pages/admin-dashboard/admin-dashboard.component.html', html);
