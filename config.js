// ==============================================================================
// GALERY ALCSTA48 - CENTRAL FRONTEND CONFIGURATION
// Berisi konfigurasi endpoint API yang terhubung ke server backend Anda.
// ==============================================================================

const ALCSTA_CONFIG = {
    // URL Backend Utama (Core Engine - HuggingFace Space)
    CORE_BACKEND_URL: "https://ashazeneca-botanalistiktl.hf.space",
    
    // URL Telegram Userbot Notifier & Live Sosmed Feed Aggregator
    NOTIFIER_API_URL: "https://ashazeneca-botanalistiktl.hf.space",

    // URL API Stream Tracker & Scraper (Live Stream Engine)
    STREAM_TRACKER_URL: "https://ashazeneca-botanalistiktl.hf.space",
    
    // URL API Wrapped & Analytics
    ANALYTICS_URL: "https://ashazeneca-botanalistiktl.hf.space",
    
    // URL API Media Saver & HD Processor
    SAVER_API_URL: "https://ashazeneca-botanalistiktl.hf.space",

    // URL API Teater Hub & Radio 24/7 Engine
    STATION_API_URL: "https://ashazeneca-botanalistiktl.hf.space",

    // URL API Kuis & Photocard Barter Engine
    QUIZ_API_URL: "https://ashazeneca-botanalistiktl.hf.space",
    
    // Konfigurasi Default Assets
    DEFAULT_AVATAR: "https://i.ibb.co.com/Y4JdtfGH/download.png",
    SKIN_FOLDER: "../skin/",
    
    // Interval Polling Chat (Milidetik)
    CHAT_POLL_INTERVAL: 3000
};

// Helper Resolver URL Pintar
function getApiUrl(type) {
    return ALCSTA_CONFIG.CORE_BACKEND_URL;
}
