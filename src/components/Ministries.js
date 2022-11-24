import { Slider2 } from "assets";
import { Parallax } from "react-parallax";
import Blockquote from "./Blockquote";

const Ministries = () => {
  return (
    <>
      <Blockquote quote="Join our Ministries!" isTransparent />
      <div id="ministries">
        <Parallax bgImage={Slider2} strength={300}>
          <div className="ministry-cards">
            <div
              style={{ width: "1px", height: "1px", flex: "0 0 auto" }}
            ></div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Ministries;
