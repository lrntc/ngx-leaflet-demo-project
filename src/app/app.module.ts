import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpModule } from '@angular/http';
import { MapComponent } from './map/map.component';
import { ROUTES } from './app.routes';
import { GeoService } from './services/geo.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    GeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
