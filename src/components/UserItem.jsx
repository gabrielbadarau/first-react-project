import React from 'react';
import './UserItem.css';


class UserItem extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const {name, email, isGoldClient, salary, onePhoto,id} = this.props;
        return (
            <div className="UserItem">
                <h3>{ name }</h3>
                <p>{ email }</p>
                { isGoldClient
                    ? <h3>Client GOLD</h3>
                    : null
                }
                <p>Salary: {salary}$</p>
                {/* Imaginea aici e generata cu ajutorul API-ului de la jsonplaceholder (photo id matches the user id) 
                CU EXCEPTIA cazului in care adaugam un nou utilizator, în acest caz avand o imagine standard*/}
                <p>Profile photo</p>
                <img src={(onePhoto==='no') ? '/forNewUser.jpg' : onePhoto.url} alt="Something went wrong"/>
                <button type="button" onClick={()=>this.props.deleteUser(id)}> Delete User </button>
            </div>
        );
    }
}



export default UserItem;