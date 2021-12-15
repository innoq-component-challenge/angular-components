import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  items = { 'Type': 'Car', 'Foo': '<span lang="de" class="fs-2">Etwas</span> text' }
}
