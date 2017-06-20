import { Component, OnInit, Injectable } from "@angular/core";

class Book {
    constructor ( public title : string,  public author : string ) { }
}

@Injectable()
class TimeoutBookService {
    // simulation of getting data from server
    getBookAsync(  ) : Promise<Book>  {        
      
        return new Promise<Book>( (resolve) =>
        {
            setTimeout ( () => {   resolve ( new Book("T1", "A1") );   }, 4000 );
        }) ;
    }
}

import 'rxjs/add/operator/toPromise';
import { HttpModule, Headers, Http } from "@angular/http"; 
@Injectable()
class HTTPBookService {
    constructor (public http: Http) {}
    getBookAsync(  ) : Promise<Book>  {
        return this.http.get("/books")
                .toPromise()
                .then( ()=> { } )
                .catch( ()=> { } );
    }
}

@Injectable()
class XHRBookService {
    getBookAsync(  ) : Promise<Book>  {

        return new Promise ( (resolve, reject) =>
        {
            var xhr = new XMLHttpRequest();
            xhr.open ( "get", "/book", true);
            xhr.onload = function() {
                    if ( xhr.status === 200) {
                        resolve (  JSON.parse(xhr.responseText) );
                    } else {
                        reject ( xhr.responseText) ;
                    }
            };
            xhr.send();
        } ) ;
    }
}

@Component(
    {
        selector: "book",
        template: "{{book.title}} - {{book.author}}"
    }
)
class BookComponent implements OnInit { 

    constructor(public tms : TimeoutBookService) { } 

    private book : Book  = new Book("", "") ; 

    ngOnInit() {
       this.tms.getBookAsync ( )
                .then ( (bk) => {this.book = bk ; })
                .catch( () => { } ) ;
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
        imports : [BrowserModule, HttpModule ],
        declarations : [MainComponent, BookComponent ],
        providers : [ TimeoutBookService ],
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
