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
searching : boolean = false;
searchQuery: any;
   handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }
   handleError(error){
    console.log(error);
  }
  constructor(public _imageService : ImageService) { }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false,
    )
  }

  ngOnInit() {
  }

}
