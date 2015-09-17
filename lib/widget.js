'use strict';
// Widget decorator: adds static renderer function to class
export default function Widget({template = './template.marko', templateData = undefined} = {}) {

  return function decorator(constructor) {
    var templateData = templateData || constructor.prototype.getTemplateData;
    var template = require.resolve(template);

    var renderer = require('marko-widgets').defineRenderer({
      template: template, // "configuration then convention " ;)

      getTemplateData: function(state, input) {
        console.log('getTemplateData', state, input);
        templateData(state, input);
      }
    });
    constructor.renderer = constructor.prototype.renderer = renderer;
    constructor.render = renderer.render;
    constructor.template = constructor.prototype.template = template;
    return constructor;
  };
}