import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class LoadingButtonService {

  private loadingButtonSource = new ReplaySubject<boolean>();
  public handleLoadingButton: Observable<boolean> = this.loadingButtonSource.asObservable();

  public onStartLoadingButtons(): void {
    this.loadingButtonSource.next(true);
  }

  public onStopLoadingButtons(): void {
    this.loadingButtonSource.next(false);
  }

}
