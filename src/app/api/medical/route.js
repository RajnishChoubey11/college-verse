import connectDB from "@/app/lib/db";
import Medical from "@/app/models/Medical";

export async function GET() {
  await connectDB();
  const data = await Medical.find();
  return Response.json(data);
}
