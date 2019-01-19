import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['errormessage'];
    this.route.data.subscribe(
      (data: Data)=> {
        this.errorMessage = data['errormessage'];
      }
    )
  }

}
