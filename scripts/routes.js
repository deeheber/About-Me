/*** Home ***/
page('/', controllers.home);
page('/contact', controllers.contact);
page('/interests', controllers.interests);
page('/game', controllers.game);

page('*', controllers.notFound);

page();
