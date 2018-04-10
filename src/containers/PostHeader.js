import React, { Component } from 'react';
import { CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import moment from "moment/moment";

export default class PostHeader extends Component {

    timeCreate = time => {
        const now = moment(time);
        const createPostDate = now.format('dddd, MMMM DD YYYY, h:mm:ss');
        return createPostDate;
    };

    render() {
        const { user, title, createdAt, userAvatar, image, description } = this.props;
        return (
            <div>
                <CardHeader
                    title={user}
                    subtitle={this.timeCreate(createdAt)}
                    avatar={userAvatar}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardTitle title={title}/>
                <CardMedia>
                    <img src={image}/>
                </CardMedia>
                <CardText expandable={true}>
                    {description}
                </CardText>
            </div>
        );
    }
}

