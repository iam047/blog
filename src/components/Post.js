import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import moment from "moment/moment";
import { dellPost } from '../actions';
import {  withRouter,NavLink } from 'react-router-dom';


const selectPostById = ( id, posts ) => {
    return posts.find(post => post.id === id);
};

class Post extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
            postSize:{
                width: '58%',
            },
            buttonDEll: {
                justifyContent:'flex-end'
            },
        };
    }

    dellPost = id => {
        this.props.dellPost(id)
    };

    timeCreate = time => {
        let now = moment(time);
        let createPostDate = now.format('dddd, MMMM DD YYYY, h:mm:ss');
        return createPostDate;
    };

    defaultUser = (user = 'user' ) => {
        return user;
    };

    defaultUserAvatar = (avatar='http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg') => {
        return avatar;
    } ;

    render(){
        const { post } = this.props;
        return (
            <List style={this.styles.root}  >
                <Card style={this.styles.postSize}>
                    <CardHeader
                        title={this.defaultUser(post.user)}
                        subtitle={this.timeCreate(post.createdAt )}
                        avatar={this.defaultUserAvatar(post.userAvatar)}
                    />
                    <CardTitle title={post.title} />
                    <CardMedia>
                        <img  src={post.image}/>
                    </CardMedia>
                    <CardText >
                        {post.description}
                        </CardText>
                    <CardActions>
                        <NavLink to="/posts">
                            <FlatButton label="Back to posts" />
                        </NavLink>
                        <NavLink to={`/post/${post.id}/edit`}>
                            <FlatButton label="Edit" />
                        </NavLink>
                        <NavLink to="/posts">
                            <FlatButton label="Dell post"
                                        onClick={()=> this.dellPost(post.id)}
                            />
                        </NavLink>
                    </CardActions>
                </Card>
            </List>
        )
    }
}
export default withRouter(connect(
    ({reducerPost }, extraProps) => {
        const {id} = extraProps.match.params;
        return {
            post: selectPostById( Number(id), reducerPost.posts )
        }
    },
    dispatch => bindActionCreators({
        dellPost
    }, dispatch)
)(Post));


