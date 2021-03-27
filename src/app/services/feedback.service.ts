import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    /**
     *
     */
    constructor(private db: AngularFireDatabase) {

    }
    public getFeedbackList(): Observable<Array<Feedback>> {
        return this.db.list<Feedback>("feedback/", ref => ref.orderByChild('IsApproved').equalTo(true)).valueChanges().pipe(map((item) => {
            var result = item.map(p => { p.Date = new Date(p.Date); return p });
            return result.sort((a, b) => { return a.Date.getDate() - b.Date.getDate() });
        }));
    }
}