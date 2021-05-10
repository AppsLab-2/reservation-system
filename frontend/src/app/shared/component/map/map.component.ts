import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { Map, View } from 'ol';
import Feature from 'ol/Feature';
import { MapOptions } from 'ol/PluggableMap';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Zoom } from 'ol/control';
import VectorLayer from 'ol/layer/Vector';
import { Icon, Style } from 'ol/style';
import { Geometry, Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import { Coordinate } from 'ol/coordinate';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import { Layer } from 'ol/layer';

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
        const coordinates: Coordinate = fromLonLat(this.location);
        const mapLayer = new TileLayer({
          source: new OSM()
        });
        const layers: Layer[] = [mapLayer];
        const view = new View({
          center: coordinates,
          zoom: this.zoom
        });
        const target = this.mapElement.nativeElement;
        const options: MapOptions = { layers, view, target };
        if (this.static) {
          options.controls = [];
          options.interactions = [];
          layers.push(this.createMarkerLayer(coordinates));
        } else {
          options.controls = [new Zoom()];
        }
        this.map = new Map(options);
      }
    });
  }

  createMarkerLayer(coordinates: Coordinate): Layer {
    const markerIcon: Icon = new Icon({
      anchor: [0.5, 1.0],
      anchorXUnits: IconAnchorUnits.FRACTION,
      anchorYUnits: IconAnchorUnits.FRACTION,
      imgSize: [200, 250], // TODO: adjust this value properly
      scale: 0.1,
      src: './assets/marker.svg' // TODO: change icon
    });
    const style: Style = new Style({ image: markerIcon });
    const marker: Feature<Point> = new Feature<Point>({
      geometry: new Point(coordinates)
    });
    const source: VectorSource = new VectorSource<Geometry>({ features: [marker] });
    return new VectorLayer({ source, style });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.map !== undefined) {
        this.map.setTarget(undefined);
        this.map.dispose();
        this.map = undefined;
      }
    });
  }

}
