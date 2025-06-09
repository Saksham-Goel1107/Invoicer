import SubmitButton from "@/components/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, signIn } from "@/lib/auth";
import Link from "next/link";

export default async function LoginPage(){
    const session = await auth()

    return(
        <Card className="max-w-sm min-w-xs lg:min-w-sm">
            <CardHeader>
                <CardTitle className="text-xl w-full">Login</CardTitle>
                <CardDescription>Enter your email below to login in your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    className="grid gap-6"
                    action={async(formdata)=>{
                        "use server"
                        await signIn("resend",formdata)
                    }}
                >
                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input
                            placeholder="hello@example.com"
                            required
                            type="email"
                            name="email"
                        />
                    </div>
                    <SubmitButton title="Login"/>
                </form>
                <div className="mt-4 flex justify-center">
                    <Link
                        href="/"
                        className="text-sm text-primary underline hover:text-primary/80 transition-colors"
                    >
                        &larr; Back to Home
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}