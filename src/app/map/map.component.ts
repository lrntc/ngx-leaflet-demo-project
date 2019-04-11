import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, polyline } from 'leaflet';
import { GeoService } from '../services/geo.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
	markers = [];
	options;
	layers = [];
	bounds = null;

	constructor(private geoService: GeoService) { }

	ngOnInit() {
		this.markers = this.geoService.getMarkers();
		//Render the map
		this.mapSetup(this.markers);
	}

	mapSetup(markers) {
		this.renderMarkersLayer(markers);

		this.options = {
			layers: [
				tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
			],
			zoom: 13
		};
	}

	renderMarkersLayer(markers) {
		if (markers.length != 0 ) {
			this.bounds = [];
		}

		markers.forEach((marker) => {
			if (marker.lat) {
				this.layers.push(
					circle([marker.lat, marker.long], { radius: 50 })
				)
				this.bounds.push(
					[marker.lat, marker.long]
				)
			}
		});

		//More options: https://leafletjs.com/reference-1.4.0.html#path
		this.layers.push(polyline(markers.map((marker) => [marker.lat, marker.long]),{color: 'red', opacity: .7, dashArray: '20,15'}));

		this.getCenterFromMarkers(markers)
	}

	getCenterFromMarkers(markers) {
		if(markers.length > 1) {
			const totalMarkers = markers.filter((marker) => marker.lat).length;
			return latLng(
				(this.getTotalOf(markers, 'lat') / totalMarkers),
				(this.getTotalOf(markers, 'long') / totalMarkers)
			);
		}

		return latLng(0,0)
	}

	private getTotalOf(items, prop) {
		return items.reduce(function (a, b) {
			return typeof b[prop] !== 'undefined' ? a + b[prop] : 0; //Extra check to remove undefined values
		}, 0);
	};

}
