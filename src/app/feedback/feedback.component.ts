import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';
import { Feedback } from '../models/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbackList().subscribe((response) => {
      this.listFeedback = response;
    })
  }
  listFeedback: Feedback[];
  showModal() {
    this.modal.open(FeedbackModalComponent);
  }

  onImgError(event){
    event.target.src = 'https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/feedback%2Funnamed.png?alt=media&token=38e95c8f-4256-4e05-a4da-4b12a873579b'
   //Do other stuff with the event.target
   }

}
