import { Component, OnInit } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import * as L from 'leaflet';
export class drivers
{
  public name: string;
  public lat  : number;
  public long : number;
  public contact_number:number;
  public status:string;
  public vehicle: string;
  public vehicle_number
}

@Component({
  selector: 'app-dashboard-2',
  styleUrls: ['./dashboard2.component.scss'],
  templateUrl: './dashboard2.component.html',
})
export class Dashboard2Component extends UpgradableComponent implements OnInit {
  
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

  ngOnInit(): void {
    console.log(this.drivers)

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
      <table style="width:100%">
      <tr>
        <th>Driver</th>
        <th>Vehicle</th>
        <th>Vehicle Number</th>
        <th>Status</th>
        <th>Contact</th>
      </tr>
      <tr>
        <td>${this.drivers[i].name}</td>
        <td>${this.drivers[i].vehicle}</td>
        <td>${this.drivers[i].vehicle_number}</td>
        <td>${this.drivers[i].status}</td>
        <td>${this.drivers[i].contact_number}</td>
      </tr>
      
    </table>

      `);
    }



    // var legend = L.control({position: 'topright'});
    // legend.onAdd = function (map) {

    // var div = L.DomUtil.create('div', 'info legend');
    // var labels = ['<strong>Click on the Markers to View more information</strong>'];
    // var categories = ['pickup requests are also displayed on the map'];

    // for (var i = 0; i < categories.length; i++) {

    //         div.innerHTML += 
    //         labels.push(
    //             '<i class="circle" style="background:' + getColor(categories[i]) + '"></i> ' +
    //         (categories[i] ? categories[i] : '+'));

    //     }
    //     div.innerHTML = labels.join('<br>');
    // return div;
    // };
    // legend.addTo(mymap);
 

  }
}
