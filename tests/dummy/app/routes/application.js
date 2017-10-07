import Ember from 'ember';

import LocalForage from 'ember-cli-localforage';

export default Ember.Route.extend({
	async setupController() {
		let total = await LocalForage.getItem('total');
		this.controller.set('total', total || 0);
	},
	actions: {
		async addToTotal(){
			let total = this.controller.get('total');
			this.controller.set('total', ++total);
			await LocalForage.setItem('total', total);
		}
	}
});
