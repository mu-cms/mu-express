const express = require('express');
const { default: mix } = require('@es-git/mix');
const { default: FsRepo } = require('@es-git/node-fs-repo');
const { default: zlibMixin } = require('@es-git/zlib-mixin');
const { default: objectMixin } = require('@es-git/object-mixin');
const { default: loadAsMixin } = require('@es-git/load-as-mixin');
const { default: pathToObjectMixin } = require('@es-git/path-to-object-mixin');
const { PORT, PATH } = require('./const');

const Repo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(loadAsMixin)
  .with(pathToObjectMixin);

express()
  .use(require('./router')(new Repo(PATH)))
  .use((req, res) => res.status(404).send(`unable to locate that for you`))
  .listen(PORT, () => console.log(`app started on ${PORT}`));