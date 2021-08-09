import React from 'react';
import {Dropdown, Grid, Image, Menu} from "semantic-ui-react";

function SignedIn({signOut}) {
    return (
        <div>

            <Menu.Item>
                <Image avatar spaced="right"
                       src="https://avatars.githubusercontent.com/u/79417537?s=400&u=d4018b6589cd30efa394992a7e93287b7be2aba9&v=4"></Image>

                <Dropdown style={{marginTop:"0.2em" , marginLeft:"0.5em"}}  pointing="top left" text="Albek" >


                    <Dropdown.Menu style={{marginTop:"1.2em" , marginLeft:"1em"}} >
                        <Dropdown.Item text="My Information" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out"></Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    );
}

export default SignedIn;