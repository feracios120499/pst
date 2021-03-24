import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import SwiperCore, {
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper/core';
SwiperCore.use([EffectCoverflow]);
@Component({
  selector: 'app-diploms',
  templateUrl: './diploms.component.html',
  styleUrls: ['./diploms.component.scss']
})
export class DiplomsComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }
  images = new Array<string>();
  ngOnInit(): void {

    var images = JSON.parse('["https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F1.jpg?alt=media&token=7cfa7d38-f7d3-4789-bee9-ce0f55342604","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F49.jpg?alt=media&token=c99590b8-0282-462a-9148-a5bc585825c7","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F51.jpg?alt=media&token=d5b5a59d-c5cc-452d-94f5-a9dd5edf4a35","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F53.jpg?alt=media&token=4f1cc0ea-63d0-46fb-840f-4a605bde7252","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F10.jpg?alt=media&token=2ceb1719-6e08-4815-8a26-3123c4777196","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F52.jpg?alt=media&token=c473ea10-9aa5-4965-b508-7c0944fff25b","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F11.jpg?alt=media&token=81a03db7-440c-4e92-8898-c18cdc3c77b5","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F12.jpg?alt=media&token=a2545303-605c-464c-94f8-89358e58ea45","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F13.jpg?alt=media&token=7cc7c687-2118-4bf5-8e08-79ef662a0731","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F54.jpg?alt=media&token=3584078f-7099-4058-98a8-f0b09c856723","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F14.jpg?alt=media&token=b5e9b624-4490-4e4e-aa07-e2ffa9d22433","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F15.jpg?alt=media&token=64702a29-a397-4bda-b46b-f26abe6bc530","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F55.jpg?alt=media&token=1e14fa24-b6d0-4e3a-8813-55ac8e131921","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F16.jpg?alt=media&token=8e5003bc-cde0-4a7c-880f-93dd2843b2fd","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F17.jpg?alt=media&token=8a299c43-020a-4c6f-bf7a-6a957b5864e6","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F18.jpg?alt=media&token=aa4eb442-b267-41e2-98ac-b9ca27ccaa16","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F19.jpg?alt=media&token=edfa7e0f-36de-4c6d-b49b-882601d84f7e","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F2.jpg?alt=media&token=7ddb5ce0-37bb-4042-9d82-5ba83acd7f50","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F20.jpg?alt=media&token=6e3c801f-ce81-45a5-b8c2-19958dab3ea6","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F21.jpg?alt=media&token=177fcd98-6fa1-46ac-9c61-e65c84272a93","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F57.jpg?alt=media&token=ebf48dcc-feca-4ed9-a322-4565ae920dda","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F22.jpg?alt=media&token=5ed0e46f-fd44-4699-ba01-0866ae9c108b","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F56.jpg?alt=media&token=3826e469-0f09-4530-8650-54b0071f166d","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F23.jpg?alt=media&token=be49a72a-28cb-41f5-ab25-f4b3a6b4e58c","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F24.jpg?alt=media&token=706b7c85-849f-4356-a74f-02886ef6bb9d","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F25.jpg?alt=media&token=b49678cd-5121-4c43-acf0-140f51641fd6","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F26-min.jpg?alt=media&token=7730628e-073c-42e3-99ea-b07a644b6e4a","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F27.jpg?alt=media&token=5aa8681b-f5b5-4428-8fec-565a7487baec","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F28.jpg?alt=media&token=ba070b88-8232-4351-b7f2-eba6822cbeda","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F29.jpg?alt=media&token=94b54a78-383f-42f6-ad80-b4aee21c01f7","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F3.jpg?alt=media&token=fcdfa7bf-8bd8-444b-888a-fe8b2b6ba6d7","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F30.jpg?alt=media&token=2374aaff-2461-4f3a-86ed-33072440c62b","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F31.jpg?alt=media&token=962c41e9-e416-451b-9210-626e48991074","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F32.jpg?alt=media&token=e93459c5-0158-4d78-87f3-6af70d7dd40e","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F33.jpg?alt=media&token=bb4b64e8-bb9e-4b19-8d38-e27ac809be78","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F34.jpg?alt=media&token=e36d5439-db78-448f-bc33-707581cd5296","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F35.jpg?alt=media&token=89e01b48-e71c-44b6-8a10-a4ec4a415145","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F36.jpg?alt=media&token=65427295-aa7f-4714-b834-e46f4c1d4f18","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F37-min.jpg?alt=media&token=e59b1f43-6c3a-42f5-b414-e6ddb7e86c28","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F38-min.jpg?alt=media&token=a3bd3588-2ab9-4836-9e45-1dafe5fc7a25","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F39.jpg?alt=media&token=beba29e7-9cde-49b8-a0c2-e87ad04107b9","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F4.jpg?alt=media&token=34a3b93f-74a3-41fa-bc8b-e1d5775339e3","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F40.jpg?alt=media&token=3dc7faa8-d7f8-47bb-a1ce-57fd5f197ae7","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F41-min.jpg?alt=media&token=7d4b4675-10c8-40a3-b84e-258ce08ab052","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F42-min.jpg?alt=media&token=b7237958-54fb-4a94-8d33-c90b493be23c","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F43.jpg?alt=media&token=1bd00a5e-8680-46f9-9e01-ac9fad84f060","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F44.jpg?alt=media&token=1194a334-92b1-405a-925a-a2352a6c651f","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F45.jpg?alt=media&token=9efdb0b8-7b75-4a27-bd2f-f172edff3e72","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F46.jpg?alt=media&token=af4427d4-6012-4a02-8dbb-5c03336e060b","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F47.jpg?alt=media&token=98bdee84-14c7-4c5e-80f2-5361d27b0b3a","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F48.jpg?alt=media&token=1115074e-9fdd-45a4-9222-2b634ce72f39","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F5.jpg?alt=media&token=acb46ba8-1cc6-40d0-b767-b4839815e12c","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F50.jpg?alt=media&token=898dda73-527c-4b42-a0f7-fec9a29229be","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F7.jpg?alt=media&token=fe6f955d-e0c0-4f46-bc78-31046f3dc026","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F8.jpg?alt=media&token=5015d99e-f0c9-48df-9cb3-37959918c43c","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F58.jpg?alt=media&token=afc3d0ff-f829-40d3-bd5f-b0bc10d94dfe","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F6.jpg?alt=media&token=8bab1e61-d085-4ee8-bc1c-b141718bc484","https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fdiploms%2F9.jpg?alt=media&token=f7454e69-b741-4d69-b019-d777678b81ae"]')
    // var images = this.storage.ref('').child('images').child('diploms');
    // images.listAll().subscribe((result) => {
    //   result.items.forEach((item) => {
    //     this.storage.storage.ref(item.location.path_).getDownloadURL().then((result) => {
    //       setTimeout(() => {
    //         this.images.push(`https://amezdwnzfp.cloudimg.io/v7/${result}`);
    //       },
    //         10)

    //     })
    //   });

    // })
    this.images = images;
  }

}