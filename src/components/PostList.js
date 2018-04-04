import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dellPost } from "../actions";
import {Card, CardMedia,CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import {grey50} from 'material-ui/styles/colors';
import moment from 'moment';
import { withRouter ,NavLink } from 'react-router-dom';



class PostList extends Component {
    constructor(){
        super();
        this.styles = {
            root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
            postSize:{
                width: '35%',
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
     };

     render() {
        const { posts } = this.props;
        return (
            <div >
                {posts.map(post => (
                    <List style={this.styles.root}  key={post.id} >
                        <Card style={this.styles.postSize} >
                            <Chip onRequestDelete={() => this.dellPost(post.id)}
                                  onClick={()=> this.dellPost(post.id)}
                                  backgroundColor={grey50}
                                  style={this.styles.buttonDEll}>
                            </Chip>
                            <NavLink to={`/post/${post.id}`}>
                                <CardHeader
                                    title={this.defaultUser(post.user)}
                                    subtitle={this.timeCreate(post.createdAt )}
                                    avatar={this.defaultUserAvatar(post.userAvatar)}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardTitle title={post.title} />
                                <CardMedia>
                                    <img  src={post.image}/>
                                </CardMedia>
                                <CardText expandable={true}>
                                    {post.description}
                                    </CardText>
                            </NavLink>
                            <NavLink to={`/post/${post.id}/edit`}>
                                <FlatButton label="Edit" />
                            </NavLink>
                        </Card>
                    </List>
                ))
                }
            </div>
        );
     }
}

export default withRouter(connect(
    ({ reducerHelper }) => ({
        posts :  reducerHelper .posts
    }),
    dispatch => bindActionCreators({
        dellPost
    }, dispatch)
)(PostList));


