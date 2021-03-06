import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public drivers =[
    {
      name:"Nima Yoezer",
      lat:27.477586 ,
      long:89.636292,
      contact_number: 17446623,
      status: "Free",
      status_short: 'free',
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    },
    {
      name:"Nima Yoezer",
      lat:27.458895, 
      long:89.650124 ,
      contact_number: 17446623,
      status_short: 'busy',
      status: "Dropping Dawa Dem to Upper Motithang",
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    },
    {
      name:"Nima Yoezer",
      lat:27.487878,
      long: 89.629001,
      contact_number: 17446623,
      status_short: 'busy',
      status: "picking up Pema Lhadron from UNDP head office",
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    }

  ]
  constructor() { }

  ngOnInit(): void {
    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      shadowSize: [41, 41]
    });
    var redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      shadowSize: [41, 41]
    });
        
  


    var mymap = L.map('map').setView([27.473017, 89.637579], 14);
    L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}').addTo(mymap);

    function getIcon(status){
      if(status === "free"){
        return greenIcon
      }else{
        return redIcon
      }
    }

    for(let i=0; i<this.drivers.length; i++){
      console.log(); 
      var marker = L.marker([this.drivers[i].lat, this.drivers[i].long], {icon: getIcon(this.drivers[i].status_short)}).addTo(mymap);
      marker.bindPopup(`

      <p style="padding:0;margin:0">Driver : ${this.drivers[i].name}</p>
      <p  style="padding:0;margin:0">Vehicle Number : ${this.drivers[i].vehicle_number}</p>
      <p  style="padding:0;margin:0">Status : ${this.drivers[i].status}</p>
      <p  style="padding:0;margin:0">Contact Number :${this.drivers[i].contact_number}</p>
      `);
    }


  }

  

}
