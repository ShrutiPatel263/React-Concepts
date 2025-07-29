function Message(){
    let myName='Shruti'
    let fullName=()=>{
        return 'Shruti Patel'
    }
    return <h3>
        Hello!My name is {myName}<br></br>
        My full name is {fullName()}
    </h3>
}

export default Message;
