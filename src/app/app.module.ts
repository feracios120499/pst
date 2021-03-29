import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ScrollDirective } from './directives/scroll.directive';
import { TeachersComponent } from './teachers/teachers.component';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AddClassDirective } from './directives/add-class.directive';
import { ApplicantComponent } from './applicant/applicant.component';
import { FooterComponent } from './footer/footer.component';
import { StudentComponent } from './student/student.component';
import { InProcessComponent } from './in-process/in-process.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { DocumentsComponent } from './documents/documents.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SwiperModule } from 'swiper/angular';
import { DiplomsComponent } from './achievements/diploms/diploms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DeclarationsComponent } from './declarations/declarations.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDirective,
    TeachersComponent,
    HeaderComponent,
    AddClassDirective,
    ApplicantComponent,
    FooterComponent,
    StudentComponent,
    InProcessComponent,
    ServicesComponent,
    NewsComponent,
    DocumentsComponent,
    AchievementsComponent,
    DiplomsComponent,
    FeedbackComponent,
    FeedbackModalComponent,
    DeclarationsComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    FeatherModule.pick(allIcons),
    NgbModule,
    HttpClientModule
  ],
  exports:[
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
