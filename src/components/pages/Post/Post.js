import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { SET_POSTS_COMMENTS } from '../../../redux/types';

const Post = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const postComments = useSelector(state => state.posts.postComments);

    useEffect(() => {
        fetchData(id);    
    }, [])   

    const fetchData = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then(data => dispatch({type: SET_POSTS_COMMENTS, payload: data}))
    }

    return (
        <>
            {
                postComments.map(({name, body, id}) => {
                    return (
                        <Comment
                            key={id}
                            author={name}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                                <p>
                                {body}
                                </p>
                            }
                            datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        />
                    )
                })
            }
        </>
    );
};

export default Post;


