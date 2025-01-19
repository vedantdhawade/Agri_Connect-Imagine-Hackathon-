import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import Cookies from "js-cookie";

const Index = () => {
  const { RoomId } = useParams();
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const appID = 785737902;
    const serverSecret = "bd90765d26e3a1db38d9a87ff030c817";
    
    // Get userID from cookies
    const userID = Cookies.get("userId");

    if (!userID) {
      console.error("User ID is not found in cookies.");
      return;
    }

    // Generate a token using ZegoUIKitPrebuilt
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      RoomId,
      userID, // Use the userID from cookies
      "Name"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: meetingContainerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  }, [RoomId]);

  return <div ref={meetingContainerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Index;
