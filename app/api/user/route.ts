// get req on /api/user
export async function GET() {
    return Response.json({ name: "Lakshay", email: "lakshay@gmail.com" })
}