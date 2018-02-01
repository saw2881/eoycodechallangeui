import { Injectable } from '@angular/core'
import {BaseRequestOptions, Headers} from '@angular/http'

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
  headers = new Headers({
    'Authorization':'Bearer Angular 2',
    
  });
}

// import { Injectable } from '@angular/core';
// import { Headers, Http, RequestOptions } from '@angular/http';


// @Injectable()
// export class CustomRequestOptions extends RequestOptions {

//   constructor(private requestOptionArgs: RequestOptions) {
//     super();
//   }

//   addHeader(headerName: string, headerValue: string) {
//     (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
//   }
// }