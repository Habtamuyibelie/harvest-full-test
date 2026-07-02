import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase-server";
//import { createClient } from "@/utils/supabase/server";

async function guard() {
  const ok = await getAdminSession();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function GET() {
  const deny = await guard(); if (deny) return deny;
  const { data, error } = await createClient
    .from("events").select("*").order("event_date", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const deny = await guard(); if (deny) return deny;
  const body = await req.json();
  const { title, event_date, event_time, location, description } = body;
  if (!title || !event_date)
    return NextResponse.json({ error: "title and event_date required." }, { status: 400 });

  const { data, error } = await createClient
    .from("events")
    .insert({ title, event_date, event_time, location, description, is_published: true })
    .select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest) {
  const deny = await guard(); if (deny) return deny;
  const { id, ...updates } = await req.json();
  const { data, error } = await createClient  
    .from("events").update(updates).eq("id", id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  const deny = await guard(); if (deny) return deny;
  const { id } = await req.json();
  const { error } = await createClient.from("events").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
