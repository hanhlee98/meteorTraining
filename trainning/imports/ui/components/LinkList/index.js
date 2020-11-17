import React from 'react';
import 'antd/dist/antd.css';
import {Root} from './styled';
import container from './container';
import {Button, List} from 'antd';

const LinkList = (props) => {
    const {links, handleDelItem} = props
    return (
            <Root>
                {/*{links.map((item) => (<div key={item._id}>{item.text}</div>))}*/}
                <List
                    itemLayout="horizontal"
                    dataSource={links}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.text}</a>}
                            />
                            <Button type="primary" danger onClick = {()=>{handleDelItem(item._id)}}>X</Button>
                        </List.Item>
                    )}
                />
            </Root>
    );
};

export default container(LinkList);
