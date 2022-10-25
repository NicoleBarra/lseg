import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  searchTerm = '';

  title = 'Pattern Framework';

  links = [
    { path: '/home', icon: 'home', title: 'Introduction' },
    { path: '/courses', icon: 'accessibility', title: 'Customer Journey' },
    { path: '/courses', icon: 'announcement', title: 'Developer Journey' },
    { path: '/courses', icon: 'build', title: 'Training' },
    { path: '/courses', icon: 'cached', title: 'Approval' },
    { path: '/courses', icon: 'dashboard', title: 'Analytics' },
    { path: '/courses', icon: 'extension', title: 'Application Macro Pattern' },
    { path: '/courses', icon: 'group_work', title: 'CICD' },
    { path: '/courses', icon: 'hourglass_full', title: 'Compute' },
    { path: '/courses', icon: 'language', title: 'Configuration Management' },
    { path: '/courses', icon: 'offline_bolt', title: 'Data' },
    { path: '/courses', icon: 'pan_tool', title: 'Frontend' },
  ];
}
