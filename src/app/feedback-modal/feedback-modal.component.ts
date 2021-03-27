import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Feedback } from '../models/feedback.model';
import { auth } from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { IpService } from '../services/ip.service';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { count, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss']
})
export class FeedbackModalComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private ip: IpService,
    public activeModal: NgbActiveModal,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage) { }
  isAnonym = false;
  loginByGoogle = false;
  feedback = new Feedback();
  ipAddress: Observable<any>;
  isLoading: boolean = false;
  ngOnInit(): void {
    this.ipAddress = this.ip.getIPAddress();
  }

  googleAuth() {
    this.GoogleAuth().then((response) => {
      this.loginByGoogle = true;
      this.feedback.Name = response.user.displayName;
      this.feedback.Image = response.user.photoURL;
      if (response.additionalUserInfo.isNewUser) {
        response.user.delete();
      }
    },
      (error) => {

      })
  }
  GoogleAuth(): Promise<auth.UserCredential> {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }

  async saveFeedback() {
    try {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      if (this.isAnonym) {
        this.feedback.Name = "Анонім";
      }
      if (!this.feedback.Name) {
        this.toastr.warning("Введіть ім'я або увійдіть з Google");
        return;
      }
      if (!this.feedback.Text) {
        this.toastr.warning("Введіть текст відгуку");
        return;
      }
      this.feedback.IP = (await this.ipAddress.toPromise()).ip;
      var disableIP = await this.db.list('disableIP/', ref => ref.orderByChild('IP').equalTo(this.feedback.IP)).query.once('value');
      if (disableIP.val()) {
        this.toastr.error("Ви не можете залишати відгуки");

        this.activeModal.close();
        return;
      }
      var countFeedbackRef = await this.db.list<Array<Feedback>>('feedback/', ref => ref.orderByChild('IP').equalTo(this.feedback.IP)).query.once('value');
      var value = countFeedbackRef.val();
      if (value) {
        var countFeedback = Object.values(countFeedbackRef.val());
      }

      if (countFeedback && countFeedback.length >= 5) {
        this.toastr.error("Ви залиши забагато відгуків");

        this.activeModal.close();
        return;
      }
      var feedbackId = this.db.list('feedback/').push(this.feedback).key;
      this.feedback.Id = feedbackId;
      this.feedback.Image = await this.uploadImage(feedbackId, this.feedback.Image);
      this.feedback.Date = new Date();
      await this.db.object('feedback/' + feedbackId).update(this.feedback);
      this.toastr.success("Ваш відгук буде опубліковано після модерації", "Дякуємо");
      this.activeModal.close();
    }
    catch (e) {
      console.log(e);
    }
    finally {
      this.isLoading = false;
    }

  }

  async uploadImage(feedbackId: string, image: any): Promise<string> {
    if (image) {
      return new Promise(resolve => resolve(image));
    }
    else {
      return new Promise(resolve => resolve('https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/feedback%2Funnamed.png?alt=media&token=38e95c8f-4256-4e05-a4da-4b12a873579b'));
    }
  }
}
