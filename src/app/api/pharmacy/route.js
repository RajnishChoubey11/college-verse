import connectDB from "@/app/lib/db";
import Pharmacy from "@/app/models/Pharmacy";

export async function GET() {
  try {
    await connectDB();
    const data = await Pharmacy.find().sort({ Rank: 1 });
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching pharmacy colleges:", error);
    return Response.json({ error: "Failed to fetch pharmacy colleges" }, { status: 500 });
  }
}
