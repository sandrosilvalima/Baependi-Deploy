import { Component } from '@angular/core';
import { AutService } from './service/aut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Baependi';

  constructor(
    public aut: AutService
  ){}
}
