import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }
  teachers: Array<Teacher> = new Array<Teacher>();
  laureats: Array<Teacher> = new Array<Teacher>();
  isShowModal = false;
  currentTeacher: Teacher = new Teacher();
  modal;
  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe((response) => {
      response.forEach(p=>p.Position = p.Position || 0);
      this.teachers = response.sort((a, b) => { return a.Position - b.Position });

      this.laureats = this.teachers.slice(0, 3);
      this.teachers = this.teachers.slice(3);
      
    })
    setTimeout(() => {
      this.modal = document.getElementById("myModal");
    }, 200);

  }

  showModal(teacher: Teacher): void {
    this.isShowModal = true;
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('openModal');
    this.currentTeacher = teacher;
  }

  closeModal() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('openModal');
    this.isShowModal = false;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick = function (event) {
    if (event.target == this.modal) {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('openModal');
      this.isShowModal = false;
    }
  }

}
