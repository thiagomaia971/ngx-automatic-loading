import { Observable } from 'rxjs/Observable';
export declare class LoadingButtonService {
    private loadingButtonSource;
    handleLoadingButton: Observable<boolean>;
    onStartLoadingButtons(): void;
    onStopLoadingButtons(): void;
}
