import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // al usar la palabra reservada get adelante, se comporta/detecta como una propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  changeHeroName(name: string ): void {
    this.name = name;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
