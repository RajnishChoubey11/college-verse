import connectDB from "@/app/lib/db";
import Engineering from "@/app/models/Engineering";

export async function GET() {
  await connectDB();
  const data = await Engineering.find();
  return Response.json(data);
}
