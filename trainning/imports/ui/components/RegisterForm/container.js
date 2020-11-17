import {compose, hoc} from '../../../@';
import {useCallback, useState} from "react";
import util from 'util';
import {useHistory} from 'react-router-dom';

const container = compose(
    hoc((props) => {
        const history = useHistory()
        const [err, setErr] = useState(null)
        const submit = useCallback(values => {
            const registerCall = util.promisify(Meteor.call)
            const main = async () => {
                await registerCall('createNewUser', values)
                history.push('/login')
            }
            main().catch((e) => {
                setErr(e.message)
            })
        }, [])

        const handleClose = useCallback(() => {
            setErr(false)
        },[])

        return {
            ...props,
            submit,
            err,
            handleClose
        };
    })
);

export default container;
