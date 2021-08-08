import React from 'react';
import {Button , Menu} from "semantic-ui-react";

function SignedOut({signIn}) {
    return (
        <div>


            <Button onClick={signIn} primary className="buttonStyle1">Giriş Yap</Button>
            <Button primary className="buttonStyle2">Kayıt Ol</Button>

        </div>
    );
}

export default SignedOut;