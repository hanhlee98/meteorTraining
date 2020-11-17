import {compose, hoc} from '../../../@';
import {useCallback, useState} from "react";
import util from 'util';
import {useHistory} from 'react-router-dom';

const container = compose(
    hoc((props) => {
        const history = useHistory()
        const [err, setErr] = useState(false)
        const submit = useCallback(values => {
            const loginRes = util.promisify(Meteor.loginWithPassword)
            const main = async () => {
                const res = await loginRes(values.username, values.password)
                history.push('/')
            }
            main().catch((e) => {setErr(e.message)})
        }, [])
        const handleClose = useCallback(() => {
            setErr(false)
        }, [])

        return {
            ...props,
            submit,
            err,
            handleClose
        };
    })
);

export default container;
