import connectDB from "@/app/lib/db";
import Pharmacy from "@/app/models/Pharmacy";

export async function GET() {
  await connectDB();
  const data = await Pharmacy.find();
  return Response.json(data);
}
