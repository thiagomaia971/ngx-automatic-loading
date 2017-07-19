import { OnInit, OnDestroy, ElementRef, Renderer } from '@angular/core';
import { SimpleChanges, OnChanges } from '@angular/core';
import { LoadingButtonService } from '../services/loading-button.service';
import { LaddaConfigArgs } from 'angular2-ladda/module/ladda-config';
export declare type laddaValue = boolean | number | undefined | null;
export declare class LoadingButtonDirective implements OnInit, OnDestroy, OnChanges {
    private loadingButtonService;
    private rendered;
    private el;
    private _ladda;
    private substription;
    ladda: laddaValue;
    disabled: boolean;
    constructor(el: ElementRef, config: LaddaConfigArgs, loadingButtonService: LoadingButtonService, rendered: Renderer);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private handleLoadinButton(isShow);
    ngOnDestroy(): void;
    private updateLadda(previousValue);
    private updateDisabled();
}
