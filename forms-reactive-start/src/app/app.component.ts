import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Gio','Puff'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
      'username': new FormControl('condo', [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl('was@waz', [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
    }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.patchValue({
      'userData':{
        'username':'Cazzon'
      }
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value)!== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(()=>{
        if(control.value == 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }
        else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset({
      'userData':{'username':'falcuul'}
    });
  }

}
