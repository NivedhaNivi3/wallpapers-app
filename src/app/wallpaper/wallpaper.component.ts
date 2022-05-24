import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {

  imageList: any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getImage()
  }
  getImage() {
    this.apiService.imageGet().subscribe((res: any) => {
      this.imageList = res.photos;
      console.log(this.imageList);
    })
  }
}
