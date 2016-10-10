import '../lib/setup';
import { App } from '../../src/app/app';

class RouterStub {
  public routes;
  public title = '';
  public options = {
    pushState: false
  };

  public configure(handler): void {
    handler(this);
  }

  public map(routes): void {
    this.routes = routes;
  }
}

describe('the App module', () => {
  let sut;
  let mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App(undefined, {
      NAME: '',
      VERSION: '',
      ENV: '',
      PLATFORM: 'web'
    });
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({
      route: ['', 'welcome'],
      name: 'welcome',
      moduleId: './modules/welcome/welcome',
      nav: true,
      title: 'Welcome'
    });
  });

  it('should have a users route', () => {
    expect(sut.router.routes).toContain({
      route: 'users',
      name: 'users',
      moduleId: './modules/users/users',
      nav: true,
      title: 'Github Users'
    });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain({
      route: 'child-router',
      name: 'child-router',
      moduleId: './modules/child-router/child-router',
      nav: true,
      title: 'Child Router'
    });
  });
});
