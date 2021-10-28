import React from 'react';
import PostItem from './PostItem'

class PostList extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(data=>{
                data=data.filter((item)=>item.id<4)
                this.setState({posts:data})
            })
    }

    render(){
        // Nu va porni render pana nu avem informatiile pentru posts incarcate
        if(!this.state.posts.length){
            return <div></div>
        }
        return(
            <div>
                <h2>Posts:</h2>
                {this.state.posts.map((item,index)=>{
                    return <PostItem 
                        title={item.title}
                        body={item.body}
                        key={index}
                    />
                })}
            </div>
        )
    }

}

export default PostList;