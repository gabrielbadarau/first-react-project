import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const { users, photos} = this.props;
        return (
            <div className="listContainer">
                <h2>User List:</h2>
                <div className="userContainer">
                { users.map((user, index) => {
                    return <UserItem
                        id={index+1}
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={user.salary}
                        onePhoto={user.image ? user.image : photos[index]}  
                        deleteUser={this.props.deleteUser}
                        key={index}
                    />
                })}
                </div>
            </div>
        );
    }
}


export default UserList;