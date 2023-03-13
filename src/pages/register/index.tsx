import React, {FC, useState, useRef} from "react";
import { createUser } from "../../firebase/auth";


function RegisterPage <FC>():JSX.Element{
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
    const [userPassword, setUserPassword] = useState<string | undefined>(undefined);
    

    const nameInput = useRef<null | HTMLInputElement>(null);
    const emailInput = useRef<null | HTMLInputElement>(null);
    const passwordInput = useRef<null | HTMLInputElement>(null);

    

    return(
        <div>
            <label>
                Your name:
                <input 
                    ref={nameInput}
                    defaultValue={userName}
                    type="text"
                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
                        />
            </label>
            <label>
                Your E-mail:
                <input 
                    ref={emailInput}
                    defaultValue={userEmail}
                    type="email" 
                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setUserEmail(event.target.value)}
                    />
            </label>
            <label>
                Create a password:
                <input 
                    defaultValue={userPassword}
                    ref={passwordInput}
                    type="password"
                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setUserPassword(event.target.value)}
                    />
            </label>
            <button 
                onClick={ () => {
                    console.log("1")
                    if( userName !== undefined && userEmail !== undefined && userPassword !== undefined){
                        console.log("2")
                        const registerUser =  createUser(userName, userEmail, userPassword)
                            .then( res => { 
                                alert("user created");
                                
                             })

                    }
                }}>
                    Create Account
            </button>
        </div>        
    )
}

export default RegisterPage;