import { Component, OnInit, ElementRef } from 'angular2/core';

declare var jQuery;

@Component({
  selector: 'world-map-widget',
  template:`
  <div id="map"></div>
  `,
  styles:[`
  #map {
    width: 100%;
    height: 330px;
  }
  `]
})
export class WorldMapWidget implements OnInit {
  constructor(private _el: ElementRef) {}
  ngOnInit(): void {
    let map = jQuery(this._el.nativeElement).find('#map');
    map.vectorMap({
      map: 'world_en',
      backgroundColor: '#FFF',
      borderColor: '#D9D9D9',
      borderOpacity: 0.25,
      borderWidth: 1,
      color: '#CCCCCC',
      enableZoom: true,
      hoverColor: '#63B4E6',
      hoverOpacity: null,
      normalizeFunction: 'linear',
      scaleColors: ['#b6d6ff', '#005ace'],
      selectedColor: '#63B4E6',
      selectedRegions: [],
      showTooltip: true,
      onRegionClick: function (element, code, region) {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();
        console.log(message);
      }
    });
  }
}