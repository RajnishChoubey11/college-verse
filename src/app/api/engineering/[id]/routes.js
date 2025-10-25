import connectDB from "@/app/lib/db";
import Engineering from "@/app/models/Engineering";

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const item = await Engineering.findById(id);
  return Response.json(item);
}
