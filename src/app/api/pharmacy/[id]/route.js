import connectDB from "@/app/lib/db";
import Pharmacy from "@/app/models/Pharmacy";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!id) {
      return Response.json({ error: "ID parameter is required" }, { status: 400 });
    }

    const data = await Pharmacy.findById(id);
    if (!data) {
      return Response.json({ error: "Pharmacy college not found" }, { status: 404 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error fetching pharmacy college:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
