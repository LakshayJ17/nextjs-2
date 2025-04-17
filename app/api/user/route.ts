
import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest } from "next/server";

const client = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log(body);

        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        });

        console.log("Created user:", user);

        return Response.json({
            message: "You are logged in"
        });
    } catch (err) {
        console.error("❌ Error in /api/user:", err);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
