import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private db: AngularFireDatabase) {

    }


    getLastNews(count: number) {
        return this.db.list('news/', ref =>ref.orderByChild('Date').limitToLast(count)).valueChanges().pipe(map((item) => {
            return item.reverse();
        }));
    }

    getMoreNews(count: number, page: number) {
        return this.db.list('news/', ref => ref.orderByChild('Date').limitToLast(count * page)).valueChanges().pipe(map((item) => {
            return item.reverse();
        }));
    }
}