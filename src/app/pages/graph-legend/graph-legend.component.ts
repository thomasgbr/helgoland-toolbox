import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ColorService, DatasetOptions, Time, TimeseriesData, Timespan, InternalIdHandler } from '@helgoland/core';
import {
    D3GeneralDataPoint,
    D3GeneralDatasetInput,
    D3GeneralInput,
    D3PlotOptions,
    HighlightOutput,
    HoveringStyle,
} from '@helgoland/d3';

import { D3GeneralPopupComponent } from '../../components/d3-general-popup/d3-general-popup.component';
import { GeometryViewComponent } from '../../components/geometry-view/geometry-view.component';
import { StyleModificationComponent } from '../../components/style-modification/style-modification.component';

@Component({
    templateUrl: './graph-legend.component.html',
    styleUrls: ['./graph-legend.component.css']
})
export class GraphLegendComponent {

    public datasetIds = [
        'http://www.fluggs.de/sos2/api/v1/__26',
        'http://www.fluggs.de/sos2/api/v1/__49',
        'http://www.fluggs.de/sos2/api/v1/__51',
        'http://www.fluggs.de/sos2/api/v1/__72',
        // 'http://nexos.demo.52north.org:80/52n-sos-nexos-test/api/__100',
        // 'http://nexos.dev.52north.org/52n-sos-upc/api/__46',
        // 'http://nexos.dev.52north.org/52n-sos-upc/api/__47',
        // 'http://nexos.dev.52north.org/52n-sos-upc/api/__48',
        // 'http://sensorweb.demo.52north.org/sensorwebtestbed/api/v1/__95',
        // 'http://sensorweb.demo.52north.org/sensorwebtestbed/api/v1/__96',
        // 'http://geo.irceline.be/sos/api/v1/__6941',
        // 'http://sensorweb.demo.52north.org/sensorwebtestbed/api/v1/__97',
        // 'http://nexos.dev.52north.org/52n-sos-upc/api/timeseries/46',
        // 'http://mudak-wrm.dev.52north.org/sos/api/__70'
    ];
    public reloadForDatasets = [];
    public timespan;
    public plotLanguage;

    public loadings: Set<string> = new Set();

    public d3diagramOptions: D3PlotOptions = {
        showReferenceValues: true,
        yaxis: true,
        copyright: {
            label: 'This should be bottom right and the text is long.',
            positionX: 'right',
            positionY: 'bottom'
        },
        groupYaxis: true
    };

    public d3overviewOptions: D3PlotOptions = {
        overview: true,
    };

    public datasetOptions: Map<string, DatasetOptions> = new Map();
    public datasetOptionsOne: Map<string, DatasetOptions> = new Map();

    public highlightId: string;

    public selectedIds: string[] = [];

    public overviewLoading: boolean;
    public graphLoading: boolean;

    public hoverstyle: HoveringStyle;
    public highlightedTime: Date;

    constructor(
        private color: ColorService,
        private cdr: ChangeDetectorRef,
        private dialog: MatDialog,
        private time: Time,
        protected internalIdHandler: InternalIdHandler,

        private http: HttpClient,
    ) {
        this.datasetIds.forEach((entry) => {
            const option = new DatasetOptions(entry, this.color.getColor());
            option.generalize = true;
            this.datasetOptions.set(entry, option);
        });

        const end = 1491200000000;
        const diff = 2000000000;
        this.timespan = new Timespan(end - diff, end);
    }

    public timespanChanged(timespan: Timespan) {
        this.timespan = timespan;
    }

    public isSelected(id: string) {
        return this.selectedIds.indexOf(id) > -1;
    }

    public showGeometry(geometry: GeoJSON.GeoJsonObject) {
        this.dialog.open(GeometryViewComponent, {
            data: geometry
        });
    }

    public refreshData() {
        this.reloadForDatasets = [this.datasetIds[0]];
    }

    public highlight(selected: boolean, id: string) {
        this.highlightId = id;
    }

    public setSelected(selectedIds: string[]) {
        this.selectedIds = selectedIds;
    }

    public deleteTimeseries(id: string) {
        const idx = this.datasetIds.findIndex((entry) => entry === id);
        this.datasetIds.splice(idx, 1);
        this.datasetOptions.delete(id);
    }

    public changeYAxesVisibility() {
        this.d3diagramOptions.yaxis = !this.d3diagramOptions.yaxis;
    }

    public updateOptions(option: DatasetOptions) {
        console.log('updateOptions' + JSON.stringify(option));
    }

    public onGraphLoading(loading: boolean) {
        this.graphLoading = loading;
    }

    public listLoadings() {
        return Array.from(this.loadings);
    }

    public onOverviewLoading(loading: boolean) {
        this.overviewLoading = loading;
        this.cdr.detectChanges();
    }

    public editOption(option: DatasetOptions) {
        this.dialog.open(StyleModificationComponent, {
            data: option
        });
    }

    public dateChanged(date: Date) {
        this.timespan = this.time.centerTimespan(this.timespan, date);
    }

    public selectTimeseries(selected: boolean, id: string) {
        if (selected) {
            if (this.selectedIds.indexOf(id) < 0) {
                this.selectedIds.push(id);
            }
        } else {
            if (this.selectedIds.indexOf(id) >= 0) {
                this.selectedIds.splice(this.selectedIds.findIndex((entry) => entry === id), 1);
            }
        }
    }

    public refresh(triggered) {
        console.log('refresh at ' + new Date());
    }

    public groupYaxisChanged() {
        this.d3diagramOptions.groupYaxis = !this.d3diagramOptions.groupYaxis;
    }

    public changeHovering(id: string) {
        this.hoverstyle = HoveringStyle[id];
        this.d3diagramOptions.hoverStyle = this.hoverstyle;
    }

    public highlightChanged(highlightObject: HighlightOutput) {
        this.highlightedTime = new Date(highlightObject.timestamp);
    }

    /**
     * Function that is executed as soons as a hovered datapoint is clicked.
     * @param tsData {TimeseriesData[]} array of various timeseries with data at the same timestamp
     */
    public clickedDataPoint(tsData: TimeseriesData[]) {
        console.log(tsData);
        const datasets: D3GeneralDatasetInput[] = [];
        tsData.forEach(ts => {
            const values: D3GeneralDataPoint[] = ts.data.map((val) => {
                return { x: val.timestamp, y: val.value, date: (new Date(val.timestamp)).toUTCString() };
            });
            const singleTs: D3GeneralDatasetInput = {
                data: values,
                id: ts.id
            };

            datasets.push(singleTs);
        });
        const popupInput: D3GeneralInput = {
            datasets: datasets,
            plotOptions: {
                // TODO: change to x and y axis label + make date boolean dynamic
                xlabel: 'Time',
                ylabel: 'DataPoint',
                date: true
            }
        };

        this.dialog.open(D3GeneralPopupComponent, {
            data: popupInput
        });
    }

    public showPopup() {
        this.http.get('../assets/dataset/sampledataset.csv', { responseType: 'text' })
            .subscribe(
                data => {
                    const dataSplit = data.split(/\r\n|\n|\r|,/);
                    const dataset: D3GeneralInput = {
                        datasets: [],
                        plotOptions: {
                            xlabel: dataSplit[0],
                            ylabel: dataSplit[1],
                            date: false
                        }
                    };
                    const dataPoints: D3GeneralDataPoint[] = [];
                    for (let i = 2; i < dataSplit.length; i += 2) {
                        dataPoints.push({ x: Number(dataSplit[i]), y: Number(dataSplit[i + 1]) });
                    }
                    dataset.datasets.push(
                        {
                            data: dataPoints,
                            id: 'csv file'
                        });
                    this.dialog.open(D3GeneralPopupComponent, {
                        data: dataset
                    });
                },
                error => {
                    console.log(error);
                }
            );
    }

}
