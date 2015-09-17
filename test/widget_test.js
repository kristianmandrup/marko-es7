'use strict';
import assert from 'assert';

import MyCoolWidget from '../dist';
// var MyCoolWidget = require('marko-es7');

// require('../node-require').install();

var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
//
// require('./util').loadRenderTests(
//     'fixtures/templates',
//     'render',
//     {
//         ext: '.marko'
//     });

let buffer = '';

let out = {
  write: function(txt) {
    // console.log('write', txt);
    buffer += txt;
  }
};

describe('MyCoolWidget', function () {
  let myWidget = new MyCoolWidget();

  beforeEach(function() {
    buffer = '';
  });

  describe('render', function () {
    it('should render with no data', function () {
      myWidget.customRender({}, out);
      expect(buffer).to.eql('Hello Kris!');
    });

    it('should render using data', function () {
      myWidget.customRender({name: 'Kristian'}, out);
      expect(buffer).to.eql('Hello Kristian!');
    });
  });

  describe('template renderer', function () {
    it('should render with no data', function () {
      myWidget.render({}, out);
      expect(buffer).to.eql('Hello Kris!');
    });
  });
});
