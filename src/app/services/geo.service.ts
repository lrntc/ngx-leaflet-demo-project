import { Inject } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {switchMap, distinctUntilChanged, debounceTime, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class GeoService {

	constructor() { }

	public getMarkers() {
		return [
			{lat:51.1871819, long:4.3711021},
			{lat:51.205121, long:4.4273762},
			{lat:51.2255356, long:4.403227},
			{lat:51.2226184, long:4.3516283},
		];
	}
}
