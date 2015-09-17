'use strict';

import marko from 'marko';
import Widget from './widget';

@Widget({template: './template.marko'})
export default class MyCoolWidget {
  constructor(widgetConfig) {
    // super(widgetConfig);
  }

  render(input, out) {
  	out.write('Hello ' + input.name + '!');
  }

  renderer(input, out) {
    input.name = input.name || 'files';
    console.log('my-cool', input);
    this.template.render(input, out);
  }
}


