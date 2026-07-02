import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signAdminToken, setAdminCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const validEmail = email === process.env.ADMIN_EMAIL;
    const hash = process.env.ADMIN_PASSWORD_HASH || "";
    const validPassword = hash ? await bcrypt.compare(password, hash) : password === "harvest2024admin";

    if (!validEmail || !validPassword) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const token = await signAdminToken();
    await setAdminCookie(token);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}

export async function DELETE() {
  const { clearAdminCookie } = await import("@/lib/auth");
  await clearAdminCookie();
  return NextResponse.json({ success: true });
}
