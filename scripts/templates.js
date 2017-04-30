import { requester } from 'requester';

const cacheObj = {};

export function load(templateName) {
  if(cacheObj.hasOwnProperty(templateName)) {
    return Promise.resolve(cacheObj[templateName]);
  }

  return requester.get(`templates/${templateName}.handlebars`)
    .then(template => {
      const compiledTemplate = Handlebars.compile(template);
      cacheObj[templateName] = compiledTemplate;
      return Promise.resolve(compiledTemplate);
    });
}