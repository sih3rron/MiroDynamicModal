"use server";

import { cookies } from "next/headers";

export async function createCookie(data) {
    const cookieStore = await cookies();
    console.log("CookieStore: ", data);
    try {
        cookieStore.set({
            name: "billing",
            value: data,
            httpOnly: true,
            path: "/",
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}
