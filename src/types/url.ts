export interface Url {
  id: string;
  shortUrl: string;
  originalUrl: string;
  clicks: number;
  createdAt: Date; // Change to Date for better date handling
  userId: string;
  language?: string;  // Optional: language code
  region?: string;    // Optional: region for localization
  qrCode?: string;    // Base64 or URL for QR code image
  expiresAt?: Date | null;  // Change to Date | null (for optional expiry date)
  password?: string | null;
  customDomain?: string | null;
}

export interface UrlAnalytics {
  totalClicks: number;
  clicksByCountry?: { country: string; clicks: number }[];  // Optional
  clicksByDevice?: { device: string; clicks: number }[];    // Optional
  clicksByBrowser?: { browser: string; clicks: number }[];   // Optional
  clicksOverTime: { date: Date; clicks: number }[];          // Change to Date
}
