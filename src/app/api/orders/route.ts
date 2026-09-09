import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

interface OrderPayload {
  customerName: string;
  phone: string;
  categorySlug?: string;
  categoryName?: string;
  productSlug?: string;
  productName?: string;
  quantity?: number;
  message?: string;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let body: OrderPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isNonEmptyString(body.customerName) || !isNonEmptyString(body.phone)) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const quantity = Number.isFinite(body.quantity) && (body.quantity as number) > 0 ? Math.floor(body.quantity as number) : 1;

  try {
    const sql = getSql();
    const rows = await sql`
      INSERT INTO orders (
        customer_name, phone, category_slug, category_name,
        product_slug, product_name, quantity, message
      ) VALUES (
        ${body.customerName.trim()}, ${body.phone.trim()},
        ${body.categorySlug ?? null}, ${body.categoryName ?? null},
        ${body.productSlug ?? null}, ${body.productName ?? null},
        ${quantity}, ${body.message?.trim() || null}
      )
      RETURNING id, created_at
    `;
    return NextResponse.json({ ok: true, order: rows[0] }, { status: 201 });
  } catch (err) {
    console.error("Failed to save order", err);
    return NextResponse.json({ error: "Could not save your order. Please try again or contact us on WhatsApp." }, { status: 500 });
  }
}
