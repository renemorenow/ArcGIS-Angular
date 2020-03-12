import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Set our map properties
  mapCenter = [-122.4194, 37.7749];
  // basemapType = 'satellite';
  basemapType = {portalItem: {
    id: "5c6ec52a35bc4341b50c00235be138d3"
  }};
  mapZoomLevel = 14;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
}
