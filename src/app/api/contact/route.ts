import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  inquiry: z.string().min(1, "Inquiry type required"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

export async function POST(req: Request) {

  try {

    // Check env variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Missing email configuration")

      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const body = await req.json()

    // Validate input
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {

      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten()
        },
        { status: 400 }
      )

    }

    const { name, email, inquiry, message } = parsed.data

    // Send email
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Inquiry — ${inquiry}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">

          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry:</strong> ${inquiry}</p>

          <p><strong>Message:</strong></p>

          <div style="padding:12px;background:#f5f5f5;border-radius:6px">
            ${message}
          </div>

        </div>
      `
    })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully"
    })

  } catch (error) {

    console.error("Contact API Error:", error)

    return NextResponse.json(
      {
        error: "Internal server error"
      },
      { status: 500 }
    )

  }

}