import connectDB from "@/app/lib/db";
import Pharmacy from "@/app/models/Pharmacy";

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const item = await Pharmacy.findById(id);
  return Response.json(item);
}
