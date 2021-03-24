import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private newsService: NewsService, private storage: AngularFireStorage, private router: Router) { }
  news = [];
  currentNews: any = {};
  currentModal = '';
  environment = environment;
  que = [
    {
      title: 'Яку вибрати професію? На що варто звернути увагу, визначаючись з професією?',
      text: 'В першу чергу потрібно визначити наскільки затребувана вибрана професія у сучасному світі. Відповідь на це запитання ви знайдете в розділах 1 – 5. Інформаційні технології швидко розвиваються у сучасному світі, тому якщо хочете бути в тонусі і розвиватися разом з революційними технологіями нового століття, обирайте ІТ технології для навчання. І для обґрунтування такого вибору пропонуємо ознайомитися із сучасним станом ІТ-індустрії, прогнозними трендами розвитку ІТ, найбільш популярними професіями в IT та попитом на ІТ-фахівців в Україні та в світі.'
    },
    {
      title: 'Який обрати університет? На що варто звернути увагу, визначаючись з університетом?',
      text: 'В першу чергу потрібно звернути увагу на престижність університету, його рейтинги, здобутки, відгуки роботодавців та випускників. Найактуальніше запитання пов’язано із працевлаштуванням в процесі навчання або після завершення ЗВО. Чи будуть затребувані на ринку праці випускники обраного ЗВО? Відповіді на ці запитання ви знайдете у розділі 6.'
    },
    {
      title: 'Як правильно обрати освітню програму або спеціальність?',
      text: 'Вам на інженерію програмного забезпечення, комп’ютерну інженерію, комп’ютерні науки чи інформаційні системи? Самі назви спеціальностей Вам нічого не скажуть, краще дивитися опис та перелік дисциплін, з яких складається освітня програма спеціальності. Освітні програми визначають компетентності, результати навчання, та перелік дисциплін, які студент вивчатиме протягом навчання в університеті. Освітні програми розміщуються на сайтах факультетів і доступні для ознайомлення абітурієнтів. Які цілі ставить освітня програма? В чому її унікальність у порівнянні з аналогічними освітніми програми інших університетів? Які знання та вміння може сформувати освітня програма? Відповіді на усі ці запитання розміщені у розділі 7. Які дисципліни формуватимуть потрібні роботодавцям компетентності випускників? Розділ 8 містить відповідь на це запитання.'
    },
    {
      title: 'Які можливості мають студенти кафедри програмних систем і технологій?',
      text: 'Кафедра ПСТ постійно працює над удосконаленням змісту освіти за освітньою програмою «Інженерія програмного забезпечення», над створенням умов для творчого, креативного розвитку студентів та мотивування його до навчальної діяльності та здобуття професійного та особистого престижу.. Кафедра розшукує талановитого абітурієнта, який хоче пов’язати свою майбутню професію з інженерією програмного забезпечення! Саме у нас Ви знайдете все: від програмування до вбудованих та мобільних систем. Якщо Ви цікавитеся програмними системами різного призначення, мрієте опанувати технології створення програмних продуктів, математичні методи та інформаційні технології аналізу складних систем, тоді вступайте на спеціальність «Інженерія програмного забезпечення» факультету інформаційних технологій КНУ імені Тараса Шевченка. Що робить кафедра, щоб реалізувати творчий потенціал студентів, Ви дізнаєтесь у розділі 9.'
    }
  ];
  currentQue = this.que[0];
  ngOnInit(): void {
    this.newsService.getLastNews(3).subscribe((result) => {
      this.news = result;
      console.log(result);
    });
  }

  scrollTo(id, block = null) {
    let elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ block: block || "center", behavior: "smooth" });
  }
  toRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  showNews(news) {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('openModal');
    this.currentNews = news;
    this.currentModal = 'news'
  }
  showQue(index) {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('openModal');
    this.currentQue = this.que[index];
    this.currentModal = 'abitModal'
  }
  closeModal() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('openModal');
    this.currentModal = '';
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
