import { Directive, OnInit, OnDestroy, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { HostBinding, Input, Inject, Optional, SimpleChanges, OnChanges } from '@angular/core';

import { LoadingButtonService } from '../services/loading-button.service';
import { Subscription } from 'rxjs/Subscription';

//import { LaddaDirective } from 'angular2-ladda/module/ladda.directive';
import { LaddaConfigArgs, LaddaConfig, configAttributes } from 'angular2-ladda/module/ladda-config';

export type laddaValue = boolean | number | undefined | null;

@Directive({
  selector: '[appLoadingButton]'
})
export class LoadingButtonDirective implements OnInit, OnDestroy, OnChanges {

  private el: HTMLElement;
  private _ladda: any;
  private substription: Subscription;

  @Input('ladda') ladda: laddaValue;
  @Input('disabled') disabled: boolean;

  constructor(
    el: ElementRef, @Inject(LaddaConfig) @Optional() config: LaddaConfigArgs,
    private loadingButtonService: LoadingButtonService,
    private rendered: Renderer) {

    this.el = el.nativeElement;
    if (!config) {
      return;
    }

    // apply default styles if they aren't overwritten by an attribute
    for (let attribute in configAttributes) {
      let configValue = config[configAttributes[attribute]];

      if (!configValue) {
        continue; // don't waste time reading the attribute
      }

      if (!this.el.getAttribute(attribute)) {
        // attribute isn't set - apply the default config value
        let value = (typeof configValue === "number") ? configValue.toString() : configValue;
        this.el.setAttribute(attribute, value);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._ladda) {
      return; // needed since ngOnChanges is called before ngOnInit
    }

    if (changes['loading']) {
      this.updateLadda(changes['loading'].previousValue);
    }

    if (changes['disabled']) {
      this.updateDisabled();
    }
  }

  ngOnInit() {

    this.substription = this.loadingButtonService.handleLoadingButton.subscribe(
      (isShow: boolean) => this.handleLoadinButton(isShow)
    );

    //this._ladda = Ladda.create(this.el);

    // if the initial loading value isn't false, a timeout of 0 ms
    // is necessary for the calculated spinner size to be correct.
    setTimeout(() => { this.updateLadda(false); }, 0);

  }

  private handleLoadinButton(isShow: boolean) {
    this.ladda = isShow;
    this.updateLadda(!isShow);
  }

  ngOnDestroy() {

    if (this._ladda) {
      this._ladda.remove();
    }

    if (this.substription) {
      this.substription.unsubscribe();
    }
  }

  private updateLadda(previousValue: laddaValue): void {
    const loading: boolean = typeof this.ladda === 'number' || !!this.ladda;
    const wasLoading: boolean = typeof previousValue === 'number' || !!previousValue;

    if (!loading) {
      if (wasLoading) {
        this._ladda.stop();
      }

      return this.updateDisabled();
    }

    if (!wasLoading && this._ladda) {
      this._ladda.start();
    }

    if (typeof this.ladda === 'number') {
      this._ladda.setProgress(this.ladda);
    }
  }

  private updateDisabled(): void {
    if (this.disabled) {
      this.el.setAttribute('disabled', '');
    } else {
      this.el.removeAttribute('disabled');
    }
  }

}
