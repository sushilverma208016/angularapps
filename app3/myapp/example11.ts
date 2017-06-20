
import { Component } from "@angular/core";

@Component({
  selector: 'home',
  template: 'Home Component'
})
export class HomeComponent {

 }


@Component({
  selector: 'about',
  template: 'About Component'
})
export class AboutComponent { }


@Component({
  selector: 'contact',
  template: 'Contact Component'
})
export class ContactComponent { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'example1.html', component: HomeComponent }
];
export const appRoutingProviders: any[] = [ ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@Component(
    {
        selector: "main",
        template: 
        `
        <h1>Angular Router</h1>
        <nav>
            <a routerLink="/example1.html" routerLinkActive="active">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>
        <router-outlet></router-outlet>

        `
    }
)
class MainComponent {
}
//------------------------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {
        imports : [BrowserModule, routing ],
        declarations : [MainComponent, HomeComponent, AboutComponent, ContactComponent],
        bootstrap : [MainComponent],
        providers: [ appRoutingProviders ]
    }
)
class Example1Module {
}
//--------------------------------------------
// Bootstrap Module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example1Module);