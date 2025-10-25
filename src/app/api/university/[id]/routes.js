import connectDB from "@/app/lib/db";
import University from "@/app/models/University";

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const item = await University.findById(id);
  return Response.json(item);
}
