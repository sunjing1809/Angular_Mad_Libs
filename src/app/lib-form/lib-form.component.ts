import { Component } from '@angular/core';
import { Lib } from '../lib';

@Component({
  selector: 'app-lib-form',
  templateUrl: './lib-form.component.html',
  styleUrls: ['./lib-form.component.css']
})
export class LibFormComponent  {
  libForm
  constructor() { }

  model = new Lib('', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
