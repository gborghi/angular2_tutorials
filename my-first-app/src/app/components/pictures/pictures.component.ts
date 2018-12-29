import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service'

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  fullImagePath : string;
  imageWidth : string = '100px';

  constructor(private accService: AccountService) {
    this.fullImagePath = '/assets/tiger.jpg'
    this.accService.mycheck.subscribe(
      (string)=> {this.imageWidth=(parseInt(this.imageWidth)+10).toString() +'px'}
    );
  }

  ngOnInit() {
  }

}
