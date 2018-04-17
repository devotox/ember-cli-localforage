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

		this.import('vendor/localforage/localforage.js');
		this.import('vendor/shims/localforage.js');
	}
};