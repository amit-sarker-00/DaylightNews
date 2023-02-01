import React from 'react';
import { RiShareForwardLine } from "react-icons/ri";
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
import Tippy from '@tippyjs/react';
const ShareSocial = () => {
    const shareUrl = "https://www.prothomalo.com/";
    return (
       
          <Tippy
    render={share => (
      <div className="box"
      tabIndex="-3" {...share}>
        <div
            className="px-5 py-5"
            style={{
              background: "black",
              // height: "100vh",
              width: "100%",
            }}
          >
          <div className="flex gap-5 ">
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
      </div>
    )}
  >
   <div className="btn btn-outline gap-2">
                 Share This News <RiShareForwardLine />{" "}
          </div>
  </Tippy> 
     
    );
};

export default ShareSocial;