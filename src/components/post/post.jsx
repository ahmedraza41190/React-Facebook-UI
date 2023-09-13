
import "./post.css";

const Post = (props) => {

    return (
        <div className="post">
            <img width={45} height={45} src={props.myimgUrl}></img>

        
        
                    <input  className="post-input" type="text" placeholder="What's on your mind?" />
               
        </div>
    );
};

export default Post;