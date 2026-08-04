import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const phone = body.phone?.trim() || null;
    const service = body.service?.trim();
    const budget = body.budget?.trim() || null;
    const message = body.message?.trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          message: "Name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          message: "Project details must be under 5,000 characters.",
        },
        {
          status: 400,
        }
      );
    }

    const supabase = createAdminClient();

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone,
      service,
      budget,
      message,
      status: "new",
    });

    if (error) {
      console.error("Supabase contact insert error:", error);

      return NextResponse.json(
        {
          message: "Unable to save your enquiry. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Your enquiry was sent successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}