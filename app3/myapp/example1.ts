

import { Component } from "@angular/core";
@Component(
    {
        selector: "main",
        template: "Main App"
    }
)
class MainComponent {

}
//-------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {   
        imports: [ BrowserModule ],
        declarations: [ MainComponent ],
        bootstrap: [ MainComponent ]
    }
)
class ExampleModule {

}

//Bootstrap module ----
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ExampleModule);

