import { Component, HostBinding } from '@angular/core';

import { NotificationMenuService } from './notification-menu.service';

@Component({
  selector: 'app-notification-menu',
  styleUrls: ['./notification-menu.component.scss'],
  templateUrl: './notification-menu.component.html',
  providers: [NotificationMenuService],
})
export class NotificationMenuComponent {
  @HostBinding('class.notification-menu') public readonly notificationMenu = true;

  public notifications: object[];

  constructor(notificationMenuService: NotificationMenuService) {
    this.notifications = notificationMenuService.getNotifications();
  }

  
}
