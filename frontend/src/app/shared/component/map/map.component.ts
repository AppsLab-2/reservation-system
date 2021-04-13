import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { Map, View } from 'ol';
import { MapOptions } from 'ol/PluggableMap';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Zoom } from 'ol/control';

@Component({
  selector: 'hera-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {

  @Input() location?: number[];
  @Input() zoom = 10;
  @Input() static = false;
  @ViewChild('map') mapElement?: ElementRef<HTMLElement>;
  map?: Map;

  constructor(
    private readonly zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      if (this.location && this.mapElement) {
        const options: MapOptions = {
          target: this.mapElement.nativeElement,
          layers: [
            new TileLayer({ source: new OSM() })
          ],
          view: new View({
            center: fromLonLat(this.location),
            zoom: this.zoom
          })
        };
        if (this.static) {
          options.controls = [];
          options.interactions = [];
        } else {
          options.controls = [new Zoom()];
        }
        this.map = new Map(options);
      }
    });
  }

  // TODO: make sure this doesn't cause memory leak
  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.map) {
        this.map.setTarget(undefined);
        this.map.dispose();
        this.map = undefined;
      }
    });
  }

}
