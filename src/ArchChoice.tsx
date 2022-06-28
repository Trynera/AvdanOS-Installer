import React from "react";
import Transitions from "./Transition";
import { Button, Grid } from "@geist-ui/core";
import "./ArchChoice.css";

function ArchChoice() {
    // defines constant "isX64" and "setIsX64" for later use in checking what architecture the avdanos image should have
    const[isX64, setIsX64] = React.useState(true);

    return (
        <div className="arch-choice">
            <Transitions>
                <div className="choose-arch-text"><h1>Choose an Architecture</h1></div>
                {/* Makes the chosen arch be lit up blue */}
                <div className="arch-choice">
                    {isX64 ? <Button type="success" shadow height="50px" width="30px" font="18.5px">x64</Button> : <Button shadow height="50px" width="30px" font="18.5px" onClick={() => { setIsX64(true); }}>x64</Button>}
                    {isX64 ? <Button shadow height="50px" width="30px" font="18.5px" onClick={() => { setIsX64(false); }}>ARM</Button> : <Button type="success" shadow height="50px" width="30px" font="18.5px">ARM</Button>}
                </div>
                {/* defines a div next button and the back button */}
                <div className="next-and-back-buttons">
                    <Grid.Container alignItems="center" justify="center">
                        {/* Back Button */}
                        <Grid><Button shadow onClick={() => { window.location.href = "/"; }} className="Back-Button">Back</Button></Grid>
                        {/* Next Button */}
                        <Grid><Button shadow type="success" onClick={() => { window.location.href = "/deletion-warning"; }} className="Next-Button">Next</Button></Grid>
                    </Grid.Container>
                </div>
            </Transitions>
        </div>
    );
}

export default ArchChoice;