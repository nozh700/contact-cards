import {useState} from "react";

function UserForm(props){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.onAddUser({id: Date.now(),name,email,phone});
        setName("");
        setEmail("");
        setPhone("");
    }
    return(
        <form className="user-form" onSubmit={handleSubmit}>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" required/>
            <button type="submit">Add Contact</button>
        </form>    
    );
}
export default UserForm;