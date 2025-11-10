import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  imports: [],
  templateUrl: './game-control.html',
  styleUrl: './game-control.css',
})
export class GameControl {
  @Output() numberEmitted = new EventEmitter<number>();

  private gameInterval: any = null;
  private counter = 0;

  startGame() {
    if (this.gameInterval) return; // Prevent multiple intervals
    
    this.gameInterval = setInterval(() => {
      this.counter++;
      this.numberEmitted.emit(this.counter);
    }, 1200);
  }

  stopGame() {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
    }
  }
}
