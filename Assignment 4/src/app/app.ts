import { Component, signal } from '@angular/core';
import { GameControl } from './game-control/game-control';
import { Odd } from './odd/odd';
import { Even } from './even/even';

@Component({
  selector: 'app-root',
  imports: [GameControl, Odd, Even],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bind-it');
  numbers = signal<number[]>([]);

  onNumberEmitted(number: number) {
    const currentNumbers = this.numbers();
    this.numbers.set([...currentNumbers, number]);
  }

  get numbersArray() {
    return this.numbers();
  }
}
