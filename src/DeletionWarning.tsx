import { Button, Grid } from "@geist-ui/core";
import ArchChoice from "./ArchChoice";
import Transitions from "./Transition";
import "./DeletionWarning.css";

// It's just a bunch of Text 2 Buttons it's not that hard to understand
function DeletionWarning(isX64: any) {
    console.log(isX64);
    return (
        <div className="deletion-warning">
            <Transitions>
                <div className="deletion-warning-text">
                    <h1>Warning!</h1>
                </div>
                <div className="informing-warning-text">
                    <p>Everything inside of the USB Storage Device will be permanently deleted.</p>
                    <p>Make sure to backup everything inside of the USB Device!</p>
                </div>
                <div className="next-and-back-buttons-dw">
                    <Grid.Container alignItems="center" justify="center">
                        <Grid><Button shadow onClick={() => { window.location.href = "/arch-choice"; }}>Back</Button></Grid>
                        <Grid><Button shadow type="success" onClick={() => { window.location.href = "/downloading-image-file"; }}>Next</Button></Grid>
                    </Grid.Container>
                </div>
            </Transitions>
        </div>
    );
}

export default DeletionWarning;