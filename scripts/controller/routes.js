page('/', controllers.home);

page('/About-Me/contact', controllers.contact);
page('/interests', controllers.interests);
page('/game', controllers.game);

page('*', controllers.notFound);

page();
