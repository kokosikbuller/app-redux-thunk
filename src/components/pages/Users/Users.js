import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SET_USERS } from '../../../redux/types';
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';

const Users = () => {

    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(res => dispatch({type: SET_USERS, payload: res}))
    }, [dispatch])


    return (
        <div>
            <Divider orientation="left">Small Size</Divider>
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={users}
                renderItem={item => <List.Item><Link to={`/users/${item.id}`}>{item.name}</Link></List.Item>}
            />
        </div>
    );
};

export default Users;