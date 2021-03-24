import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Teacher } from '../models/teacher.model';

@Injectable({
    providedIn: 'root'
  })
export class TeacherService{

    constructor(private db: AngularFireDatabase) {
        
    }

    getTeachers() : Observable<Array<Teacher>>{
        return this.db.list<Teacher>('teachers/').valueChanges().pipe(map(item=>{
            var result = item.map(teacher=> Teacher.fromJSON(teacher));
            return result;
        }));
    }

}