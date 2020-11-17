import { Meteor } from 'meteor/meteor';
import {LinksCollection} from '/imports/db/links';

Meteor.publish('links', function publishTasks() {
    return LinksCollection.find({ userId: this.userId });
});