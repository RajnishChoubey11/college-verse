import connectDB from "@/app/lib/db";
import Medical from "@/app/models/Medical";

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const item = await Medical.findById(id);
  return Response.json(item);
}
