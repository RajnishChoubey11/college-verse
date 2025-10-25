import connectDB from "@/app/lib/db";
import University from "@/app/models/University";

export async function GET() {
  await connectDB();
  const data = await University.find();
  return Response.json(data);
}
