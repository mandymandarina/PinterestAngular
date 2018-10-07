import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

images: any[];

  constructor(private _imageService : ImageService) { }

  searchImages(query: string){
    return this._imageService.getImage(query).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("Request complete!")
    )
  }

  ngOnInit() {
  }

}
