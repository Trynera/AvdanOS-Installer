import React from "react";
import Transitions from "./Transition";
import { Spinner } from "@geist-ui/core";
import "./ImageFileDownload.css";

function ImageFileDownload(isX64: any) {
    // defines 2 constants that allow to check if something is still downloading or if it is finished downloading
    const [isDownloading, setIsDownloading] = React.useState(true);

    // defines 2 variables to tell how much progress has been made on downloading and flashing the iso file
    var downloadProgress = 0;
    var flashingProgress = 0;

    // Creates a variable that if "isX64" is not true stay being "ARM". Otherwise it will be "x64"
    var ImageFileDownload = "ARM";
    if (isX64) {
        ImageFileDownload = "x64"
    }

    return (
        <Transitions>
            <div className="imgDownloader">
                {/* Checks if the File is downloading and sets the text to be corresponding to that */}
                <div className="imgDownloader-text">{isDownloading ? <h1>Downloading the Image</h1> : <h1>Flashing the Image</h1>}</div>
                {/* Creates a Spinner object and checks if the file is still downloading and sets the text corresponding to that */}
                <div className="imgDownloader-progress">
                    <Spinner scale={2}/>
                    {isDownloading ? <p>Downloading the Image File ({downloadProgress}%)</p> : <p>Flashing the Image ({flashingProgress}%)</p>}
                </div>
            </div>
        </Transitions>
    );
}

export default ImageFileDownload;