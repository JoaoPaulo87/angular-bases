import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero.component";
import { ListComponent } from "../list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        CommonModule, // se importa esto para que funcione el *ngIf, *ngFor, etc..
    ]
})
export class HeroModule {}