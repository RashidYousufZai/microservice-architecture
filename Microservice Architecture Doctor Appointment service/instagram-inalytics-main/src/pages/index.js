// pages/index.js
"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";

export default function Home() {
  useEffect(() => {
    console.log("Cookies:", document.cookie);
    console.log("Access Token:", Cookies.get("accessToken"));
  }, []);

  const signin = () => {
    const clientId = "1175082610605703";
    const redirectUri = "https://plugged.app/auth/signin";
    const responseType = "code";
    const scope = "user_profile,user_media";

    const url = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = url;
  };

  return (
    <>
      <button onClick={signin}>Login with instagram</button>
      <h1>Rashid</h1>
    </>
  );
}
