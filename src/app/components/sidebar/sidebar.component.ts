import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss', './sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'Fleet UN';
  public menu = [
    { name: ' Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'Live Tracking', link: '/app/dashboard-custom', icon: 'view_quilt' },
    { name: 'Stastics', link: '/app/charts', icon: 'multiline_chart' },
    { name: 'Account Details', link: '/app/components', icon: 'person' },
    // {
    //   name: 'UI',
    //   children: [
    //     ...[
    //       'buttons',
    //       'cards',
    //       'colors',
    //       'forms',
    //       'icons',
    //       'typography',
    //       'tables',
    //     ].map(ui => ({
    //       name: ui[0].toUpperCase() + ui.slice(1),
    //       link: `/ui/${ui}`,
    //     })),
    //     {
    //       name: 'Right sidebar',
    //       link: '/ui/right-sidebar',
    //     },
    //   ],
    //   icon: 'view_comfy',
    // },
   
    // {
    //   name: 'Maps', icon: 'map', children: [
    //   { name: 'Simple map', link: '/maps/simple' },
    //   { name: 'Advanced map', link: '/maps/advanced' },
    //   ],
    // },
   
    // {
    //   name: 'Pages', children: [
    //   { name: 'Sign in', link: '/pages/login' },
    //   { name: 'Sign up', link: '/pages/sign-up' },
    //   { name: 'Forgot password', link: '/pages/forgot-password' },
    //   { name: '404', link: '/pages/error' },
    //   ],
    //   icon: 'pages',
    // },
  ];
}
