import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client"; // Import our new Supabase client

export async function GET() {
  // Use the Supabase client to fetch data from the 'products' table
  const { data, error } = await supabase.from("products").select("*");

  // Handle any errors
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return the data from the database
  return NextResponse.json(data);
}