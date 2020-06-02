import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'stylelists';

  toggleListElems = [
    {name: 'vasia', surname: 'pupkin', content: 'lorem ipsum', isActivated: false},
    {name: 'petia', surname: 'vasichkin', content: 'lorem ipsum', isActivated: false},
    {name: 'ivan', surname: 'ivanov', content: 'lorem ipsum', isActivated: true},
    {name: 'sidor', surname: 'sidiorov', content: 'lorem ipsum', isActivated: false},
  ];
  toggleListActive = -1;
}
