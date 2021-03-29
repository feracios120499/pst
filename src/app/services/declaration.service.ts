import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DeclarationsService {
    constructor(private db: AngularFireDatabase) {

    }


    getDeclarations() {
        return this.db.list<any>('news/', ref => ref.orderByChild('IsDeclaration').equalTo(true)).valueChanges().pipe(map((item) => {
            var result = item.map(p => { p.Date = new Date(p.Date); return p });
            return result.sort((a, b) => { return a.Date.getDate() - b.Date.getDate() });
        }));
    }
}