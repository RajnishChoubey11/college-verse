import connectDB from "@/app/lib/db";
import Management from "@/app/models/Management";

export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;
  const item = await Management.findById(id);
  return Response.json(item);
}
