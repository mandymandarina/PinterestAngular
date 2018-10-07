import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

images: any[];
imagesFound: boolean = false;
   handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }
   handleError(error){
    console.log(error);
  }
  constructor(private _imageService : ImageService) { }

  searchImages(query: string){
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log("Request complete!")
    )
  }

  ngOnInit() {
  }

}
