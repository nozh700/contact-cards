function ContactCard(props){
    return(
        <div className="contact-card">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>    
    );
}
export default ContactCard;