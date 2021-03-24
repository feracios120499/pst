import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }
  currentModal = '';
  magistrDocuments = [];
  backalavrDocuments = [];
  ngOnInit(): void {
    var backalavr = this.storage.ref('').child('backalavr');
    backalavr.listAll().subscribe((result) => {
      this.backalavrDocuments = result.items.map((item) => {
        var document: any = {};
        document.FileName = item.location.path_.replace('backalavr/', '');
        document.FileUrl = item.location.path_;
        return document;
      });
    })
    var magistr = this.storage.ref('').child('magistr');
    magistr.listAll().subscribe((result) => {
      this.magistrDocuments = result.items.map((item) => {
        var document: any = {};
        document.FileName = item.location.path_.replace('magistr/', '');
        document.FileUrl = item.location.path_;
        return document;
      });
    })
  }

  showModal(modalId) {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('openModal');
    this.currentModal = modalId;
  }

  closeModal() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('openModal');
    this.currentModal = '';
  }
  view(document) {
    var pathReference = this.storage.storage.ref(document.FileUrl).getDownloadURL().then((result) => {
      this.preview(result);
    })
  }
  preview(dataurl) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.target = "_blank";
    a.click();
  }

  downloadDocument(currentDocument) {
    var pathReference = this.storage.storage.ref(currentDocument.FileUrl).getDownloadURL().then((result) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function (event) {
        var blob = xhr.response;
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          var base64data = reader.result;
          downloadPDF(base64data, currentDocument);
        }
      };
      xhr.open('GET', result);
      xhr.send();
    });
    function downloadPDF(pdf, currentDocument) {
      const linkSource = `${pdf}`;
      const downloadLink = document.createElement("a");
      const fileName = currentDocument.FileName;

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  }

}
