/* =========================================================================
   GAME ENGINE (Master Registry 78 Cards, Catalog 300+ Skins, Inventory, Local Match Engine, Bot AI)
   ========================================================================= */

const CORE_BACKEND_URL = (typeof getApiUrl === "function") 
      ? getApiUrl("core") 
      : "https://shinezzzz-gokgokgogkgokgok.hf.space";

    const GAME_ENGINE_URL = (typeof getApiUrl === "function")
      ? getApiUrl("game")
      : "https://shinezzzz-gokgokgok.hf.space";

    const WS_BASE = GAME_ENGINE_URL.replace(/^http/i, 'ws');
    const DEFAULT_TEMPLATE_PP = "https://i.ibb.co.com/Y4JdtfGH/download.png";

    function getCookie(name) {
      let nameEQ = name + "="; let ca = document.cookie.split(';');
      for(let i=0; i < ca.length; i++) {
        let c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      } return null;
    }

    function getUserSession() {
      return getCookie("user_session") || 
             getCookie("session_key") || 
             getCookie("sessionCookie") || 
             getCookie("token") || 
             localStorage.getItem("user_session") || 
             localStorage.getItem("session_key") || 
             localStorage.getItem("sessionCookie") || 
             localStorage.getItem("beyonce_session") || 
             sessionStorage.getItem("user_session") || 
             sessionStorage.getItem("session_key") || 
             "demo_user";
    }

    // =========================================================================
    // 1. DATABASE VFX & SFX SKIN JKT48 (100% SESUAI INSTRUKSI)
    // =========================================================================

const MASTER_UNO_REGISTRY = {
      // 1. Wild Extreme Boss Cards (10 Members)
      "WILD_DRAW_10": { value: "wild_draw_10", type: "wild", color: "wild", display: "+10", member: "Angelina Christy", key: "ANGELINA_CHRISTY", photo: "ANGELINA_CHRISTY_UNCOMMON.jpg", jiko: "Peduli dan berbaik hati, siapakah dia? Christy!" },
      "WILD_DRAW_6": { value: "wild_draw_6", type: "wild", color: "wild", display: "+6", member: "Azizi Assadel (Zee)", key: "AZIZI_ASSADEL", photo: "AZIZI_ASSADEL_UNCOMMON.jpg", jiko: "Si gadis tomboy yang semangatnya meletup-letup. Halo semuanya, aku Zee!" },
      "WILD_SWAP_HANDS": { value: "wild_swap_hands", type: "wild", color: "wild", display: "🔀", member: "Shani Indira Natio", key: "SHANI_INDIRA", photo: "SHANI_INDIRA_UNCOMMON.jpg", jiko: "Semanis cokelat, selembut sutra. Halo semuanya, aku Shani" },
      "WILD_SHUFFLE_HANDS": { value: "wild_shuffle_hands", type: "wild", color: "wild", display: "🎲", member: "Shania Gracia", key: "SHANIA_GRACIA", photo: "SHANIA_GRACIA_UNCOMMON.jpg", jiko: "Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia, always smile! Sekali lagi? Gracia!" },
      "WILD_ROULETTE": { value: "wild_roulette", type: "wild", color: "wild", display: "🎰", member: "Freya Jayawardana", key: "FREYA_JAYAWARDANA", photo: "FREYA_JAYAWARDANA_UNCOMMON.jpg", jiko: "Gadis koleris yang suka berimajinasi, terangi harimu dengan senyuman karamelku. Halo, aku Freya!" },
      "WILD_TARGET_ATTACK": { value: "wild_target_attack", type: "wild", color: "wild", display: "🎯", member: "Marsha Lenathea", key: "MARSHA_LENATHEA", photo: "MARSHA_LENATHEA_UNCOMMON.jpg", jiko: "Seperti pizza yang selalu dinanti-nantikan semua orang, selalu nantikan aku, ya? Halo, aku Marsha!" },
      "WILD_REVERSE_4": { value: "wild_reverse_4", type: "wild", color: "wild", display: "🔄+4", member: "Feni Fitriyanti", key: "FENI_FITRIYANTI", photo: "FENI_FITRIYANTI_UNCOMMON.jpg", jiko: "Matahari yang indah yang akan selalu memberikan kehangatan setiap harinya. Halo, aku Feni!" },
      "WILD_DOUBLE_PLAY": { value: "wild_double_play", type: "wild", color: "wild", display: "⚡2x", member: "Sisca Saras", key: "SISCA_SARAS", photo: "SISCA_SARAS_UNCOMMON.jpg", jiko: "Vokal emas yang memukau, aku Sisca!" },
      "WILD_COUNTER_SHIELD": { value: "wild_counter_shield", type: "wild", color: "wild", display: "🛡️", member: "Adzana Ashel", key: "ADZANA_ASHEL", photo: "ADZANA_ASHEL_UNCOMMON.jpg", jiko: "Senyuman sehangat matahari, namaku Ashel!" },
      "WILD_CLASSIC": { value: "wild_classic", type: "wild", color: "wild", display: "★", member: "Yesica Tamara (Chika)", key: "YESICA_TAMARA", photo: "YESICA_TAMARA_UNCOMMON.jpg", jiko: "Meskipun kadang-kadang menyebalkan, tapi aku selalu dirindukan. Panggil aku Chika!" },

      // 2. No Mercy Action Cards (16 Members)
      "RED_DISCARD_ALL": { value: "discard_all", type: "action", color: "red", display: "🗑️", member: "Gabriela Abigail (Ella)", key: "GABRIELA_ABIGAIL", photo: "GABRIELA_ABIGAIL_UNCOMMON.jpg" },
      "RED_SKIP_EVERYONE": { value: "skip_everyone", type: "action", color: "red", display: "⛔", member: "Jesslyn Elly (Lyn)", key: "JESSLYN_ELLY", photo: "JESSLYN_ELLY_UNCOMMON.jpg" },
      "RED_DRAW_4": { value: "draw_4", type: "action", color: "red", display: "+4", member: "Amanda Sukma", key: "AMANDA_SUKMA", photo: "AMANDA_SUKMA_UNCOMMON.jpg" },
      "RED_SHIELD": { value: "shield", type: "action", color: "red", display: "🛡️", member: "Fritzy Rosmerian", key: "FRITZY_ROSMERIAN", photo: "FRITZY_ROSMERIAN_UNCOMMON.jpg" },
      "BLUE_DISCARD_ALL": { value: "discard_all", type: "action", color: "blue", display: "🗑️", member: "Grace Octaviani (Gracie)", key: "GRACE_OCTAVIANI", photo: "GRACE_OCTAVIANI_UNCOMMON.jpg" },
      "BLUE_SKIP_EVERYONE": { value: "skip_everyone", type: "action", color: "blue", display: "⛔", member: "Aurellia (Lia)", key: "AURELLIA_LIA", photo: "AURELLIA_LIA_UNCOMMON.jpg" },
      "BLUE_DRAW_4": { value: "draw_4", type: "action", color: "blue", display: "+4", member: "Indah Cahya", key: "INDAH_CAHYA", photo: "INDAH_CAHYA_UNCOMMON.jpg" },
      "BLUE_SHIELD": { value: "shield", type: "action", color: "blue", display: "🛡️", member: "Dena Natalia", key: "DENA_NATALIA", photo: "DENA_NATALIA_UNCOMMON.jpg" },
      "GREEN_DISCARD_ALL": { value: "discard_all", type: "action", color: "green", display: "🗑️", member: "Greesella Adhalia (Greesel)", key: "GREESELA_ADHALIA", photo: "GREESELA_ADHALIA_UNCOMMON.jpg" },
      "GREEN_SKIP_EVERYONE": { value: "skip_everyone", type: "action", color: "green", display: "⛔", member: "Jinan Safa Safira", key: "JINAN", photo: "JINAN_UNCOMMON.jpg" },
      "GREEN_DRAW_4": { value: "draw_4", type: "action", color: "green", display: "+4", member: "Raisha Syifa", key: "RAISHA_SYIFA", photo: "RAISHA_SYIFA_UNCOMMON.jpg" },
      "GREEN_SHIELD": { value: "shield", type: "action", color: "green", display: "🛡️", member: "Aurhel Alana (Lana)", key: "AURHEL_ALANA", photo: "AURHEL_ALANA_UNCOMMON.jpg" },
      "YELLOW_DISCARD_ALL": { value: "discard_all", type: "action", color: "yellow", display: "🗑️", member: "Michelle Alexandra (Michie)", key: "MICHELLE_ALEXANDRA", photo: "MICHELLE_ALEXANDRA_UNCOMMON.jpg" },
      "YELLOW_SKIP_EVERYONE": { value: "skip_everyone", type: "action", color: "yellow", display: "⛔", member: "Nabila Fitriana (Lala)", key: "NABILA_FITRIANA", photo: "NABILA_FITRIANA_UNCOMMON.jpg" },
      "YELLOW_DRAW_4": { value: "draw_4", type: "action", color: "yellow", display: "+4", member: "Desy Natalia (Daisy)", key: "DESY_NATALIA", photo: "DESY_NATALIA_UNCOMMON.jpg" },
      "YELLOW_SHIELD": { value: "shield", type: "action", color: "yellow", display: "🛡️", member: "Gendis Mayrannisa", key: "GENDIS_MAYRANNISA", photo: "GENDIS_MAYRANNISA_UNCOMMON.jpg" },

      // 3. Standard Action Cards (12 Members)
      "RED_DRAW_2": { value: "draw_2", type: "action", color: "red", display: "+2", member: "Reva Fidela (Adel)", key: "REVA_FIDELA", photo: "REVA_FIDELA_UNCOMMON.jpg" },
      "RED_REVERSE": { value: "reverse", type: "action", color: "red", display: "🔄", member: "Cornelia Vanisa (Oniel)", key: "CORNELIA_VANISA", photo: "CORNELIA_VANISA_UNCOMMON.jpg" },
      "RED_SKIP": { value: "skip", type: "action", color: "red", display: "🚫", member: "Kathrina Irene", key: "KATHRINA_IRENE", photo: "KATHRINA_IRENE_UNCOMMON.jpg" },
      "BLUE_DRAW_2": { value: "draw_2", type: "action", color: "blue", display: "+2", member: "Gita Sekar Andarini", key: "GITA_SEKAR", photo: "GITA_SEKAR_UNCOMMON.jpg" },
      "BLUE_REVERSE": { value: "reverse", type: "action", color: "blue", display: "🔄", member: "Febriola Sinambela (Olla)", key: "FEBRIOLA_SINAMBELLA", photo: "FEBRIOLA_SINAMBELLA_UNCOMMON.jpg" },
      "BLUE_SKIP": { value: "skip", type: "action", color: "blue", display: "🚫", member: "Jessica Chandra (Jessi)", key: "JESSICA_CHANDRA", photo: "JESSICA_CHANDRA_UNCOMMON.jpg" },
      "GREEN_DRAW_2": { value: "draw_2", type: "action", color: "green", display: "+2", member: "Fiony Alveria", key: "FIONY_ALVERIA", photo: "FIONY_ALVERIA_UNCOMMON.jpg" },
      "GREEN_REVERSE": { value: "reverse", type: "action", color: "green", display: "🔄", member: "Helisma Putri (Eli)", key: "HELISMA_PUTRI", photo: "HELISMA_PUTRI_UNCOMMON.jpg" },
      "GREEN_SKIP": { value: "skip", type: "action", color: "green", display: "🚫", member: "Flora Shafiq", key: "FLORA_SHAFIQ", photo: "FLORA_SHAFIQ_UNCOMMON.jpg" },
      "YELLOW_DRAW_2": { value: "draw_2", type: "action", color: "yellow", display: "+2", member: "Mutiara Azzahra (Muthe)", key: "MUTIARA_AZZAHRA", photo: "MUTIARA_AZZAHRA_UNCOMMON.jpg" },
      "YELLOW_REVERSE": { value: "reverse", type: "action", color: "yellow", display: "🔄", member: "Lulu Salsabila", key: "LULU_SALSABILA", photo: "LULU_SALSABILA_UNCOMMON.jpg" },
      "YELLOW_SKIP": { value: "skip", type: "action", color: "yellow", display: "🚫", member: "Indira Putri Seruni", key: "INDIRA_PUTRI", photo: "INDIRA_PUTRI_UNCOMMON.jpg" },

      // 4. Number Cards 0-9 (40 Members)
      "RED_0": { value: "0", type: "number", color: "red", display: "0", member: "Abigail Rachel (Aralie)", key: "ABIGAIL_RACHEL", photo: "ABIGAIL_RACHEL_UNCOMMON.jpg" },
      "BLUE_0": { value: "0", type: "number", color: "blue", display: "0", member: "Chelsea Devina", key: "CHELSEA_DEVINA", photo: "CHELSEA_DEVINA_UNCOMMON.jpg" },
      "GREEN_0": { value: "0", type: "number", color: "green", display: "0", member: "Jacqueline Immanuela", key: "JACQUELINE_IMMANUELA", photo: "JACQUELINE_IMMANUELA_UNCOMMON.jpg" },
      "YELLOW_0": { value: "0", type: "number", color: "yellow", display: "0", member: "Nina Tutachia (Nachia)", key: "NINA_TUTACHIA", photo: "NINA_TUTACHIA_UNCOMMON.jpg" },

      "RED_1": { value: "1", type: "number", color: "red", display: "1", member: "Adeline Wijaya (Delynn)", key: "ADELINE_WIJAYA", photo: "ADELINE_WIJAYA_UNCOMMON.jpg" },
      "BLUE_1": { value: "1", type: "number", color: "blue", display: "1", member: "Christabella Bonita", key: "CHRISTABELLA_BONITA", photo: "CHRISTABELLA_BONITA_UNCOMMON.jpg" },
      "GREEN_1": { value: "1", type: "number", color: "green", display: "1", member: "Jazzlyn Trisha (Trisha)", key: "JAZZLYN_TRISHA", photo: "JAZZLYN_TRISHA_UNCOMMON.jpg" },
      "YELLOW_1": { value: "1", type: "number", color: "yellow", display: "1", member: "Nur Intan", key: "NUR_INTAN", photo: "NUR_INTAN_UNCOMMON.jpg" },

      "RED_2": { value: "2", type: "number", color: "red", display: "2", member: "Afera Thalia", key: "AFERA_THALIA", photo: "AFERA_THALIA_UNCOMMON.jpg" },
      "BLUE_2": { value: "2", type: "number", color: "blue", display: "2", member: "Cynthia Yaputera", key: "CYNTHIA_YAPUTERA", photo: "CYNTHIA_YAPUTERA_UNCOMMON.jpg" },
      "GREEN_2": { value: "2", type: "number", color: "green", display: "2", member: "Jemima Evodie", key: "JEMIMA_EVODIE", photo: "JEMIMA_EVODIE_UNCOMMON.jpg" },
      "YELLOW_2": { value: "2", type: "number", color: "yellow", display: "2", member: "Oline Manuel", key: "OLINE_MANUEL", photo: "OLINE_MANUEL_UNCOMMON.jpg" },

      "RED_3": { value: "3", type: "number", color: "red", display: "3", member: "Alya Amanda", key: "ALYA_AMANDA", photo: "ALYA_AMANDA_UNCOMMON.jpg" },
      "BLUE_3": { value: "3", type: "number", color: "blue", display: "3", member: "Catherina Vallencia (Erine)", key: "CATHERINA_VALLENCIA", photo: "CATHERINA_VALLENCIA_UNCOMMON.jpg" },
      "GREEN_3": { value: "3", type: "number", color: "green", display: "3", member: "Jesslyn Callista", key: "JESSLYN_CALLISTA", photo: "JESSLYN_CALLISTA_UNCOMMON.jpg" },
      "YELLOW_3": { value: "3", type: "number", color: "yellow", display: "3", member: "Putri Jazyta", key: "PUTRI_JAZYTA", photo: "PUTRI_JAZYTA_UNCOMMON.jpg" },

      "RED_4": { value: "4", type: "number", color: "red", display: "4", member: "Anindya Ramadhani (Anin)", key: "ANINDYA_RAMADHANI", photo: "ANINDYA_RAMADHANI_UNCOMMON.jpg" },
      "BLUE_4": { value: "4", type: "number", color: "blue", display: "4", member: "Fahira Putri", key: "FAHIRA_PUTRI", photo: "FAHIRA_PUTRI_UNCOMMON.jpg" },
      "GREEN_4": { value: "4", type: "number", color: "green", display: "4", member: "Letycia Moreen (Moreen)", key: "LETYCIA_MOREEN", photo: "LETYCIA_MOREEN_UNCOMMON.jpg" },
      "YELLOW_4": { value: "4", type: "number", color: "yellow", display: "4", member: "Ralyne Van", key: "RALYNE_VAN", photo: "RALYNE_VAN_UNCOMMON.jpg" },

      "RED_5": { value: "5", type: "number", color: "red", display: "5", member: "Astrella Virgiananda", key: "ASTRELLA_VIRGIANANDA", photo: "ASTRELLA_VIRGIANANDA_UNCOMMON.jpg" },
      "BLUE_5": { value: "5", type: "number", color: "blue", display: "5", member: "Fatimah Azzahra", key: "FATIMAH_AZZAHRA", photo: "FATIMAH_AZZAHRA_UNCOMMON.jpg" },
      "GREEN_5": { value: "5", type: "number", color: "green", display: "5", member: "Maegan Jovanka", key: "MAEGAN_JOVANKA", photo: "MAEGAN_JOVANKA_UNCOMMON.jpg" },
      "YELLOW_5": { value: "5", type: "number", color: "yellow", display: "5", member: "Regina William (Eline)", key: "REGINA_WILLIAM", photo: "REGINA_WILLIAM_UNCOMMON.jpg" },

      "RED_6": { value: "6", type: "number", color: "red", display: "6", member: "Aulia Riza", key: "AULIA_RIZA", photo: "AULIA_RIZA_UNCOMMON.jpg" },
      "BLUE_6": { value: "6", type: "number", color: "blue", display: "6", member: "Hagia Sopia", key: "HAGIA_SOPIA", photo: "HAGIA_SOPIA_UNCOMMON.jpg" },
      "GREEN_6": { "value": "6", type: "number", color: "green", display: "6", member: "Maxine Faye", key: "MAXINE_FAYE", photo: "MAXINE_FAYE_UNCOMMON.jpg" },
      "YELLOW_6": { value: "6", type: "number", color: "yellow", display: "6", member: "Ribka Budiman", key: "RIBKA_BUDIMAN", photo: "RIBKA_BUDIMAN_UNCOMMON.jpg" },

      "RED_7": { value: "7", type: "number", color: "red", display: "7", member: "Bong Aprilli", key: "BONG_APRILLI", photo: "BONG_APRILLI_UNCOMMON.jpg" },
      "BLUE_7": { value: "7", type: "number", color: "blue", display: "7", member: "Heida Suyangga", key: "HEIDA_SUYANGGA", photo: "HEIDA_SUYANGGA_UNCOMMON.jpg" },
      "GREEN_7": { value: "7", type: "number", color: "green", display: "7", member: "Michelle Levia (Levi)", key: "MICHELLE_LEVIA", photo: "MICHELLE_LEVIA_UNCOMMON.jpg" },
      "YELLOW_7": { value: "7", type: "number", color: "yellow", display: "7", member: "Shabilqis Naila (Nala)", key: "SHABILQIS_NAILA", photo: "SHABILQIS_NAILA_UNCOMMON.jpg" },

      "RED_8": { value: "8", type: "number", color: "red", display: "8", member: "Carissa Dini", key: "CARISSA_DINI", photo: "CARISSA_DINI_UNCOMMON.jpg" },
      "BLUE_8": { value: "8", type: "number", color: "blue", display: "8", member: "Hillary Abigail (Lily)", key: "HILLARY_ABIGAIL", photo: "HILLARY_ABIGAIL_UNCOMMON.jpg" },
      "GREEN_8": { value: "8", type: "number", color: "green", display: "8", member: "Mikaela Kusjanto", key: "MIKAELA_KUSJANTO", photo: "MIKAELA_KUSJANTO_UNCOMMON.jpg" },
      "YELLOW_8": { value: "8", type: "number", color: "yellow", display: "8", member: "Sona Kalyana", key: "SONA_KALYANA", photo: "SONA_KALYANA_UNCOMMON.jpg" },

      "RED_9": { value: "9", type: "number", color: "red", display: "9", member: "Cathleen Nixie (Cathy)", key: "CATHLEEN_NIXIE", photo: "CATHLEEN_NIXIE_UNCOMMON.jpg" },
      "BLUE_9": { value: "9", type: "number", color: "blue", display: "9", member: "Humaira Ramadhani", key: "HUMAIRA_RAMADHANI", photo: "HUMAIRA_RAMADHANI_UNCOMMON.jpg" },
      "GREEN_9": { value: "9", type: "number", color: "green", display: "9", member: "Nayla Suji", key: "NAYLA_SUJI", photo: "NAYLA_SUJI_UNCOMMON.jpg" },
      "YELLOW_9": { value: "9", type: "number", color: "yellow", display: "9", member: "Victoria Kimberly (Kimmy)", key: "VICTORIA_KIMBERLY", photo: "VICTORIA_KIMBERLY_UNCOMMON.jpg" }
    };

    // =========================================================================
    // COMPLETE ALL-MEMBER SKIN CATALOGUE (100% PRESERVED)
    // =========================================================================
    const ALL_SKINS_BY_MEMBER = {
      "ANGELINA_CHRISTY": [
        { code: "DKTY", name: "Dedek Kitty (Spesial)", tier: "Omega Spesial", file: "DKTY.jpg", isSpecial: true },
        { code: "FCHR", name: "Full Color: Christy", tier: "Omega Spesial", file: "FCHR.jpg", isFullColor: true },
        { code: "PCHR", name: "Prime: Christy", tier: "Omega Spesial", file: "PCHR.jpg", isPrime: true },
        { code: "SCHR", name: "SSK: Angelina Christy", tier: "Omega", file: "SCHR.jpg", isSSK: true },
        { code: "ANGELINA_CHRISTY_MYTH", name: "My Passion: Christy", tier: "Mythic", file: "ANGELINA_CHRISTY_MYTH.jpg" },
        { code: "ANGELINA_CHRISTY_LEGEND", name: "Cosmos: Christy", tier: "Legend", file: "ANGELINA_CHRISTY_LEGEND.jpg" },
        { code: "ANGELINA_CHRISTY_RARE", name: "Snow & Gold: Christy", tier: "Rare", file: "ANGELINA_CHRISTY_RARE.jpg" },
        { code: "ANGELINA_CHRISTY_UNCOMMON", name: "Trainee: Christy (Default)", tier: "Uncommon", file: "ANGELINA_CHRISTY_UNCOMMON.jpg" }
      ],
      "SHANI_INDIRA": [
        { code: "CSHN", name: "Ci Shani (Spesial)", tier: "Omega Spesial", file: "CSHN.jpg", isSpecial: true },
        { code: "FSHN", name: "Full Color: Shani", tier: "Omega Spesial", file: "FSHN.jpg", isFullColor: true },
        { code: "SHANI_INDIRA_MYTH", name: "Last Dress: Shani", tier: "Mythic", file: "SHANI_INDIRA_MYTH.jpg" },
        { code: "SHANI_INDIRA_LEGEND", name: "Cosmos: Shani", tier: "Legend", file: "SHANI_INDIRA_LEGEND.jpg" },
        { code: "SHANI_INDIRA_RARE", name: "Snow & Gold: Shani", tier: "Rare", file: "SHANI_INDIRA_RARE.jpg" },
        { code: "SHANI_INDIRA_UNCOMMON", name: "Trainee: Shani (Default)", tier: "Uncommon", file: "SHANI_INDIRA_UNCOMMON.jpg" }
      ],
      "SHANIA_GRACIA": [
        { code: "CGRC", name: "Ci Gre (Spesial)", tier: "Omega Spesial", file: "CGRC.jpg", isSpecial: true },
        { code: "FGRC", name: "Full Color: Gracia", tier: "Omega Spesial", file: "FGRC.jpg", isFullColor: true },
        { code: "PGRC", name: "Prime: Gracia", tier: "Omega Spesial", file: "PGRC.jpg", isPrime: true },
        { code: "SGRA", name: "SSK: Shania Gracia", tier: "Omega", file: "SGRA.jpg", isSSK: true },
        { code: "SHANIA_GRACIA_MYTH", name: "Last Dress: Gracia", tier: "Mythic", file: "SHANIA_GRACIA_MYTH.jpg" },
        { code: "SHANIA_GRACIA_LEGEND", name: "Cosmos: Gracia", tier: "Legend", file: "SHANIA_GRACIA_LEGEND.jpg" },
        { code: "SHANIA_GRACIA_RARE", name: "Snow & Gold: Gracia", tier: "Rare", file: "SHANIA_GRACIA_RARE.jpg" },
        { code: "SHANIA_GRACIA_UNCOMMON", name: "Trainee: Gracia (Default)", tier: "Uncommon", file: "SHANIA_GRACIA_UNCOMMON.jpg" }
      ],
      "FENI_FITRIYANTI": [
        { code: "CFNI", name: "Ci Feni (Spesial)", tier: "Omega Spesial", file: "CFNI.jpg", isSpecial: true },
        { code: "FFNI", name: "Full Color: Feni", tier: "Omega Spesial", file: "FFNI.jpg", isFullColor: true },
        { code: "PFNI", name: "Prime: Feni", tier: "Omega Spesial", file: "PFNI.jpg", isPrime: true },
        { code: "SFEN", name: "SSK: Feni Fitriyanti", tier: "Omega", file: "SFEN.jpg", isSSK: true },
        { code: "FENI_FITRIYANTI_MYTH", name: "My Passion: Feni", tier: "Mythic", file: "FENI_FITRIYANTI_MYTH.jpg" },
        { code: "FENI_FITRIYANTI_LEGEND", name: "Cosmos: Feni", tier: "Legend", file: "FENI_FITRIYANTI_LEGEND.jpg" },
        { code: "FENI_FITRIYANTI_RARE", name: "Snow & Gold: Feni", tier: "Rare", file: "FENI_FITRIYANTI_RARE.jpg" },
        { code: "FENI_FITRIYANTI_UNCOMMON", name: "Trainee: Feni (Default)", tier: "Uncommon", file: "FENI_FITRIYANTI_UNCOMMON.jpg" }
      ],
      "HELISMA_PUTRI": [
        { code: "CELI", name: "Ci Eli (Spesial)", tier: "Omega Spesial", file: "CELI.jpg", isSpecial: true },
        { code: "SELI", name: "SSK: Helisma Putri", tier: "Omega", file: "SELI.jpg", isSSK: true },
        { code: "HELISMA_PUTRI_MYTH", name: "High Dream: Eli", tier: "Mythic", file: "HELISMA_PUTRI_MYTH.jpg" },
        { code: "HELISMA_PUTRI_LEGEND", name: "Cosmos: Eli", tier: "Legend", file: "HELISMA_PUTRI_LEGEND.jpg" },
        { code: "HELISMA_PUTRI_RARE", name: "Snow & Gold: Eli", tier: "Rare", file: "HELISMA_PUTRI_RARE.jpg" },
        { code: "HELISMA_PUTRI_UNCOMMON", name: "Trainee: Eli (Default)", tier: "Uncommon", file: "HELISMA_PUTRI_UNCOMMON.jpg" }
      ],
      "AZIZI_ASSADEL": [
        { code: "FAAZ", name: "Full Color: Zee", tier: "Omega Spesial", file: "FAAZ.jpg", isFullColor: true },
        { code: "AZIZI_ASSADEL_MYTH", name: "Last Dress: Zee", tier: "Mythic", file: "AZIZI_ASSADEL_MYTH.jpg" },
        { code: "AZIZI_ASSADEL_LEGEND", name: "Cosmos: Zee", tier: "Legend", file: "AZIZI_ASSADEL_LEGEND.jpg" },
        { code: "AZIZI_ASSADEL_RARE", name: "Snow & Gold: Zee", tier: "Rare", file: "AZIZI_ASSADEL_RARE.jpg" },
        { code: "AZIZI_ASSADEL_UNCOMMON", name: "Trainee: Zee (Default)", tier: "Uncommon", file: "AZIZI_ASSADEL_UNCOMMON.jpg" }
      ],
      "MARSHA_LENATHEA": [
        { code: "FMAR", name: "Full Color: Marsha", tier: "Omega Spesial", file: "FMAR.jpg", isFullColor: true },
        { code: "PMSH", name: "Prime: Marsha", tier: "Omega Spesial", file: "PMSH.jpg", isPrime: true },
        { code: "SMAR", name: "SSK: Marsha Lenathea", tier: "Omega", file: "SMAR.jpg", isSSK: true },
        { code: "MARSHA_LENATHEA_MYTH", name: "High Dream: Marsha", tier: "Mythic", file: "MARSHA_LENATHEA_MYTH.jpg" },
        { code: "MARSHA_LENATHEA_LEGEND", name: "Cosmos: Marsha", tier: "Legend", file: "MARSHA_LENATHEA_LEGEND.jpg" },
        { code: "MARSHA_LENATHEA_RARE", name: "Snow & Gold: Marsha", tier: "Rare", file: "MARSHA_LENATHEA_RARE.jpg" },
        { code: "MARSHA_LENATHEA_UNCOMMON", name: "Trainee: Marsha (Default)", tier: "Uncommon", file: "MARSHA_LENATHEA_UNCOMMON.jpg" }
      ],
      "FIONY_ALVERIA": [
        { code: "FFIO", name: "Full Color: Fiony", tier: "Omega Spesial", file: "FFIO.jpg", isFullColor: true },
        { code: "PFNY", name: "Prime: Fiony", tier: "Omega Spesial", file: "PFNY.jpg", isPrime: true },
        { code: "SFIO", name: "SSK: Fiony Alveria", tier: "Omega", file: "SFIO.jpg", isSSK: true },
        { code: "FIONY_ALVERIA_MYTH", name: "Love War: Fiony", tier: "Mythic", file: "FIONY_ALVERIA_MYTH.jpg" },
        { code: "FIONY_ALVERIA_LEGEND", name: "Cosmos: Fiony", tier: "Legend", file: "FIONY_ALVERIA_LEGEND.jpg" },
        { code: "FIONY_ALVERIA_RARE", name: "Snow & Gold: Fiony", tier: "Rare", file: "FIONY_ALVERIA_RARE.jpg" },
        { code: "FIONY_ALVERIA_UNCOMMON", name: "Trainee: Fiony (Default)", tier: "Uncommon", file: "FIONY_ALVERIA_UNCOMMON.jpg" }
      ],
      "YESICA_TAMARA": [
        { code: "FCHK", name: "Full Color: Chika", tier: "Omega Spesial", file: "FCHK.jpg", isFullColor: true },
        { code: "YESICA_TAMARA_MYTH", name: "Last Dress: Chika", tier: "Mythic", file: "YESICA_TAMARA_MYTH.jpg" },
        { code: "YESICA_TAMARA_LEGEND", name: "Cosmos: Chika", tier: "Legend", file: "YESICA_TAMARA_LEGEND.jpg" },
        { code: "YESICA_TAMARA_RARE", name: "Snow & Gold: Chika", tier: "Rare", file: "YESICA_TAMARA_RARE.jpg" },
        { code: "YESICA_TAMARA_UNCOMMON", name: "Trainee: Chika (Default)", tier: "Uncommon", file: "YESICA_TAMARA_UNCOMMON.jpg" }
      ],
      "JINAN": [
        { code: "FJIN", name: "Full Color: Jinan", tier: "Omega Spesial", file: "FJIN.jpg", isFullColor: true },
        { code: "JINAN_UNCOMMON", name: "Trainee: Jinan (Default)", tier: "Uncommon", file: "JINAN_UNCOMMON.jpg" }
      ],
      "FREYA_JAYAWARDANA": [
        { code: "PFYR", name: "Prime: Freya", tier: "Omega Spesial", file: "PFYR.jpg", isPrime: true },
        { code: "SFRE", name: "SSK: Freya Jayawardana", tier: "Omega", file: "SFRE.jpg", isSSK: true },
        { code: "FREYA_JAYAWARDANA_MYTH", name: "High Dream: Freya", tier: "Mythic", file: "FREYA_JAYAWARDANA_MYTH.jpg" },
        { code: "FREYA_JAYAWARDANA_LEGEND", name: "Cosmos: Freya", tier: "Legend", file: "FREYA_JAYAWARDANA_LEGEND.jpg" },
        { code: "FREYA_JAYAWARDANA_RARE", name: "Snow & Gold: Freya", tier: "Rare", file: "FREYA_JAYAWARDANA_RARE.jpg" },
        { code: "FREYA_JAYAWARDANA_UNCOMMON", name: "Trainee: Freya (Default)", tier: "Uncommon", file: "FREYA_JAYAWARDANA_UNCOMMON.jpg" }
      ],
      "GITA_SEKAR": [
        { code: "PGTS", name: "Prime: Gita", tier: "Omega Spesial", file: "PGTS.jpg", isPrime: true },
        { code: "SGIT", name: "SSK: Gita Sekar", tier: "Omega", file: "SGIT.jpg", isSSK: true },
        { code: "GITA_SEKAR_MYTH", name: "High Dream: Gita", tier: "Mythic", file: "GITA_SEKAR_MYTH.jpg" },
        { code: "GITA_SEKAR_LEGEND", name: "Cosmos: Gita", tier: "Legend", file: "GITA_SEKAR_LEGEND.jpg" },
        { code: "GITA_SEKAR_RARE", name: "Snow & Gold: Gita", tier: "Rare", file: "GITA_SEKAR_RARE.jpg" },
        { code: "GITA_SEKAR_UNCOMMON", name: "Trainee: Gita (Default)", tier: "Uncommon", file: "GITA_SEKAR_UNCOMMON.jpg" }
      ],
      "LULU_SALSABILA": [
        { code: "PLLU", name: "Prime: Lulu", tier: "Omega Spesial", file: "PLLU.jpg", isPrime: true },
        { code: "SLUL", name: "SSK: Lulu Salsabila", tier: "Omega", file: "SLUL.jpg", isSSK: true },
        { code: "LULU_SALSABILA_MYTH", name: "My Passion: Lulu", tier: "Mythic", file: "LULU_SALSABILA_MYTH.jpg" },
        { code: "LULU_SALSABILA_LEGEND", name: "Cosmos: Lulu", tier: "Legend", file: "LULU_SALSABILA_LEGEND.jpg" },
        { code: "LULU_SALSABILA_RARE", name: "Snow & Gold: Lulu", tier: "Rare", file: "LULU_SALSABILA_RARE.jpg" },
        { code: "LULU_SALSABILA_UNCOMMON", name: "Trainee: Lulu (Default)", tier: "Uncommon", file: "LULU_SALSABILA_UNCOMMON.jpg" }
      ],
      "CORNELIA_VANISA": [
        { code: "PONL", name: "Prime: Oniel", tier: "Omega Spesial", file: "PONL.jpg", isPrime: true },
        { code: "SONI", name: "SSK: Cornelia Vanisa", tier: "Omega", file: "SONI.jpg", isSSK: true },
        { code: "CORNELIA_VANISA_MYTH", name: "My Passion: Oniel", tier: "Mythic", file: "CORNELIA_VANISA_MYTH.jpg" },
        { code: "CORNELIA_VANISA_LEGEND", name: "Cosmos: Oniel", tier: "Legend", file: "CORNELIA_VANISA_LEGEND.jpg" },
        { code: "CORNELIA_VANISA_RARE", name: "Snow & Gold: Oniel", tier: "Rare", file: "CORNELIA_VANISA_RARE.jpg" },
        { code: "CORNELIA_VANISA_UNCOMMON", name: "Trainee: Oniel (Default)", tier: "Uncommon", file: "CORNELIA_VANISA_UNCOMMON.jpg" }
      ],
      "AURELLIA_LIA": [
        { code: "PLAI", name: "Prime: Aurelia", tier: "Omega Spesial", file: "PLAI.jpg", isPrime: true },
        { code: "SLIA", name: "SSK: Aurellia", tier: "Omega", file: "SLIA.jpg", isSSK: true },
        { code: "AURELLIA_LIA_MYTH", name: "Love War: Lia", tier: "Mythic", file: "AURELLIA_LIA_MYTH.jpg" },
        { code: "AURELLIA_LIA_LEGEND", name: "Cosmos: Lia", tier: "Legend", file: "AURELLIA_LIA_LEGEND.jpg" },
        { code: "AURELLIA_LIA_RARE", name: "Snow & Gold: Lia", tier: "Rare", file: "AURELLIA_LIA_RARE.jpg" },
        { code: "AURELLIA_LIA_UNCOMMON", name: "Trainee: Lia (Default)", tier: "Uncommon", file: "AURELLIA_LIA_UNCOMMON.jpg" }
      ],
      "JESSICA_CHANDRA": [
        { code: "PJCC", name: "Prime: Jessi", tier: "Omega Spesial", file: "PJCC.jpg", isPrime: true },
        { code: "SJES", name: "SSK: Jessica Chandra", tier: "Omega", file: "SJES.jpg", isSSK: true },
        { code: "JESSICA_CHANDRA_MYTH", name: "My Passion: Jessi", tier: "Mythic", file: "JESSICA_CHANDRA_MYTH.jpg" },
        { code: "JESSICA_CHANDRA_LEGEND", name: "Cosmos: Jessi", tier: "Legend", file: "JESSICA_CHANDRA_LEGEND.jpg" },
        { code: "JESSICA_CHANDRA_RARE", name: "Snow & Gold: Jessi", tier: "Rare", file: "JESSICA_CHANDRA_RARE.jpg" },
        { code: "JESSICA_CHANDRA_UNCOMMON", name: "Trainee: Jessi (Default)", tier: "Uncommon", file: "JESSICA_CHANDRA_UNCOMMON.jpg" }
      ],
      "MUTIARA_AZZAHRA": [
        { code: "PMUT", name: "Prime: Muthe", tier: "Omega Spesial", file: "PMUT.jpg", isPrime: true },
        { code: "SMUT", name: "SSK: Mutiara Azzahra", tier: "Omega", file: "SMUT.jpg", isSSK: true },
        { code: "MUTIARA_AZZAHRA_MYTH", name: "My Passion: Muthe", tier: "Mythic", file: "MUTIARA_AZZAHRA_MYTH.jpg" },
        { code: "MUTIARA_AZZAHRA_LEGEND", name: "Cosmos: Muthe", tier: "Legend", file: "MUTIARA_AZZAHRA_LEGEND.jpg" },
        { code: "MUTIARA_AZZAHRA_RARE", name: "Snow & Gold: Muthe", tier: "Rare", file: "MUTIARA_AZZAHRA_RARE.jpg" },
        { code: "MUTIARA_AZZAHRA_UNCOMMON", name: "Trainee: Muthe (Default)", tier: "Uncommon", file: "MUTIARA_AZZAHRA_UNCOMMON.jpg" }
      ]
    };

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
    }

    function switchSubTab(tab) {
      document.getElementById('tabBtnArena').classList.toggle('active', tab === 'arena');
      document.getElementById('tabBtnSkin').classList.toggle('active', tab === 'skin');
      document.getElementById('viewArenaLobby').style.display = tab === 'arena' ? 'block' : 'none';
      document.getElementById('viewSkinEquip').style.display = tab === 'skin' ? 'block' : 'none';
      if (tab === 'skin') {
        loadCoreUserStatus();
        fetchEquippedSkinsFromPG();
      }
    }

    // ===== 3. STATUS & INVENTORY INTEGRATION =====
    let currentSession = getUserSession();
    let currentUserName = localStorage.getItem('beyonce_username') || 'Wota_' + currentSession.substring(0, 5);
    let currentUserAvatar = DEFAULT_TEMPLATE_PP;
    let currentUserSkinCode = "";
    let currentUserBorderCode = "";

    let activeRoom = null;
    let ws = null;
    let pendingWildCardId = null;
    let userInventory = new Set();
    let equippedSkinMap = JSON.parse(localStorage.getItem('uno_equipped_skins') || '{}');
    let currentMemberFilter = 'all';

    async function loadCoreUserStatus() {
      currentSession = getUserSession();
      const payload = {
        session_cookie: currentSession,
        session_key: currentSession,
        sessionCookie: currentSession
      };

      try {
        const res = await fetch(`${CORE_BACKEND_URL}/statuschat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          const json = await res.json();
          const p = json.data || json.profile;
          if (p) {
            const k = (p.kristal !== undefined) ? p.kristal : (p.kristal_count || 0);
            const c = (p.tbCoin !== undefined) ? p.tbCoin : (p.tb_coin !== undefined ? p.tb_coin : 0);
            const t = (p.onceToken !== undefined) ? p.onceToken : (p.token_once !== undefined ? p.token_once : 0);
            const ko = (p.kristalOmega !== undefined) ? p.kristalOmega : (p.kristal_omega !== undefined ? p.kristal_omega : 0);

            document.getElementById('valKristal').textContent = Number(k).toLocaleString('id-ID');
            document.getElementById('valGold').textContent = Number(c).toLocaleString('id-ID');
            document.getElementById('valToken').textContent = Number(t).toLocaleString('id-ID');
            document.getElementById('valKristalOmega').textContent = Number(ko).toLocaleString('id-ID');

            if (p.nama || p.username) currentUserName = p.nama || p.username;
            if (p.photoProfile || p.linkProfil) currentUserAvatar = p.photoProfile || p.linkProfil;

            let rawSkin = p.skin || (p.skins ? p.skins.border_skin : "");
            if (rawSkin) {
              let baseCode = String(rawSkin).replace(/BORDER_/i, "").replace(/CHAT_/i, "").replace(/\.jpg$/i, '').replace(/\.jpeg$/i, '').replace(/\.png$/i, '');
              currentUserSkinCode = "CHAT_" + baseCode;
              currentUserBorderCode = "BORDER_" + baseCode;
            }

            if (Array.isArray(p.inventory)) {
              p.inventory.forEach(item => {
                let code = String(item).toUpperCase().trim();
                userInventory.add(code);
                userInventory.add(code.replace(/^BORDER_/i, '').replace(/^CHAT_/i, ''));
              });
            }
          }
        }
      } catch (e) {
        console.warn("Core Backend /statuschat fetch warning:", e);
      }

      try {
        const resSkin = await fetch(`${CORE_BACKEND_URL}/statusskin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (resSkin.ok) {
          const skinData = await resSkin.json();
          const owned = skinData.owned_skins || skinData.skins || skinData.ownedSkins || skinData.data || [];
          if (Array.isArray(owned)) {
            owned.forEach(item => {
              let code = String(item).toUpperCase().trim();
              userInventory.add(code);
              userInventory.add(code.replace(/^BORDER_/i, '').replace(/^CHAT_/i, ''));
            });
          }
        }
      } catch (e2) {
        console.warn("Core Backend /statusskin fetch warning:", e2);
      }

      renderMemberSkins();
    }

    async function fetchEquippedSkinsFromPG() {
      try {
        const res = await fetch(`${GAME_ENGINE_URL}/api/uno/skin/${currentSession}`);
        if (res.ok) {
          const data = await res.json();
          if (data.equipped_skins) {
            equippedSkinMap = data.equipped_skins;
            localStorage.setItem('uno_equipped_skins', JSON.stringify(equippedSkinMap));
            renderMemberSkins();
          }
        }
      } catch (e) {
        console.warn("Equipped skins PG sync fallback:", e);
      }
    }

    // ===== RENDER MEMBER-GROUPED SKIN COLLECTION =====
    function renderMemberSkins() {
      const container = document.getElementById('memberGroupContainer');
      const search = (document.getElementById('skinSearch').value || '').toLowerCase();

      const uniqueMembersMap = {};
      Object.values(MASTER_UNO_REGISTRY).forEach(c => {
        if (!uniqueMembersMap[c.key]) {
          const skinList = ALL_SKINS_BY_MEMBER[c.key] || [
            { code: `${c.key}_LEGEND`, name: `${c.member.split(' ')[0]} Cosmos`, tier: 'Legend', file: `${c.key}_LEGEND.jpg` },
            { code: `${c.key}_MYTH`, name: `${c.member.split(' ')[0]} Mythic`, tier: 'Mythic', file: `${c.key}_MYTH.jpg` },
            { code: `${c.key}_RARE`, name: `${c.member.split(' ')[0]} Snow & Gold`, tier: 'Rare', file: `${c.key}_RARE.jpg` },
            { code: `${c.key}_UNCOMMON`, name: `${c.member.split(' ')[0]} Trainee (Default)`, tier: 'Uncommon', file: c.photo }
          ];

          uniqueMembersMap[c.key] = {
            key: c.key,
            name: c.member,
            role: `${c.color.toUpperCase()} ${c.display}`,
            cardTitle: `Kartu: ${c.color.toUpperCase()} [${c.display}]`,
            type: c.type,
            avatar: `../skin/${c.photo}`,
            skins: skinList
          };
        }
      });

      const memberList = Object.values(uniqueMembersMap);
      let filtered = memberList.filter(m => {
        const matchName = m.name.toLowerCase().includes(search) || m.role.toLowerCase().includes(search) || m.cardTitle.toLowerCase().includes(search);
        if (!matchName) return false;
        if (currentMemberFilter === 'all') return true;
        return m.type === currentMemberFilter;
      });

      container.innerHTML = filtered.map(m => {
        const currentActiveCode = equippedSkinMap[m.key] || `${m.key}_UNCOMMON`;
        const activeSkinObj = m.skins.find(s => s.code === currentActiveCode) || m.skins[m.skins.length - 1];

        const skinsHtml = m.skins.map(s => {
          const isActive = currentActiveCode === s.code;
          const isOwned = s.tier === 'Uncommon' || 
                          userInventory.has(s.code.toUpperCase()) || 
                          userInventory.has(s.code.replace(`${m.key}_`, '').toUpperCase()) ||
                          userInventory.has(`BORDER_${s.code.toUpperCase()}`) ||
                          userInventory.has(`CHAT_${s.code.toUpperCase()}`);
          
          let mediaHtml = '';
          const isOmegaTier = s.code.length === 4;

          if (isOmegaTier && isOwned) {
            mediaHtml = `
              <video src="../gacha-skin/preview_${s.code}.webm" autoplay loop muted playsinline class="skin-variant-video" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"></video>
              <img src="../skin_jpg/${s.code}.jpg" class="skin-variant-thumb" style="display:none;" onerror="this.src='../skin/ANGELINA_CHRISTY_UNCOMMON.jpg'">
              <div class="holo-sheen"></div>
            `;
          } else if (isOmegaTier && !isOwned) {
            mediaHtml = `<img src="../skin_jpg/${s.code}.jpg" class="skin-variant-thumb card-grey-filter" onerror="this.src='../skin/ANGELINA_CHRISTY_UNCOMMON.jpg'">`;
          } else {
            let thumbSrc = isOwned ? `../skin/${s.file}` : `../skin/${s.file.replace('.jpg', '_grey.jpg')}`;
            mediaHtml = `
              <img src="${thumbSrc}" class="skin-variant-thumb ${!isOwned ? 'card-grey-filter' : ''}" onerror="this.src='../skin/ANGELINA_CHRISTY_UNCOMMON.jpg'">
              ${(isOwned && (s.tier === 'Mythic' || s.tier === 'Legend')) ? '<div class="holo-sheen"></div>' : ''}
            `;
          }

          let actionBtn = '';
          if (isActive) {
            actionBtn = `<button class="btn-skin-action btn-skin-active" onclick="unequipMemberSkin('${m.key}')">&#10003; AKTIF (LEPAS)</button>`;
          } else if (isOwned) {
            actionBtn = `<button class="btn-skin-action btn-skin-equip" onclick="equipMemberSkin('${m.key}', '${s.code}')">PASANG</button>`;
          } else {
            actionBtn = `<button class="btn-skin-action btn-skin-locked" disabled>&#128274; TERKUNCI</button>`;
          }

          return `
            <div class="skin-variant-card ${isActive ? 'active-skin' : ''}">
              <div class="skin-variant-media-wrap">
                ${mediaHtml}
              </div>
              <div class="skin-variant-name" title="${s.name}">${s.name}</div>
              <div class="skin-variant-tier">${s.tier}</div>
              ${actionBtn}
            </div>
          `;
        }).join('');

        return `
          <div class="member-section-card">
            <div class="member-section-header">
              <div class="member-info-left">
                <img src="${m.avatar}" class="member-avatar-badge" onerror="this.src='../icon.png'" alt="${m.name}">
                <div class="member-title-box">
                  <div class="member-title-name">${m.name}</div>
                  <div class="member-title-role">&#127188; ${m.cardTitle}</div>
                </div>
              </div>
              <div class="member-active-badge">
                Skin Aktif: <strong>${activeSkinObj ? activeSkinObj.name : 'Trainee Default'}</strong>
              </div>
            </div>
            <div class="skin-variants-scroll">
              ${skinsHtml}
            </div>
          </div>
        `;
      }).join('');
    }

    async function equipMemberSkin(memberKey, skinCode) {
      equippedSkinMap[memberKey] = skinCode;
      localStorage.setItem('uno_equipped_skins', JSON.stringify(equippedSkinMap));
      renderMemberSkins();
      showToast(`\u2728 Skin ${skinCode} aktif untuk ${memberKey}!`);

      try {
        await fetch(`${GAME_ENGINE_URL}/api/uno/skin/equip`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: currentSession,
            member_key: memberKey,
            skin_code: skinCode
          })
        });
      } catch (e) {
        console.warn("Equip skin PG sync warning:", e);
      }
    }

    async function unequipMemberSkin(memberKey) {
      delete equippedSkinMap[memberKey];
      localStorage.setItem('uno_equipped_skins', JSON.stringify(equippedSkinMap));
      renderMemberSkins();
      showToast(`Kartu ${memberKey} kembali ke default Trainee.`);

      try {
        await fetch(`${GAME_ENGINE_URL}/api/uno/skin/equip`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: currentSession,
            member_key: memberKey,
            skin_code: ""
          })
        });
      } catch (e) {
        console.warn("Unequip skin PG sync warning:", e);
      }
    }

    function filterMemberCategory(cat, el) {
      document.querySelectorAll('#viewSkinEquip .filter-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      currentMemberFilter = cat;
      renderMemberSkins();
    }

    // =========================================================================
    // 4. GAME ENGINE
    // =========================================================================
    let localDeck = [];
    let localDiscardPile = [];
    let isLocalMode = false;
    let localPendingDraw = 0;
    let localTurnDirection = 1;
    let localCurrentColor = 'red';
    let turnTimerInterval = null;
    let turnSecondsLeft = 16;
    let forgotUnoTimer = null;

    function buildFullUnoDeck() {
      let deck = [];
      let cid = 1;
      Object.entries(MASTER_UNO_REGISTRY).forEach(([k, meta]) => {
        let count = (meta.type === 'number' && meta.value !== '0') ? 2 : (meta.type === 'wild' ? 2 : 1);
        for (let i = 0; i < count; i++) {
          deck.push({
            id: 'c_' + (cid++),
            registry_key: k,
            type: meta.type,
            color: meta.color,
            value: meta.value,
            display: meta.display,
            member: meta.member,
            skin_key: meta.key,
            photo: meta.photo,
            jiko: meta.jiko || ''
          });
        }
      });
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }

    function initLocalMatch(roomName, mode, teamFormat, mapTheme) {
      isLocalMode = true;
      localDeck = buildFullUnoDeck();
      localDiscardPile = [];
      localPendingDraw = 0;
      localTurnDirection = 1;
      teamFormat = teamFormat || 'solo';
      mapTheme = mapTheme || 'basic';

      let firstCard = localDeck.pop();
      while (firstCard.type !== 'number') {
        localDeck.unshift(firstCard);
        firstCard = localDeck.pop();
      }
      localDiscardPile.push(firstCard);
      localCurrentColor = firstCard.color;

      let players = [];
      if (teamFormat === 'duel') {
        players = [
          { session_id: currentSession, name: currentUserName, avatar: currentUserAvatar, is_bot: false, is_ready: true, uno_safe: false, team: 'red', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_1', name: 'Christy AI', avatar: '../skin/ANGELINA_CHRISTY_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'blue', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] }
        ];
      } else if (teamFormat === 'duo') {
        players = [
          { session_id: currentSession, name: currentUserName, avatar: currentUserAvatar, is_bot: false, is_ready: true, uno_safe: false, team: 'red', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_1', name: 'Freya AI (Musuh)', avatar: '../skin/FREYA_JAYAWARDANA_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'blue', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_2', name: 'Shani AI (Partner)', avatar: '../skin/SHANI_INDIRA_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'red', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_3', name: 'Zee AI (Musuh)', avatar: '../skin/AZIZI_ASSADEL_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'blue', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] }
        ];
      } else {
        players = [
          { session_id: currentSession, name: currentUserName, avatar: currentUserAvatar, is_bot: false, is_ready: true, uno_safe: false, team: 'solo', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_1', name: 'Freya AI', avatar: '../skin/FREYA_JAYAWARDANA_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'solo', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_2', name: 'Christy AI', avatar: '../skin/ANGELINA_CHRISTY_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'solo', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] },
          { session_id: 'bot_3', name: 'Zee AI', avatar: '../skin/AZIZI_ASSADEL_UNCOMMON.jpg', is_bot: true, is_ready: true, uno_safe: true, team: 'solo', hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()] }
        ];
      }

      activeRoom = {
        room_id: 'room_' + Math.random().toString(36).substring(2, 8),
        name: roomName || 'Arena UNO No Mercy',
        mode: mode || 'classic',
        team_format: teamFormat,
        map_theme: mapTheme,
        status: 'waiting',
        host_session: currentSession,
        host_name: currentUserName,
        current_turn_idx: 0,
        current_color: localCurrentColor,
        pending_draw_count: 0,
        draw_pile_count: localDeck.length,
        top_card: firstCard,
        players: players
      };

      // Apply map theme in weather engine
      if (weatherEngineInstance) {
        weatherEngineInstance.setTheme(mapTheme);
      }

      document.getElementById('lobby-screen').style.display = 'none';
      document.getElementById('lounge-screen').style.display = 'block';
      renderLoungeState();
    }

    // ===== LOBBY & ROOM CREATION =====
    async function fetchLobbyRooms() {
      try {
        const res = await fetch(`${GAME_ENGINE_URL}/api/uno/lobby`);
        if (res.ok) {
          const data = await res.json();
          renderLobbyRooms(data.rooms || []);
          return;
        }
      } catch(e) {}
      
      renderLobbyRooms([
        { room_id: 'room_solo_1', name: 'Arena No Mercy Solo (FFA)', host_name: 'Shani Natio', mode: 'classic', team_format: 'solo', map_theme: 'basic', player_count: 3, max_players: 4, room_type: 'public', wager: { amount: 0, currency: 'gold' } },
        { room_id: 'room_duo_2', name: 'Duo 2v2 Team Battle (Merah vs Biru)', host_name: 'Freya', mode: 'bet_battle', team_format: 'duo', map_theme: 'autumn', player_count: 2, max_players: 4, room_type: 'public', wager: { amount: 50, currency: 'gold' } },
        { room_id: 'room_trio_3', name: 'Trio 3v3 All-Star Omega (Hujan Badai)', host_name: 'Christy', mode: 'classic', team_format: 'trio', map_theme: 'rain', player_count: 4, max_players: 6, room_type: 'public', wager: { amount: 0, currency: 'gold' } }
      ]);
    }

    function renderLobbyRooms(rooms) {
      const container = document.getElementById('roomsContainer');
      container.innerHTML = rooms.map(r => `
        <div class="room-card">
          <div class="room-card-top">
            <div>
              <div class="room-card-name">${r.name}</div>
              <div class="room-card-host">Host: ${r.host_name}</div>
            </div>
            <div style="display: flex; gap: 4px; flex-direction: column; align-items: flex-end;">
              <span class="badge-mode badge-team">${(r.team_format || 'SOLO').toUpperCase()}</span>
              <span class="badge-mode badge-map">🗺️ ${(r.map_theme || 'CERAH').toUpperCase()}</span>
              <span class="badge-mode ${r.mode === 'bet_battle' ? 'badge-bet' : 'badge-classic'}">
                ${r.mode === 'bet_battle' ? '&#128176; ' + r.wager.amount + ' ' + r.wager.currency : '&#127918; Classic'}
              </span>
            </div>
          </div>
          <div class="room-meta">
            <span>&#128101; ${r.player_count}/${r.max_players} Pemain</span>
            <span>&#128274; ${r.room_type === 'private' ? 'Privat' : 'Publik'}</span>
          </div>
          <button class="btn-join" onclick="joinRoom('${r.room_id}', '${r.team_format || 'solo'}', '${r.map_theme || 'basic'}')">Gabung Kamar</button>
        </div>
      `).join('');
    }

    function filterLobby(mode, el) {
      document.querySelectorAll('#viewArenaLobby .filter-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      fetchLobbyRooms();
    }

    function openCreateModal() { document.getElementById('createModal').style.display = 'flex'; }
    function closeModal(id) { document.getElementById(id).style.display = 'none'; }
    function toggleBetSettings() {
      const isBet = document.getElementById('selectMode').value === 'bet_battle';
      document.getElementById('betConfigZone').style.display = isBet ? 'block' : 'none';
    }

    async function submitCreateRoom() {
      const name = document.getElementById('inputRoomName').value.trim() || 'Arena UNO No Mercy';
      const teamMode = document.getElementById('selectTeamMode').value;
      const mode = document.getElementById('selectMode').value;
      const mapTheme = document.getElementById('selectMapTheme').value || 'basic';
      closeModal('createModal');
      initLocalMatch(name, mode, teamMode, mapTheme);
    }

    function quickMatch() {
      initLocalMatch('Arena UNO Quick Match', 'classic', 'solo', 'basic');
    }

    function openCodeModal() {
      const code = prompt("Masukkan 6 Digit Kode Kamar UNO:");
      if (code && code.trim()) {
        joinRoom('room_' + code.trim().toLowerCase(), 'solo', 'basic');
      }
    }

    function joinRoom(roomId, teamFormat, mapTheme) {
      initLocalMatch('Arena UNO JKT48', 'classic', teamFormat || 'solo', mapTheme || 'basic');
    }

    function copyRoomCode() {
      const code = document.getElementById('loungeRoomCode').textContent;
      navigator.clipboard.writeText(code);
      showToast("\uD83D\uDCCB Kode kamar berhasil disalin!");
    }

    function renderLoungeState() {
      if (!activeRoom) return;
      document.getElementById('loungeTitle').textContent = activeRoom.name;
      document.getElementById('loungeSub').textContent = `Format ${(activeRoom.team_format || 'solo').toUpperCase()} \u2022 Mode ${activeRoom.mode} \u2022 Tema: ${(activeRoom.map_theme || 'basic').toUpperCase()} \u2022 Host: ${activeRoom.host_name}`;
      document.getElementById('loungeRoomCode').textContent = activeRoom.room_id ? activeRoom.room_id.substring(5).toUpperCase() : 'UNO48';

      const slots = document.getElementById('slotsContainer');
      let html = '';
      for (let i = 0; i < activeRoom.players.length; i++) {
        const p = activeRoom.players[i];
        if (p) {
          const borderSrc = (p.session_id === currentSession && currentUserBorderCode) ? `../skin/${currentUserBorderCode}.png` : '';
          const teamBadge = p.team === 'red' ? '<span class="slot-team-tag tag-red">🔴 TIM MERAH</span>' : (p.team === 'blue' ? '<span class="slot-team-tag tag-blue">🔵 TIM BIRU</span>' : '');
          html += `
            <div class="slot-card">
              ${teamBadge}
              <div class="avatar-wrapper">
                <img src="${p.avatar || DEFAULT_TEMPLATE_PP}" class="slot-avatar" onerror="this.src='${DEFAULT_TEMPLATE_PP}'" alt="avatar">
                ${borderSrc ? `<img src="${borderSrc}" class="slot-border-frame" onerror="this.style.display='none'">` : ''}
              </div>
              <div class="slot-name">${p.name} ${p.is_bot ? '&#129302;' : ''}</div>
              <span class="slot-status status-ready">SIAP</span>
            </div>
          `;
        }
      }
      slots.innerHTML = html;
    }

    function toggleReady() { forceStartGame(); }

    function forceStartGame() {
      if (!activeRoom) return;
      activeRoom.status = 'playing';
      activeRoom.current_turn_idx = 0;

      document.getElementById('lounge-screen').style.display = 'none';
      document.getElementById('game-arena').style.display = 'block';

      if (weatherEngineInstance) {
        weatherEngineInstance.start();
      }

      renderArenaState();
      startTurnTimer();
      showToast("🎮 Pertandingan Dimulai! Giliran Kamu!");
    }

    function addBotSlot() {
      if (activeRoom && activeRoom.players.length < 4) {
        const idx = activeRoom.players.length + 1;
        const botNames = ['Freya AI', 'Christy AI', 'Zee AI', 'Shani AI'];
        const botPhotos = ['FREYA_JAYAWARDANA_UNCOMMON.jpg', 'ANGELINA_CHRISTY_UNCOMMON.jpg', 'AZIZI_ASSADEL_UNCOMMON.jpg', 'SHANI_INDIRA_UNCOMMON.jpg'];
        activeRoom.players.push({
          session_id: 'bot_' + idx,
          name: botNames[idx - 1] || `Bot AI ${idx}`,
          avatar: `../skin/${botPhotos[idx - 1] || 'ANGELINA_CHRISTY_UNCOMMON.jpg'}`,
          is_bot: true,
          is_ready: true,
          uno_safe: true,
          team: (idx % 2 === 1 ? 'red' : 'blue'),
          hand: [localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop(), localDeck.pop()]
        });
        renderLoungeState();
        showToast(`Bot ${botNames[idx - 1]} bergabung ke kamar!`);
      } else {
        showToast("Slot kamar sudah penuh!");
      }
    }

    function leaveRoom() {
      if (ws) ws.close();
      clearInterval(turnTimerInterval);
      if (weatherEngineInstance) weatherEngineInstance.stop();
      document.getElementById('lounge-screen').style.display = 'none';
      document.getElementById('game-arena').style.display = 'none';
      document.getElementById('lobby-screen').style.display = 'block';
      fetchLobbyRooms();
    }

    // ===== 16-SECOND TURN COUNTDOWN TIMER =====
    function startTurnTimer() {
      clearInterval(turnTimerInterval);
      turnSecondsLeft = 16;
      updateTimerUI();

      turnTimerInterval = setInterval(() => {
        turnSecondsLeft--;
        updateTimerUI();

        if (turnSecondsLeft <= 0) {
          clearInterval(turnTimerInterval);
          autoPlayOnTimeout();
        }
      }, 1000);
    }

    function updateTimerUI() {
      const fill = document.getElementById('timerFill');
      const text = document.getElementById('timerText');
      if (fill && text) {
        const pct = (turnSecondsLeft / 16) * 100;
        fill.style.width = pct + '%';
        text.textContent = turnSecondsLeft + 's';
      }
    }

    function autoPlayOnTimeout() {
      if (activeRoom && activeRoom.status === 'playing') {
        if (activeRoom.current_turn_idx === 0) {
          const me = activeRoom.players[0];
          const top = activeRoom.top_card;
          let playable = me.hand.filter(c => c.color === 'wild' || c.type === 'wild' || c.color === activeRoom.current_color || (top && c.value === top.value));
          if (playable.length > 0) {
            const card = playable[0];
            const el = document.getElementById(`card_${card.id}`);
            playUserCardAction(card.id, el, (card.color === 'wild' ? 'red' : ''));
          } else {
            userDrawCard();
          }
        }
      }
    }

    // ===== ARENA RENDERING =====
    function renderArenaState() {
      document.getElementById('lounge-screen').style.display = 'none';
      document.getElementById('game-arena').style.display = 'block';

      const colorRing = document.getElementById('tableColorRing');
      colorRing.className = `color-ring ${activeRoom.current_color}`;
      document.getElementById('drawCount').textContent = activeRoom.draw_pile_count || (localDeck.length || '108');

      const stackBadge = document.getElementById('tableStackBadge');
      if (activeRoom.pending_draw_count > 0) {
        stackBadge.style.display = 'block';
        stackBadge.textContent = `\uD83D\uDD25 +${activeRoom.pending_draw_count} PENALTY STACK!`;
      } else {
        stackBadge.style.display = 'none';
      }

      if (activeRoom.top_card) {
        document.getElementById('discardPileZone').innerHTML = createRealUnoCardHtml(activeRoom.top_card, false, activeRoom.top_card.equippedCode || '');
      }

      const opponents = activeRoom.players.filter(p => p.session_id !== currentSession);
      const fanPositions = ['fanLeft', 'fanTop', 'fanRight'];
      const hudPositions = ['hudLeft', 'hudTop', 'hudRight'];
      const namePositions = ['nameLeft', 'nameTop', 'nameRight'];
      const cardsPositions = ['cardsLeft', 'cardsTop', 'cardsRight'];
      const avatarPositions = ['avatarLeft', 'avatarTop', 'avatarRight'];

      for (let i = 0; i < 3; i++) {
        const opp = opponents[i];
        const hudEl = document.getElementById(hudPositions[i]);
        if (opp) {
          hudEl.style.display = 'flex';
          document.getElementById(namePositions[i]).textContent = opp.name;
          const count = opp.hand ? opp.hand.length : 7;
          document.getElementById(cardsPositions[i]).textContent = `${count} Kartu`;
          document.getElementById(avatarPositions[i]).src = opp.avatar || DEFAULT_TEMPLATE_PP;
          hudEl.classList.toggle('active-turn', activeRoom.current_turn_idx === (i + 1));

          const fanEl = document.getElementById(fanPositions[i]);
          let fanHtml = '';
          const showCount = Math.min(count, 8);
          for (let k = 0; k < showCount; k++) {
            fanHtml += `<div class="mini-card-back"></div>`;
          }
          fanEl.innerHTML = fanHtml;
        } else {
          hudEl.style.display = 'none';
        }
      }

      const me = activeRoom.players.find(p => p.session_id === currentSession);
      const handZone = document.getElementById('userHandZone');
      if (me && me.hand) {
        const topCard = activeRoom.top_card;
        const isMyTurn = (activeRoom.current_turn_idx === 0);
        handZone.innerHTML = me.hand.map(c => {
          let isPlayable = false;
          if (isMyTurn) {
            if (activeRoom.pending_draw_count > 0) {
              isPlayable = ["draw_2", "draw_4", "wild_draw_6", "wild_draw_10", "wild_reverse_4"].includes(c.value);
            } else {
              isPlayable = (c.color === "wild" || c.type === "wild" || c.color === activeRoom.current_color || (topCard && c.value === topCard.value));
            }
          }
          const userEquipped = equippedSkinMap[c.skin_key] || '';
          return createRealUnoCardHtml(c, isPlayable, userEquipped);
        }).join('');
        
        attachCardGestureAndTiltListeners();
      }
    }

    // =========================================================================
    // 5. DOM ATTRIBUTES & CARD CREATOR WITH 3D HOLOGRAPHIC TILT & GESTURES
    // =========================================================================
    function createRealUnoCardHtml(card, isPlayable, equippedCode) {
      const displayVal = card.display || card.value.toUpperCase();
      const clickAttr = isPlayable ? `onclick="userClickCard('${card.id}', '${card.type}', this)"` : '';
      const playableClass = isPlayable ? 'playable' : '';

      let tier = "UNCOMMON";
      let subtier = "TRAINEE";
      let isHolo = false;
      let mediaHtml = '';

      if (equippedCode && equippedCode.length === 4) {
        tier = "OMEGA_SPESIAL";
        subtier = (equippedCode in SkinDatabase.OMEGA_SPESIAL) ? SkinDatabase.OMEGA_SPESIAL[equippedCode].subtier : "SSK";
        isHolo = true;
        mediaHtml = `<video src="../gacha-skin/preview_${equippedCode}.webm" autoplay loop muted playsinline class="card-member-video" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"></video>
                     <img src="../skin_jpg/${equippedCode}.jpg" class="card-member-photo" style="display:none;" onerror="this.src='../skin/${card.photo || 'ANGELINA_CHRISTY_UNCOMMON.jpg'}'">`;
      } else if (equippedCode && equippedCode.includes('MYTH')) {
        tier = "MYTH";
        if (equippedCode.includes('FIONY')) subtier = "LOVE_WAR";
        else if (equippedCode.includes('FENI')) subtier = "MY_PASSION";
        else if (equippedCode.includes('ADELINE')) subtier = "HIGH_DREAM";
        else subtier = "LAST_DRESS";
        isHolo = true;
        mediaHtml = `<img src="../skin/${equippedCode}.jpg" class="card-member-photo" onerror="this.src='../skin/${card.photo || 'ANGELINA_CHRISTY_UNCOMMON.jpg'}'" alt="${card.member}">`;
      } else if (equippedCode && equippedCode.includes('LEGEND')) {
        tier = "LEGEND";
        subtier = "COSMOS";
        isHolo = true;
        mediaHtml = `<img src="../skin/${equippedCode}.jpg" class="card-member-photo" onerror="this.src='../skin/${card.photo || 'ANGELINA_CHRISTY_UNCOMMON.jpg'}'" alt="${card.member}">`;
      } else if (equippedCode && equippedCode.includes('RARE')) {
        tier = "RARE";
        subtier = "SNOW_GOLD";
        mediaHtml = `<img src="../skin/${equippedCode}.jpg" class="card-member-photo" onerror="this.src='../skin/${card.photo || 'ANGELINA_CHRISTY_UNCOMMON.jpg'}'" alt="${card.member}">`;
      } else {
        mediaHtml = `<img src="../skin/${card.photo || 'ANGELINA_CHRISTY_UNCOMMON.jpg'}" class="card-member-photo" onerror="this.src='../skin/ANGELINA_CHRISTY_UNCOMMON.jpg'" alt="${card.member}">`;
      }

      return `
        <div class="uno-card ${card.color} ${playableClass}" ${clickAttr} id="card_${card.id}" data-tier="${tier}" data-subtier="${subtier}" data-kode="${equippedCode || ''}" title="${card.member || 'Member'} (${displayVal})">
          ${isHolo ? '<div class="holo-sheen holo-foil"></div>' : ''}
          <div class="card-corner card-corner-top">${displayVal}</div>
          <div class="card-center-oval">
            ${mediaHtml}
          </div>
          <div class="card-corner card-corner-bot">${displayVal}</div>
        </div>
      `;
    }

    function attachCardGestureAndTiltListeners() {
      document.querySelectorAll('#userHandZone .uno-card').forEach(el => {
        // MODULE 18: Mobile Swipe-to-Throw
        let startY = 0;
        el.addEventListener('touchstart', (e) => {
          startY = e.touches[0].clientY;
          if (navigator.vibrate) navigator.vibrate(15);
        }, { passive: true });

        el.addEventListener('touchmove', (e) => {
          const deltaY = e.touches[0].clientY - startY;
          if (deltaY < 0) {
            el.style.transform = `translate3d(0, ${deltaY}px, 0) scale(1.1)`;
          }
        }, { passive: true });

        el.addEventListener('touchend', (e) => {
          const deltaY = e.changedTouches[0].clientY - startY;
          if (deltaY < -40) {
            el.click();
          } else {
            el.style.transform = '';
          }
        });

        // MODULE 15: 3D Holographic Mouse Tilt
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rx = -(y / rect.height) * 15;
          const ry = (x / rect.width) * 15;
          el.style.setProperty('--rx', `${rx}deg`);
          el.style.setProperty('--ry', `${ry}deg`);
        });

        el.addEventListener('mouseleave', () => {
          el.style.setProperty('--rx', `0deg`);
          el.style.setProperty('--ry', `0deg`);
        });
      });
    }

    function animateCardToCenter(sourceEl, cardObj, tierData, onComplete) {
      if (typeof cardObj === 'function') {
        onComplete = cardObj;
        cardObj = null;
        tierData = null;
      } else if (typeof tierData === 'function') {
        onComplete = tierData;
        tierData = cardObj;
        cardObj = null;
      }

      if (!sourceEl) {
        if (typeof onComplete === 'function') onComplete();
        return;
      }

      const rect = sourceEl.getBoundingClientRect();
      const centerTable = document.getElementById('center-table');
      const tableRect = centerTable ? centerTable.getBoundingClientRect() : { left: window.innerWidth / 2 - 50, top: window.innerHeight / 2 - 70, width: 100, height: 140 };

      const targetX = (tableRect.left + tableRect.width / 2) - (rect.left + rect.width / 2);
      const targetY = (tableRect.top + tableRect.height / 2) - (rect.top + rect.height / 2);

      let clone;
      if (sourceEl.classList && sourceEl.classList.contains('uno-card')) {
        clone = sourceEl.cloneNode(true);
        sourceEl.style.opacity = '0';
      } else {
        // Source is a player HUD wrapper -> NEVER HIDE and NEVER CLONE the HUD element!
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = createRealUnoCardHtml(cardObj || {
          id: 'thrown_' + Math.random().toString(36).substring(2, 6),
          color: 'red',
          value: '0',
          display: '0',
          member: 'Member',
          photo: 'ANGELINA_CHRISTY_UNCOMMON.jpg',
          skin_key: ''
        }, false, cardObj ? (cardObj.equippedCode || '') : '');
        clone = tempDiv.firstElementChild;
      }

      clone.classList.add('card-thrown-gpu');
      if (tierData && tierData.trailClass) {
        clone.classList.add(tierData.trailClass);
      }
      if (tierData && tierData.staticStars) {
        const starFrame = document.createElement('div');
        starFrame.className = 'legend-static-stars';
        clone.appendChild(starFrame);
      }

      clone.style.left = rect.left + 'px';
      clone.style.top = rect.top + 'px';
      clone.style.zIndex = '999999';
      clone.style.position = 'fixed';
      clone.style.pointerEvents = 'none';
      clone.style.willChange = 'transform';
      document.body.appendChild(clone);

      if (tierData && tierData.hasTrail) {
        spawnFlightTrailVFX(rect.left + rect.width / 2, rect.top + rect.height / 2, tableRect.left + tableRect.width / 2, tableRect.top + tableRect.height / 2, tierData);
      }

      requestAnimationFrame(() => {
        clone.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(0.9) rotate(${Math.random() * 16 - 8}deg)`;
      });

      setTimeout(() => {
        try { clone.remove(); } catch(e) {}
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 550);
    }

    function animateCardDrawFlight(targetElement, onComplete) {
      triggerAudio("sfx_card_flip_normal.mp3");
      const deckEl = document.getElementById('drawDeckPile');
      if (!deckEl || !targetElement) { if (onComplete) onComplete(); return; }

      const deckRect = deckEl.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();

      const clone = document.createElement('div');
      clone.className = 'mini-card-back card-thrown-gpu';
      clone.style.left = deckRect.left + 'px';
      clone.style.top = deckRect.top + 'px';
      clone.style.willChange = 'transform';
      document.body.appendChild(clone);

      const targetX = (targetRect.left + targetRect.width / 2) - (deckRect.left + 12);
      const targetY = (targetRect.top + targetRect.height / 2) - (deckRect.top + 18);

      requestAnimationFrame(() => {
        clone.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(0.85) rotate(12deg)`;
      });

      setTimeout(() => {
        clone.remove();
        if (onComplete) onComplete();
      }, 550);
    }

    // ACTION SCENE CINEMATICS
    function animateSkipVictim(hudId) {
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
      triggerAudio("sfx_white_explosion_birds.mp3");
      const hud = document.getElementById(hudId);
      if (!hud) return;
      hud.classList.add('shake-violent');
      
      const stamp = document.createElement('div');
      stamp.className = 'skip-smash-overlay';
      stamp.textContent = '🚫';
      hud.appendChild(stamp);

      setTimeout(() => {
        stamp.remove();
        hud.classList.remove('shake-violent');
      }, 1800);
    }

    function animateReverseScene() {
      triggerAudio("sfx_void_glide.mp3");
      const container = document.getElementById('reverseIndicator');
      container.innerHTML = '<div class="reverse-neon-spin">🔁</div>';
      setTimeout(() => container.innerHTML = '', 1200);
    }

    function animateDrawPunishment(targetHudId, amount, onComplete) {
      if (navigator.vibrate) navigator.vibrate([40, 60, 40, 60]);
      document.body.classList.add('screen-flash-punishment');
      setTimeout(() => document.body.classList.remove('screen-flash-punishment'), amount * 120 + 200);

      let fired = 0;
      const interval = setInterval(() => {
        fired++;
        const hud = document.getElementById(targetHudId);
        animateCardDrawFlight(hud, null);
        triggerAudio("sfx_fire_dash.mp3");

        if (fired >= amount) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 100);
    }

    function animateGlobalShuffle(onComplete) {
      triggerAudio("sfx_massive_ssk_explosion.mp3");
      const blackHole = document.getElementById('blackHoleIndicator');
      blackHole.innerHTML = '<div class="black-hole-vortex"></div>';

      document.querySelectorAll('#userHandZone .uno-card').forEach(c => {
        c.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s';
        c.style.transform = 'translate3d(0, -300px, 0) scale(0) rotate(1080deg)';
        c.style.opacity = '0';
      });

      setTimeout(() => {
        blackHole.innerHTML = '';
        if (onComplete) onComplete();
      }, 1500);
    }

    // ===== USER TURN ACTIONS =====
    function userClickCard(cardId, cardType, el) {
      if (cardType === 'wild') {
        pendingWildCardId = cardId;
        document.getElementById('colorModal').style.display = 'flex';
        return;
      }
      playUserCardAction(cardId, el, '');
    }

    function selectWildColor(color) {
      document.getElementById('colorModal').style.display = 'none';
      if (pendingWildCardId) {
        const el = document.getElementById(`card_${pendingWildCardId}`);
        playUserCardAction(pendingWildCardId, el, color);
        pendingWildCardId = null;
      }
    }

    function playUserCardAction(cardId, cardElement, chosenColor) {
      const me = activeRoom.players[0];
      const card = me.hand.find(c => c.id === cardId);
      if (!card) return;

      const userEquippedCode = equippedSkinMap[card.skin_key] || '';
      card.equippedCode = userEquippedCode;

      const tierData = getSkinVfxConfig(cardElement, card);
      triggerAudio(tierData.throw_sfx);

      animateCardToCenter(cardElement, card, tierData, () => {
        me.hand = me.hand.filter(c => c.id !== cardId);
        activeRoom.top_card = card;
        localDiscardPile.push(card);

        let newCol = chosenColor || card.color;
        if (newCol !== 'wild') {
          activeRoom.current_color = newCol;
          triggerColorSupernovaWave(newCol);
        }

        triggerSkinLandingVFX(card, tierData);
        applyCardRules(card, me, 0);

        if (me.hand.length === 0) {
          triggerTheatricalPostMatch(true);
          return;
        }

        // 3-second Forgot UNO Penalty Catch System
        if (me.hand.length === 1 && !me.uno_safe) {
          forgotUnoTimer = setTimeout(() => {
            if (!me.uno_safe) {
              animateDrawPunishment('hudBottom', 2, () => {
                me.hand.push(localDeck.pop(), localDeck.pop());
                renderArenaState();
                showToast("⚠️ Penalti Lupa Call UNO! +2 Kartu!");
              });
            }
          }, 3000);
        }

        renderArenaState();
        triggerBotTurn();
      });
    }

    // =========================================================================
    // STRICT SKIN VFX & SFX DISPATCHER (ZERO PARTICLES FOR UNCOMMON & RARE)
    // =========================================================================

function triggerColorSupernovaWave(color) {
      const colorsMap = { red: '#e74c3c', blue: '#0984e3', green: '#00b894', yellow: '#fbc531' };
      const col = colorsMap[color] || '#00d2ff';
      const wave = document.createElement('div');
      wave.className = 'color-wave-blast';
      wave.style.setProperty('--wave-col', col);
      wave.style.left = 'calc(50% - 40px)';
      wave.style.top = 'calc(50% - 40px)';
      document.getElementById('game-arena').appendChild(wave);
      setTimeout(() => wave.remove(), 850);
    }

    function applyCardRules(card, player, playerIdx) {
      const v = card.value;
      if (v === 'draw_2') activeRoom.pending_draw_count += 2;
      else if (v === 'draw_4') activeRoom.pending_draw_count += 4;
      else if (v === 'wild_draw_6') activeRoom.pending_draw_count += 6;
      else if (v === 'wild_draw_10') activeRoom.pending_draw_count += 10;
      else if (v === 'wild_reverse_4') {
        localTurnDirection *= -1;
        activeRoom.pending_draw_count += 4;
        animateReverseScene();
      }
      else if (v === 'reverse') {
        localTurnDirection *= -1;
        animateReverseScene();
      }
      else if (v === 'skip' || v === 'skip_everyone') {
        const nextIdx = (playerIdx + 1) % activeRoom.players.length;
        const hudMap = ['hudLeft', 'hudTop', 'hudRight'];
        animateSkipVictim(hudMap[nextIdx - 1] || 'hudLeft');
      }
      else if (v === 'wild_shuffle_hands') {
        animateGlobalShuffle();
      }
      else if (v === 'discard_all') {
        player.hand = player.hand.filter(c => c.color !== card.color);
      }
    }

    function userDrawCard() {
      if (activeRoom.current_turn_idx !== 0) return;
      const me = activeRoom.players[0];
      const targetEl = document.getElementById('userHandZone');

      if (activeRoom.pending_draw_count > 0) {
        animateDrawPunishment('userHandZone', activeRoom.pending_draw_count, () => {
          for (let i = 0; i < activeRoom.pending_draw_count; i++) {
            if (localDeck.length === 0) localDeck = buildFullUnoDeck();
            me.hand.push(localDeck.pop());
          }
          activeRoom.pending_draw_count = 0;
          renderArenaState();
          triggerBotTurn();
        });
      } else {
        animateCardDrawFlight(targetEl, () => {
          if (localDeck.length === 0) localDeck = buildFullUnoDeck();
          me.hand.push(localDeck.pop());
          showToast("Kamu menarik 1 kartu dari Draw Deck!");
          renderArenaState();
          triggerBotTurn();
        });
      }
    }

    // ===== BOT TURN AI ENGINE WITH FLIGHT ANIMATION =====
    function triggerBotTurn() {
      startTurnTimer();

      if (activeRoom.players.length === 2) {
        activeRoom.current_turn_idx = 1;
        renderArenaState();
        setTimeout(() => {
          runBotAction(1, () => {
            activeRoom.current_turn_idx = 0;
            renderArenaState();
            startTurnTimer();
            showToast("\uD83C\uDFB2 Giliran Kamu Sekarang!");
          });
        }, 1400);
      } else {
        activeRoom.current_turn_idx = 1;
        renderArenaState();
        setTimeout(() => {
          runBotAction(1, () => {
            activeRoom.current_turn_idx = 2;
            renderArenaState();
            setTimeout(() => {
              runBotAction(2, () => {
                activeRoom.current_turn_idx = 3;
                renderArenaState();
                setTimeout(() => {
                  runBotAction(3, () => {
                    activeRoom.current_turn_idx = 0;
                    renderArenaState();
                    startTurnTimer();
                    showToast("\uD83C\uDFB2 Giliran Kamu Sekarang!");
                  });
                }, 1200);
              });
            }, 1200);
          });
        }, 1200);
      }
    }

    function runBotAction(botIdx, callback) {
      const bot = activeRoom.players[botIdx];
      if (!bot) { callback(); return; }

      const hudMap = ['hudLeft', 'hudTop', 'hudRight'];
      const targetHudId = hudMap[botIdx - 1] || 'hudLeft';
      const hudEl = document.getElementById(targetHudId);

      const playableIdx = bot.hand.findIndex(c => 
        c.color === activeRoom.current_color || 
        c.color === 'wild' || 
        c.value === activeRoom.top_card.value
      );

      if (playableIdx !== -1) {
        const card = bot.hand.splice(playableIdx, 1)[0];
        activeRoom.top_card = card;
        localDiscardPile.push(card);

        if (card.color !== 'wild') activeRoom.current_color = card.color;
        else activeRoom.current_color = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random()*4)];

        const botEquippedCode = equippedSkinMap[card.skin_key] || '';
        card.equippedCode = botEquippedCode;
        const botTierData = getSkinVfxConfig(null, card);

        triggerAudio(botTierData.throw_sfx);
        animateCardToCenter(hudEl, card, botTierData, () => {
          triggerSkinLandingVFX(card, botTierData);
          applyCardRules(card, bot, botIdx);

          if (bot.hand.length === 1) {
            triggerAudio("sfx_white_explosion_birds.mp3");
            showToast(`📢 ${bot.name} MEMANGGIL UNO!`);
          } else if (bot.hand.length === 0) {
            triggerTheatricalPostMatch(false);
            return;
          }

          renderArenaState();
          callback();
        });
      } else {
        animateCardDrawFlight(hudEl, () => {
          if (activeRoom.pending_draw_count > 0) {
            for (let i = 0; i < activeRoom.pending_draw_count; i++) {
              if (localDeck.length === 0) localDeck = buildFullUnoDeck();
              bot.hand.push(localDeck.pop());
            }
            showToast(`${bot.name} terkena +${activeRoom.pending_draw_count} penalti kartu!`);
            activeRoom.pending_draw_count = 0;
          } else {
            if (localDeck.length === 0) localDeck = buildFullUnoDeck();
            bot.hand.push(localDeck.pop());
            showToast(`${bot.name} menarik 1 kartu.`);
          }
          renderArenaState();
          callback();
        });
      }
    }

    function userCallUno() {
      const me = activeRoom.players[0];
      me.uno_safe = true;
      if (forgotUnoTimer) clearTimeout(forgotUnoTimer);
      triggerAudio("sfx_white_explosion_birds.mp3");
      showToast("\uD83D\uDCE2 KAMU MEMANGGIL UNO!");
      triggerEmote('📣');
    }

    // =========================================================================
    // 6. OBJECT-POOLED MASTER PARTICLE & VFX ENGINE (TRAIL & IMPACT)
    // =========================================================================

function initStardustBackground() {
      const container = document.getElementById('stardustContainer');
      if (!container) return;
      let html = '';
      for (let i = 0; i < 45; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1.5;
        const dur = (Math.random() * 3 + 2).toFixed(1);
        const delay = (Math.random() * 4).toFixed(1);
        html += `<div class="star-dot" style="left:${x}%; top:${y}%; width:${size}px; height:${size}px; --dur:${dur}s; animation-delay:${delay}s;"></div>`;
      }
      container.innerHTML = html;
    }

    // =========================================================================
    // 7. THEATRICAL POST-MATCH SCREEN & EMOTES
    // =========================================================================
    function triggerTheatricalPostMatch(isWin) {
      const screen = document.getElementById('post-match-screen');
      const title = document.getElementById('postMatchTitle');
      title.className = `post-match-title ${isWin ? 'title-victory' : 'title-defeat'}`;
      title.textContent = isWin ? 'VICTORY' : 'DEFEAT';

      document.getElementById('podiumName1').textContent = isWin ? currentUserName : 'Freya AI';
      document.getElementById('podiumName2').textContent = isWin ? 'Freya AI' : currentUserName;
      document.getElementById('prizeDisplayText').textContent = isWin ? '+150 Gold Winnings!' : '-50 Gold (Rungkad)';

      screen.style.display = 'flex';
      triggerAudio(isWin ? "sfx_white_explosion_birds.mp3" : "sfx_black_petal_drop.mp3");
    }

    function closePostMatch() {
      document.getElementById('post-match-screen').style.display = 'none';
      exitArenaToLobby();
    }

    function toggleEmoteMenu() {
      const menu = document.getElementById('emoteMenu');
      menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }

    function triggerEmote(emoji) {
      toggleEmoteMenu();
      const el = document.createElement('div');
      el.className = 'floating-emote';
      el.textContent = emoji;
      el.style.left = '80px';
      el.style.bottom = '80px';
      document.getElementById('game-arena').appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }

    function sendChat() {
      const input = document.getElementById('chatInput');
      const text = input.value.trim();
      if (text) {
        appendChatMessage({ name: currentUserName, text: text, time: 'Sekarang' });
        input.value = '';
      }
    }

    function sendIngameChat() {
      const input = document.getElementById('ingameChatInput');
      const text = input.value.trim();
      if (text) {
        appendChatMessage({ name: currentUserName, text: text, time: 'Sekarang' });
        input.value = '';
      }
    }

    function appendChatMessage(chat) {
      const bubbleHtml = `
        <div class="chat-bubble-wrap">
          <div class="chat-avatar-mini">
            <img src="${chat.avatar || DEFAULT_TEMPLATE_PP}" onerror="this.src='${DEFAULT_TEMPLATE_PP}'">
          </div>
          <div class="chat-content-box">
            <strong>${chat.name}</strong>
            ${chat.text}
            <span>${chat.time || ''}</span>
          </div>
        </div>
      `;
      const msgs = document.getElementById('chatMsgs');
      if (msgs) { msgs.insertAdjacentHTML('beforeend', bubbleHtml); msgs.scrollTop = msgs.scrollHeight; }
      const inMsgs = document.getElementById('ingameChatMsgs');
      if (inMsgs) { inMsgs.insertAdjacentHTML('beforeend', bubbleHtml); inMsgs.scrollTop = inMsgs.scrollHeight; }
    }

    function toggleIngameChat() {
      const drawer = document.getElementById('ingameChatDrawer');
      drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
    }

    function showToast(text) {
      const banner = document.getElementById('jiko-banner');
      banner.textContent = text;
      banner.classList.add('jiko-show');
      setTimeout(() => banner.classList.remove('jiko-show'), 2500);
    }

    function exitArenaToLobby() {
      if (ws) ws.close();
      clearInterval(turnTimerInterval);
      if (weatherEngineInstance) weatherEngineInstance.stop();
      document.getElementById('game-arena').style.display = 'none';
      document.getElementById('lounge-screen').style.display = 'none';
      document.getElementById('lobby-screen').style.display = 'block';
      fetchLobbyRooms();
      loadCoreUserStatus();
    }

    // =========================================================================
    // 8. ASSET PRELOADER (MODULE 12) & LIFECYCLE
    // =========================================================================
    const TRIVIA_LIST = [
      '"Peduli dan berbaik hati, siapakah dia? Christy!"',
      '"Semanis cokelat, selembut sutra. Halo semuanya, aku Shani"',
      '"Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna... Gracia!"',
      '"Gadis koleris yang suka berimajinasi, terangi harimu dengan senyuman karamelku... Freya!"',
      '"Si gadis tomboy yang semangatnya meletup-letup. Halo semuanya, aku Zee!"'
    ];

    function initApp() {
      try { initVFXCanvas(); } catch (e) { console.warn("VFX canvas init:", e); }
      try { initStardustBackground(); } catch (e) { console.warn("Stardust init:", e); }
      try { loadCoreUserStatus(); } catch (e) { console.warn("Core status init:", e); }
      try { fetchEquippedSkinsFromPG(); } catch (e) { console.warn("Skins init:", e); }
      try { fetchLobbyRooms(); } catch (e) { console.warn("Lobby rooms init:", e); }
      try { setInterval(loadCoreUserStatus, 15000); } catch (e) {}

      try {
        weatherEngineInstance = new WeatherEngine('weather-canvas');
      } catch (e) { console.warn("WeatherEngine init:", e); }

      // Asset Preloader Simulation with failsafe dismissal
      let progress = 0;
      const fill = document.getElementById('loaderFill');
      const pct = document.getElementById('loaderPercent');
      const trivia = document.getElementById('loaderTrivia');

      let triviaTimer = null;
      if (trivia) {
        triviaTimer = setInterval(() => {
          trivia.textContent = TRIVIA_LIST[Math.floor(Math.random() * TRIVIA_LIST.length)];
        }, 2000);
      }

      function dismissLoader() {
        const ls = document.getElementById('loading-screen');
        if (ls && ls.style.display !== 'none') {
          if (fill) fill.style.width = '100%';
          if (pct) pct.textContent = '100';
          if (triviaTimer) clearInterval(triviaTimer);
          ls.style.opacity = '0';
          setTimeout(() => { ls.style.display = 'none'; }, 400);
        }
      }

      const loaderInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 25) + 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(loaderInterval);
          if (triviaTimer) clearInterval(triviaTimer);
          if (fill) fill.style.width = '100%';
          if (pct) pct.textContent = '100';
          setTimeout(dismissLoader, 200);
        } else {
          if (fill) fill.style.width = progress + '%';
          if (pct) pct.textContent = progress;
        }
      }, 60);

      // Failsafe auto-dismiss after 1.2s max under any condition
      setTimeout(dismissLoader, 1200);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }

    window.addEventListener('resize', () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });