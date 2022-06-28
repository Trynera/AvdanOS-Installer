import React from "react";
import Transitions from "./Transition";
import { Button, Select } from "@geist-ui/core";
import "./ChooseDrive.css";

function ChooseDrive() {
    // defines "isActive" and "setIsActive" to tell if the Next button should be allowed to be pressed
    const [isActive, setIsActive] = React.useState(false);

    // defines what "selectDrive" is which is just a Select object
    let selectDrive = <Select placeholder="Select Drive" type="default" clearable={false} onChange={() => { setIsActive(true); }}><Select.Option value="1">H:</Select.Option><Select.Option value="2">I:</Select.Option></Select>;
    return (
        <div className="choose-drive">
            <Transitions>
                <div className="c-d-text"><h1>Choose a drive</h1></div>
                {/* Calls "selectDrive" */}
                <div className="select-drive">{selectDrive}</div>
                {/* Checks if "isActive" is true and if it is it makes the Next Button active. Otherwise it will be off */}
                <div className="next-button">{isActive ? <Button type="success" shadow onClick={() => { window.location.href = "/arch-choice" }}>Next</Button> : <Button disabled>Next</Button>}</div>
            </Transitions>
        </div>
    );
}

export default ChooseDrive;