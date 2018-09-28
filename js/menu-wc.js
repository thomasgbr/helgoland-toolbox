'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">helgoland-toolbox documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
              ${ isNormalMode ? 'data-target="#additional-pages"' : 'data-target="#xs-additional-pages"'}>
                <span class="icon ion-ios-book"></span>
                <span>Additional documentation</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                    <li class="link ">
                        <a href="additional-documentation/introduction.html" data-type="entity-link" data-context-id="additional">Introduction</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/how-tos.html" data-type="entity-link" data-context-id="additional">How Tos</a>
                    </li>
                    <li class="link for-chapter2">
                        <a href="additional-documentation/how-tos/integrate-a-d3-timeseries-component.html" data-type="entity-link" data-context-id="additional">Integrate a D3 timeseries component</a>
                    </li>
                    <li class="link for-chapter2">
                        <a href="additional-documentation/how-tos/integrate-a-table-component.html" data-type="entity-link" data-context-id="additional">Integrate a table component</a>
                    </li>
                    <li class="link for-chapter2">
                        <a href="additional-documentation/how-tos/extend-a-timeseries-entry-component.html" data-type="entity-link" data-context-id="additional">Extend a timeseries entry component</a>
                    </li>
                    <li class="link for-chapter2">
                        <a href="additional-documentation/how-tos/configure-a-map-component.html" data-type="entity-link" data-context-id="additional">Configure a map component</a>
                    </li>
                    <li class="link for-chapter2">
                        <a href="additional-documentation/how-tos/using-basic-auth-services.html" data-type="entity-link" data-context-id="additional">Using basic auth services</a>
                    </li>
                    <li class="link for-chapter2">
                        <a href="additional-documentation/how-tos/handle-dataset-options-to-style-the-timeseries.html" data-type="entity-link" data-context-id="additional">Handle dataset options to style the timeseries</a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/HelgolandBasicAuthModule.html" data-type="entity-link">HelgolandBasicAuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandBasicAuthModule-4d15c244f9805c37f0d9e001e1071149"' : 'data-target="#xs-injectables-links-module-HelgolandBasicAuthModule-4d15c244f9805c37f0d9e001e1071149"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandBasicAuthModule-4d15c244f9805c37f0d9e001e1071149"' : 'id="xs-injectables-links-module-HelgolandBasicAuthModule-4d15c244f9805c37f0d9e001e1071149"' }>
                                        <li class="link">
                                            <a href="injectables/BasicAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>BasicAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BasicAuthServiceMaintainer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>BasicAuthServiceMaintainer</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandCachingModule.html" data-type="entity-link">HelgolandCachingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandControlModule.html" data-type="entity-link">HelgolandControlModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandControlModule-aba2c250ad4f91640bd4468196e4a355"' : 'data-target="#xs-components-links-module-HelgolandControlModule-aba2c250ad4f91640bd4468196e4a355"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandControlModule-aba2c250ad4f91640bd4468196e4a355"' : 'id="xs-components-links-module-HelgolandControlModule-aba2c250ad4f91640bd4468196e4a355"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandCoreModule.html" data-type="entity-link">HelgolandCoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' : 'data-target="#xs-injectables-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' : 'id="xs-injectables-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' }>
                                        <li class="link">
                                            <a href="injectables/ColorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ColorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatasetApiMapping.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DatasetApiMapping</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DefinedTimespanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DefinedTimespanService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InternalIdHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>InternalIdHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStorage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LocalStorage</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotifierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NotifierService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StatusIntervalResolverService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>StatusIntervalResolverService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Time.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>Time</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' : 'data-target="#xs-pipes-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' : 'id="xs-pipes-links-module-HelgolandCoreModule-6a10e19710628b195474ff4494ecd0e1"' }>
                                        <li class="link">
                                            <a href="pipes/DateProxyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateProxyPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandD3Module.html" data-type="entity-link">HelgolandD3Module</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' : 'data-target="#xs-components-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' : 'id="xs-components-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' }>
                                        <li class="link">
                                            <a href="components/D3OverviewTimeseriesGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">D3OverviewTimeseriesGraphComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/D3TimeseriesGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">D3TimeseriesGraphComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/D3TrajectoryGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">D3TrajectoryGraphComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExtendedDataD3TimeseriesGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExtendedDataD3TimeseriesGraphComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' : 'data-target="#xs-injectables-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' : 'id="xs-injectables-links-module-HelgolandD3Module-9f5369bbfd60146c73503af42c58ce92"' }>
                                        <li class="link">
                                            <a href="injectables/D3TimeFormatLocaleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>D3TimeFormatLocaleService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandDatasetTableModule.html" data-type="entity-link">HelgolandDatasetTableModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandDatasetTableModule-6ab883d25365256da3334ed99c69e36f"' : 'data-target="#xs-components-links-module-HelgolandDatasetTableModule-6ab883d25365256da3334ed99c69e36f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandDatasetTableModule-6ab883d25365256da3334ed99c69e36f"' : 'id="xs-components-links-module-HelgolandDatasetTableModule-6ab883d25365256da3334ed99c69e36f"' }>
                                        <li class="link">
                                            <a href="components/DatasetTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatasetTableComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandDatasetlistModule.html" data-type="entity-link">HelgolandDatasetlistModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' : 'data-target="#xs-components-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' : 'id="xs-components-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' : 'data-target="#xs-injectables-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' : 'id="xs-injectables-links-module-HelgolandDatasetlistModule-71501a4a42fc4e5e271ebade8fd9b4bb"' }>
                                        <li class="link">
                                            <a href="injectables/ReferenceValueColorCache.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ReferenceValueColorCache</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandEventingModule.html" data-type="entity-link">HelgolandEventingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandFavoriteModule.html" data-type="entity-link">HelgolandFavoriteModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' : 'data-target="#xs-components-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' : 'id="xs-components-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' : 'data-target="#xs-injectables-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' : 'id="xs-injectables-links-module-HelgolandFavoriteModule-fd2f3cd24088c39907f999154a0cc274"' }>
                                        <li class="link">
                                            <a href="injectables/FavoriteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FavoriteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JsonFavoriteExporterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>JsonFavoriteExporterService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandLabelMapperModule.html" data-type="entity-link">HelgolandLabelMapperModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' : 'data-target="#xs-components-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' : 'id="xs-components-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' }>
                                        <li class="link">
                                            <a href="components/LabelMapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LabelMapperComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' : 'data-target="#xs-injectables-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' : 'id="xs-injectables-links-module-HelgolandLabelMapperModule-4490689986ba7fb05559745b1e95861c"' }>
                                        <li class="link">
                                            <a href="injectables/LabelMapperService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LabelMapperService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandMapControlModule.html" data-type="entity-link">HelgolandMapControlModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' : 'data-target="#xs-components-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' : 'id="xs-components-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' : 'data-target="#xs-injectables-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' : 'id="xs-injectables-links-module-HelgolandMapControlModule-8f685e1b3631e65cf4e1574a7f13ebc7"' }>
                                        <li class="link">
                                            <a href="injectables/LocateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LocateService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandMapModule.html" data-type="entity-link">HelgolandMapModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' : 'data-target="#xs-components-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' : 'id="xs-components-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' : 'data-target="#xs-injectables-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' : 'id="xs-injectables-links-module-HelgolandMapModule-5cd4f07b890068a1b3a137032a533620"' }>
                                        <li class="link">
                                            <a href="injectables/MapCache.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MapCache</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandMapSelectorModule.html" data-type="entity-link">HelgolandMapSelectorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandMapSelectorModule-483789e9ae48c610b020ed0ebf7b6582"' : 'data-target="#xs-components-links-module-HelgolandMapSelectorModule-483789e9ae48c610b020ed0ebf7b6582"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandMapSelectorModule-483789e9ae48c610b020ed0ebf7b6582"' : 'id="xs-components-links-module-HelgolandMapSelectorModule-483789e9ae48c610b020ed0ebf7b6582"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandMapViewModule.html" data-type="entity-link">HelgolandMapViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandMapViewModule-de9a0e9e5b3315d5280f16e72b5cb94c"' : 'data-target="#xs-components-links-module-HelgolandMapViewModule-de9a0e9e5b3315d5280f16e72b5cb94c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandMapViewModule-de9a0e9e5b3315d5280f16e72b5cb94c"' : 'id="xs-components-links-module-HelgolandMapViewModule-de9a0e9e5b3315d5280f16e72b5cb94c"' }>
                                        <li class="link">
                                            <a href="components/GeometryMapViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GeometryMapViewerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandModificationModule.html" data-type="entity-link">HelgolandModificationModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandModificationModule-bbc91196cbc1a8e8cde5f5e4d9d5d29c"' : 'data-target="#xs-components-links-module-HelgolandModificationModule-bbc91196cbc1a8e8cde5f5e4d9d5d29c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandModificationModule-bbc91196cbc1a8e8cde5f5e4d9d5d29c"' : 'id="xs-components-links-module-HelgolandModificationModule-bbc91196cbc1a8e8cde5f5e4d9d5d29c"' }>
                                        <li class="link">
                                            <a href="components/AxesOptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AxesOptionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ColorSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorSelectorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DragOptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DragOptionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MinMaxRangeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinMaxRangeComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandPermalinkModule.html" data-type="entity-link">HelgolandPermalinkModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandPermalinkModule-0b804fe68f1a05ade166ada46f9ce779"' : 'data-target="#xs-components-links-module-HelgolandPermalinkModule-0b804fe68f1a05ade166ada46f9ce779"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandPermalinkModule-0b804fe68f1a05ade166ada46f9ce779"' : 'id="xs-components-links-module-HelgolandPermalinkModule-0b804fe68f1a05ade166ada46f9ce779"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandPlotlyModule.html" data-type="entity-link">HelgolandPlotlyModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandPlotlyModule-03fca532eee9c8c4317b769690ed1652"' : 'data-target="#xs-components-links-module-HelgolandPlotlyModule-03fca532eee9c8c4317b769690ed1652"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandPlotlyModule-03fca532eee9c8c4317b769690ed1652"' : 'id="xs-components-links-module-HelgolandPlotlyModule-03fca532eee9c8c4317b769690ed1652"' }>
                                        <li class="link">
                                            <a href="components/PlotlyProfileGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlotlyProfileGraphComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandSelectorModule.html" data-type="entity-link">HelgolandSelectorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' : 'data-target="#xs-components-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' : 'id="xs-components-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' }>
                                        <li class="link">
                                            <a href="components/DatasetByStationSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatasetByStationSelectorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListSelectorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MultiServiceFilterSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultiServiceFilterSelectorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ServiceFilterSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServiceFilterSelectorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ServiceSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServiceSelectorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' : 'data-target="#xs-injectables-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' : 'id="xs-injectables-links-module-HelgolandSelectorModule-01b9d388f5cd1d344565006cb95a1567"' }>
                                        <li class="link">
                                            <a href="injectables/ListSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ListSelectorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ServiceSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ServiceSelectorService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandTimeModule.html" data-type="entity-link">HelgolandTimeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandTimeModule-b917801c1f73971f8b571ab752093cec"' : 'data-target="#xs-components-links-module-HelgolandTimeModule-b917801c1f73971f8b571ab752093cec"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandTimeModule-b917801c1f73971f8b571ab752093cec"' : 'id="xs-components-links-module-HelgolandTimeModule-b917801c1f73971f8b571ab752093cec"' }>
                                        <li class="link">
                                            <a href="components/BoolTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoolTogglerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RefreshButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StringTogglerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTogglerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelgolandTimeRangeSliderModule.html" data-type="entity-link">HelgolandTimeRangeSliderModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' : 'data-target="#xs-components-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' : 'id="xs-components-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' }>
                                        <li class="link">
                                            <a href="components/TimeRangeSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeRangeSliderComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' : 'data-target="#xs-injectables-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' : 'id="xs-injectables-links-module-HelgolandTimeRangeSliderModule-4f68406018f6bbd8804b86ce208a4697"' }>
                                        <li class="link">
                                            <a href="injectables/TimeRangeSliderCache.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TimeRangeSliderCache</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ConfigurableTimeseriesEntryComponent.html" data-type="entity-link">ConfigurableTimeseriesEntryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExtentControlComponent.html" data-type="entity-link">ExtentControlComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FavoriteTogglerComponent.html" data-type="entity-link">FavoriteTogglerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FirstLatestTimeseriesEntryComponent.html" data-type="entity-link">FirstLatestTimeseriesEntryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GeosearchControlComponent.html" data-type="entity-link">GeosearchControlComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LocateControlComponent.html" data-type="entity-link">LocateControlComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PermalinkInMailComponent.html" data-type="entity-link">PermalinkInMailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PermalinkNewWindowComponent.html" data-type="entity-link">PermalinkNewWindowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PermalinkToClipboardComponent.html" data-type="entity-link">PermalinkToClipboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlatformMapSelectorComponent.html" data-type="entity-link">PlatformMapSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PredefinedTimespanSelectorComponent.html" data-type="entity-link">PredefinedTimespanSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileEntryComponent.html" data-type="entity-link">ProfileEntryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileTrajectoryMapSelectorComponent.html" data-type="entity-link">ProfileTrajectoryMapSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SimpleTimeseriesEntryComponent.html" data-type="entity-link">SimpleTimeseriesEntryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StationMapSelectorComponent.html" data-type="entity-link">StationMapSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeListSelectorComponent.html" data-type="entity-link">TimeListSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimespanButtonComponent.html" data-type="entity-link">TimespanButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimespanShiftSelectorComponent.html" data-type="entity-link">TimespanShiftSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrajectoryEntryComponent.html" data-type="entity-link">TrajectoryEntryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ZoomControlComponent.html" data-type="entity-link">ZoomControlComponent</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/ApiInterface.html" data-type="entity-link">ApiInterface</a>
                    </li>
                    <li class="link">
                        <a href="classes/BasicAuthInformer.html" data-type="entity-link">BasicAuthInformer</a>
                    </li>
                    <li class="link">
                        <a href="classes/BufferedTime.html" data-type="entity-link">BufferedTime</a>
                    </li>
                    <li class="link">
                        <a href="classes/CachedMapComponent.html" data-type="entity-link">CachedMapComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/D3SelectionRange.html" data-type="entity-link">D3SelectionRange</a>
                    </li>
                    <li class="link">
                        <a href="classes/Dataset.html" data-type="entity-link">Dataset</a>
                    </li>
                    <li class="link">
                        <a href="classes/DatasetApiInterface.html" data-type="entity-link">DatasetApiInterface</a>
                    </li>
                    <li class="link">
                        <a href="classes/DatasetOptions.html" data-type="entity-link">DatasetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/DatasetParameterConstellation.html" data-type="entity-link">DatasetParameterConstellation</a>
                    </li>
                    <li class="link">
                        <a href="classes/DatasetPresenterComponent.html" data-type="entity-link">DatasetPresenterComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/DatasetService.html" data-type="entity-link">DatasetService</a>
                    </li>
                    <li class="link">
                        <a href="classes/EventingApiService.html" data-type="entity-link">EventingApiService</a>
                    </li>
                    <li class="link">
                        <a href="classes/ExtendedTimeseries.html" data-type="entity-link">ExtendedTimeseries</a>
                    </li>
                    <li class="link">
                        <a href="classes/Filter.html" data-type="entity-link">Filter</a>
                    </li>
                    <li class="link">
                        <a href="classes/FirstLastValue.html" data-type="entity-link">FirstLastValue</a>
                    </li>
                    <li class="link">
                        <a href="classes/GeoCureGeoJSON.html" data-type="entity-link">GeoCureGeoJSON</a>
                    </li>
                    <li class="link">
                        <a href="classes/GeoSearch.html" data-type="entity-link">GeoSearch</a>
                    </li>
                    <li class="link">
                        <a href="classes/HasLoadableContent.html" data-type="entity-link">HasLoadableContent</a>
                    </li>
                    <li class="link">
                        <a href="classes/HttpCache.html" data-type="entity-link">HttpCache</a>
                    </li>
                    <li class="link">
                        <a href="classes/IdCache.html" data-type="entity-link">IdCache</a>
                    </li>
                    <li class="link">
                        <a href="classes/LanguageChangNotifier.html" data-type="entity-link">LanguageChangNotifier</a>
                    </li>
                    <li class="link">
                        <a href="classes/ListEntryComponent.html" data-type="entity-link">ListEntryComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/LocalSelectorComponent.html" data-type="entity-link">LocalSelectorComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/MapSelectorComponent.html" data-type="entity-link">MapSelectorComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/OnGoingHttpCache.html" data-type="entity-link">OnGoingHttpCache</a>
                    </li>
                    <li class="link">
                        <a href="classes/ParameterConstellation.html" data-type="entity-link">ParameterConstellation</a>
                    </li>
                    <li class="link">
                        <a href="classes/PermalinkService.html" data-type="entity-link">PermalinkService</a>
                    </li>
                    <li class="link">
                        <a href="classes/ReferenceValue.html" data-type="entity-link">ReferenceValue</a>
                    </li>
                    <li class="link">
                        <a href="classes/ReferenceValueOption.html" data-type="entity-link">ReferenceValueOption</a>
                    </li>
                    <li class="link">
                        <a href="classes/ReferenceValues.html" data-type="entity-link">ReferenceValues</a>
                    </li>
                    <li class="link">
                        <a href="classes/ResizableComponent.html" data-type="entity-link">ResizableComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/SettingsService.html" data-type="entity-link">SettingsService</a>
                    </li>
                    <li class="link">
                        <a href="classes/Station.html" data-type="entity-link">Station</a>
                    </li>
                    <li class="link">
                        <a href="classes/TimeInterval.html" data-type="entity-link">TimeInterval</a>
                    </li>
                    <li class="link">
                        <a href="classes/TimedDatasetOptions.html" data-type="entity-link">TimedDatasetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/Timeseries.html" data-type="entity-link">Timeseries</a>
                    </li>
                    <li class="link">
                        <a href="classes/TimeseriesCollection.html" data-type="entity-link">TimeseriesCollection</a>
                    </li>
                    <li class="link">
                        <a href="classes/Timespan.html" data-type="entity-link">Timespan</a>
                    </li>
                    <li class="link">
                        <a href="classes/UriParameterCoder.html" data-type="entity-link">UriParameterCoder</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/BasicAuthInterceptorService.html" data-type="entity-link">BasicAuthInterceptorService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CachingInterceptor.html" data-type="entity-link">CachingInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DatasetImplApiInterface.html" data-type="entity-link">DatasetImplApiInterface</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EventingImplApiInterface.html" data-type="entity-link">EventingImplApiInterface</a>
                            </li>
                            <li class="link">
                                <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LocalHttpCache.html" data-type="entity-link">LocalHttpCache</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LocalOngoingHttpCache.html" data-type="entity-link">LocalOngoingHttpCache</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NominatimGeoSearchService.html" data-type="entity-link">NominatimGeoSearchService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SplittedDataDatasetApiInterface.html" data-type="entity-link">SplittedDataDatasetApiInterface</a>
                            </li>
                            <li class="link">
                                <a href="injectables/StatusCheckService.html" data-type="entity-link">StatusCheckService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/AdditionalData.html" data-type="entity-link">AdditionalData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AdditionalDataEntry.html" data-type="entity-link">AdditionalDataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BasicAuthCredentials.html" data-type="entity-link">BasicAuthCredentials</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/BlacklistedService.html" data-type="entity-link">BlacklistedService</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Cache.html" data-type="entity-link">Cache</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CachedItem.html" data-type="entity-link">CachedItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Category.html" data-type="entity-link">Category</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CollectionMetadata.html" data-type="entity-link">CollectionMetadata</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/D3Copyright.html" data-type="entity-link">D3Copyright</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/D3GraphOptions.html" data-type="entity-link">D3GraphOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/D3PlotOptions.html" data-type="entity-link">D3PlotOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Data.html" data-type="entity-link">Data</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataConst.html" data-type="entity-link">DataConst</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataEntry.html" data-type="entity-link">DataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataEntry-1.html" data-type="entity-link">DataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataParameterFilter.html" data-type="entity-link">DataParameterFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DataYRange.html" data-type="entity-link">DataYRange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DatasetApi.html" data-type="entity-link">DatasetApi</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DatasetApiV1.html" data-type="entity-link">DatasetApiV1</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DatasetApiV2.html" data-type="entity-link">DatasetApiV2</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DatasetConstellation.html" data-type="entity-link">DatasetConstellation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DatasetTableData.html" data-type="entity-link">DatasetTableData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DrawOptions.html" data-type="entity-link">DrawOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Event.html" data-type="entity-link">Event</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventFilter.html" data-type="entity-link">EventFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventResults.html" data-type="entity-link">EventResults</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventTrigger.html" data-type="entity-link">EventTrigger</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventType.html" data-type="entity-link">EventType</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventingEndpoint.html" data-type="entity-link">EventingEndpoint</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EventingFilter.html" data-type="entity-link">EventingFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ExtendedScatterData.html" data-type="entity-link">ExtendedScatterData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Favorite.html" data-type="entity-link">Favorite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Feature.html" data-type="entity-link">Feature</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FilteredParameter.html" data-type="entity-link">FilteredParameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FilteredProvider.html" data-type="entity-link">FilteredProvider</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GeoCureGeoJSONOptions.html" data-type="entity-link">GeoCureGeoJSONOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GeoReverseOptions.html" data-type="entity-link">GeoReverseOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GeoReverseResult.html" data-type="entity-link">GeoReverseResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GeoSearchOptions.html" data-type="entity-link">GeoSearchOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GeoSearchResult.html" data-type="entity-link">GeoSearchResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/GroupFavorite.html" data-type="entity-link">GroupFavorite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HighlightDataset.html" data-type="entity-link">HighlightDataset</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HighlightOutput.html" data-type="entity-link">HighlightOutput</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HighlightValue.html" data-type="entity-link">HighlightValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HttpRequestOptions.html" data-type="entity-link">HttpRequestOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HttpServiceHandler.html" data-type="entity-link">HttpServiceHandler</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HttpServiceInterceptor.html" data-type="entity-link">HttpServiceInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDataEntry.html" data-type="entity-link">IDataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDataset.html" data-type="entity-link">IDataset</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Id.html" data-type="entity-link">Id</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Identifiable.html" data-type="entity-link">Identifiable</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InternalDataEntry.html" data-type="entity-link">InternalDataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/InternalDatasetId.html" data-type="entity-link">InternalDatasetId</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LayerOptions.html" data-type="entity-link">LayerOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Layout.html" data-type="entity-link">Layout</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ListSelectorParameter.html" data-type="entity-link">ListSelectorParameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LocatedProfileDataEntry.html" data-type="entity-link">LocatedProfileDataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LocatedTimeValueEntry.html" data-type="entity-link">LocatedTimeValueEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MinMaxRange.html" data-type="entity-link">MinMaxRange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NominatimReverseResult.html" data-type="entity-link">NominatimReverseResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NominatimSearchResult.html" data-type="entity-link">NominatimSearchResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Notification.html" data-type="entity-link">Notification</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NotificationFilter.html" data-type="entity-link">NotificationFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NotificationLevel.html" data-type="entity-link">NotificationLevel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NotificationResults.html" data-type="entity-link">NotificationResults</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Offering.html" data-type="entity-link">Offering</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PagingFilter.html" data-type="entity-link">PagingFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Parameter.html" data-type="entity-link">Parameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ParameterFilter.html" data-type="entity-link">ParameterFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ParsedTimespanPreset.html" data-type="entity-link">ParsedTimespanPreset</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Phenomenon.html" data-type="entity-link">Phenomenon</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Platform.html" data-type="entity-link">Platform</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PlatformParameter.html" data-type="entity-link">PlatformParameter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PresenterHighlight.html" data-type="entity-link">PresenterHighlight</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PresenterMessage.html" data-type="entity-link">PresenterMessage</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PresenterOptions.html" data-type="entity-link">PresenterOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Procedure.html" data-type="entity-link">Procedure</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ProfileDataEntry.html" data-type="entity-link">ProfileDataEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Provider.html" data-type="entity-link">Provider</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Publication.html" data-type="entity-link">Publication</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PublicationFilter.html" data-type="entity-link">PublicationFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PublicationResults.html" data-type="entity-link">PublicationResults</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RawData.html" data-type="entity-link">RawData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Rule.html" data-type="entity-link">Rule</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ScatterData.html" data-type="entity-link">ScatterData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Service.html" data-type="entity-link">Service</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ServiceQuantities.html" data-type="entity-link">ServiceQuantities</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Settings.html" data-type="entity-link">Settings</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SingleFavorite.html" data-type="entity-link">SingleFavorite</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/StationProperties.html" data-type="entity-link">StationProperties</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/StatusInterval.html" data-type="entity-link">StatusInterval</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Subscription.html" data-type="entity-link">Subscription</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SubscriptionFilter.html" data-type="entity-link">SubscriptionFilter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SubscriptionResults.html" data-type="entity-link">SubscriptionResults</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SupportedMimeTypes.html" data-type="entity-link">SupportedMimeTypes</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TimeValueEntry.html" data-type="entity-link">TimeValueEntry</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TimeseriesExtras.html" data-type="entity-link">TimeseriesExtras</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TimespanMomentTemplate.html" data-type="entity-link">TimespanMomentTemplate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TimespanPreset.html" data-type="entity-link">TimespanPreset</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TrajectoryResult.html" data-type="entity-link">TrajectoryResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/YAxisSelection.html" data-type="entity-link">YAxisSelection</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/YRanges.html" data-type="entity-link">YRanges</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/YScale.html" data-type="entity-link">YScale</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});