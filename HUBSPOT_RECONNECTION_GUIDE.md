# 🔧 HubSpot Reconnection Guide

## ⚠️ Issue: HubSpot Integration Disconnected

The HubSpot integration was disconnected during penetration testing. Here's how to fix it:

---

## 🚀 **Quick Fix Options**

### **Option 1: Use Direct Access Token** (Recommended)

This is the most reliable method and works on any platform.

#### Step 1: Get Your HubSpot Access Token

1. Go to [HubSpot Settings](https://app.hubspot.com/settings-beta/146936524/integrations/private-apps)
2. Click **"Private Apps"** → **"Create a private app"**
3. Name it: `GWC Logistics Website`
4. Go to **"Scopes"** tab
5. Enable these scopes:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
6. Click **"Create app"**
7. **Copy the access token** (starts with `pat-na1-...` or `pat-eu1-...`)

#### Step 2: Add to Environment

**For Local Development:**
```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"
echo "HUBSPOT_ACCESS_TOKEN=your_token_here" >> .env
```

**For Netlify:**
1. Go to: Site Settings → Environment Variables
2. Click "Add a variable"
3. Key: `HUBSPOT_ACCESS_TOKEN`
4. Value: Your access token
5. Save

**For Production Server:**
Add to your environment variables or `.env` file:
```
HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

#### Step 3: Restart Server
```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"
# Kill existing server (Ctrl+C)
npm run dev
```

---

### **Option 2: Reconnect Replit Integration**

If you're using Replit, reconnect the HubSpot connector:

1. Open Replit project
2. Go to **Tools** → **Secrets**
3. Find **HubSpot** connector
4. Click **"Reconnect"**
5. Authorize with your HubSpot account
6. Restart the server

---

### **Option 3: Disable HubSpot Temporarily**

If you want quotes to work WITHOUT HubSpot while you fix it:

The code already handles this gracefully! Quotes will save to your database even if HubSpot fails.

**Current behavior:**
```
✅ Quote saved to database
❌ HubSpot sync fails (logged)
✅ User sees success message
```

**To verify:** Check server logs for:
```
"Failed to sync HubSpot contact"
"HubSpot not configured"
```

---

## 🧪 **Test the Integration**

### Test Quote Submission:

1. **Start your server:**
```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"
npm run dev
```

2. **Go to:** `http://localhost:3000/quote2`

3. **Fill out form:**
   - Select platforms (Shopify, Amazon, etc.)
   - Select products
   - Enter contact information
   - Submit

4. **Check server logs:**

**If Working:**
```
✅ Syncing contact to HubSpot...
✅ HubSpot contact created: 123456789
✅ Quote submitted: abc-123-def
```

**If Not Working:**
```
❌ HubSpot not configured
❌ Failed to sync HubSpot contact
✅ Quote submitted: abc-123-def (still saved to DB!)
```

5. **Check HubSpot:**
   - Go to [Contacts](https://app.hubspot.com/contacts/146936524/contacts)
   - Search for the email you used
   - Verify contact was created/updated

---

## 🔍 **Debugging**

### Check if HubSpot Token Exists:

```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"

# Check environment variable
echo $HUBSPOT_ACCESS_TOKEN

# Check .env file (if exists)
cat .env | grep HUBSPOT
```

### Check Server Logs:

When you submit a quote, look for these messages:

**Success:**
```
Using HUBSPOT_ACCESS_TOKEN from environment
Syncing contact to HubSpot...
HubSpot contact created: 123456789
```

**Failure:**
```
HubSpot not configured: Set HUBSPOT_ACCESS_TOKEN environment variable
Failed to sync HubSpot contact
```

### Test HubSpot API Directly:

```bash
# Test your access token
curl https://api.hubapi.com/crm/v3/objects/contacts \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

If this works, your token is valid!

---

## 📋 **What Was Changed**

I updated `server/hubspot.ts` to support **two methods**:

### Method 1: Direct Access Token (NEW)
```typescript
if (process.env.HUBSPOT_ACCESS_TOKEN) {
  // Use direct token from environment
  return process.env.HUBSPOT_ACCESS_TOKEN;
}
```

### Method 2: Replit Connector (Existing)
```typescript
// Falls back to Replit connector if available
// Throws helpful error if neither method works
```

**Benefits:**
✅ Works on Netlify, Vercel, any hosting
✅ No dependency on Replit connectors
✅ More reliable and portable
✅ Better error messages

---

## 🎯 **Current Status**

### ✅ **Working (Even Without HubSpot):**
- Quote form submissions
- Data saved to database
- User sees success message
- Form validation
- Security & sanitization

### ⚠️ **Not Working (Until Reconnected):**
- HubSpot CRM sync
- Contact creation in HubSpot
- Lead notifications in HubSpot

### 🔧 **To Fix:**
1. Get HubSpot access token (5 minutes)
2. Add `HUBSPOT_ACCESS_TOKEN` to environment
3. Restart server
4. Test quote submission
5. Verify contact in HubSpot CRM

---

## 📞 **Need Help?**

### **HubSpot Token Issues:**
- Make sure token has `crm.objects.contacts.read` and `crm.objects.contacts.write` scopes
- Token format: `pat-na1-...` or `pat-eu1-...`
- Tokens don't expire (unless you delete the private app)

### **Environment Variable Issues:**
- Use `.env` file for local development
- Add to Netlify/Vercel dashboard for production
- Restart server after adding variables
- Never commit tokens to Git

### **Still Not Working:**
Check these files:
```
server/hubspot.ts    - Integration code (updated)
server/routes.ts     - API endpoint
.env                 - Environment variables (create if missing)
```

---

## 🎉 **Once Fixed**

Your quote forms will:
1. ✅ Save to database
2. ✅ Sync to HubSpot CRM
3. ✅ Create/update contacts
4. ✅ Map all custom properties
5. ✅ Show success to user

**The integration is ready - it just needs an access token!**

---

## 💡 **Pro Tip**

Create a `.env` file for local development:

```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"
cat > .env << EOF
HUBSPOT_ACCESS_TOKEN=your_token_here
DATABASE_URL=your_database_url
SESSION_SECRET=your_secret_key
EOF
```

Then restart your server:
```bash
npm run dev
```

**Your HubSpot integration will be working again!** 🚀




