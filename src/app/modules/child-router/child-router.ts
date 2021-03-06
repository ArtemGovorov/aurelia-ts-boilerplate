import { Router, RouterConfiguration } from 'aurelia-router';

export class ChildRouter {

	private router: Router;
	public heading = 'Child Router';

	public configureRouter(config: RouterConfiguration, router: Router): void {
		config.map([
			{ route: ['', 'welcome'], name: 'welcome', moduleId: './../welcome/welcome', nav: true, title: 'Welcome' },
			{ route: 'users', name: 'users', moduleId: './../users/users', nav: true, title: 'Github Users' },
			{ route: 'child-router', name: 'child-router', moduleId: './../child-router/child-router', nav: true, title: 'Child Router' }
		]);

		this.router = router;
	}
}
