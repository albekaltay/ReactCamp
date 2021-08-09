import React from 'react';
import {Button , Menu} from "semantic-ui-react";

function SignedOut({signIn}) {
    return (
        <div>


            <Button onClick={signIn} primary className="buttonStyle1">Signed In</Button>
            <Button primary className="buttonStyle2">Create An Account</Button>

        </div>
    );
}

export default SignedOut;