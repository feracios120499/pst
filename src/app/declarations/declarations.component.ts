import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DeclarationsService } from '../services/declaration.service';

@Component({
  selector: 'app-declarations',
  templateUrl: './declarations.component.html',
  styleUrls: ['./declarations.component.scss']
})
export class DeclarationsComponent implements OnInit {

  constructor(private service: DeclarationsService, private storage: AngularFireStorage) { }
  declarations: Array<any> = new Array<any>();
  ngOnInit(): void {
    this.service.getDeclarations().subscribe((response) => {
      this.declarations = response;
    })
  }

  downloadDocument(currentDocument) {
    var pathReference = this.storage.storage.refFromURL(currentDocument.FileUrl).getDownloadURL().then((result) => {
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
