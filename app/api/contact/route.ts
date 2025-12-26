import { NextRequest, NextResponse } from "next/server";

// Contact form submission handler
// In production, this would:
// 1. Validate the form data
// 2. Store in DynamoDB
// 3. Send notification email
// 4. Trigger lead enrichment workflow

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  eventType?: string;
  venue?: string;
  eventDate?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the submission (in production, this would go to DynamoDB)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // TODO: DynamoDB Integration
    // const dynamoClient = new DynamoDBClient({ region: "us-east-1" });
    // const putCommand = new PutCommand({
    //   TableName: "jhr-contact-submissions",
    //   Item: {
    //     id: crypto.randomUUID(),
    //     timestamp: new Date().toISOString(),
    //     ...body,
    //     status: "new",
    //   },
    // });
    // await dynamoClient.send(putCommand);

    // TODO: Email Notification
    // Send email to info@jhr-photography.com with form details

    // TODO: Lead Enrichment
    // Trigger n8n workflow for lead enrichment and CRM update

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
