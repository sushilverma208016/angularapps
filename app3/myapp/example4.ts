
import { Component } from "@angular/core";
import { Book } from "./book"; 

@Component(
    {
        selector: "book",
        template: "<button (click)='getBookAsync()'>Get Book</button>"
    }
)
class BookComponent {

    private book: any ; 

    getBookAsync() {
        var com= this; 
        var xhr = new XMLHttpRequest() ;
        xhr.open("get", "/book", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                com.book= JSON.parse(xhr.responseText); 
                console.log( com.book.__proto__); 
                //alert( book.getTitle() );
            }
        };
        xhr.send();
    }
}
//-----------------------------------------
@Component(
    {
        selector: "main",
        template: "<book></book>"
    }
)
class MainComponent {
}
//------------------------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {
        imports : [BrowserModule ],
        declarations : [MainComponent, BookComponent],
        bootstrap : [MainComponent]
    }
)
class Example1Module {
}
//--------------------------------------------
// Bootstrap Module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example1Module);