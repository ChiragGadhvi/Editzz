"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";
import Image from 'next/image';

export default function GoogleSignInButton() {
    return(
        <Button onClick={() => signIn("google")} variant="outline" size="icon">
            <Image src={GoogleIcon} alt="Google icon" className="w-6 h-6" />
        </Button>
    );
}