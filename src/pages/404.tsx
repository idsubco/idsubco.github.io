import { Parallax } from "react-parallax";
import { CSSProperties } from "react";
import desert from "../static/images/portfolio/gallery/desert.png";

export default function Error404() {
    return (
        <Parallax bgImage={desert} strength={500}>
            <div style={{ height: "100vh" }}>
                <div style={insideStyles}>Looking a little dry!</div>
            </div>
        </Parallax>
    );
}
const insideStyles: CSSProperties = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
};
