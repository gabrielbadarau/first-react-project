import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      textColor: 'black',
      users: [],
      photos:[],
      show:'useri'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
          user.salary= Math.floor(Math.random()*500)+300;
        });
        this.setState({users: data});
      })

      // Fetch-ul de mai jos ne ajuta sa luam o imagine aleatorie de pe jsonplaceholder

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response=>response.json())
      .then(data=>{
        data=data.filter(photo=>photo.id<50)
        this.setState({photos:data})
      })

  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event){
    this.setState({textColor:event.target.value})
  }

  handleUserListButton(){
    if(this.state.show==='posts'){
      this.setState({show:'useri'})
    }
  }

  handlePostListButton(){
    if(this.state.show==='useri'){
      this.setState({show:'posts'})
    }
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary:'(for new members) 300',
            image:'no',
            key: this.getMaxId(prevState.users) + 1,
          }
        ]
      }
    });
  }

  deleteUser(id){
    this.setState(prevState=>{
      prevState.users.splice(id-1,1);
      return {
        users:prevState.users
      }
    })
  }


  render() {

    // Nu va porni render pana nu avem toate fotografiile incarcate

    if(!this.state.photos.length){
      return (<div></div>)
    }

    return(
      <div className="app" style={{background: this.state.background, color:this.state.textColor}}>

        <h1>Proiectul 1</h1>

        <div className="buttons">
          <button type="button" onClick={()=>this.handleUserListButton()}>Show Users</button>
          <button type="button" onClick={()=>this.handlePostListButton()}>Show Posts</button>
        </div>


        <div className="changeColor">
          <p>Change Background Color </p>
          <input type="color" onChange={(event) => this.changeColor(event)}/>
        </div>
        <div className="changeColor">
          <p>Change Text Color</p>
          <input type="color" onChange={(event)=>this.changeTextColor(event)} />
        </div>

        <UserAddForm submitAddForm={
          (event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)
          }
        />

        {this.state.show==='useri'
          ? 
            
            <UserList 
            users={this.state.users} 
            photos={this.state.photos} 
            deleteUser={(id)=>this.deleteUser(id)} 
            />
          : <PostList />
        }
      
      </div>
    );
  }
}

export default App;
