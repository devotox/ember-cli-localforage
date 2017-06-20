/* eslint-env node */

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-localforage',
  included() {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    this.import('vendor/localforage.js');
    this.import('vendor/shims/localforage.js');
  },
  treeForVendor(vendorTree) {
    let localforageTree = new Funnel(path.dirname(require.resolve('localforage/dist/localforage.js')), {
      files: ['localforage.js'],
    });

    return new MergeTrees([vendorTree, localforageTree]);
  },
  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        let app = this._findHost();
        app.import(asset, options);
      };
    }
  }
};


