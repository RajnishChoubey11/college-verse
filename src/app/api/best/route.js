import connectDB from "@/app/lib/db";
import Best from "@/app/models/Best";

export async function GET() {
  await connectDB();
  const data = await Best.find();
  return Response.json(data);
}
