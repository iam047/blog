import React from  'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default ( {post:{title, images, description}} ) => {

    const styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            width: 500,
            height: 450,
            overflowY: 'auto',
        },
    };
    return (
        <div style={styles.root}>
            <Card style={styles.gridList}>
                <CardMedia>
                    <img  src={images}/>
                </CardMedia>
                <CardTitle title={title} />
                <CardText>
                    {description}
                </CardText>
            </Card>
        </div>
    );
};
