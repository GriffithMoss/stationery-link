import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client"; // Import our new Supabase client

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Fetch a single product by its id
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id) // Find the row where the 'id' column equals the id from the URL
    .single(); // We expect only one result

  // Handle any database errors
  if (error) {
    // If the error is that no rows were found, send a 404
    if (error.code === 'PGRST116') {
       return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return the single product
  return NextResponse.json(data);
}