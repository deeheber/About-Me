page('/', controllers.home);
page('/home', '/');

page('/contact', controllers.contact);
page('/interests', controllers.interests);
page('/game', controllers.game);

page('*', controllers.notFound);

page();
