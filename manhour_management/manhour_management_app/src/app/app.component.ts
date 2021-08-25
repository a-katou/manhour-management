import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('accordion', [
      state('show', style({ width: '*', opacity: 1 })),
      state('hide', style({ width: '0', opacity: 0, overflow: 'hidden' })),
      transition('show <=> hide', [ animate('.075s') ]),
    ])
  ]
})
export class AppComponent {

  public stateMenu = 'show';
  public breadcrumbs = [];
  private pages = [
    { url: ''              , showMenu: true, showUser: true, breadcrumbs: ['']                  , title: 'ホーム' },
    { url: 'manhour-detail', showMenu: true, showUser: true, breadcrumbs: ['', 'manhour-detail'], title: '作業票登録' },
    { url: 'users'         , showMenu: true, showUser: true, breadcrumbs: ['', 'users']         , title: 'ユーザ一覧' },
  ];

  constructor(
    private title: Title,
    public router: Router
  ) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const page = this.pages.filter(x => x.url === event.url.substr(1))[0];
        this.title.setTitle(page.title);
        this.breadcrumbs = [];
        for (let i = 0; i < page.breadcrumbs.length; i++) {
          const crumb = this.pages.filter(x => x.url === page.breadcrumbs[i])[0];
          if (i === page.breadcrumbs.length - 1) {
            this.breadcrumbs.push({ title: crumb.title, url: null});
          } else {
            this.breadcrumbs.push({ title: crumb.title, url: crumb.url});
          }
        }
      }
    });

  }

  public toggle(): void {
    this.stateMenu = this.stateMenu === 'hide' ? 'show' : 'hide';
  }

}
