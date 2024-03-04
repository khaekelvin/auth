"use client";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const deccredentialResponseoded = jwtDecode(
              credentialResponse?.credential ?? ""
            );
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
