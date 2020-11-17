import {check} from 'meteor/check';
import {LinksCollection} from '/imports/db/links';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
    'insert'(text) {
        check(text, String);
        if (!text.trim()) {
            return
        }
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        LinksCollection.insert({
            text,
            createdAt: new Date,
            userId: this.userId,
        })
    },
    'removeLink'(linkId) {
        check(linkId, String)
        if (!linkId) {
            return
        }
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        LinksCollection.remove(linkId)
        return {
            message: 'success'
        }
    },
    'createNewUser'({username, password}) {
        check(username, String)
        check(password, String)

        if (Accounts.findUserByUsername(username)) {
            throw new Meteor.Error('Username is already existed')
        }
        Accounts.createUser({
            username,
            password
        })
        return true
    }
})
