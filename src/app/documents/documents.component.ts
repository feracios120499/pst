import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }
  currentModal = '';
  magistrDocuments = [];
  backalavrDocuments = [];
  educationDocuments = [];
  ngOnInit(): void {
    this.db.list<any>('documents/', ref => ref.orderByChild('Subject').equalTo('backalavr')).valueChanges().subscribe((values) => {
      this.backalavrDocuments = values.sort(function (a, b) {
        return a.Position - b.Position;
      });
    });
    // let backalavr = this.storage.ref('').child('backalavr');
    // backalavr.listAll().subscribe((result) => {
    //   this.backalavrDocuments = result.items.map((item) => {
    //     let document: any = {};
    //     document.FileName = item.location.path_.replace('backalavr/', '');
    //     document.FileUrl = item.location.path_;
    //     return document;
    //   });
    // });
    this.db.list<any>('documents/', ref => ref.orderByChild('Subject').equalTo('magistr')).valueChanges().subscribe((values) => {
      this.magistrDocuments = values.sort(function (a, b) {
        return a.Position - b.Position;
      });
    });

    this.db.list<any>('documents/',
      ref => ref.orderByChild('Subject').equalTo('educational_program')).valueChanges().subscribe((values) => {
        this.educationDocuments = values.sort(function (a, b) {
          return a.Position - b.Position;
        });
      });
    // const magistr = this.storage.ref('').child('magistr');
    // magistr.listAll().subscribe((result) => {
    //   this.magistrDocuments = result.items.map((item) => {
    //     const document: any = {};
    //     document.FileName = item.location.path_.replace('magistr/', '');
    //     document.FileUrl = item.location.path_;
    //     return document;
    //   });
    // });
  }

  showModal(modalId) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('openModal');
    this.currentModal = modalId;
  }

  closeModal() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('openModal');
    this.currentModal = '';
  }
  view(document) {
    this.preview(document.FileUrl);
  }
  preview(dataurl) {
    const a = document.createElement('a');
    a.href = dataurl;
    a.target = '_blank';
    a.click();
  }

  downloadDocument(currentDocument) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function (event) {
      const blob = xhr.response;
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        const base64data = reader.result;
        downloadPDF(base64data, currentDocument);
      };
    };
    xhr.open('GET', currentDocument.FileUrl);
    xhr.send();
    function downloadPDF(pdf, currentDocument) {
      const linkSource = `${pdf}`;
      const downloadLink = document.createElement('a');
      const fileName = currentDocument.FileName;

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  }

}
