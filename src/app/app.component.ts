import { Component } from '@angular/core';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gym-landing-page';

  faLocation = faLocationDot;
  faPhone = faPhone;
  faEmail = faEnvelope;

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 31.582045,
    lng: 74.329376,
  };
  zoom = 17;
}
