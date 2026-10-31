import {useState} from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App(){
  const [users, setUsers]=useState([]);

  function addUser(user){
    setUsers([...users,user]);
  }
  return(
    <div className="app">
      <h1>Contact Cards</h1>
      <UserForm onAddUser={addUser}/>
      <UserList users={users}/>
    </div>  
  );
}
export default App;