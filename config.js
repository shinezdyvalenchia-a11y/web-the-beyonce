// ==============================================================================
// GALERY ALCSTA48 - CENTRAL FRONTEND CONFIGURATION
// Berisi konfigurasi endpoint API yang terhubung ke server backend Anda.
// ==============================================================================

const ALCSTA_CONFIG = {
    // 1. URL Backend Utama Core (Login, Register, Chat, Gacha, Profil, PostgreSQL Sync)
    CORE_BACKEND_URL: "https://shinezzzz-gokgokgogkgokgok.hf.space",
    
    // 2. URL Live Stream Tracker & Room Engine (Showroom & IDN Live)
    STREAM_TRACKER_URL: "https://ashazeneca-botanalistiktl.hf.space",
    
    // 3. URL Dedicated Music & Video Streamer Proxy (Alcstify Google Drive Master)
    ALCSTIFY_STREAM_API_URL: "https://shinezzzz-gokgokgok.hf.space",

    // URL Services Terkait
    NOTIFIER_API_URL: "https://shinezzzz-gokgokgogkgokgok.hf.space",
    ANALYTICS_URL: "https://shinezzzz-gokgokgogkgokgok.hf.space",
    SAVER_API_URL: "https://shinezzzz-gokgokgogkgokgok.hf.space",
    STATION_API_URL: "https://ashazeneca-botanalistiktl.hf.space",
    QUIZ_API_URL: "https://shinezzzz-gokgokgogkgokgok.hf.space",
    
    // Google OAuth Client ID (Dapatkan dari Google Cloud Console -> Credentials)
    GOOGLE_CLIENT_ID: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",

    // Konfigurasi Default Assets
    DEFAULT_AVATAR: "https://i.ibb.co.com/Y4JdtfGH/download.png",
    SKIN_FOLDER: "../skin/",
    
    // Interval Polling Chat (Milidetik)
    CHAT_POLL_INTERVAL: 3000
};

// Helper Resolver URL Pintar
function getApiUrl(type) {
    if (type === 'alcstify_stream' || type === 'music' || type === 'drive') {
        return ALCSTA_CONFIG.ALCSTIFY_STREAM_API_URL;
    }
    if (type === 'live' || type === 'stream_tracker' || type === 'station') {
        return ALCSTA_CONFIG.STREAM_TRACKER_URL;
    }
    return ALCSTA_CONFIG.CORE_BACKEND_URL;
}
