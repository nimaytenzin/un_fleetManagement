import { Component, HostBinding, OnInit } from '@angular/core';
import dialogPolyfill from 'dialog-polyfill'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  @HostBinding('class.projects-table') public readonly projectsTable = true;

  public tableHeader: string[] = [
    'user',
    'Contact Info',
    'Pickup Location',
    'Time',
    'Assign Driver',
  ];

  public driverHeader:string[] =[
    'Name',
    'Vehicle',
    'Status',
    'Current Location',
    'Assign'
  ]
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
      name:"Hem Bdr",
      lat:27.458895, 
      long:89.650124 ,
      contact_number: 17446623,
      status_short: 'busy',
      status: "Dropping Dawa Dem to Upper Motithang",
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    },
    {
      name:"Kinley Wangyal",
      lat:27.487878,
      long: 89.629001,
      contact_number: 17446623,
      status_short: 'busy',
      status: "picking up Pema Lhadron from UNDP head office",
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    }

  ]
  
  public data: object[] = [
    {
      user: 'Pema Lhadron,UNDP',
      contact: '17465532',
      location: 'UNDP head Office',
      time:'12:00 AM 1/02/2020'
    },
    {
      user: 'Shara Pradhan,UNDP',
      contact: '17465234',
      location: 'UNICEF Guest House',
      time:'12:00 AM 1/02/2020'
    },
    {
      user: 'Dawa Dem,UNDP',
      contact: '17465532',
      location: 'Clock Tower',
      time:'12:00 AM 1/02/2020'
    },
    {
      user: 'Tenzin Nima,UNDP',
      contact: '17465533',
      location: 'Ramada Hotel',
      time:'12:00 AM 1/02/2020'
    }
  ];
  constructor() { }

  ngOnInit(): void {


  }

  showDialog(){
    
    // var dialogButton = document.querySelector('.dialog-button');
    // var dialog = document.querySelector('#dialog');
    // if (! dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog);
    // }
    // dialog.querySelector('button:not([disabled])')
    // .addEventListener('click', function() {
    //   dialog.close();
    // });
    // dialog.showModal();
  }

  closeDialog(){
    // var dialogButton = document.querySelector('.dialog-button');
    // var dialog = document.querySelector('#dialog');
    // dialog.querySelector('button:not([disabled])')
    // .addEventListener('click', function() {
    //   dialog.close();
    // });
  }

}
