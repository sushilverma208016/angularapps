import { Component, OnInit } from "@angular/core";

class Book {
    constructor ( public title : string,  public author : string ) { }
}

@Component(
    {
        selector: "book",
        template: "{{book.title}} - {{book.author}}"
    }
)
class BookComponent implements OnInit { 

    private book : Book  = new Book("", "") ; 

    ngOnInit() {
    //    this.book = this.getBook() ;
       this.getBookAsync_Timeout( (bk) => { this.book = bk ; } ) ;
    }


    // simulation of getting data from server
    getBookAsync_Timeout( callback ) : void  {
        
        setTimeout ( () => {   callback ( new Book("T1", "A1") );   }, 4000 );

        // return new Book("T1", "A1") ;
    }


    getBookAsync_XHR( callback ) : void  {
        
       var xhr = new XMLHttpRequest();
       xhr.open ( "get", "/book", true);
       xhr.onload = function() {
            if ( xhr.status === 200) {
                callback (  JSON.parse(xhr.responseText) );
            }
       };
       xhr.send();

        // return new Book("T1", "A1") ;
    }
}


//------------------------------------------------------------
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