'use strict';
import assert from 'assert';

import MyCoolWidget from '../dist';
// var MyCoolWidget = require('marko-es7');

describe('MyCoolWidget', function () {
  let myWidget = MyCoolWidget.new();

  it('should render with no data', function () {
    myWidget.render();
  });

  it('should render using data', function () {
    myWidget.render({});
  });
});
