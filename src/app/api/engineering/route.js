import connectDB from "@/app/lib/db";
import Engineering from "@/app/models/Engineering";

export async function GET() {
  try {
    await connectDB();
    const data = await Engineering.find().sort({ Rank: 1 });
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching engineering colleges:", error);
    return Response.json({ error: "Failed to fetch engineering colleges" }, { status: 500 });
  }
}
