import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  imports: [],
  templateUrl: './odd.html',
  styleUrl: './odd.css',
})
export class Odd {
  @Input() number: number = 0;
}
