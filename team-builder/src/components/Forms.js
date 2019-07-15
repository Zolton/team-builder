import React, {useState} from 'react';

function Form() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        role: ""
    })

    return (
        <>
        <div>
            Hello from Forms</div>
            <input />
            <input />
            <input />
        </>
    )
}

export default Form