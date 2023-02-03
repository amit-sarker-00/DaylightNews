import React from "react";
import { useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
const Share = () => {
  const location = useLocation();
  // const currentUrl = location.pathname;
  const shareUrl =location.pathname; 
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div className="">
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      
        tabIndex="-3"
      >
        {hover ? (
          <div
            className="px-5 py-5"
            style={{
              background: "black",
              // height: "100vh",
              width: "100%",
            }}
          >
            <div className="flex gap-5 ">
              <div><h1 className="text-xl text-white">Share</h1></div>
          
              <FacebookShareButton
                url={shareUrl}
                quote={"nijer mato title dibo"}
                hashtag={"#portfolio..."}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url={shareUrl}
                quote={"nijer mato title dibo"}
                hashtag={"#portfolio..."}
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={shareUrl}
                quote={"nijer mato title dibo"}
                hashtag={"#portfolio..."}
              >
                <LinkedinIcon size={40} round={true} />
              </LinkedinShareButton>

              <FacebookMessengerShareButton
                url={shareUrl}
                quote={"nijer mato title dibo"}
                hashtag={"#portfolio..."}
              >
                <FacebookMessengerIcon size={40} round={true} />
              </FacebookMessengerShareButton>

              <EmailShareButton
                url={shareUrl}
                quote={"nijer mato title dibo"}
                hashtag={"#portfolio..."}
              >
                <EmailIcon size={40} round={true} />
              </EmailShareButton>
              <WhatsappShareButton
                url={shareUrl}
                quote={"nijer mato title dibo"}
                hashtag={"#portfolio..."}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
        ) : (
          <div className="btn btn-outline">
           
            Share <RiShareForwardLine />
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
