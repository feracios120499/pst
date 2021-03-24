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
    DiplomsComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FeatherModule.pick(allIcons)
  ],
  exports:[
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
