import { LoadingButtonService } from './loading-button.service';
import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http';

import { NgProgressService } from "ngx-progressbar";

@Injectable()
export class MyBrowserXhr extends BrowserXhr {

    private currentRequest = 0;

    constructor(private service: NgProgressService, private loadingButtonService: LoadingButtonService) {
        super();
    }

    public build() {
        const xhr = super.build();

        xhr.onload = (evt: any) => this.done();
        xhr.onerror = (evt: any) => this.done();
        xhr.onabort = (evt: any) => this.done();

        xhr.onloadstart = (event: any) => {
            this.currentRequest++;
            if (!this.service.isStarted()) {
                this.loadingButtonService.onStartLoadingButtons();
                this.service.start();
            }
        };

        return xhr;
    }

    private done() {
        this.currentRequest--;
        if (this.currentRequest === 0) {
            this.loadingButtonService.onStopLoadingButtons();
            this.service.done();
        }
    }
}