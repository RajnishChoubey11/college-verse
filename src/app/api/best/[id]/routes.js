import connectDB from "@/app/lib/db";
import Best from "@/app/models/Best"

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const item = await Best.findById(id);
  return Response.json(item);
}
