import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { user} from 'src/app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Task";
  

  user:user

  constructor(){
    this.user= {fname:" ", lname:" ",gender:"  ", country:" " ,education:" "}
    
  }
  onsubmitButtonClick(userForm:any)
  {

    this.user=userForm.value;
    console.log(userForm.value.firstname);
  }

}
