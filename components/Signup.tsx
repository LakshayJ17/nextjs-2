"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full">
                <div className="px-4 sm:px-10">
                    <div className="text-3xl font-extrabold text-center mb-4">
                        Sign up
                    </div>

                    <LabelledInput
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        placeholder="lakshay@gmail.com"
                    />
                    <LabelledInput
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        placeholder="123456"
                    />

                    <button
                        onClick={async () => {
                            try {
                                await axios.post("http://localhost:3000/api/user", {
                                    username,
                                    password
                                });
                                router.push("/");
                            } catch (error) {
                                console.error("Signup failed", error);
                                alert("Signup failed. Check console for details.");
                            }
                        }}
                        type="button"
                        className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm text-black font-semibold">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
