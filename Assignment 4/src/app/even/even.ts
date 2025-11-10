import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  imports: [],
  templateUrl: './even.html',
  styleUrl: './even.css',
})
export class Even {
  @Input() number: number = 0;
}
