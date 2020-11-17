import {Meteor} from 'meteor/meteor';
import {compose, hoc} from '../../../@';
import {useTracker} from 'meteor/react-meteor-data';
import {LinksCollection} from '/imports/db/links';
import {useCallback, useState} from 'react';
import util from 'util';
import set from "@babel/runtime/helpers/esm/set";

const container = compose(
    hoc((props) => {
        const [text, setText] = useState("")
        const user = useTracker(() => Meteor.user())

        const handleChange = useCallback((e) => {
            setText(e.target.value)
        }, [])

        const handleAdd = useCallback(() => {
            const insertLink = util.promisify(Meteor.call)
            const main = async () => {
                await insertLink('insert', text)
                await setText('')
            }
            main().catch(e => console.log(e.message))
        }, [text])

        const {links, isLoading} = useTracker(() => {
            const noDataAvailable = {links: []};
            if (!Meteor.user()) {
                return noDataAvailable;
            }
            const handler = Meteor.subscribe('links');

            if (!handler.ready()) {
                return {...noDataAvailable, isLoading: true};
            }

            const links = LinksCollection.find({}).fetch();
            return {links};
        })

        return {
            ...props,
            user,
            links,
            handleAdd,
            text,
            handleChange,
            isLoading
        };
    })
);

export default container;
