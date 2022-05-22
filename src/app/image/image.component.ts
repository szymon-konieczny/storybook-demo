import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() public imgSrc: string = 'https://via.placeholder.com/150';
  @Input() public altText: string = 'Some alternative text';
  @Input() public figCaptionTxt?: string = 'Image placeholder';
  @Input() public imgOpacity?:number = 1;
}
