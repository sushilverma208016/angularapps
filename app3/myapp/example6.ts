

import { Component } from "@angular/core";
@Component(
    {
        moduleId: module.id, 
        selector: "calendar",
        styleUrls: [ "calendar.css" ],
        templateUrl : "calendar.html"
    }
)
class CalendarComponent {

}

@Component(
    {
        selector: "main",
        template: "<calendar> </calendar>"
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
        declarations: [ MainComponent, CalendarComponent],
        bootstrap: [ MainComponent ]
    }
)
class ExampleModule {

}

//Bootstrap module ----
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ExampleModule);

