import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberObsSubsctiption: Subscription;
  customObsSubscriptions: Subscription;

  constructor() { }

  ngOnInit() {
    let j=0;
    const myNumbers = interval(1000).pipe(map(
      (data: number) => {
        return data*2;
      }
    ));
    this.numberObsSubsctiption=myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
//        observer.error('this does not work');
        observer.complete();
      }, 5000);
    });
    this.customObsSubscriptions=myObservable.subscribe(
      (data: string) => {console.log(data)},
      (error: string) => {console.log(error)},
      ()=> {console.log('completed');}
    );
  }
  ngOnDestroy(){
    this.numberObsSubsctiption.unsubscribe();
    this.customObsSubscriptions.unsubscribe();
  }
}
