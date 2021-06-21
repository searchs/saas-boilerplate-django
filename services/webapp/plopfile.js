const promptDirectory = require('inquirer-directory');

const addReduxModuleGenerator = require('./plop/reduxModule');
const addReactComponentGenerator = require('./plop/reactComponent');
const addReactHookGenerator = require('./plop/reactHook');
const addApiModelGenerator = require('./plop/apiModel');
const addCrudGenerator = require('./plop/crud');
const addIconRegisterGenerator = require('./plop/icon');
const addNotificationGenerator = require('./plop/notification');

module.exports = function (plop) {
  plop.setPrompt('directory', promptDirectory);

  addReduxModuleGenerator(plop);
  addReactComponentGenerator(plop);
  addReactHookGenerator(plop);
  addApiModelGenerator(plop);
  addCrudGenerator(plop);
  addIconRegisterGenerator(plop);
  addNotificationGenerator(plop);
};
