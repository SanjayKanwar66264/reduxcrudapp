import  React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import  {fetchPost, deletePost} from '../actions/index'
import {Link} from 'react-router';


class PostShow extends Component {

    static contextTypes ={
        router:PropTypes.object
    };

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
            .then(()=>{
                //we do navigation here
                this.context.router.push('/');
            });
    }
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }


    render() {
        if(!this.props.post){
            return(
                <div>

                </div>
            )
        }
        return (
            <div>
                    <Link to="/">Back</Link>
                   <button className="btn btn-danger pull-xs-right"
                   onClick={this.onDeleteClick.bind(this)}>
                       Delete</button>
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post}
    
}
export  default connect(mapStateToProps, {fetchPost,deletePost})(PostShow);