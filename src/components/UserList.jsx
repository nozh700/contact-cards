import ContactCard from "./ContactCard";
function UserList(props){
    if(props.users.length===0){
        return <p>No contacts yet.</p>
    }
    return(
        <div className="user-list">
            {props.users.map((user)=>(
                <ContactCard key={user.id} name={user.name} email={user.email} phone={user.phone}/>

            ))}
        </div>     
    );
}
export default UserList;