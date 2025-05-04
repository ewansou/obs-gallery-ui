"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { deleteAuthCredentials } from "@/lib/auth-utils";

const HomeButton = () => {
    const router = useRouter();

    return (
        <div>
            <Button
                className="h-14 px-8 text-base min-w-[130px]"
                onClick={() => {
                    deleteAuthCredentials();
                    router.replace(ROUTES.LOGIN);
                }}
            >
                <HomeIcon className="w-6 h-6 mr-3" />
                Back
            </Button>
        </div>
    );
};

export default HomeButton;