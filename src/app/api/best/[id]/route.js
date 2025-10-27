import connectDB from "@/app/lib/db";
import Best from "@/app/models/Best";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    if (!id) {
      return Response.json({ error: "ID parameter is required" }, { status: 400 });
    }
    
    const data = await Best.findById(id);
    
    if (!data) {
      return Response.json({ error: "College not found" }, { status: 404 });
    }
    
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching college data:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
