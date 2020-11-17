import React from 'react';
import 'antd/dist/antd.css';
import {Root} from './styled';
import container from './container';
import {Input} from 'antd';
import {useHistory} from 'react-router-dom';
import LinkList from '../LinkList';

const Homepage = (props) => {
    const {user, links, handleAdd, text, handleChange, isLoading} = props
    const history = useHistory()
    return (
        <Root>
            {!user ? history.push('/login') :
                <div>
                    <Input placeholder="add link" value={text} onChange={handleChange} onPressEnter={handleAdd}/>
                    <LinkList links ={links}/>
                </div>
            }
        </Root>
    );
};

export default container(Homepage);
