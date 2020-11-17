import {compose, hoc} from '../../../@';
import {useCallback} from 'react';
import util from 'util';

const container = compose(
    hoc((props) => {
        const handleDelItem = useCallback((item) => {
            const removeLink = util.promisify(Meteor.call)
            const main = async () => {
                await removeLink('removeLink', item)
            }
            main().catch(e => console.log(e.message))
        }, [])

        return {
            ...props,
            handleDelItem
        };
    })
);

export default container;
