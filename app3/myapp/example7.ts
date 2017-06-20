

import { Component } from "@angular/core";

export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
  private powers: Array<string> = ['Really Smart', 'Super Flexible', 
  'Super Hot', 'Weather Changer'];

  private model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  private submitted = false;
  onSubmit(): void { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  private active: boolean= true; 
  newHero() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}


@Component(
    {
        selector: "main",
        template: "<hero-form> </hero-form>"
    }
)
class MainComponent {

}
//-------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
@NgModule(
    {   
        imports: [ BrowserModule, FormsModule ],
        declarations: [ MainComponent, HeroFormComponent ],
        bootstrap: [ MainComponent ]
    }
)
class Example7Module {

}

//Bootstrap module ----
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example7Module);

