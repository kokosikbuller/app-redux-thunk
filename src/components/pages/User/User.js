import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SET_USER } from '../../../redux/types';
import { Descriptions } from 'antd';

const User = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(data => data.json())
            .then(res => dispatch({type: SET_USER, payload: res}))
    }, [])


    return (
              user && <Descriptions title="User Info" layout="vertical">
                        <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
                        <Descriptions.Item label="Telephone">{user.phone}</Descriptions.Item>
                        <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
                      </Descriptions>
    );
};

export default User;