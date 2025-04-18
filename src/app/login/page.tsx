import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import LoginForm from "@/components/login-form";
import Logo from "../../../public/assets/OBS_Brand.webp";

export const metadata: Metadata = {
  title: "Login | Outward Bound Singapore",
};

const LoginPage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="container h-full bg-white border border-neutral-100 rounded-2xl">
        <div className="flex flex-col gap-5">
          <Image
            src={Logo.src}
            blurDataURL={Logo.blurDataURL}
            width={Logo.width}
            height={Logo.height}
            alt="OBS Brand Logo"
            loading="lazy"
            className="object-contain max-h-56"
          />
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
