import React, {Component} from "react";

export default class BlogPreview extends Component {
    constructor(){
        super();
        this.styles = {
            blogTEXT: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
    }

    render(){
        return(
            <div style={this.styles.blogTEXT}>
               <img src='https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg' />
            </div>
        );
    }
};