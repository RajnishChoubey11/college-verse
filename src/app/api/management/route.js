import connectDB from "@/app/lib/db";
import Management from "@/app/models/Management";

export async function GET() {
  try {
    await connectDB();
    const data = await Management.find().sort({ Rank: 1 });
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching management colleges:", error);
    return Response.json({ error: "Failed to fetch management colleges" }, { status: 500 });
  }
}
