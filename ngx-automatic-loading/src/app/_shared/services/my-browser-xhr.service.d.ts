import { LoadingButtonService } from './loading-button.service';
import { BrowserXhr } from '@angular/http';
import { NgProgressService } from "ngx-progressbar";
export declare class MyBrowserXhr extends BrowserXhr {
    private service;
    private loadingButtonService;
    private currentRequest;
    constructor(service: NgProgressService, loadingButtonService: LoadingButtonService);
    build(): any;
    private done();
}
