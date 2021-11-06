import React, { useEffect, useState } from 'react';
import { Card, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_POSTS } from '../../../redux/types';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Home = () => {

    const [loading, setLoading] = useState(true);
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
        setLoading(!loading)
    }, [])

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then(data => dispatch({type: SET_POSTS, payload: data}))
    }

    return (
        <>
        {
            posts && posts.map(item => (
                    <Card style={{ width: 300, marginTop: 16 }} key={item.id} loading={loading}>
                        <Link to={`post/${item.id}`}>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={item.title}
                            description={item.body}
                        />
                        </Link>
                    </Card>
            ))
        }
      </>
    );
};

export default Home;