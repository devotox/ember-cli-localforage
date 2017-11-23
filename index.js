/* eslint-env node */
'use strict';

var FastbootTransform = require('fastboot-transform');

module.exports = {
	name: 'ember-cli-localforage',
	options: {
		nodeAssets: {
			localforage: {
				vendor: {
					srcDir: 'dist',
					include: ['localforage.js'],
					processTree(input) {
						return FastbootTransform(input);
					}
				}
			}
		}
	},
	included() {
		this._super.included.apply(this, arguments);
		this._ensureThisImport();

		this.import('vendor/localforage/localforage.js');
		this.import('vendor/shims/localforage.js');
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