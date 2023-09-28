import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: string;

  public heroNames: string[] = 
  ['Spider-man', 'Iron-man', 'Capitán américa', 'Hulk', 'Thor'];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
