// import React, {Component} from 'react';
// import { TextField } from 'material-ui';
// export default class ValidPost extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             description: '',
//             image: '',
//             titleValid: '',
//             descriptionValid: '',
//             imageValid: '',
//         };
//     }
//
//
//     onTitleChange = e => {
//         this.setState({ title: e.target.value });
//     };
//
//     onContentChange = e => {
//         this.setState({ description: e.target.value });
//         return e.target.value = '';
//     };
//
//     onImagesURLChange = e => {
//         this.setState({ image: e.target.value });
//         return e.target.value = '';
//     };
//
//     validate = () => {
//         let isError = false;
//         const errors = {
//             titleValid: '',
//             descriptionValid: '',
//             imageValid: ''
//         };
//         if (this.state.title.trim() === '') {
//             isError = true;
//             errors.titleValid = "must be at least one letter";
//         }
//         if (this.state.description.trim() === '') {
//             isError = true;
//             errors.descriptionValid = "must be at least one letter";
//         }
//         if (this.state.image.includes("http") === -1) {
//             isError = true;
//             errors.imageValid = "you must copy the url of your image ";
//         }
//         this.setState({
//             ...errors
//         });
//         return isError;
//     };
//
//
//     render(){
//         return(
//             <div>
//                 <TextField
//                     floatingLabelText="Name title"
//                     onChange={this.onTitleChange}
//                     value={this.state.title}
//                     errorText={this.state.titleValid}
//                 />
//                 <TextField
//                     floatingLabelText="Text description"
//                     multiLine
//                     onChange={this.onContentChange}
//                     value={this.state.description}
//                     errorText={this.state.descriptionValid}
//                 />
//                 <TextField
//                     floatingLabelText="Images  url"
//                     onChange={this.onImagesURLChange}
//                     value={this.state.image}
//                     errorText={this.state.imageValid}
//                 />
//             </div>
//         );
//     }
// }