import React from 'react';
import {Button , Menu} from "semantic-ui-react";

function SignedOut({signIn}) {
    return (
        <div>


            <Button onClick={signIn} primary className="buttonStyle1">Sign In</Button>
            <Button primary className="buttonStyle2">Sign Up</Button>

        </div>
    );
}

export default SignedOut;