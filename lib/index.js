'use strict';

import marko from 'marko';
import Widget from './widget';

@Widget({template: './template.marko'})
export default class MyCoolWidget {
  constructor(widgetConfig) {
    // super(widgetConfig);
  }

  customRender(input, out) {
    input.name = input.name || 'Kris';
  	out.write('Hello ' + input.name + '!');
  }

  render(input, out) {
    input.name = input.name || 'files';
    let template = this.prototype.template || this.constructor.template;
    console.log('my-cool', input, template);
    // template.render(input, out);
  }
}


