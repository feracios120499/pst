import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService, private storage: AngularFireStorage) { }
  newsList = [];
  currentNews: any = {};
  isShowModal = false;
  haveMore = true;
  page = 0;
  ngOnInit(): void {
    this.newsService.getLastNews(9).subscribe((result) => {
      this.newsList = result;
      console.log(this.newsList);
      this.page = 1;
    })
  }

  loadMore() {
    this.page++;
    this.newsService.getMoreNews(9, this.page).subscribe((result) => {
      if (result.length == this.newsList.length) {
        this.haveMore = false;
      }
      else {
        this.newsList = (result);
      }

    })
  }
  showModal(news) {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('openModal');
    this.currentNews = news;
    this.isShowModal = true;

  }
  closeModal() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('openModal');
    this.isShowModal = false;
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
