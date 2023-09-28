import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public title: string = 'Hola mundo';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public decreaseBy(value: number): void {
    if (this.counter - value >= 0) {
      this.counter -= value;
    }
  }
}
