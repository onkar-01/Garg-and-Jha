import dbConn from "../../../utils/dbConn";
import Contact from "../../../models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConn();

    console.log(req.body);

    const res = await Contact.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      concern: body.concern,
    });

    console.log(res);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
