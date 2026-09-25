import { introModule } from './modules/intro.js';
import { module1 } from './modules/module1.js';
import { module2 } from './modules/module2.js';
import { module3 } from './modules/module3.js';
import { module4 } from './modules/module4.js';
import { module5 } from './modules/module5.js';
import { module6 } from './modules/module6.js';
import { module7 } from './modules/module7.js';
import { module8 } from './modules/module8.js';
import { module9 } from './modules/module9.js';
import { module10 } from './modules/module10.js';

export const allModules = [
  introModule,
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10
];

// Flat list of all topics for global search and linear navigation
export const allTopics = allModules.flatMap(module =>
  module.topics.map(topic => ({
    ...topic,
    moduleId: module.id,
    moduleTitle: module.title
  }))
);
