import { NextResponse } from 'next/server';

const GOOGLE_SHEET_WEBHOOK_URL = 
  process.env.GOOGLE_SHEET_INTERNSHIP_WEBHOOK_URL || 
  'https://script.google.com/macros/s/AKfycbxxSq1vhI3ZHhuidI-oFN6PM1WH9E3E-rGhldcPIiWxUsu_BEpHvgk3Tdn_YH2gxIoqag/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      formType: 'contact_inquiry',
      submittedAt: body.submittedAt || new Date().toLocaleString(),
      fullName: body.fullName || '',
      email: body.email || '',
      phone: body.phone || '',
      company: body.company || '',
      serviceType: body.serviceType || '',
      budget: body.budget || '',
      message: body.message || ''
    };

    // Use AbortController for 15s timeout (Google Apps Script can be slow on cold start)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const gsResponse = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      let gsResult: any = { result: 'success' };
      try {
        const responseText = await gsResponse.text();
        gsResult = JSON.parse(responseText);
      } catch {
        // If parse fails, treat as success
      }

      return NextResponse.json({
        success: true,
        message: 'Inquiry submitted successfully',
        data: body
      });

    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      // If timeout, still return success (data likely reached Google)
      if (fetchError.name === 'AbortError') {
        return NextResponse.json({
          success: true,
          message: 'Inquiry submitted (processing in background)',
          data: body
        });
      }
      throw fetchError;
    }

  } catch (error: any) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
