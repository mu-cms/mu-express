const fetch = require('node-fetch');
const { default: mix } = require('@es-git/mix');
const { default: FsRepo } = require('@es-git/node-fs-repo');
const { default: MemRepo } = require('@es-git/memory-repo');
const { default: zlibMixin } = require('@es-git/zlib-mixin');
const { default: fetchMixin } = require('@es-git/fetch-mixin');
const { default: objectMixin } = require('@es-git/object-mixin');
const { default: loadAsMixin } = require('@es-git/load-as-mixin');

exports.FsRepo = mix(FsRepo)
  .with(zlibMixin)
  .with(fetchMixin, fetch)
  .with(objectMixin)
  .with(loadAsMixin);

exports.MemRepo = mix(MemRepo)
  .with(fetchMixin, fetch)
  .with(objectMixin)
  .with(loadAsMixin);