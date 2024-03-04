import React from "react";
import imageUrl from "../Form/Images/google-lens-icon-logo-symbol-free-png.webp";
import { GoogleLogin } from "@react-oauth/google";

function page() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-screen">
          <button className="border rounded-md">
            <div className="flex mx-5 my-2">
              <img
                src={imageUrl.src}
                alt=""
                height={30}
                width={30}
                className="mr-4"
              />
              <div>Sign up with Google</div>
            </div>
          </button>
          <div>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
