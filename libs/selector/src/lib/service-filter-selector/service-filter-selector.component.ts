import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {
    HelgolandParameterFilter,
    HelgolandServicesConnector,
    LanguageChangNotifier,
    Parameter,
} from '@helgoland/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component to select an item out of a list of provider with a given filter combination.
 */
@Component({
    selector: 'n52-service-filter-selector',
    templateUrl: './service-filter-selector.component.html'
})
export class ServiceFilterSelectorComponent extends LanguageChangNotifier implements OnChanges {

    @Input()
    public endpoint: string;

    @Input()
    public serviceUrl: string;

    @Input()
    public filter: HelgolandParameterFilter;

    @Input()
    public selectionId: string;

    @Output()
    public onItemSelected: EventEmitter<Parameter> = new EventEmitter<Parameter>();

    @Output()
    public onItemsFound: EventEmitter<Parameter[]> = new EventEmitter<Parameter[]>();

    @Output()
    public onLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

    public loading: boolean;
    public items: Parameter[];

    constructor(
        protected translate: TranslateService,
        protected servicesConnector: HelgolandServicesConnector
    ) {
        super(translate);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.endpoint || changes.filter || changes.serviceUrl) {
            this.loadItems();
        }
    }

    public onSelectItem(item: Parameter): void {
        this.onItemSelected.emit(item);
    }

    protected languageChanged() {
        this.loadItems();
    }

    private loadItems() {
        this.loading = true;
        this.onLoading.emit(true);
        switch (this.endpoint) {
            case 'offering':
                this.servicesConnector.getOfferings(this.serviceUrl, this.filter)
                    .subscribe((res) => this.setItems(res), (error) => this.errorOnLoading);
                break;
            case 'phenomenon':
                this.servicesConnector.getPhenomena(this.serviceUrl, this.filter)
                    .subscribe((res) => this.setItems(res), (error) => this.errorOnLoading);
                break;
            case 'procedure':
                this.servicesConnector.getProcedures(this.serviceUrl, this.filter)
                    .subscribe((res) => this.setItems(res), (error) => this.errorOnLoading);
                break;
            case 'category':
                this.servicesConnector.getCategories(this.serviceUrl, this.filter)
                    .subscribe((res) => this.setItems(res), (error) => this.errorOnLoading);
                break;
            case 'feature':
                this.servicesConnector.getFeatures(this.serviceUrl, this.filter)
                    .subscribe((res) => this.setItems(res), (error) => this.errorOnLoading);
                break;
            default:
                console.error('Wrong endpoint: ' + this.endpoint);
        }
    }

    private errorOnLoading(): void {
        this.loading = false;
        this.onLoading.emit(false);
    }

    private setItems(res: Parameter[]): void {
        if (res instanceof Array) {
            this.items = res;
            this.onItemsFound.emit(res);
        } else {
            this.items = [];
            this.onItemsFound.emit([]);
        }
        this.loading = false;
        this.onLoading.emit(false);
    }
}
