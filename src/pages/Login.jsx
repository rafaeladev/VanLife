import React from "react";
import {
    useLoaderData,
    redirect,
    Form,
    useActionData, // pour gérer l'action de submit du form
    useNavigation, // pour avoir le status du submitting du form
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    const url = new URL(request.url);
    console.log(url.pathname);
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname =
        new URL(request.url).searchParams.get("redirectTo") || "/host";
    try {
        await loginUser({ email, password });
        localStorage.setItem("loggedin", true);
        return redirect(pathname);
    } catch (err) {
        return err.message;
    }
}

export default function Login() {
    const message = useLoaderData();
    const errorMessage = useActionData();
    const navigation = useNavigation();

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            {message && <h3 className="red">{message}</h3>}
            <Form method="post" className="login-form" replace>
                <input name="email" type="email" placeholder="Email address" />
                <input name="password" type="password" placeholder="Password" />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting"
                        ? "Logging in ..."
                        : "Log in"}
                </button>
            </Form>
        </div>
    );
}
