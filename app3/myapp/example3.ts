
import { Directive, ElementRef, Renderer } from "@angular/core";
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}

import { Component } from "@angular/core";
@Component(
    {
        selector: "main",
        template: "<div myHighlight> Main App </div>"
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
        declarations: [ MainComponent, HighlightDirective ],
        bootstrap: [ MainComponent ]
    }
)
class ExampleModule {

}

//Bootstrap module ----
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ExampleModule);

