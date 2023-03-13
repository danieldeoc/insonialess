import React, { FC, useState, useRef} from "react";
import { signIn } from "../../firebase/auth";

function LoginPage <FC>():JSX.Element{

    const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
    const [userPass, setUserPass] = useState<string | undefined>(undefined);

    const emailInput = useRef<null | HTMLInputElement>(null);
    const passwordInput = useRef<null | HTMLInputElement>(null);

    

    return(
        <>
            <div>
                <label>
                    Your E-mail:
                    <input 
                        ref={emailInput}
                        type="email"
                        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setUserEmail(event.target.value)} />
                </label>
                <label>
                    Your password:
                    <input 
                        ref={passwordInput}
                        type="password"
                        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setUserPass(event.target.value)} />
                </label>
                <button onClick={ (event: React.MouseEvent<HTMLButtonElement>) => {
                    if( userEmail !== undefined && userPass !== undefined){
                        signIn(userEmail, userPass)
                    }
                }} >Login</button>
            </div>        
        </>
    )
}

export default LoginPage;