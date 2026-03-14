# Airtable Setup Guide

## 1. Create Airtable Base

Go to [airtable.com](https://airtable.com) and create a new base called "Emergence CRM"

## 2. Create Tables

### Table 1: Contact Inquiries
Fields:
- **Name** (Single line text)
- **Email** (Email)
- **Company** (Single line text)
- **Message** (Long text)
- **Submitted** (Date with time)

### Table 2: Sponsor Inquiries
Fields:
- **Company** (Single line text)
- **Contact Name** (Single line text)
- **Email** (Email)
- **Message** (Long text) - stores tier, sector, goals
- **Submitted** (Date with time)
- **Status** (Single select: New, Follow-up, Proposal Sent, Confirmed)

### Table 3: London Ecosystem (optional - for outreach)
Import the `/Users/ziggy/londonmaxxxing-repo/data/ecosystem.csv` file

Add these fields:
- **Contacted** (Checkbox)
- **Outreach Status** (Single select: Not contacted, Reached out, Interested, Partner, Hosting node)
- **Notes** (Long text)

## 3. Get API Credentials

1. Go to https://airtable.com/create/tokens
2. Create a new personal access token
3. Give it these scopes:
   - `data.records:read`
   - `data.records:write`
4. Add access to your "Emergence CRM" base
5. Copy the token

## 4. Get Base ID

1. Go to https://airtable.com/api
2. Select your "Emergence CRM" base
3. The Base ID is in the URL: `https://airtable.com/[BASE_ID]/api/docs`
4. Or find it in the introduction section of the API docs

## 5. Configure Vercel Environment Variables

Add these in Vercel dashboard → Project Settings → Environment Variables:

```
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

Or add via CLI:

```bash
vercel env add AIRTABLE_API_KEY
vercel env add AIRTABLE_BASE_ID
```

## 6. Test

After deploying, submit the contact and sponsor forms to verify they're working.

Check your Airtable base to see if the records appear.

## Field Mapping

### Contact Form → Airtable
- `name` → Name
- `email` → Email
- `company` → Company
- `message` → Message
- Auto-generated → Submitted (timestamp)

### Sponsor Form → Airtable
- `orgName` → Company
- `contactName` → Contact Name
- `email` → Email
- Combined string → Message (tier, sector, goals)
- Auto-generated → Submitted (timestamp)
- Auto-set → Status ("New")
