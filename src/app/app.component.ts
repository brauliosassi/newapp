import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapp';
  variable1 = 'First Button';
  variable2 = 'Second Button';
  variable3 = 'Third Button';

  alertFunction (){
    return 'New Third Button'
  }

  buttons = {
    var1 :'First Button',
    var2 : 'Second Button',
    var3 : 'Third Button'
  }
}

