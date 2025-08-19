import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    // resend.domains.create({ name: 'nandini.bure.com' });
    // resend.domains.get('d91cd9bd-1176-453e-8fc1-35364d380206');
    // resend.domains.verify('d91cd9bd-1176-453e-8fc1-35364d380206');
    const data = await resend.emails.send({
      from:"onboarding@resend.dev",
      to:"",
      subject:"kjfjdn",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log(data)
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}