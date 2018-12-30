import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { zipObject } from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.user = ((obj : Object) => zipObject(Object.keys(obj),Object.values(obj))) (this.route.snapshot.params);

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = zipObject(Object.keys(params),Object.values(params))
      }
    );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}
