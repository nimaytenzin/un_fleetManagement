import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMenuService {
  public getNotifications(): object[] {
    return [
        
        {
          user: 'Pema Lhadron',
          contact: '17465532',
          location: 'UNDP head Office',
          time:'12:00 AM 1/02/2020'
        },
        {
          user: 'Shara Pradhan',
          contact: '17465234',
          location: 'UNICEF Guest House',
          time:'12:00 AM 1/02/2020'
        },
        {
          user: 'Dawa Dem',
          contact: '17465532',
          location: 'Clock Tower',
          time:'12:00 AM 1/02/2020'
        },
        {
          user: 'Tenzin Nima',
          contact: '17465533',
          location: 'Ramada Hotel',
          time:'12:00 AM 1/02/2020'
        }
    ]
  }
}
