import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css'],
})
export class WallpaperComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  base64Image: any;
  photos: any[] = [];
  ngOnInit(): void {
    this.apiService.getImage().subscribe((data: any) => {
      this.photos = data.photos;
    });
    addEventListener;
  }

  downloadImage(index: number) {
    let imageUrl = this.photos[index].src.original;
    console.log('imageUrl', imageUrl);
    // let imageUrl =
    //   "http://southparkstudios.mtvnimages.com/shared/characters/celebrities/mr-hankey.png?height=165";

    this.getBase64ImageFromURL(imageUrl).subscribe((base64data: string) => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      // save image to disk
      var link = document.createElement('a');

      document.body.appendChild(link); // for Firefox

      link.setAttribute('href', this.base64Image);
      link.setAttribute('download', 'dwnld.jpg');
      link.click();
    });
  }
  // downloadImage(index: number) {
  //   let imageURL = this.photos[index].src.original;
  //   const a = document.createElement('a');

  //   // window.open(imageURL);

  //   // let imageUrl =
  //   //   "http://southparkstudios.mtvnimages.com/shared/characters/celebrities/mr-hankey.png?height=165";

  //   // this.getBase64ImageFromURL(imageUrl).subscribe((base64data: string) => {
  //   //   console.log(base64data);
  //   //   this.base64Image = "data:image/jpg;base64," + base64data;
  //   //   // save image to disk
  //   //   var link = document.createElement("a");

  //   //   document.body.appendChild(link); // for Firefox

  //   //   link.setAttribute("href", this.base64Image);
  //   //   link.setAttribute("download", "imagedownload.jpg");
  //   //   link.click();
  //   // });
  // }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    // let c: CanvasRenderingContext2D = canvas.getContext("2d");
    // c.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}
