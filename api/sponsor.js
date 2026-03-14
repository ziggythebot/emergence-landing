// Vercel Serverless Function for Sponsor Form → Airtable

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { company, contactName, email, message } = req.body;

  if (!company || !contactName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = 'Sponsor Inquiries';

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.error('Missing Airtable credentials');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Company': company,
            'Contact Name': contactName,
            'Email': email,
            'Message': message || '',
            'Submitted': new Date().toISOString(),
            'Status': 'New',
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      throw new Error('Airtable API error');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Sponsor form submission error:', error);
    return res.status(500).json({ error: 'Failed to submit form' });
  }
}
