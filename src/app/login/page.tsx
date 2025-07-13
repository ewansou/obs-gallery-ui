import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import LoginForm from "@/components/login-form";
import Logo from "../../../public/assets/obs-nyc-logo.png";

export const metadata: Metadata = {
  title: "Login | Outward Bound Singapore",
};

const LoginPage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center p-5 bg-neutral-100">
      <div className="w-full max-w-2xl bg-white border border-neutral-100 rounded-2xl p-12 shadow-lg flex flex-col items-center gap-8">
        <div className="w-full flex justify-center">
          <Image
            src={Logo.src}
            blurDataURL={Logo.blurDataURL}
            width={Logo.width * 0.9}
            height={Logo.height * 0.9}
            alt="OBS Brand Logo"
            loading="lazy"
            className="object-contain w-[300px] max-w-full"
          />
        </div>
        <h1 className="text-2xl md:text-2xl font-bold text-center">
          OBS Photo Gallery
        </h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
