import { Inter } from "next/font/google";
import "./globals.css";
import Form from "./Form/page";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";

function layout() {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId="557645189380-eo8bkt6blv7lt5r0a1lddvd1mk3fl57c.apps.googleusercontent.com">
        <body className="text-black bg-white">
          <Form />
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}

export default layout;
