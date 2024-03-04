"use client";
import React from "react";
import imageUrl from "../Form/Images/google-lens-icon-logo-symbol-free-png.webp";
import { GoogleLogin } from "@react-oauth/google";

function page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  );
}

export default page;

{
  /* <div className="flex items-center justify-center h-screen">
<div>
  <GoogleLogin
    onSuccess={(credentialResponse) => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  />
</div>
</div> */
}
