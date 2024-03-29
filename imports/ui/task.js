import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

//import {Tasks} from '../api/tasks.js'; //no longer needed, since using Meteor.call now.

import './task.html';

Template.task.helpers({
	isOwner(){
		return this.owner === Meteor.userId();
	},
});

Template.task.events({
	'click .toggle-checked' () {
		Meteor.call('tasks.setChecked', this._id, !this.checked);
	},
	
	'click .delete'(){
		Meteor.call('tasks.remove', this._id);
	},

	'click .toggle-private'(){
		Meteor.call('tasks.setPrivate', this._id, !this.private);
	},
});