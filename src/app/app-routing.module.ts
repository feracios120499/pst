import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { DeclarationsComponent } from './declarations/declarations.component';
import { DocumentsComponent } from './documents/documents.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'student', component: StudentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'declarations', component: DeclarationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
