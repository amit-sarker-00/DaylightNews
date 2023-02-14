import React from "react";
import { useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { FaTimes } from 'react-icons/fa';
import
{
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
const Share = () =>
{

  const shareUrl = `${ window.location.href }`;
  const [ shareWith, setShareWith ] = useState(false);
  return (
    <div className="">
      <div
        tabIndex="-3"
      >
        {shareWith ? (
          <div
            className="px-5 py-5 flex justify-between"
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
            <div className="btn text-white btn-outline" onClick={() => setShareWith(!shareWith)}>

              Share <FaTimes />
            </div>
          </div>
        ) : (
          <div className="btn btn-outline  " onClick={() => setShareWith(!shareWith)}>

            Share <RiShareForwardLine />
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;