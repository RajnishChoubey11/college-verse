import connectDB from "@/app/lib/db";
import University from "@/app/models/University";

export async function GET() {
  try {
    await connectDB();
    const data = await University.find().sort({ Rank: 1 });
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching universities:", error);
    return Response.json({ error: "Failed to fetch universities" }, { status: 500 });
  }
}
