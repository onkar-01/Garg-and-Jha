import dbConn from "../../../utils/dbConn";
import Contact from "../../../models/contact";

import { NextRequest, NextResponse } from "next/server";

dbConn();
export async function POST(reqest: NextRequest) {
  try {
    const body = await reqest.json();
    const { name, phone, email, concern } = body;
    if (!name || !phone || !email || !concern) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 406 }
      );
    }
    const contact = new Contact({
      name: name,
      phone: phone,
      email: email,
      concern: concern,
    });
    const savedContact = await contact.save();

    return NextResponse.json(
      { message: "Message sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json("server error");
  }
}
