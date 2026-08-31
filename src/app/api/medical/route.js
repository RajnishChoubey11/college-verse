import connectDB from "@/app/lib/db";
import Medical from "@/app/models/Medical";

export async function GET() {
  try {
    await connectDB();
    const data = await Medical.find().sort({ Rank: 1 });
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching medical colleges:", error);
    return Response.json({ error: "Failed to fetch medical colleges" }, { status: 500 });
  }
}
