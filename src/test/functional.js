import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('donejs-f-7 functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-f-7 main page shows up', function() {
  F('title').text('donejs-f-7', 'Title is set');
});
