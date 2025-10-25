import connectDB from "@/app/lib/db";
import Management from "@/app/models/Management";

export async function GET() {
  await connectDB();
  const data = await Management.find();
  return Response.json(data);
}
