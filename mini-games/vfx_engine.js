/* =========================================================================
   VFX ENGINE (SkinDatabase, Web Audio SFX Generator, WeatherEngine, Canvas Particle Pool)
   ========================================================================= */

const SkinDatabase = {
      // 1. TIER: OMEGA_SPESIAL (BASE / SPESIAL)
      "OMEGA_SPESIAL": {
        "DKTY": {
          tier: "OMEGA_SPESIAL",
          subtier: "SPESIAL",
          kode: "DKTY",
          name: "Dedek Kitty (Spesial)",
          trailColor: "rgba(255, 255, 255, 0.95)",
          particleType: "sea_water",
          particleColor: "#00f2fe",
          throw_sfx: "sfx_holy_trail_water.mp3",
          impact_sfx: "sfx_white_explosion_birds.mp3",
          screenFlash: "screen-flash-white",
          extraProp: "propWings",
          jiko: "Peduli dan berbaik hati, siapakah dia? Christy!"
        },
        "CSHN": {
          tier: "OMEGA_SPESIAL",
          subtier: "SPESIAL",
          kode: "CSHN",
          name: "Ci Shani (Spesial)",
          trailColor: "rgba(255, 255, 255, 0.95)",
          particleType: "sea_water",
          particleColor: "#00f2fe",
          throw_sfx: "sfx_holy_trail_water.mp3",
          impact_sfx: "sfx_white_explosion_birds.mp3",
          screenFlash: "screen-flash-white",
          extraProp: "propRing",
          jiko: "Semanis cokelat, selembut sutra. Halo semuanya, aku Shani"
        },
        "CGRC": {
          tier: "OMEGA_SPESIAL",
          subtier: "SPESIAL",
          kode: "CGRC",
          name: "Ci Gre (Spesial)",
          trailColor: "rgba(255, 255, 255, 0.95)",
          particleType: "sea_water",
          particleColor: "#00f2fe",
          throw_sfx: "sfx_holy_trail_water.mp3",
          impact_sfx: "sfx_white_explosion_birds.mp3",
          screenFlash: "screen-flash-white",
          extraProp: "propFlower",
          jiko: "Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia, always smile! Sekali lagi? Gracia!"
        },
        "CFNI": {
          tier: "OMEGA_SPESIAL",
          subtier: "SPESIAL",
          kode: "CFNI",
          name: "Ci Feni (Spesial)",
          trailColor: "rgba(255, 255, 255, 0.95)",
          particleType: "sea_water",
          particleColor: "#00f2fe",
          throw_sfx: "sfx_holy_trail_water.mp3",
          impact_sfx: "sfx_white_explosion_birds.mp3",
          screenFlash: "screen-flash-white",
          extraProp: "propChoco",
          jiko: "Matahari yang indah yang akan selalu memberikan kehangatan setiap harinya. Halo, aku Feni!"
        },
        "CELI": {
          tier: "OMEGA_SPESIAL",
          subtier: "SPESIAL",
          kode: "CELI",
          name: "Ci Eli (Spesial)",
          trailColor: "rgba(255, 255, 255, 0.95)",
          particleType: "sea_water",
          particleColor: "#00f2fe",
          throw_sfx: "sfx_holy_trail_water.mp3",
          impact_sfx: "sfx_white_explosion_birds.mp3",
          screenFlash: "screen-flash-white",
          extraProp: "propWater",
          jiko: "Bagai lembayung senja, dengan energi kegembiraanku, Aku akan menghangatkan suasana. Halo, aku Eli!"
        },

        // 2. TIER: OMEGA_SPESIAL (FULL COLOR)
        "FAAZ": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FAAZ", solidColor: "#ff4757", trailColor: "#ff4757", particleColor: "#ff4757", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Si gadis tomboy yang semangatnya meletup-letup. Halo semuanya, aku Zee!" },
        "FFNI": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FFNI", solidColor: "#f1c40f", trailColor: "#f1c40f", particleColor: "#f1c40f", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Matahari yang indah yang akan selalu memberikan kehangatan setiap harinya. Halo, aku Feni!" },
        "FSHN": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FSHN", solidColor: "#9b59b6", trailColor: "#9b59b6", particleColor: "#9b59b6", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Semanis cokelat, selembut sutra. Halo semuanya, aku Shani" },
        "FJIN": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FJIN", solidColor: "#27ae60", trailColor: "#27ae60", particleColor: "#27ae60", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Seperti bintang kejora yang bersinar terang, halo aku Jinan!" },
        "FGRC": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FGRC", solidColor: "#3498db", trailColor: "#3498db", particleColor: "#3498db", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia, always smile! Sekali lagi? Gracia!" },
        "FMAR": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FMAR", solidColor: "#fd79a8", trailColor: "#fd79a8", particleColor: "#fd79a8", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Seperti pizza yang selalu dinanti-nantikan semua orang, selalu nantikan aku, ya? Halo, aku Marsha!" },
        "FFIO": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FFIO", solidColor: "#f8f9fa", trailColor: "#f8f9fa", particleColor: "#f8f9fa", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Seperti simfoni yang menenangkan hati. Halo, aku Fiony!" },
        "FCHR": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FCHR", solidColor: "#e17055", trailColor: "#e17055", particleColor: "#e17055", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Peduli dan berbaik hati, siapakah dia? Christy!" },
        "FCHK": { tier: "OMEGA_SPESIAL", subtier: "FULL_COLOR", kode: "FCHK", solidColor: "#00cec9", trailColor: "#00cec9", particleColor: "#00cec9", throw_sfx: "sfx_color_swoosh.mp3", impact_sfx: "sfx_solid_color_burst.mp3", jiko: "Meskipun kadang-kadang menyebalkan, tapi aku selalu dirindukan. Panggil aku Chika!" },

        // 3. TIER: OMEGA_SPESIAL (PRIME)
        "PFNI": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PFNI", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Matahari yang indah yang akan selalu memberikan kehangatan setiap harinya. Halo, aku Feni!" },
        "PCHR": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PCHR", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Peduli dan berbaik hati, siapakah dia? Christy!" },
        "PLLU": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PLLU", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Terang seperti bulan, bersinar seperti bintang. Halo, aku Lulu!" },
        "PGRC": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PGRC", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia, always smile! Sekali lagi? Gracia!" },
        "PONL": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PONL", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Seperti teka-teki, kalian akan selalu penasaran denganku. Halo, aku Oniel!" },
        "PFNY": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PFNY", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Seperti simfoni yang menenangkan hati. Halo, aku Fiony!" },
        "PMSH": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PMSH", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Seperti pizza yang selalu dinanti-nantikan semua orang, selalu nantikan aku, ya? Halo, aku Marsha!" },
        "PFYR": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PFYR", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Gadis koleris yang suka berimajinasi, terangi harimu dengan senyuman karamelku. Halo, aku Freya!" },
        "PGTS": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PGTS", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Diam bukan berarti tak memperhatikanmmu. Aku Gita!" },
        "PLAI": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PLAI", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Si social butterfly yang energik dan periang! Halo, aku Lia!" },
        "PJCC": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PJCC", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Suka menari dan akan selalu berusaha untuk menjadi sumber energimu. Halo, aku Jessi!" },
        "PMUT": { tier: "OMEGA_SPESIAL", subtier: "PRIME", kode: "PMUT", trailColor: "#ffd700", throw_sfx: "sfx_prime_gold_trail.mp3", impact_sfx: "sfx_random_rgb_burst.mp3", jiko: "Dengan kelincahanku, Aku akan menari setiap hari. Panggil Aku, Mu mu mu mu-the!" }
      },

      // 4. TIER: OMEGA (SSK EDITION)
      "OMEGA_SSK": {
        trailColor: "rgba(168, 85, 247, 0.95)",
        particleSymbols: ['⭐', '🌙', '🔥', '✨'],
        throw_sfx: "sfx_heavy_meteor_rainbow.mp3",
        impact_sfx: "sfx_massive_ssk_explosion.mp3"
      },

      // 5. TIER: MYTH (4 SUB-TIERS)
      "MYTH": {
        "LOVE_WAR": {
          trailColor: "#ff7675",
          particleSymbol: '💖',
          particleType: "love_hearts",
          throw_sfx: "sfx_pink_charm.mp3",
          impact_sfx: "sfx_heart_splash.mp3"
        },
        "MY_PASSION": {
          trailColor: "#f39c12",
          particleSymbol: '🔥',
          particleType: "fire_embers",
          throw_sfx: "sfx_fire_dash.mp3",
          impact_sfx: "sfx_fire_ember_hit.mp3"
        },
        "HIGH_DREAM": {
          trailColor: "#3498db",
          particleSymbol: '✨',
          particleType: "moon_stars",
          throw_sfx: "sfx_moon_magic.mp3",
          impact_sfx: "sfx_star_shatter.mp3"
        },
        "LAST_DRESS": {
          trailColor: "#2d3436",
          particleSymbol: '🌸',
          particleType: "dark_petals",
          throw_sfx: "sfx_dark_wind.mp3",
          impact_sfx: "sfx_black_petal_drop.mp3"
        }
      },

      // 6. TIER: LEGEND (COSMOS NO KIOKU)
      "LEGEND": {
        trailColor: "#2c2c54",
        particleType: "static_stardust",
        throw_sfx: "sfx_void_glide.mp3",
        impact_sfx: "sfx_cosmic_shatter.mp3"
      },

      // 7. TIER: RARE (SNOW AND GOLD)
      "RARE": {
        trailColor: "rgba(255, 255, 255, 0.4)",
        throw_sfx: "sfx_thin_ice_slide.mp3",
        impact_sfx: "sfx_soft_card_place.mp3"
      },

      // 8. TIER: UNCOMMON (TRAINEE / BASIC)
      "UNCOMMON": {
        throw_sfx: "sfx_card_flip_normal.mp3",
        impact_sfx: "sfx_card_hit_table.mp3"
      }
    };

    // =========================================================================
    // 2. TRIGGER AUDIO (SFX ENGINE & AMBIENT CONTROLLER - MODULE 25)
    // =========================================================================
    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function triggerAudio(sfx_name) {
      try {
        const ctx = getAudioContext();
        const t = ctx.currentTime;

        if (sfx_name === "sfx_holy_trail_water.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(650, t);
          osc.frequency.exponentialRampToValueAtTime(200, t + 0.18);
          gain.gain.setValueAtTime(0.4, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.18);
        }
        else if (sfx_name === "sfx_white_explosion_birds.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, t);
          osc.frequency.exponentialRampToValueAtTime(30, t + 0.5);
          gain.gain.setValueAtTime(0.6, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.5);

          [1200, 1800, 2400].forEach((freq, i) => {
            const b = ctx.createOscillator(); const bg = ctx.createGain();
            b.type = 'sine'; b.frequency.setValueAtTime(freq, t + 0.1 + i * 0.05);
            b.frequency.linearRampToValueAtTime(freq + 400, t + 0.2 + i * 0.05);
            bg.gain.setValueAtTime(0.15, t + 0.1 + i * 0.05);
            bg.gain.exponentialRampToValueAtTime(0.001, t + 0.25 + i * 0.05);
            b.connect(bg); bg.connect(ctx.destination);
            b.start(t + 0.1 + i * 0.05); b.stop(t + 0.25 + i * 0.05);
          });
        }
        else if (sfx_name === "sfx_color_swoosh.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'triangle'; osc.frequency.setValueAtTime(500, t);
          osc.frequency.exponentialRampToValueAtTime(180, t + 0.15);
          gain.gain.setValueAtTime(0.35, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.15);
        }
        else if (sfx_name === "sfx_solid_color_burst.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'square'; osc.frequency.setValueAtTime(180, t);
          osc.frequency.exponentialRampToValueAtTime(40, t + 0.35);
          gain.gain.setValueAtTime(0.4, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.35);
        }
        else if (sfx_name === "sfx_prime_gold_trail.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(800, t);
          osc.frequency.exponentialRampToValueAtTime(350, t + 0.15);
          gain.gain.setValueAtTime(0.3, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.15);
        }
        else if (sfx_name === "sfx_random_rgb_burst.mp3") {
          [330, 440, 550, 660].forEach((freq, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'triangle'; osc.frequency.setValueAtTime(freq, t + i * 0.04);
            gain.gain.setValueAtTime(0.2, t + i * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.04 + 0.3);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.04); osc.stop(t + i * 0.04 + 0.3);
          });
        }
        else if (sfx_name === "sfx_heavy_meteor_rainbow.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sawtooth'; osc.frequency.setValueAtTime(300, t);
          osc.frequency.exponentialRampToValueAtTime(80, t + 0.2);
          gain.gain.setValueAtTime(0.4, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.2);
        }
        else if (sfx_name === "sfx_massive_ssk_explosion.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sawtooth'; osc.frequency.setValueAtTime(160, t);
          osc.frequency.exponentialRampToValueAtTime(25, t + 0.6);
          gain.gain.setValueAtTime(0.7, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.6);
        }
        else if (sfx_name === "sfx_pink_charm.mp3") {
          [880, 1174.66].forEach((freq, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.setValueAtTime(freq, t + i * 0.06);
            gain.gain.setValueAtTime(0.2, t + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.2);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.06); osc.stop(t + i * 0.06 + 0.2);
          });
        }
        else if (sfx_name === "sfx_heart_splash.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(450, t);
          osc.frequency.linearRampToValueAtTime(750, t + 0.12);
          gain.gain.setValueAtTime(0.3, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.15);
        }
        else if (sfx_name === "sfx_fire_dash.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sawtooth'; osc.frequency.setValueAtTime(220, t);
          osc.frequency.exponentialRampToValueAtTime(90, t + 0.14);
          gain.gain.setValueAtTime(0.35, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.14);
        }
        else if (sfx_name === "sfx_fire_ember_hit.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'square'; osc.frequency.setValueAtTime(140, t);
          osc.frequency.exponentialRampToValueAtTime(50, t + 0.25);
          gain.gain.setValueAtTime(0.4, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.25);
        }
        else if (sfx_name === "sfx_moon_magic.mp3") {
          [523.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.setValueAtTime(freq, t + i * 0.05);
            gain.gain.setValueAtTime(0.2, t + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.25);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.05); osc.stop(t + i * 0.05 + 0.25);
          });
        }
        else if (sfx_name === "sfx_star_shatter.mp3") {
          [1318.51, 1567.98, 2093.00].forEach((freq, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'triangle'; osc.frequency.setValueAtTime(freq, t + i * 0.04);
            gain.gain.setValueAtTime(0.15, t + i * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.04 + 0.2);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.04); osc.stop(t + i * 0.04 + 0.2);
          });
        }
        else if (sfx_name === "sfx_dark_wind.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(130, t);
          osc.frequency.linearRampToValueAtTime(70, t + 0.2);
          gain.gain.setValueAtTime(0.3, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.2);
        }
        else if (sfx_name === "sfx_black_petal_drop.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'triangle'; osc.frequency.setValueAtTime(110, t);
          osc.frequency.exponentialRampToValueAtTime(40, t + 0.3);
          gain.gain.setValueAtTime(0.35, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.3);
        }
        else if (sfx_name === "sfx_void_glide.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(240, t);
          osc.frequency.exponentialRampToValueAtTime(110, t + 0.15);
          gain.gain.setValueAtTime(0.2, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.15);
        }
        else if (sfx_name === "sfx_cosmic_shatter.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'triangle'; osc.frequency.setValueAtTime(440, t);
          osc.frequency.exponentialRampToValueAtTime(90, t + 0.25);
          gain.gain.setValueAtTime(0.25, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.25);
        }
        else if (sfx_name === "sfx_thin_ice_slide.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(500, t);
          osc.frequency.exponentialRampToValueAtTime(220, t + 0.1);
          gain.gain.setValueAtTime(0.15, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.1);
        }
        else if (sfx_name === "sfx_soft_card_place.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'triangle'; osc.frequency.setValueAtTime(160, t);
          osc.frequency.exponentialRampToValueAtTime(70, t + 0.08);
          gain.gain.setValueAtTime(0.2, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.08);
        }
        else if (sfx_name === "sfx_card_flip_normal.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'sine'; osc.frequency.setValueAtTime(450, t);
          osc.frequency.exponentialRampToValueAtTime(150, t + 0.1);
          gain.gain.setValueAtTime(0.25, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.1);
        }
        else if (sfx_name === "sfx_card_hit_table.mp3") {
          const osc = ctx.createOscillator(); const gain = ctx.createGain();
          osc.type = 'triangle'; osc.frequency.setValueAtTime(180, t);
          osc.frequency.exponentialRampToValueAtTime(60, t + 0.1);
          gain.gain.setValueAtTime(0.25, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(t + 0.1);
        }
      } catch(e) {}
    }

    // MODULE 25: AMBIENT AUDIO CONTROLLER (PROCEDURAL WEB AUDIO)
    class AmbientAudioController {
      constructor() {
        this.activeSource = null;
        this.gainNode = null;
      }
      playThemeAmbient(theme) {
        this.stop();
        try {
          const ctx = getAudioContext();
          this.gainNode = ctx.createGain();
          this.gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
          this.gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 2.0);
          this.gainNode.connect(ctx.destination);

          if (theme === 'rain') {
            const bufferSize = ctx.sampleRate * 2;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            noise.loop = true;
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 800;
            noise.connect(filter);
            filter.connect(this.gainNode);
            noise.start();
            this.activeSource = noise;
          }
        } catch(e) {}
      }
      stop() {
        if (this.gainNode && audioCtx) {
          try {
            this.gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
            setTimeout(() => {
              if (this.activeSource) { this.activeSource.stop(); this.activeSource = null; }
            }, 600);
          } catch(e) {}
        }
      }
    }
    const ambientAudio = new AmbientAudioController();

    // =========================================================================
    // MODULE 24: HTML5 CANVAS WEATHER & PHYSICS ENGINE
    // =========================================================================
    class WeatherEngine {
      constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.currentTheme = 'basic';
        this.particles = [];
        this.animId = null;
        this.time = 0;
        this.resize();
        window.addEventListener('resize', () => this.resize());
      }
      resize() {
        if (this.canvas) {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
        }
      }
      setTheme(theme) {
        this.currentTheme = theme || 'basic';
        this.particles = [];
        this.initThemeParticles();
        ambientAudio.playThemeAmbient(this.currentTheme);
      }
      initThemeParticles() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        if (this.currentTheme === 'basic') {
          for (let i = 0; i < 20; i++) {
            this.particles.push({
              x: Math.random() * w, y: Math.random() * h,
              size: Math.random() * 6 + 4,
              vx: (Math.random() - 0.5) * 0.8, vy: -(Math.random() * 0.8 + 0.4),
              color: '#10b981', angle: Math.random() * Math.PI * 2, vAngle: (Math.random() - 0.5) * 0.02
            });
          }
        } else if (this.currentTheme === 'autumn') {
          const colors = ['#e67e22', '#d35400', '#c0392b', '#f39c12'];
          for (let i = 0; i < 55; i++) {
            this.particles.push({
              x: Math.random() * w, y: Math.random() * h,
              size: Math.random() * 8 + 6,
              vx: Math.random() * 1.5 + 0.8, vy: Math.random() * 1.8 + 1.0,
              color: colors[Math.floor(Math.random() * colors.length)],
              angle: Math.random() * Math.PI * 2, vAngle: (Math.random() - 0.5) * 0.05
            });
          }
        } else if (this.currentTheme === 'snow') {
          for (let i = 0; i < 150; i++) {
            this.particles.push({
              x: Math.random() * w, y: Math.random() * h,
              radius: Math.random() * 3 + 1,
              vy: Math.random() * 2 + 1, vx: (Math.random() - 0.5) * 0.6,
              alpha: Math.random() * 0.6 + 0.3
            });
          }
        } else if (this.currentTheme === 'night') {
          for (let i = 0; i < 100; i++) {
            this.particles.push({
              x: Math.random() * w, y: Math.random() * h,
              radius: Math.random() * 2 + 1,
              alpha: Math.random(), vAlpha: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1)
            });
          }
        } else if (this.currentTheme === 'dawn') {
          for (let i = 0; i < 16; i++) {
            this.particles.push({
              x: Math.random() * w, y: h - Math.random() * (h * 0.4),
              radius: Math.random() * 90 + 70,
              vx: (Math.random() * 0.4 + 0.2), alpha: Math.random() * 0.08 + 0.03
            });
          }
        } else if (this.currentTheme === 'rain') {
          for (let i = 0; i < 180; i++) {
            this.particles.push({
              x: Math.random() * w, y: Math.random() * h,
              len: Math.random() * 18 + 14,
              vy: Math.random() * 10 + 16, vx: -2.5,
              alpha: Math.random() * 0.4 + 0.4
            });
          }
        }
      }
      start() {
        if (this.animId) cancelAnimationFrame(this.animId);
        const loop = () => {
          this.update();
          this.render();
          this.animId = requestAnimationFrame(loop);
        };
        loop();
      }
      stop() {
        if (this.animId) cancelAnimationFrame(this.animId);
        if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ambientAudio.stop();
      }
      update() {
        if (!this.canvas) return;
        this.time += 0.02;
        const w = this.canvas.width;
        const h = this.canvas.height;

        if (this.currentTheme === 'basic') {
          this.particles.forEach(p => {
            p.x += p.vx + Math.sin(this.time + p.y * 0.01) * 0.5;
            p.y += p.vy;
            p.angle += p.vAngle;
            if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
            if (p.x < -20) p.x = w + 20;
            if (p.x > w + 20) p.x = -20;
          });
        } else if (this.currentTheme === 'autumn') {
          this.particles.forEach(p => {
            p.x += p.vx + Math.sin(this.time * 2 + p.y * 0.02) * 1.2;
            p.y += p.vy;
            p.angle += p.vAngle;
            if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
            if (p.x > w + 20) p.x = -20;
          });
        } else if (this.currentTheme === 'snow') {
          this.particles.forEach(p => {
            p.y += p.vy;
            p.x += p.vx + Math.sin(this.time + p.y * 0.01) * 0.4;
            if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
          });
        } else if (this.currentTheme === 'night') {
          this.particles.forEach(p => {
            p.alpha += p.vAlpha;
            if (p.alpha > 0.95 || p.alpha < 0.15) p.vAlpha *= -1;
          });
        } else if (this.currentTheme === 'dawn') {
          this.particles.forEach(p => {
            p.x += p.vx;
            if (p.x - p.radius > w) p.x = -p.radius;
          });
        } else if (this.currentTheme === 'rain') {
          this.particles.forEach(p => {
            p.y += p.vy;
            p.x += p.vx;
            if (p.y > h) { p.y = -p.len; p.x = Math.random() * w; }
          });
        }
      }
      render() {
        if (!this.ctx) return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.ctx.clearRect(0, 0, w, h);

        if (this.currentTheme === 'basic' || this.currentTheme === 'autumn') {
          this.particles.forEach(p => {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.angle);
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
          });
        } else if (this.currentTheme === 'snow') {
          this.particles.forEach(p => {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
          });
        } else if (this.currentTheme === 'night') {
          this.particles.forEach(p => {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
          });
        } else if (this.currentTheme === 'dawn') {
          this.particles.forEach(p => {
            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            grad.addColorStop(0, `rgba(255, 230, 180, ${p.alpha})`);
            grad.addColorStop(1, 'rgba(255, 230, 180, 0)');
            this.ctx.fillStyle = grad;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
          });
        } else if (this.currentTheme === 'rain') {
          this.ctx.strokeStyle = 'rgba(174, 214, 241, 0.6)';
          this.ctx.lineWidth = 1.5;
          this.ctx.beginPath();
          this.particles.forEach(p => {
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x + p.vx * 1.5, p.y + p.len);
          });
          this.ctx.stroke();
        }
      }
    }
    let weatherEngineInstance = null;

    // =========================================================================
    // 78-MEMBER STRICT 1-TO-1 UNO MASTER ROSTER (100% PRESERVED)
    // =========================================================================

function getSkinVfxConfig(el) {
      if (!el) {
        return {
          tier: 'UNCOMMON',
          hasTrail: false,
          hasParticles: false,
          hasImpactVFX: false,
          throw_sfx: 'sfx_card_flip_normal.mp3',
          impact_sfx: 'sfx_card_hit_table.mp3'
        };
      }

      const tier = el.getAttribute('data-tier') || 'UNCOMMON';
      const subtier = el.getAttribute('data-subtier') || '';
      const kode = el.getAttribute('data-kode') || '';

      // 8. UNCOMMON: KARTU DEFAULT POLOS. VFX Lempar: TIDAK ADA. Efek Mendarat: TIDAK ADA.
      if (tier === 'UNCOMMON' || (!kode && tier !== 'OMEGA_SPESIAL' && tier !== 'MYTH' && tier !== 'LEGEND' && tier !== 'RARE' && tier !== 'OMEGA_SSK')) {
        return {
          tier: 'UNCOMMON',
          hasTrail: false,
          hasParticles: false,
          hasImpactVFX: false,
          throw_sfx: 'sfx_card_flip_normal.mp3',
          impact_sfx: 'sfx_card_hit_table.mp3'
        };
      }

      // 7. RARE: SNOW AND GOLD. SUPER TIPIS. Partikel Melayang: TIDAK ADA. Efek Mendarat: TIDAK ADA.
      if (tier === 'RARE') {
        return {
          tier: 'RARE',
          hasTrail: true,
          trailClass: 'vfx-rare-thin-trail',
          trailColor: 'rgba(255, 255, 255, 0.4)',
          hasParticles: false,
          hasImpactVFX: false,
          throw_sfx: 'sfx_thin_ice_slide.mp3',
          impact_sfx: 'sfx_soft_card_place.mp3'
        };
      }

      // 6. LEGEND: COSMOS NO KIOKU. Partikel Melayang: TIDAK ADA SPRINGKEL (Statis ngikutin kartu). Percikan aura hitam bintang kecil.
      if (tier === 'LEGEND') {
        return {
          tier: 'LEGEND',
          hasTrail: true,
          trailClass: 'vfx-legend-cosmos',
          trailColor: '#2c2c54',
          hasParticles: false,
          staticStars: true,
          hasImpactVFX: true,
          particleType: 'tiny_dots',
          particleColors: ['#ff4757', '#00d2ff', '#ffd700', '#a855f7', '#ffffff'],
          throw_sfx: 'sfx_void_glide.mp3',
          impact_sfx: 'sfx_cosmic_shatter.mp3'
        };
      }

      // 5. MYTH: 4 SUB-TIERS (LOVE_WAR, MY_PASSION, HIGH_DREAM, LAST_DRESS)
      if (tier === 'MYTH') {
        if (subtier === 'LOVE_WAR' || kode.includes('FIONY')) {
          return {
            tier: 'MYTH',
            subtier: 'LOVE_WAR',
            hasTrail: true,
            trailClass: 'vfx-pink-love',
            trailColor: '#ff7675',
            hasParticles: true,
            particleSymbol: '💖',
            particleColor: '#ff7675',
            screenFlash: 'vfx-pink-love-flash',
            throw_sfx: 'sfx_pink_charm.mp3',
            impact_sfx: 'sfx_heart_splash.mp3',
            hasImpactVFX: true
          };
        } else if (subtier === 'MY_PASSION' || kode.includes('FENI')) {
          return {
            tier: 'MYTH',
            subtier: 'MY_PASSION',
            hasTrail: true,
            trailClass: 'vfx-yellow-fire',
            trailColor: '#f39c12',
            hasParticles: true,
            particleSymbol: '🔥',
            particleColor: '#e67e22',
            screenFlash: 'vfx-yellow-fire-flash',
            throw_sfx: 'sfx_fire_dash.mp3',
            impact_sfx: 'sfx_fire_ember_hit.mp3',
            hasImpactVFX: true
          };
        } else if (subtier === 'HIGH_DREAM' || kode.includes('ADELINE') || kode.includes('MARSHA') || kode.includes('FREYA') || kode.includes('GITA')) {
          return {
            tier: 'MYTH',
            subtier: 'HIGH_DREAM',
            hasTrail: true,
            trailClass: 'vfx-blue-moon',
            trailColor: '#3498db',
            hasParticles: true,
            particleSymbol: '✨',
            particleColor: '#00d2ff',
            screenFlash: 'vfx-blue-moon-flash',
            throw_sfx: 'sfx_moon_magic.mp3',
            impact_sfx: 'sfx_star_shatter.mp3',
            hasImpactVFX: true
          };
        } else {
          return {
            tier: 'MYTH',
            subtier: 'LAST_DRESS',
            hasTrail: true,
            trailClass: 'vfx-black-flower',
            trailColor: '#2d3436',
            hasParticles: true,
            particleSymbol: '🌸',
            particleColor: '#d63031',
            screenFlash: 'vfx-black-flower-flash',
            throw_sfx: 'sfx_dark_wind.mp3',
            impact_sfx: 'sfx_black_petal_drop.mp3',
            hasImpactVFX: true
          };
        }
      }

      // 4. OMEGA (SSK EDITION)
      if (tier === 'OMEGA_SSK' || kode.startsWith('S')) {
        return {
          tier: 'OMEGA_SSK',
          hasTrail: true,
          trailClass: 'vfx-ssk-rainbow-trail',
          trailColor: 'rgba(168, 85, 247, 0.95)',
          hasParticles: true,
          particleSymbols: ['⭐', '🌙', '🔥', '✨'],
          particleColors: ['#ff007f', '#00d2ff', '#ffd700', '#a855f7'],
          screenFlash: 'screen-flash-gold',
          throw_sfx: 'sfx_heavy_meteor_rainbow.mp3',
          impact_sfx: 'sfx_massive_ssk_explosion.mp3',
          hasImpactVFX: true
        };
      }

      // 1-3. OMEGA_SPESIAL (BASE / FULL_COLOR / PRIME)
      if (tier === 'OMEGA_SPESIAL' && kode in SkinDatabase.OMEGA_SPESIAL) {
        const item = SkinDatabase.OMEGA_SPESIAL[kode];
        if (item.subtier === 'SPESIAL') {
          return {
            ...item,
            hasTrail: true,
            trailClass: 'vfx-holy-white-trail',
            hasParticles: true,
            hasImpactVFX: true,
            screenFlash: 'screen-flash-white'
          };
        } else if (item.subtier === 'FULL_COLOR') {
          return {
            ...item,
            hasTrail: true,
            trailClass: 'vfx-full-color-trail',
            hasParticles: false,
            hasImpactVFX: true,
            screenFlash: 'screen-flash-color'
          };
        } else if (item.subtier === 'PRIME') {
          return {
            ...item,
            hasTrail: true,
            trailClass: 'vfx-prime-gold-trail',
            hasParticles: true,
            isRGBBurst: true,
            hasImpactVFX: true
          };
        }
      }

      return {
        tier: 'UNCOMMON',
        hasTrail: false,
        hasParticles: false,
        hasImpactVFX: false,
        throw_sfx: 'sfx_card_flip_normal.mp3',
        impact_sfx: 'sfx_card_hit_table.mp3'
      };
    }

const PARTICLE_POOL_SIZE = 800;
    const particlePool = [];
    let trailRibbons = [];
    let canvas, ctx, animFrameId;

    for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
      particlePool.push({ x: 0, y: 0, vx: 0, vy: 0, size: 0, color: '#fff', symbol: '', alpha: 0, decay: 0.02, active: false });
    }

    function initVFXCanvas() {
      canvas = document.getElementById('vfx-canvas');
      if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    function spawnFlightTrailVFX(x1, y1, x2, y2, config) {
      if (!config || !config.hasTrail || !config.trailColor) return;
      initVFXCanvas();
      const overlay = document.getElementById('vfx-overlay');
      overlay.style.opacity = '1';

      trailRibbons.push({
        p1: { x: x1, y: y1 },
        p2: { x: (x1 + x2) / 2 + (Math.random() * 60 - 30), y: (y1 + y2) / 2 - 40 },
        p3: { x: x2, y: y2 },
        color: config.trailColor,
        alpha: 1,
        width: (config.tier === 'RARE') ? 4 : 14
      });

      // Spawn sprinkles ONLY if config has particles
      if (config.hasParticles) {
        for (let i = 0; i < 30; i++) {
          const t = i / 30;
          const cx = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * ((x1 + x2) / 2) + t * t * x2;
          const cy = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * ((y1 + y2) / 2 - 40) + t * t * y2;

          const p = particlePool.find(item => !item.active);
          if (p) {
            p.x = cx + (Math.random() * 20 - 10);
            p.y = cy + (Math.random() * 20 - 10);
            p.vx = (Math.random() - 0.5) * 3;
            p.vy = (Math.random() - 0.5) * 3;
            p.size = Math.random() * 6 + 3;
            
            if (config.particleSymbols && config.particleSymbols.length > 0) {
              p.symbol = config.particleSymbols[Math.floor(Math.random() * config.particleSymbols.length)];
              p.color = config.particleColors ? config.particleColors[Math.floor(Math.random() * config.particleColors.length)] : '#ffd700';
            } else {
              p.symbol = config.particleSymbol || '';
              p.color = config.particleColor || '#00f2fe';
            }
            
            p.alpha = 1;
            p.decay = 0.025;
            p.active = true;
          }
        }
      }

      runParticleLoop();
    }

    function triggerSkinLandingVFX(card, config) {
      if (!config || !config.hasImpactVFX) return;
      if (config.impact_sfx) triggerAudio(config.impact_sfx);

      initVFXCanvas();
      const overlay = document.getElementById('vfx-overlay');
      const jiko = document.getElementById('jiko-banner');
      overlay.style.opacity = '1';

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      // Screen Flash
      if (config.screenFlash) {
        if (config.solidColor) {
          document.documentElement.style.setProperty('--flash-color', config.solidColor);
        }
        document.body.classList.add(config.screenFlash);
        setTimeout(() => document.body.classList.remove(config.screenFlash), 600);
      }

      // 3D Extra Props (Wings, Ring, Bouquet, Choco, Water)
      if (config.extraProp) {
        const propEl = document.getElementById(config.extraProp);
        if (propEl) {
          propEl.classList.add('active');
          setTimeout(() => propEl.classList.remove('active'), 2800);
        }
      }

      // Jiko text display
      if (config.jiko) {
        jiko.textContent = `✨ ${config.name || card.member}: "${config.jiko}" ✨`;
        jiko.classList.add('jiko-show');
        setTimeout(() => jiko.classList.remove('jiko-show'), 3500);
      }

      // Spawn Object-Pooled Burst Particles (ONLY if hasImpactVFX is true)
      const burstCount = (config.tier === 'OMEGA_SSK' || config.subtier === 'SPESIAL') ? 60 : 35;
      for (let i = 0; i < burstCount; i++) {
        const p = particlePool.find(item => !item.active);
        if (p) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 8 + 2;
          p.x = cx; p.y = cy;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.size = (config.particleType === 'tiny_dots') ? (Math.random() * 3 + 1.5) : (Math.random() * 7 + 3);

          if (config.isRGBBurst) {
            const rgbColors = ['#ff4757', '#00d2ff', '#f1c40f', '#27ae60'];
            p.color = rgbColors[Math.floor(Math.random() * rgbColors.length)];
            p.symbol = '';
          } else if (config.particleSymbols && config.particleSymbols.length > 0) {
            p.symbol = config.particleSymbols[Math.floor(Math.random() * config.particleSymbols.length)];
            p.color = config.particleColors ? config.particleColors[Math.floor(Math.random() * config.particleColors.length)] : '#ffd700';
          } else {
            p.symbol = config.particleSymbol || '';
            p.color = config.particleColor || '#ffd700';
          }

          p.alpha = 1;
          p.decay = 0.02;
          p.active = true;
        }
      }

      runParticleLoop();
    }

    function runParticleLoop() {
      if (animFrameId) cancelAnimationFrame(animFrameId);

      function loop() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeCount = 0;

        for (let i = trailRibbons.length - 1; i >= 0; i--) {
          const r = trailRibbons[i];
          r.alpha -= 0.03;
          r.width *= 0.95;

          if (r.alpha <= 0) {
            trailRibbons.splice(i, 1);
            continue;
          }

          activeCount++;
          ctx.save();
          ctx.globalAlpha = r.alpha;
          ctx.strokeStyle = r.color;
          ctx.lineWidth = r.width;
          ctx.lineCap = 'round';
          ctx.shadowColor = r.color;
          ctx.shadowBlur = 18;

          ctx.beginPath();
          ctx.moveTo(r.p1.x, r.p1.y);
          ctx.quadraticCurveTo(r.p2.x, r.p2.y, r.p3.x, r.p3.y);
          ctx.stroke();
          ctx.restore();
        }

        for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
          const p = particlePool[i];
          if (!p.active) continue;
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            p.active = false;
            continue;
          }

          activeCount++;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          if (p.symbol) {
            ctx.font = `${p.size * 2}px sans-serif`;
            ctx.fillText(p.symbol, p.x, p.y);
          } else {
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        if (activeCount > 0) {
          animFrameId = requestAnimationFrame(loop);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          document.getElementById('vfx-overlay').style.opacity = '0';
        }
      }

      loop();
    }