import { Client } from '@hubspot/api-client';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=hubspot',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('HubSpot not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableHubSpotClient() {
  const accessToken = await getAccessToken();
  return new Client({ accessToken });
}

// Create or update contact in HubSpot with quote form data
export async function createHubSpotContact(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shipFrom: string[];
  shipTo: string[];
  platforms: string[];
  products: string[];
  company: string;
  additionalInfo?: string | null;
}) {
  const client = await getUncachableHubSpotClient();
  
  // Map platform codes to HubSpot values
  const platformMapping: Record<string, string> = {
    'shopify': 'Shopify',
    'amazon': 'Amazon',
    'noon': 'Noon',
    'magento': 'Magento',
    'woocommerce': 'WooCommerce',
    'custom': 'Custom Platform'
  };

  // Map product codes to HubSpot values
  const productMapping: Record<string, string> = {
    'fashion': 'Fashion & Apparel',
    'electronics': 'Electronics',
    'home': 'Home & Garden',
    'beauty': 'Beauty & Personal Care',
    'sports': 'Sports & Outdoors',
    'other': 'Other'
  };

  // Map form data to HubSpot properties
  const properties: any = {
    firstname: formData.firstName,
    lastname: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    origin_country_multi: formData.shipFrom.join(';'),
    destination_country_multi: formData.shipTo.join(';'),
    shop_system: formData.platforms.map(p => platformMapping[p] || p).join(';'),
    product: formData.products.map(p => productMapping[p] || p).join(';'),
  };

  // Add optional fields if they exist
  if (formData.company) {
    properties.company = formData.company;
  }
  
  if (formData.additionalInfo) {
    properties.message = formData.additionalInfo;
  }

  try {
    // Security: Don't log sensitive contact properties
    console.log('Syncing contact to HubSpot...');
    
    // Try to create contact in HubSpot
    const response = await client.crm.contacts.basicApi.create({
      properties,
      associations: []
    });
    
    console.log('HubSpot contact created:', response.id);
    return response;
  } catch (error: any) {
    // If contact already exists (409 error), update it instead
    if (error.code === 409 && error.body?.message?.includes('Contact already exists')) {
      const existingIdMatch = error.body.message.match(/Existing ID: (\d+)/);
      const existingId = existingIdMatch ? existingIdMatch[1] : null;
      
      if (existingId) {
        console.log(`Updating existing contact: ${existingId}`);
        
        try {
          const updateResponse = await client.crm.contacts.basicApi.update(existingId, {
            properties
          });
          
          console.log('HubSpot contact updated:', existingId);
          return updateResponse;
        } catch (updateError: any) {
          console.error('Failed to update contact');
          throw updateError;
        }
      }
    }
    
    // For other errors, log without exposing sensitive data
    console.error('HubSpot API Error:', error.code || 'Unknown error');
    throw error;
  }
}
