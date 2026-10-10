/**
 * Kids Country Poster Board Builder & Interactive Learning Tool
 * North Beach Elementary & Culture Displays
 */

// Helper to generate SVG coloring line-art data URIs
function generateOutlineSvg(symbol, title, subtitle) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
    <rect width="100%" height="100%" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
    <rect x="15" y="15" width="570" height="420" rx="12" fill="none" stroke="#334155" stroke-dasharray="8,8" stroke-width="2"/>
    <text x="300" y="160" text-anchor="middle" font-size="70">${symbol}</text>
    <text x="300" y="240" text-anchor="middle" font-family="'Arial Black', Impact, sans-serif" font-size="28" fill="#ffffff" stroke="#000000" stroke-width="2.5" letter-spacing="1">${title}</text>
    <text x="300" y="290" text-anchor="middle" font-family="'Arial', sans-serif" font-weight="bold" font-size="18" fill="#475569">${subtitle}</text>
    <path d="M 120 340 L 480 340" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
    <circle cx="200" cy="380" r="16" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <circle cx="300" cy="380" r="16" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <circle cx="400" cy="380" r="16" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <text x="300" y="420" text-anchor="middle" font-family="'Arial', sans-serif" font-size="12" fill="#94a3b8">Ready for Coloring!</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// 12 Countries Comprehensive Catalog
const COUNTRY_DATA = {
  pr: {
    id: "pr",
    name: "Puerto Rico",
    adjective: "Puerto Rican",
    flagEmoji: "🇵🇷",
    nickname: "Isla del Encanto",
    capital: "San Juan",
    region: "Caribbean (North America)",
    greeting: "¡Hola!",
    cheer: "¡Wepa!",
    kidIntro: "A warm tropical island surrounded by turquoise ocean waters with singing tiny frogs and colorful historic forts!",
    card1: {
      title: "1. Country Information",
      tag: "Puerto Rico",
      img: "pr_flag_map_bw_1791649663152.jpg",
      bullets: [
        { label: "Country Name", value: "Puerto Rico" },
        { label: "Nickname", value: "Isla del Encanto" },
        { label: "Capital City", value: "San Juan ⭐" },
        { label: "Region", value: "Caribbean (North America)" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Mofongo",
      img: "mofongo_malta_coloring_1791649366385.jpg",
      bullets: [
        { label: "Main Dish", value: "Mofongo (mashed savory plantains with garlic in a wooden pilón bowl!)" },
        { label: "Sweet Treat", value: "Piragua (shaved ice drizzled with tropical fruit syrup)" },
        { label: "Favorite Drink", value: "Malta India (fizzy, sweet malt beverage)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Bomba & Plena",
      img: "bomba_dance_coloring_1791649428063.jpg",
      bullets: [
        { label: "Folk Dance", value: "Bomba (dancers challenge drummers with swishing skirts!)" },
        { label: "Storytelling Beat", value: "Plena ('the singing newspaper' of the island)" },
        { label: "Instruments", value: "Maracas, Barril drums, and Güiro scraper" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Jíbaro",
      img: "traditional_clothing_coloring_1791649442768.jpg",
      bullets: [
        { label: "Boy's Outfit", value: "Straw pava hat, crisp white shirt & red bandana sash" },
        { label: "Girl's Outfit", value: "Flowing white dress with ruffles & island hibiscus flowers" },
        { label: "Heritage", value: "Jíbaro pride celebrating mountain farmers and country life" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Vejigante Masks",
      img: "vejigante_mask_coloring_1791649380499.jpg",
      bullets: [
        { label: "Carnival Tradition", value: "Vejigante masks for Ponce Carnival & Fiesta Santiago Apóstol" },
        { label: "How It's Made", value: "Crafted from papier-mâché or dried coconuts with many horns!" },
        { label: "Style", value: "Bold polka dots, wild smiling teeth & vibrant parade dances" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "El Morro",
      img: "castillo_el_morro_bw_1791649678009.jpg",
      bullets: [
        { label: "Seaside Fortress", value: "Castillo San Felipe del Morro (built over 400 years ago!)" },
        { label: "Iconic Tower", value: "Garitas (sentry lookout towers perched over crashing waves)" },
        { label: "Fun Tradition", value: "Kids fly giant colorful kites on the sprawling grassy lawn" }
      ]
    },
    famousPeople: [
      {
        id: "bad_bunny",
        name: "Bad Bunny (Benito)",
        role: "Global Music Superstar & Grammy Icon",
        img: "bad_bunny_landscape_1791650572668.jpg",
        bullets: [
          { label: "Full Name", value: "Benito Antonio Martínez Ocasio" },
          { label: "Born", value: "Vega Baja, Puerto Rico" },
          { label: "Achievement", value: "Grammy winner & one of the most streamed artists in the world!" },
          { label: "Kid Superpower", value: "Celebrates Puerto Rican culture and wears the traditional straw pava hat on stage" }
        ],
        kidTrivia: "He loves wearing traditional straw hats from Puerto Rico and writes songs that make millions of people dance all around the world!"
      },
      {
        id: "roberto_clemente",
        name: "Roberto Clemente",
        role: "Baseball Hall of Famer & Humanitarian Hero",
        img: generateOutlineSvg("⚾", "ROBERTO CLEMENTE #21", "Baseball Legend & Hero"),
        bullets: [
          { label: "Born", value: "Carolina, Puerto Rico" },
          { label: "Achievement", value: "Hall of Famer, 3,000 hits, and 12-time Gold Glove winner" },
          { label: "Humanitarian", value: "Spent his off-seasons delivering food, medicine & baseball gear to children" },
          { label: "Legacy", value: "MLB's highest award for community service is named in his honor" }
        ],
        kidTrivia: "He wasn't just an amazing baseball player—he spent his free time bringing food and toys to families in need!"
      },
      {
        id: "sonia_sotomayor",
        name: "Sonia Sotomayor",
        role: "First Latina US Supreme Court Justice",
        img: generateOutlineSvg("⚖️", "JUSTICE SOTOMAYOR", "First Latina Supreme Court Justice"),
        bullets: [
          { label: "Heritage", value: "Proud Puerto Rican family roots" },
          { label: "Historic Milestone", value: "First Hispanic Justice on the US Supreme Court (appointed 2009)" },
          { label: "Superpower", value: "Passionate reader who solved mysteries like Nancy Drew as a kid!" },
          { label: "Children's Author", value: "Writes inspirational books teaching kids to never give up" }
        ],
        kidTrivia: "As a young girl, she loved reading books and dreamed big. Today she makes important decisions for the whole country!"
      },
      {
        id: "rita_moreno",
        name: "Rita Moreno",
        role: "Legendary EGOT Actress & Singer",
        img: generateOutlineSvg("🎭", "RITA MORENO", "Emmy, Grammy, Oscar & Tony Winner"),
        bullets: [
          { label: "Born", value: "Humacao, Puerto Rico" },
          { label: "Rare Honor", value: "One of only 19 artists in history to win an Emmy, Grammy, Oscar, and Tony (EGOT)!" },
          { label: "Famous Role", value: "Anita in West Side Story" },
          { label: "Kid Superpower", value: "Started dancing in Puerto Rico when she was just a toddler!" }
        ],
        kidTrivia: "She started dancing when she was your age, and grew up to win every major entertainment award in show business!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Coquí Frog",
      img: "coqui_frog_coloring_1791649457119.jpg",
      bullets: [
        { label: "Official Language", value: "Spanish & English" },
        { label: "Beloved Island Mascot", value: "The tiny Coquí tree frog (only 1 inch long!)" },
        { label: "Its Famous Song", value: "Sings '¡Ko-Kee! ¡Ko-Kee!' every evening at sunset" },
        { label: "Island Cheer", value: "¡Wepa! (expresses pure joy, excitement, and celebration!)" }
      ]
    },
    funFacts: [
      {
        id: "glowing_water",
        title: "Glowing Bay",
        subtitle: "Mosquito Bay, Vieques",
        img: "glowing_water_coloring_1791650764522.jpg",
        caption: "Bioluminescent waters light up with glowing blue magic whenever fish or paddles touch it!",
        kidExplanation: "Tiny creatures in the water light up like neon blue glow-sticks when you splash your hands!"
      },
      {
        id: "plane_clapping",
        title: "Airport Clap",
        subtitle: "San Juan Landing",
        img: "plane_clapping_coloring_1791650782941.jpg",
        caption: "Passengers burst into applause and cheer when landing in San Juan to celebrate coming home!",
        kidExplanation: "When the airplane wheels touch down in Puerto Rico, the whole plane claps and cheers with happiness!"
      },
      {
        id: "pirate_gold",
        title: "Pirate Gold",
        subtitle: "Cabo Rojo Caves",
        img: "pirate_treasure_coloring_1791650801521.jpg",
        caption: "Pirate Roberto Cofresí hid treasure chests in sea caves along the beaches of Cabo Rojo!",
        kidExplanation: "A real pirate used to sail the Caribbean and hid secret chests filled with gold inside beach caves!"
      },
      {
        id: "rainforest",
        title: "El Yunque Jungle",
        subtitle: "Only US Rainforest",
        img: generateOutlineSvg("🌿", "EL YUNQUE RAINFOREST", "Misty Waterfalls & Giant Ferns"),
        caption: "El Yunque is the ONLY tropical rainforest in the US National Forest system!",
        kidExplanation: "It rains almost every day here, creating giant misty waterfalls and trees taller than school buildings!"
      },
      {
        id: "giant_telescope",
        title: "Giant Telescope",
        subtitle: "Arecibo Observatory",
        img: generateOutlineSvg("📡", "ARECIBO DISH", "Space Radio Telescope"),
        caption: "Arecibo was once home to a gigantic 1,000-foot radio dish listening for signals in deep space!",
        kidExplanation: "Scientists built a radio bowl bigger than three football fields to listen for aliens in outer space!"
      }
    ]
  },

  mx: {
    id: "mx",
    name: "Mexico",
    adjective: "Mexican",
    flagEmoji: "🇲🇽",
    nickname: "Tierra del Sol",
    capital: "Mexico City",
    region: "North America",
    greeting: "¡Hola!",
    cheer: "¡Órale!",
    kidIntro: "A magnificent land of towering ancient pyramids, warm delicious tacos, colorful Mariachi bands, and smiling axolotls!",
    card1: {
      title: "1. Country Information",
      tag: "Mexico",
      img: generateOutlineSvg("🇲🇽", "MEXICO MAP & FLAG", "Golden Eagle & Aztec Roots"),
      bullets: [
        { label: "Country Name", value: "Mexico (Estados Unidos Mexicanos)" },
        { label: "Nickname", value: "Tierra del Sol" },
        { label: "Capital City", value: "Mexico City (CDMX) ⭐" },
        { label: "Continent", value: "North America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Tacos & Horchata",
      img: generateOutlineSvg("🌮", "TACOS & HORCHATA", "Fresh Tortillas & Sweet Cinnamon"),
      bullets: [
        { label: "Favorite Food", value: "Tacos al Pastor (warm corn tortillas with pineapple & lime)" },
        { label: "Sweet Treat", value: "Churros rolled in cinnamon sugar dipped in hot chocolate" },
        { label: "Refreshing Drink", value: "Agua de Horchata (sweet vanilla cinnamon rice milk)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Mariachi",
      img: generateOutlineSvg("🎺", "MARIACHI & DANCE", "Trumpets, Guitars & Swirling Skirts"),
      bullets: [
        { label: "Traditional Music", value: "Mariachi band with brass trumpets and big acoustic guitars" },
        { label: "Folk Dance", value: "Ballet Folklórico (dancers swirl giant rainbow-colored dresses)" },
        { label: "Famous Song", value: "La Bamba & Cielito Lindo ('Canta y no llores!')" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Charro",
      img: generateOutlineSvg("👒", "CHARRO & POBLANA", "Embroidered Sombrero & Dress"),
      bullets: [
        { label: "Boy's Outfit", value: "Charro suit with silver embroidery and a wide felt sombrero" },
        { label: "Girl's Outfit", value: "China Poblana dress with embroidered flowers and a rebozo scarf" },
        { label: "Symbol", value: "Worn proudly during parades, holidays, and celebrations" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Día de los Muertos",
      img: generateOutlineSvg("💀", "CALAVERAS & FLOWERS", "Smiling Sugar Skulls & Marigolds"),
      bullets: [
        { label: "Joyful Holiday", value: "Día de los Muertos (Day of the Dead family celebration)" },
        { label: "Art Tradition", value: "Calaveras (decorated sugar skulls painted with bright flowers)" },
        { label: "Bright Flower", value: "Golden Cempasúchil marigold petals guide families together" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Chichén Itzá",
      img: generateOutlineSvg("🏛️", "CHICHÉN ITZÁ", "Ancient Mayan Step Pyramid"),
      bullets: [
        { label: "Wonder of World", value: "El Castillo (Kukulcán pyramid built by the ancient Maya)" },
        { label: "Pyramid Magic", value: "Clapping hands at the base sounds like a quetzal bird chirping!" },
        { label: "Sun Shadow", value: "On the first day of spring, shadows look like a snake slithering down!" }
      ]
    },
    famousPeople: [
      {
        id: "frida_kahlo",
        name: "Frida Kahlo",
        role: "Iconic Artist of Bold Nature & Self-Portraits",
        img: generateOutlineSvg("🎨", "FRIDA KAHLO", "Legendary Artist with Flower Crown"),
        bullets: [
          { label: "Born", value: "Coyoacán, Mexico City (La Casa Azul)" },
          { label: "Art Style", value: "Bright folk art featuring flowers, monkeys, and pet parrots" },
          { label: "Kid Superpower", value: "Showed bravery and turned pain into colorful, imaginative art" },
          { label: "Inspiration", value: "Loved wearing traditional Mexican dresses and flower crowns" }
        ],
        kidTrivia: "She loved painting in her garden surrounded by her pet monkeys, parrots, and dogs!"
      },
      {
        id: "ellen_ochoa",
        name: "Dr. Ellen Ochoa",
        role: "First Hispanic Woman Astronaut in Outer Space",
        img: generateOutlineSvg("🚀", "DR. ELLEN OCHOA", "NASA Astronaut & Space Pioneer"),
        bullets: [
          { label: "Space Missions", value: "Flew on 4 space shuttle missions with NASA!" },
          { label: "Historic First", value: "First Hispanic woman in the world to travel to space (1993)" },
          { label: "Other Talent", value: "Classical flute player who played her flute in zero gravity!" },
          { label: "Leadership", value: "Later served as Director of NASA's Johnson Space Center" }
        ],
        kidTrivia: "She brought her flute into outer space and floated upside-down while playing music for the crew!"
      },
      {
        id: "cesar_chavez",
        name: "Cesar Chavez",
        role: "Civil Rights Hero & Community Champion",
        img: generateOutlineSvg("🤝", "CESAR CHAVEZ", "Civil Rights Leader • ¡Sí Se Puede!"),
        bullets: [
          { label: "Mission", value: "Stood up for farm workers harvesting food for American families" },
          { label: "Famous Motto", value: "'¡Sí, se puede!' ('Yes, we can!')" },
          { label: "Method", value: "Peaceful marches, speeches, and community solidarity" },
          { label: "Honor", value: "Celebrated across the US with Cesar Chavez Day on March 31" }
        ],
        kidTrivia: "He created the famous cheer '¡Sí se puede!' to remind everyone that kids and grownups can do anything when they help each other!"
      },
      {
        id: "guillermo_del_toro",
        name: "Guillermo del Toro",
        role: "Oscar-Winning Filmmaker & Storyteller",
        img: generateOutlineSvg("🎬", "GUILLERMO DEL TORO", "Visionary Director of Pinocchio"),
        bullets: [
          { label: "Born", value: "Guadalajara, Mexico" },
          { label: "Achievements", value: "3 Academy Awards for directing & animated storytelling" },
          { label: "Famous Film", value: "Guillermo del Toro's Pinocchio & Pan's Labyrinth" },
          { label: "Kid Superpower", value: "Loves friendly monsters, stop-motion puppets, and fairy tales" }
        ],
        kidTrivia: "He started drawing monsters and building puppets with clay when he was just 8 years old!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Axolotl",
      img: generateOutlineSvg("🦎", "AXOLOTL & ÓRALE", "Smiling Lake Water Monster"),
      bullets: [
        { label: "Official Language", value: "Spanish + 68 Indigenous Languages (like Nahuatl & Maya)" },
        { label: "Magical Animal", value: "Axolotl (smiling underwater salamander with feathery pink gills)" },
        { label: "Superpower", value: "Can regrow its legs, tail, and heart if it gets hurt!" },
        { label: "Kid Cheer", value: "¡Órale! (used for 'Wow!', 'Awesome!', or 'Let's go!')" }
      ]
    },
    funFacts: [
      {
        id: "monarch_butterflies",
        title: "Monarch Trees",
        subtitle: "3,000 Mile Journey",
        img: generateOutlineSvg("🦋", "MONARCH MIGRATION", "Millions of Orange Butterflies"),
        caption: "Millions of monarch butterflies fly 3,000 miles to sleep in Mexican fir trees every winter!",
        kidExplanation: "Millions of orange butterflies fly all the way across North America to cuddle in Mexican trees!"
      },
      {
        id: "chocolate_invented",
        title: "Chocolate Birth",
        subtitle: "Ancient Cacao",
        img: generateOutlineSvg("🍫", "CHOCOLATE & CACAO", "The Maya's Sweet Gift to World"),
        caption: "Ancient Maya and Aztecs were the very first people to discover and drink chocolate!",
        kidExplanation: "Ancient Mexican civilizations invented hot chocolate, vanilla, and popcorn!"
      },
      {
        id: "floating_city",
        title: "Floating City",
        subtitle: "Aztec Lake City",
        img: generateOutlineSvg("🛶", "TENOCHTITLAN", "Floating Gardens & Canals"),
        caption: "Mexico City was originally built on islands in the middle of a giant ancient lake!",
        kidExplanation: "Before cars, Aztecs traveled around Mexico City in wooden boats on water canals!"
      },
      {
        id: "smiling_axolotl",
        title: "Smiling Salamander",
        subtitle: "Xochimilco Canals",
        img: generateOutlineSvg("✨", "SMILING AXOLOTL", "Endangered Lake Mascot"),
        caption: "Axolotls spend their entire lives underwater and always have a cute natural smile!",
        kidExplanation: "They look like real-life Pokémon that swim in the canals and smile at you!"
      }
    ]
  },

  dr: {
    id: "dr",
    name: "Dominican Republic",
    adjective: "Dominican",
    flagEmoji: "🇩🇴",
    nickname: "Quisqueya la Bella",
    capital: "Santo Domingo",
    region: "Caribbean",
    greeting: "¡Hola!",
    cheer: "¡Dímelo, qué lo qué!",
    kidIntro: "An island paradise of swinging palm trees, bouncing Merengue beats, and legendary baseball heroes!",
    card1: {
      title: "1. Country Information",
      tag: "Dominican Republic",
      img: generateOutlineSvg("🇩🇴", "DOMINICAN REPUBLIC", "Hispaniola • Santo Domingo"),
      bullets: [
        { label: "Country Name", value: "Dominican Republic" },
        { label: "Nickname", value: "Quisqueya la Bella" },
        { label: "Capital City", value: "Santo Domingo ⭐" },
        { label: "Region", value: "Caribbean (Island of Hispaniola)" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Mangú",
      img: generateOutlineSvg("🍳", "MANGÚ • LOS 3 GOLPES", "Mashed Green Plantains & Salami"),
      bullets: [
        { label: "National Dish", value: "Mangú (creamy mashed green plantains with pickled red onions)" },
        { label: "Los Tres Golpes", value: "Served with fried Dominican cheese, eggs, and crispy salami!" },
        { label: "Dream Drink", value: "Morir Soñando ('To Die Dreaming' - cold orange juice & sweet cream)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Merengue & Bachata",
      img: generateOutlineSvg("🪗", "MERENGUE & GÜIRA", "Fast Tambora Drum & Accordion"),
      bullets: [
        { label: "National Dance", value: "Merengue (energetic, 2-step dance that makes everyone smile)" },
        { label: "Guitar Rhythms", value: "Bachata (rhythmic romantic guitar music born in the countryside)" },
        { label: "Key Instrument", value: "Güira (metal scraper played with a metal comb fork)" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje Típico",
      img: generateOutlineSvg("💃", "TRAJE TÍPICO DOMINICANO", "Red, White & Blue Ruffles"),
      bullets: [
        { label: "Colors", value: "Bright red, white, and royal blue matching the Dominican flag" },
        { label: "Style", value: "Flowing off-the-shoulder ruffled blouses and long circular skirts" },
        { label: "Hair Flowers", value: "Worn with island hibiscus or jasmine blossoms behind the ear" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Diablos Cojuelos",
      img: generateOutlineSvg("🎭", "DIABLOS COJUELOS", "Carnival Costumes & Jingle Bells"),
      bullets: [
        { label: "February Carnival", value: "Celebrated across La Vega, Santiago, and Santo Domingo" },
        { label: "Colorful Outfits", value: "Satin suits adorned with thousands of tiny shiny mirrors and jingle bells" },
        { label: "Horned Masks", value: "Sculpted with fierce, playful faces and sweeping horns" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Alcázar de Colón",
      img: generateOutlineSvg("🏰", "ALCÁZAR DE COLÓN", "Historic Coral Limestone Palace"),
      bullets: [
        { label: "Historic Palace", value: "Built in 1510 in Santo Domingo's Colonial Zone" },
        { label: "Building Blocks", value: "Constructed entirely of coral blocks mined from the Caribbean sea" },
        { label: "Historic First", value: "Santo Domingo has the oldest cathedral, paved street & hospital in Americas" }
      ]
    },
    famousPeople: [
      {
        id: "david_ortiz",
        name: "David Ortiz ('Big Papi')",
        role: "Baseball Hall of Famer & 3x World Series Champion",
        img: generateOutlineSvg("⚾", "DAVID ORTIZ #34", "Big Papi • Baseball Hall of Fame"),
        bullets: [
          { label: "Born", value: "Santo Domingo, Dominican Republic" },
          { label: "Baseball Stardom", value: "10-time MLB All-Star and 3-time World Series Champion" },
          { label: "Hall of Fame", value: "Elected to the National Baseball Hall of Fame in 2022" },
          { label: "Giving Back", value: "His Children's Fund provides life-saving heart surgeries to kids" }
        ],
        kidTrivia: "Whenever he hit a home run, he pointed both index fingers to the sky to honor his mom!"
      },
      {
        id: "juan_luis_guerra",
        name: "Juan Luis Guerra",
        role: "Legendary Musician & Latin Grammy Pioneer",
        img: generateOutlineSvg("🎵", "JUAN LUIS GUERRA", "4.40 Bandleader & Merengue Icon"),
        bullets: [
          { label: "Born", value: "Santo Domingo, Dominican Republic" },
          { label: "Global Hits", value: "Brought Merengue and Bachata to concerts across the entire world" },
          { label: "Awards", value: "Over 20 Latin Grammy Awards and 3 Grammy Awards" },
          { label: "Famous Song", value: "'Ojalá Que Llueva Café' ('May It Rain Coffee in the Countryside!')" }
        ],
        kidTrivia: "He wrote a famous song wishing that coffee, tea, and strawberries would rain down from the sky like magic!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Palmchat & Qué Lo Qué",
      img: generateOutlineSvg("🦜", "CIGUA PALMERA & BIRD", "Palmchat Bird & Mangroves"),
      bullets: [
        { label: "Official Language", value: "Spanish" },
        { label: "National Bird", value: "Cigua Palmera (Palmchat - builds giant shared apartment nests!)" },
        { label: "Friendly Greeting", value: "¡Qué lo qué! (Dominican slang for 'What's up?!')" },
        { label: "Gemstone", value: "Larimar (a rare sky-blue volcanic stone found nowhere else on Earth!)" }
      ]
    },
    funFacts: [
      {
        id: "whale_nursery",
        title: "Whale Nursery",
        subtitle: "Samaná Bay Sanctuary",
        img: generateOutlineSvg("🐋", "HUMPBACK WHALES", "Giant Whales in Samaná Bay"),
        caption: "Over 3,000 giant Humpback Whales swim to Samaná Bay every winter to give birth to baby calves!",
        kidExplanation: "Giant friendly mother whales swim thousands of miles so their baby calves can splash in warm Dominican water!"
      },
      {
        id: "larimar_stone",
        title: "Sky-Blue Stone",
        subtitle: "Only in DR",
        img: generateOutlineSvg("💎", "LARIMAR GEMSTONE", "Sky-Blue Volcanic Jewel"),
        caption: "Larimar is a rare turquoise-blue gemstone that exists ONLY in Dominican mountains!",
        kidExplanation: "It's a magical blue crystal stone that looks like ocean water and is found nowhere else in the world!"
      },
      {
        id: "los_tres_golpes",
        title: "The Three Hits!",
        subtitle: "Mangú Power Breakfast",
        img: generateOutlineSvg("🍳", "LOS TRES GOLPES", "Salami, Cheese & Fried Eggs"),
        caption: "The classic breakfast of Mangú with salami, cheese, and eggs is called 'Los Tres Golpes'!",
        kidExplanation: "It gives kids super strength for school and tastes amazing with crunchy fried cheese!"
      }
    ]
  },

  co: {
    id: "co",
    name: "Colombia",
    adjective: "Colombian",
    flagEmoji: "🇨🇴",
    nickname: "Tierra de Encanto",
    capital: "Bogotá",
    region: "South America",
    greeting: "¡Hola!",
    cheer: "¡Chévere!",
    kidIntro: "A magical land of green Andes mountains, wax palm trees reaching into the clouds, and world-class music!",
    card1: {
      title: "1. Country Information",
      tag: "Colombia",
      img: generateOutlineSvg("🇨🇴", "COLOMBIA MAP & FLAG", "Yellow, Blue & Red • Andes"),
      bullets: [
        { label: "Country Name", value: "Colombia" },
        { label: "Nickname", value: "Tierra de Encanto" },
        { label: "Capital City", value: "Bogotá ⭐" },
        { label: "Continent", value: "South America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Arepas con Queso",
      img: generateOutlineSvg("🧀", "AREPAS CON QUESO", "Golden Corn Cakes with Melting Cheese"),
      bullets: [
        { label: "Daily Favorite", value: "Arepas con Queso (warm, round corn cakes with gooey melted cheese)" },
        { label: "Famous Platter", value: "Bandeja Paisa (rice, beans, plantains, avocado & fried egg)" },
        { label: "Tropical Fruit", value: "Jugo de Lulo or Maracuyá (tangy passion fruit smoothies)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Cumbia & Vallenato",
      img: generateOutlineSvg("🪘", "CUMBIA CANDLE DANCE", "Flutes, Drums & Accordion"),
      bullets: [
        { label: "Traditional Dance", value: "Cumbia (dancers hold glowing bundles of candles as they sway!)" },
        { label: "Storytelling Rhythms", value: "Vallenato (celebratory accordion music with drums)" },
        { label: "Global Pop", value: "Home to Shakira, Carlos Vives, and Juanes!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Ruana & Sombrero",
      img: generateOutlineSvg("🤠", "SOMBRERO VUELTIAO", "Foldable Hat & Wool Ruana"),
      bullets: [
        { label: "Mountain Poncho", value: "Ruana (thick wool poncho keeping farmers warm in chilly Andes hills)" },
        { label: "National Hat", value: "Sombrero Vueltiao (woven cane hat with black & white geometric patterns)" },
        { label: "Super Feature", value: "The hat is so flexible you can fold it completely flat in your backpack!" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Feria de las Flores",
      img: generateOutlineSvg("🌸", "FERIA DE LAS FLORES", "Silleteros Carrying Flower Silletas"),
      bullets: [
        { label: "Medellín Festival", value: "Feria de las Flores (The world-famous Flower Festival)" },
        { label: "Silletero Parade", value: "Farmers carry giant 100-pound wooden flower disks on their backs!" },
        { label: "Famous Motto", value: "'When a Silletero walks by, it's Colombia that passes!'" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Ciudad Perdida",
      img: generateOutlineSvg("🏛️", "CIUDAD PERDIDA", "Ancient Lost Stone City in Jungle"),
      bullets: [
        { label: "Ancient Wonder", value: "Ciudad Perdida (The Lost City built 650 years before Machu Picchu!)" },
        { label: "Hidden Sanctuary", value: "Carved into the jungle mountains of Sierra Nevada de Santa Marta" },
        { label: "Stone Terraces", value: "Over 169 stone terraces connected by steep winding jungle staircases" }
      ]
    },
    famousPeople: [
      {
        id: "shakira",
        name: "Shakira",
        role: "Global Pop Superstar & Children's Advocate",
        img: generateOutlineSvg("🎤", "SHAKIRA", "Grammy Winner & Pies Descalzos Founder"),
        bullets: [
          { label: "Born", value: "Barranquilla, Colombia" },
          { label: "Music Career", value: "Multi-Grammy winner famous for 'Hips Don't Lie' and 'Waka Waka'" },
          { label: "Philanthropy", value: "Her Pies Descalzos Foundation built public schools for thousands of kids" },
          { label: "Superpower", value: "Learned traditional belly dance and guitar when she was in elementary school" }
        ],
        kidTrivia: "She wrote her first song when she was only 8 years old and now builds schools so other kids can follow their dreams!"
      },
      {
        id: "gabriel_garcia_marquez",
        name: "Gabriel García Márquez ('Gabo')",
        role: "Nobel Prize Author of Magical Realism",
        img: generateOutlineSvg("📚", "GABRIEL GARCÍA MÁRQUEZ", "Nobel Prize in Literature"),
        bullets: [
          { label: "Born", value: "Aracataca, Colombia" },
          { label: "Nobel Prize", value: "Won the Nobel Prize in Literature in 1982" },
          { label: "Magical Realism", value: "Wrote stories where yellow butterflies swarm and carpets fly through towns" },
          { label: "Inspiration", value: "His books inspired the magical universe of Disney's Encanto!" }
        ],
        kidTrivia: "His grandmother told him bedtime stories filled with magic, which helped him write some of the best books in human history!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Condor & Encanto",
      img: generateOutlineSvg("🦅", "ANDEAN CONDOR", "Giant Wings & Yellow Butterflies"),
      bullets: [
        { label: "Official Language", value: "Spanish" },
        { label: "National Bird", value: "Andean Condor (one of the largest flying birds in the world!)" },
        { label: "Cheer Word", value: "¡Chévere! (Colombian for 'Super cool!' or 'Awesome!')" },
        { label: "Biodiversity", value: "Home to more bird species and orchid flowers than any nation on Earth!" }
      ]
    },
    funFacts: [
      {
        id: "liquid_rainbow",
        title: "Liquid Rainbow",
        subtitle: "Caño Cristales River",
        img: generateOutlineSvg("🌈", "RIVER OF 5 COLORS", "Caño Cristales Liquid Rainbow"),
        caption: "Caño Cristales is called the 'River of Five Colors' because underwater plants turn it glowing red, yellow, and green!",
        kidExplanation: "It looks like a real liquid rainbow flowing through the mountains with pink and red glowing water plants!"
      },
      {
        id: "encanto_palms",
        title: "Encanto Palms",
        subtitle: "Cocora Valley",
        img: generateOutlineSvg("🌴", "WAX PALM TREES", "Tallest Palm Trees on Earth"),
        caption: "The Cocora Valley has Wax Palm trees that grow over 200 feet high—the tallest in the world!",
        kidExplanation: "These palm trees grow taller than 15-story buildings and inspired the magic in the movie Encanto!"
      },
      {
        id: "pink_dolphins",
        title: "Pink Dolphins",
        subtitle: "Amazon River",
        img: generateOutlineSvg("🐬", "PINK RIVER DOLPHIN", "Amazon Freshwater Dolphins"),
        caption: "Colombia's Amazon rivers are home to rare freshwater dolphins that are naturally bright pink!",
        kidExplanation: "They really are bright bubblegum pink and swim playfully through the jungle rivers!"
      }
    ]
  },

  es: {
    id: "es",
    name: "Spain",
    adjective: "Spanish",
    flagEmoji: "🇪🇸",
    nickname: "Tierra de Castillos",
    capital: "Madrid",
    region: "Europe (Iberian Peninsula)",
    greeting: "¡Hola!",
    cheer: "¡Olé!",
    kidIntro: "A historic land of magnificent fairytale castles, rhythmic flamenco dancing, warm paella, and brave explorers!",
    card1: {
      title: "1. Country Information",
      tag: "Spain",
      img: generateOutlineSvg("🇪🇸", "SPAIN MAP & CASTLES", "Madrid • Red & Yellow"),
      bullets: [
        { label: "Country Name", value: "Spain (España)" },
        { label: "Nickname", value: "Tierra de Castillos" },
        { label: "Capital City", value: "Madrid ⭐" },
        { label: "Continent", value: "Europe" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Paella & Churros",
      img: generateOutlineSvg("🥘", "PAELLA VALENCIANA", "Saffron Rice & Churros con Chocolate"),
      bullets: [
        { label: "National Dish", value: "Paella Valenciana (golden saffron rice with vegetables, beans & savory meats)" },
        { label: "Sweet Treat", value: "Churros con Chocolate (crunchy fried pastry dipped in thick melted chocolate)" },
        { label: "Snack Style", value: "Tapas (small shared plates for friends and family)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Flamenco",
      img: generateOutlineSvg("💃", "FLAMENCO & GUITAR", "Spanish Guitar, Castanets & Clapping"),
      bullets: [
        { label: "Passionate Art", value: "Flamenco (intense foot-stomping dance with Spanish guitar and hand clapping)" },
        { label: "Instruments", value: "Acoustic nylon-string guitar and click-clack castanets" },
        { label: "Cheer", value: "'¡Olé!' shouted when dancers do an incredible move!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Flamenca",
      img: generateOutlineSvg("👗", "TRAJE DE GITANA", "Polka Dots & Ruffled Skirts"),
      bullets: [
        { label: "Feria Dress", value: "Traje de Gitana (dramatic polka-dot ruffled dresses worn for Spring Fair in Seville)" },
        { label: "Accessories", value: "Mantón shawl with long fringe and large flower hair combs" },
        { label: "Gentlemen", value: "Traje Corto (fitted short jacket with wide-brimmed Cordobés hat)" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Fiestas & Castles",
      img: generateOutlineSvg("🏰", "CASTLES OF SPAIN", "Fairytale Alcázar of Segovia"),
      bullets: [
        { label: "Fairytale Fort", value: "The Alcázar of Segovia inspired Walt Disney's Cinderella castle!" },
        { label: "Fabulous Festivals", value: "La Tomatina (giant playful tomato fight in Buñol!)" },
        { label: "Celebration", value: "Human Towers (Castells) where kids climb to the top of 9-person towers!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "La Sagrada Família",
      img: generateOutlineSvg("⛪", "SAGRADA FAMÍLIA", "Antoni Gaudí's Forest Cathedral"),
      bullets: [
        { label: "Architectural Marvel", value: "Basílica de la Sagrada Família in Barcelona designed by Antoni Gaudí" },
        { label: "Nature Inspiration", value: "The inside looks like walking through a giant magical stone forest!" },
        { label: "Rainbow Glass", value: "Giant stained glass windows cast dancing rainbows across the floor" }
      ]
    },
    famousPeople: [
      {
        id: "rafael_nadal",
        name: "Rafael Nadal",
        role: "Tennis Legend & 22-Time Grand Slam Champion",
        img: generateOutlineSvg("🎾", "RAFAEL NADAL", "The King of Clay • 22 Grand Slams"),
        bullets: [
          { label: "Born", value: "Mallorca, Spain" },
          { label: "Achievements", value: "22 Grand Slam tennis titles and 14 French Open crowns" },
          { label: "Superpower", value: "Known for never giving up on a single point, no matter how hard!" }
        ],
        kidTrivia: "He started playing tennis when he was 3 years old and never threw his racket on the ground even once!"
      },
      {
        id: "salvador_dali",
        name: "Salvador Dalí",
        role: "Imaginative Surrealist Painter",
        img: generateOutlineSvg("🎨", "SALVADOR DALÍ", "Melting Clocks & Upturned Moustache"),
        bullets: [
          { label: "Born", value: "Figueres, Spain" },
          { label: "Famous Painting", value: "'The Persistence of Memory' featuring soft melting clocks" },
          { label: "Style", value: "Painted his wild dreams and had a famous pointy curly moustache!" }
        ],
        kidTrivia: "He had a pet ocelot leopard and loved making funny faces that made everyone laugh!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Iberian Lynx",
      img: generateOutlineSvg("🐱", "IBERIAN LYNX", "Tufted Ears & Forest Cat"),
      bullets: [
        { label: "Language", value: "Spanish (Castellano), Catalan, Galician & Basque" },
        { label: "Rare Animal", value: "Iberian Lynx (endangered wild cat with pointed tufted ears)" },
        { label: "Cheer", value: "¡Olé! (celebrating bravery and beauty)" }
      ]
    },
    funFacts: [
      {
        id: "cinderella_castle",
        title: "Cinderella Castle",
        subtitle: "Alcázar of Segovia",
        img: generateOutlineSvg("🏰", "SEGOVIA CASTLE", "Disney's Fairytale Inspiration"),
        caption: "The stone castle in Segovia, Spain helped inspire Walt Disney's Cinderella castle!",
        kidExplanation: "It sits on a cliff like a real giant stone ship and looks just like a fairytale princess castle!"
      },
      {
        id: "tomato_battle",
        title: "Giant Tomato Fight!",
        subtitle: "La Tomatina Festival",
        img: generateOutlineSvg("🍅", "LA TOMATINA", "World's Biggest Food Fight"),
        caption: "Every August in Buñol, 20,000 people throw squishy ripe tomatoes in a giant friendly food fight!",
        kidExplanation: "Trucks dump 100,000 pounds of squishy red tomatoes into the streets for the world's biggest food fight!"
      },
      {
        id: "human_towers",
        title: "Human Castles",
        subtitle: "Castells of Catalonia",
        img: generateOutlineSvg("🤸", "CASTELLS OF CATALONIA", "Towers of Brave Kids"),
        caption: "Towns build human towers up to 10 people high, with brave 6-year-old kids climbing to the very peak!",
        kidExplanation: "Kids wear foam helmets and climb all the way to the top of giant human pyramids to wave to the crowd!"
      }
    ]
  },

  ar: {
    id: "ar",
    name: "Argentina",
    adjective: "Argentine",
    flagEmoji: "🇦🇷",
    nickname: "Tierra del Fuego y Sol",
    capital: "Buenos Aires",
    region: "South America",
    greeting: "¡Hola!",
    cheer: "¡Vamos, vamos, Argentina!",
    kidIntro: "A spectacular land of roaring waterfalls, soaring snowy Andes mountains, delicious empanadas, and World Cup soccer magic!",
    card1: {
      title: "1. Country Information",
      tag: "Argentina",
      img: generateOutlineSvg("🇦🇷", "ARGENTINA MAP & FLAG", "Sun of May • Buenos Aires"),
      bullets: [
        { label: "Country Name", value: "Argentina" },
        { label: "Nickname", value: "Tierra del Sol y Plata" },
        { label: "Capital City", value: "Buenos Aires ⭐" },
        { label: "Continent", value: "South America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Empanadas & Alfajores",
      img: generateOutlineSvg("🥟", "EMPANADAS & DULCE DE LECHE", "Stuffed Pastries & Caramel Cookies"),
      bullets: [
        { label: "Snack Favorite", value: "Empanadas (golden baked pastry pockets stuffed with beef, corn, or cheese)" },
        { label: "Sweet Wonder", value: "Alfajores (soft crumbly cookies filled with sweet caramel Dulce de Leche)" },
        { label: "National Drink", value: "Mate (herbal tea shared among friends with a metal straw called a bombilla)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Tango",
      img: generateOutlineSvg("🎶", "ARGENTINE TANGO", "Bandoneón Accordion & Drama"),
      bullets: [
        { label: "Famous Dance", value: "Tango (dramatic, graceful dance born in the historic streets of Buenos Aires)" },
        { label: "Soulful Sound", value: "Bandoneón (special accordion that gives Tango its emotional heartbeat)" },
        { label: "Street Art", value: "Danced outdoors on the colorful cobblestone sidewalks of Caminito!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Gaucho",
      img: generateOutlineSvg("🐎", "GAUCHO COWBOY", "Wide Bombachas & Leather Belt"),
      bullets: [
        { label: "Pampas Cowboy", value: "Gaucho (brave Argentine horseman roaming the grassy plains)" },
        { label: "Outfit", value: "Bombachas de campo (baggy trousers), leather belt decorated with silver coins & felt hat" },
        { label: "Skill", value: "Master horse riders and caretakers of cattle" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Soccer Passion",
      img: generateOutlineSvg("⚽", "WORLD CUP CHAMPIONS", "Albアイスleste • 3 World Cups"),
      bullets: [
        { label: "National Passion", value: "Fútbol (Soccer is loved by every kid and family across the country!)" },
        { label: "World Champions", value: "3-time FIFA World Cup winners (1978, 1986, and 2022)" },
        { label: "Stadiums", value: "Fans sing, wave blue-and-white flags, and throw confetti for 90 minutes straight!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Iguazú Falls",
      img: generateOutlineSvg("🌊", "IGUAZÚ FALLS", "Garganta del Diablo Roar"),
      bullets: [
        { label: "Natural Wonder", value: "Iguazú Falls (over 275 giant waterfalls crashing together in the rainforest!)" },
        { label: "Devil's Throat", value: "Garganta del Diablo shoots massive clouds of rainbow mist into the sky" },
        { label: "Jungle Wildlife", value: "Surrounded by playful toucans, coatis, and shimmering butterflies" }
      ]
    },
    famousPeople: [
      {
        id: "lionel_messi",
        name: "Lionel Messi",
        role: "World Cup Champion & 8-Time Ballon d'Or Winner",
        img: generateOutlineSvg("⚽", "LIONEL MESSI #10", "World Cup Champion • GOAT"),
        bullets: [
          { label: "Born", value: "Rosario, Argentina" },
          { label: "World Cup Hero", value: "Led Argentina to win the 2022 FIFA World Cup!" },
          { label: "Superpower", value: "Dribbles the soccer ball as if it's glued to his left shoe!" },
          { label: "Philanthropy", value: "His Leo Messi Foundation builds playgrounds and helps sick kids" }
        ],
        kidTrivia: "When he was a little boy, his grandmother walked him to every soccer practice, and he still points to the sky for her every goal!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Magellanic Penguins",
      img: generateOutlineSvg("🐧", "PENGUINS OF PATAGONIA", "Punta Tombo Penguin Colony"),
      bullets: [
        { label: "Language", value: "Spanish (with friendly 'che' and musical Italian intonation)" },
        { label: "Penguin Beach", value: "Punta Tombo is home to over 1 million friendly Magellanic penguins!" },
        { label: "Cheer", value: "¡Vamos, vamos, Argentina!" }
      ]
    },
    funFacts: [
      {
        id: "dinosaur_giants",
        title: "Biggest Dinosaur Ever",
        subtitle: "Patagotitan Mayorum",
        img: generateOutlineSvg("🦕", "PATAGOTITAN DINOSAUR", "Bigger Than a Blue Whale"),
        caption: "The largest dinosaur ever discovered on Earth was found in Patagonia, Argentina!",
        kidExplanation: "It was as long as two school buses and weighed more than 10 African elephants!"
      },
      {
        id: "penguin_beaches",
        title: "Million Penguin Beach",
        subtitle: "Punta Tombo, Patagonia",
        img: generateOutlineSvg("🐧", "PATAGONIA PENGUINS", "Penguin Families on the Sand"),
        caption: "Over one million penguins waddle on the beaches of southern Argentina every year!",
        kidExplanation: "You can walk right along the beach path while mother penguins feed fluffy baby chicks!"
      },
      {
        id: "iguazu_rainbows",
        title: "Rainbow Waterfall",
        subtitle: "Iguazú Falls",
        img: generateOutlineSvg("🌈", "IGUAZÚ WATERFALL", "275 Crashing Waterfalls"),
        caption: "Iguazú Falls has so much mist that bright double rainbows shine over the water almost every day!",
        kidExplanation: "The roar of the waterfalls is so loud you can hear it miles away like roaring thunder!"
      }
    ]
  },

  pe: {
    id: "pe",
    name: "Peru",
    adjective: "Peruvian",
    flagEmoji: "🇵🇪",
    nickname: "Tierra de los Incas",
    capital: "Lima",
    region: "South America (Pacific Coast & Andes)",
    greeting: "¡Hola!",
    cheer: "¡Arriba Perú!",
    kidIntro: "An ancient wonderland of mountaintop Inca stone cities, fluffy friendly alpacas, and over 4,000 kinds of potatoes!",
    card1: {
      title: "1. Country Information",
      tag: "Peru",
      img: generateOutlineSvg("🇵🇪", "PERU MAP & VICUÑA", "Inca Heritage • Lima"),
      bullets: [
        { label: "Country Name", value: "Peru (República del Perú)" },
        { label: "Nickname", value: "Tierra de los Incas" },
        { label: "Capital City", value: "Lima ⭐ (gastronomy capital on the Pacific)" },
        { label: "Continent", value: "South America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Causa & Ceviche",
      img: generateOutlineSvg("🥔", "CAUSA & 4,000 POTATOES", "Rainbow Potatoes & Causa Limeña"),
      bullets: [
        { label: "Potato Capital", value: "Peru grows over 4,000 colorful varieties of native potatoes (blue, red, yellow!)" },
        { label: "Causa Limeña", value: "Layered chilled yellow potato cake filled with avocado and chicken" },
        { label: "Sweet Treat", value: "Picarones (warm sweet potato and squash donuts drizzled with spiced syrup)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Huayno & Panpipes",
      img: generateOutlineSvg("🪈", "ZAMPOÑA PANPIPES", "Andean Flutes & Marinera Dance"),
      bullets: [
        { label: "Andean Melodies", value: "Zampoña (panpipes made of bamboo tubes) and Charango (small 10-string lute)" },
        { label: "Coastal Dance", value: "Marinera (elegant courtship dance where dancers wave white handkerchiefs)" },
        { label: "Highland Beats", value: "Huayno (lively mountain dance with stamping steps and colorful skirts)" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Poncho & Chullo",
      img: generateOutlineSvg("🧶", "CHULLO HAT & PONCHO", "Warm Alpaca Wool with Ear Flaps"),
      bullets: [
        { label: "Warm Andean Hat", value: "Chullo (knitted wool hat with warm ear flaps worn in cold mountain winds)" },
        { label: "Woven Poncho", value: "Handwoven from soft alpaca fleece dyed with natural berries and plants" },
        { label: "Pollera", value: "Layered skirts embroidered with flowers and geometric Inca symbols" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Inti Raymi",
      img: generateOutlineSvg("☀️", "INTI RAYMI SUN FESTIVAL", "Inca Emperor at Sacsayhuamán"),
      bullets: [
        { label: "Festival of the Sun", value: "Inti Raymi (celebrates the Inca New Year and the winter solstice)" },
        { label: "Golden Procession", value: "Actors dress as Inca royalty with golden crowns and feathered scepters" },
        { label: "Sacsayhuamán", value: "Held at a fortress made of giant stones that fit together without cement!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Machu Picchu",
      img: generateOutlineSvg("⛰️", "MACHU PICCHU", "Lost City of the Incas in Clouds"),
      bullets: [
        { label: "Lost City", value: "Machu Picchu (perched 7,970 feet high among emerald Andes cloud forests)" },
        { label: "Inca Engineering", value: "Granite stones cut so precisely that you cannot slide a piece of paper between them!" },
        { label: "Wonder of World", value: "One of the New Seven Wonders of the World" }
      ]
    },
    famousPeople: [
      {
        id: "gaston_acurio",
        name: "Chef Gastón Acurio",
        role: "World-Famous Chef & Cultural Ambassador",
        img: generateOutlineSvg("👨‍🍳", "CHEF GASTÓN ACURIO", "Global Ambassador of Peruvian Food"),
        bullets: [
          { label: "Mission", value: "Shared Peru's delicious cuisine and biodiversity with restaurants across the globe" },
          { label: "School for Kids", value: "Opened a free culinary institute in Pachacútec for young students" }
        ],
        kidTrivia: "He showed the world that cooking with local ingredients from small farmers can change children's lives!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Llama & Alpaca",
      img: generateOutlineSvg("🦙", "FRIENDLY ALPACAS", "Fluffy Fleece & Andes Mountains"),
      bullets: [
        { label: "Languages", value: "Spanish, Quechua (Inca language), and Aymara" },
        { label: "Fluffy Mascots", value: "Llamas, Alpacas, and wild Vicuñas with the softest wool in the world" },
        { label: "Greeting", value: "¡Allianllachu! (Quechua for 'How are you?')" }
      ]
    },
    funFacts: [
      {
        id: "rainbow_mountain",
        title: "Rainbow Mountain",
        subtitle: "Vinicunca, Cusco",
        img: generateOutlineSvg("🌈", "VINICUNCA RAINBOW", "Natural Striped Mineral Mountain"),
        caption: "Vinicunca is a mountain with natural mineral stripes of turquoise, gold, lavender, and pink!",
        kidExplanation: "It looks like a giant scoop of rainbow sherbet ice cream painted across the mountains!"
      },
      {
        id: "floating_reed_islands",
        title: "Floating Grass Islands",
        subtitle: "Lake Titicaca",
        img: generateOutlineSvg("🛶", "FLOATING UROS ISLANDS", "Totora Reed Villages on Water"),
        caption: "The Uros people live on islands made completely of buoyant totora reeds floating on Lake Titicaca!",
        kidExplanation: "When the floor gets soft, they simply layer fresh yellow reeds right on top of their island!"
      },
      {
        id: "thousands_of_potatoes",
        title: "4,000 Potato Varieties",
        subtitle: "Native Andes Harvest",
        img: generateOutlineSvg("🥔", "NATIVE POTATOES", "Purple, Yellow & Red Spuds"),
        caption: "Peru gave the potato to the world, and farmers still harvest over 4,000 different shapes and colors!",
        kidExplanation: "Potatoes in Peru can be bright purple, yellow, red, and even shaped like spirals!"
      }
    ]
  },

  cr: {
    id: "cr",
    name: "Costa Rica",
    adjective: "Costa Rican",
    flagEmoji: "🇨🇷",
    nickname: "Tierra de Pura Vida",
    capital: "San José",
    region: "Central America",
    greeting: "¡Hola!",
    cheer: "¡Pura Vida!",
    kidIntro: "A lush, green wonderland of misty cloud forests, bubbling active volcanoes, surfing beaches, and smiling sloths!",
    card1: {
      title: "1. Country Information",
      tag: "Costa Rica",
      img: generateOutlineSvg("🇨🇷", "COSTA RICA MAP", "Rich Coast • San José"),
      bullets: [
        { label: "Country Name", value: "Costa Rica" },
        { label: "Nickname", value: "Tierra de Pura Vida" },
        { label: "Capital City", value: "San José ⭐" },
        { label: "Region", value: "Central America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Gallo Pinto",
      img: generateOutlineSvg("🍚", "GALLO PINTO", "Spotted Rooster Rice & Beans"),
      bullets: [
        { label: "Breakfast King", value: "Gallo Pinto ('Spotted Rooster' - rice and black beans with Lizano sweet sauce)" },
        { label: "Casado Lunch", value: "Platter of rice, beans, plantains, salad, and fresh tropical fruit" },
        { label: "Sweet Treat", value: "Chorreadas (sweet sweet-corn pancakes served with sour cream)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Punto Guanacasteco",
      img: generateOutlineSvg("🎶", "MARIMBA & PUNTO", "Wooden Marimba Keys & Shouts"),
      bullets: [
        { label: "National Dance", value: "El Punto Guanacasteco (energetic couple dance with handkerchiefs and cheering)" },
        { label: "Joyful Cry", value: "'¡Bomba!' shouted before a funny rhyming joke is told to the crowd!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje Típico",
      img: generateOutlineSvg("👗", "COSTA RICAN RUFFLES", "Swirling Rainbow Skirts"),
      bullets: [
        { label: "Traditional Colors", value: "Dresses decorated with bright red, blue, and yellow ribbon bands" },
        { label: "Oxcart Painters", value: "Famous for beautifully painted wooden carts ('Carretas') with star patterns" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Carretas Típicas",
      img: generateOutlineSvg("🛞", "PAINTED OXCART WHEEL", "Mandala Patterns of Sarchí"),
      bullets: [
        { label: "Painted Oxcart", value: "Carreta Típica (UNESCO Masterpiece painted in vivid geometric flowers)" },
        { label: "National Symbol", value: "Celebrates peaceful farmers transporting coffee down mountain trails" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Arenal Volcano",
      img: generateOutlineSvg("🌋", "ARENAL VOLCANO", "Conical Volcano & Hot Springs"),
      bullets: [
        { label: "Volcano Giant", value: "Arenal Volcano (a perfectly shaped conical volcano rising over rainforests)" },
        { label: "Natural Spa", value: "Heats natural volcanic mineral hot springs where families swim under the stars" }
      ]
    },
    famousPeople: [
      {
        id: "franklin_chang_diaz",
        name: "Dr. Franklin Chang-Díaz",
        role: "NASA Astronaut & Plasma Physicist",
        img: generateOutlineSvg("🚀", "DR. CHANG-DÍAZ", "7 Space Shuttle Missions"),
        bullets: [
          { label: "Record Holder", value: "Tied the all-time world record with 7 space shuttle flights for NASA!" },
          { label: "Space Rocket", value: "Invented the VASIMR plasma rocket to fly humans to Mars faster" }
        ],
        kidTrivia: "He moved to the US as a teenager without speaking English and grew up to become a record-setting astronaut!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Sloths & Pura Vida",
      img: generateOutlineSvg("🦥", "THREE-TOED SLOTH", "Smiling Sloths & Tree Canopies"),
      bullets: [
        { label: "National Motto", value: "¡Pura Vida! (Pure Life! Used for hello, goodbye, and everything is great!)" },
        { label: "Peace Symbol", value: "Costa Rica has NO standing army since 1948—money goes to schools and nature!" }
      ]
    },
    funFacts: [
      {
        id: "smiling_sloths",
        title: "Tree Hugging Sloths",
        subtitle: "Cloud Forest Friends",
        img: generateOutlineSvg("🦥", "SLOTH CLIMBER", "Slow-Moving Tree Friends"),
        caption: "Costa Rica is home to adorable two-toed and three-toed sloths hanging upside-down in trees!",
        kidExplanation: "Sloths move so slowly that tiny green plants actually grow on their fur like camouflage!"
      },
      {
        id: "peaceful_country",
        title: "No Army Since 1948",
        subtitle: "Schools Over Soldiers",
        img: generateOutlineSvg("🕊️", "PEACE & NATURE", "Butterflies Over Soldiers"),
        caption: "Costa Rica dissolved its military in 1948 and invests its budget in national parks and public schools!",
        kidExplanation: "Instead of soldiers, they have park rangers who protect monkeys, toucans, and sea turtles!"
      },
      {
        id: "sea_turtle_nesting",
        title: "Turtle Arrival Parade",
        subtitle: "Ostional Wildlife Refuge",
        img: generateOutlineSvg("🐢", "SEA TURTLE ARRIBADA", "Thousands of Baby Turtles"),
        caption: "Hundreds of thousands of Olive Ridley sea turtles crawl onto the sand at once in an 'Arribada'!",
        kidExplanation: "Thousands of mama turtles crawl out of the waves together under the moonlight to lay their eggs!"
      }
    ]
  }
};

// Global App State
let STATE = {
  studentName: "Izzy",
  schoolName: "North Beach Elementary",
  grade: "Kindergarten",
  event: "Hispanic Heritage Month",
  countryKey: "pr",
  selectedHeroIndex: 0,
  selectedFactIndices: [0, 1, 2],
  avatar: "🦁"
};

// Interactive "Find My Country" Quiz Questions
const QUIZ_QUESTIONS = [
  {
    q: "1. Where do you want your adventure to take place?",
    sub: "Choose your favorite kind of landscape to explore!",
    options: [
      { text: "A tropical island with turquoise beaches & glowing water 🏝️", match: "pr" },
      { text: "Ancient stone pyramids, cacti & desert sun 🏛️", match: "mx" },
      { text: "Sunny palm tree beaches with dancing music 🇩🇴", match: "dr" },
      { text: "Misty mountains with tallest palm trees & butterflies 🌿", match: "co" },
      { text: "Fairytale stone castles & flamenco dancers 🏰", match: "es" },
      { text: "Snowy Andes mountains, waterfalls & penguin beaches 🏔️", match: "ar" },
      { text: "Mountaintop Inca ruins & rainbow mountains ⛰️", match: "pe" },
      { text: "Cloud forests with volcanoes & smiling sloths 🦥", match: "cr" }
    ]
  },
  {
    q: "2. What sounds like the yummiest lunch?",
    sub: "Which food would make your tummy happiest?",
    options: [
      { text: "Savory plantains mashed with garlic & tropical fruit shaved ice 🍧", match: "pr" },
      { text: "Warm corn tacos with guacamole & cinnamon churros 🌮", match: "mx" },
      { text: "Creamy mangú with fried cheese & orange dream smoothie 🍳", match: "dr" },
      { text: "Cheesy golden corn arepas & passion fruit smoothies 🧀", match: "co" },
      { text: "Golden paella with saffron rice & churros con chocolate 🥘", match: "es" },
      { text: "Crunchy baked empanadas & sweet caramel dulce de leche 🥟", match: "ar" },
      { text: "Layered yellow potato causa & sweet picarones donuts 🥔", match: "pe" },
      { text: "Gallo pinto rice & beans with sweet corn pancakes 🍚", match: "cr" }
    ]
  },
  {
    q: "3. Which friendly animal would you love to meet?",
    sub: "Every country has a special creature mascot!",
    options: [
      { text: "A tiny singing tree frog that chirps '¡Ko-Kee!' at sunset 🐸", match: "pr" },
      { text: "A smiling underwater salamander with pink feathery gills 🦎", match: "mx" },
      { text: "A gentle mother humpback whale splashing with her baby calf 🐋", match: "dr" },
      { text: "A giant condor bird soaring with 10-foot wings 🦅", match: "co" },
      { text: "A rare wild lynx cat with tufted ears 🐱", match: "es" },
      { text: "Fluffy penguins waddling along the beach 🐧", match: "ar" },
      { text: "A soft, fluffy alpaca smiling high in the mountains 🦙", match: "pe" },
      { text: "A smiling sloth hanging upside-down in a tree 🦥", match: "cr" }
    ]
  },
  {
    q: "4. What kind of superstar hero inspires you the most?",
    sub: "Pick the person you'd love to learn from!",
    options: [
      { text: "A music star who gets whole stadiums dancing in traditional straw hats 🎤", match: "pr" },
      { text: "A brave artist who painted colorful animals and self-portraits 🎨", match: "mx" },
      { text: "A baseball hall-of-famer who saves kids' lives with his foundation ⚾", match: "dr" },
      { text: "A global pop superstar who builds schools for children 🏫", match: "co" },
      { text: "A sports legend who never gives up on a single point 🎾", match: "es" },
      { text: "A World Cup soccer champion who dribbles with magic in his boots ⚽", match: "ar" },
      { text: "A world-renowned chef who opens cooking schools for students 👨‍🍳", match: "pe" },
      { text: "An astronaut who flew to space 7 times and builds Mars rockets 🚀", match: "cr" }
    ]
  }
];

let quizAnswers = [];
let quizStep = 0;

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  initCountrySelector();
  initFormBindings();
  renderApp();
});

// Setup country selector pills
function initCountrySelector() {
  const container = document.getElementById("country-pills");
  if (!container) return;
  container.innerHTML = "";

  Object.values(COUNTRY_DATA).forEach(country => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `px-3 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 transition border-2 ${
      STATE.countryKey === country.id
        ? "bg-blue-600 text-white border-blue-700 shadow-md scale-105"
        : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
    }`;
    btn.innerHTML = `<span>${country.flagEmoji}</span> <span>${country.name}</span>`;
    btn.onclick = () => selectCountry(country.id);
    container.appendChild(btn);
  });
}

function selectCountry(countryId) {
  STATE.countryKey = countryId;
  STATE.selectedHeroIndex = 0;
  STATE.selectedFactIndices = [0, 1, 2];
  initCountrySelector();
  renderApp();
}

function initFormBindings() {
  const nameInput = document.getElementById("input-student-name");
  const schoolInput = document.getElementById("input-school-name");
  const gradeInput = document.getElementById("input-grade");
  const eventInput = document.getElementById("input-event");

  if (nameInput) {
    nameInput.value = STATE.studentName;
    nameInput.addEventListener("input", (e) => {
      STATE.studentName = e.target.value.trim() || "Explorer";
      updateLivePreviews();
    });
  }

  if (schoolInput) {
    schoolInput.value = STATE.schoolName;
    schoolInput.addEventListener("input", (e) => {
      STATE.schoolName = e.target.value.trim() || "Elementary School";
      updateLivePreviews();
    });
  }

  if (gradeInput) {
    gradeInput.value = STATE.grade;
    gradeInput.addEventListener("input", (e) => {
      STATE.grade = e.target.value.trim() || "Grade";
      updateLivePreviews();
    });
  }

  if (eventInput) {
    eventInput.value = STATE.event;
    eventInput.addEventListener("input", (e) => {
      STATE.event = e.target.value.trim() || "Cultural Display";
      updateLivePreviews();
    });
  }
}

// Master Render
function renderApp() {
  const country = COUNTRY_DATA[STATE.countryKey];
  if (!country) return;

  renderHeroSelector(country);
  renderFunFactsPicker(country);
  renderKidLearningChallenge(country);
  renderPresentationScript(country);
  updateLivePreviews();
}

// Famous Person Selector
function renderHeroSelector(country) {
  const container = document.getElementById("hero-picker-container");
  if (!container) return;
  container.innerHTML = "";

  country.famousPeople.forEach((hero, index) => {
    const isSelected = STATE.selectedHeroIndex === index;
    const card = document.createElement("div");
    card.className = `p-3 rounded-xl border-2 cursor-pointer transition flex gap-3 items-center ${
      isSelected
        ? "border-blue-600 bg-blue-50/80 shadow-md ring-2 ring-blue-400"
        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
    }`;
    card.onclick = () => {
      STATE.selectedHeroIndex = index;
      renderHeroSelector(country);
      updateLivePreviews();
    };

    const imgBox = document.createElement("div");
    imgBox.className = "w-14 h-14 rounded-lg bg-white border border-slate-300 flex-shrink-0 overflow-hidden flex items-center justify-center p-0.5";
    imgBox.innerHTML = `<img src="${hero.img}" class="w-full h-full object-contain" alt="${hero.name}">`;

    const info = document.createElement("div");
    info.className = "flex-1";
    info.innerHTML = `
      <div class="flex items-center justify-between">
        <h4 class="font-extrabold text-xs md:text-sm text-slate-900">${hero.name}</h4>
        <span class="text-[11px] px-2 py-0.5 rounded-full font-bold ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}">
          ${isSelected ? 'Selected ⭐' : 'Choose'}
        </span>
      </div>
      <p class="text-xs font-semibold text-blue-800">${hero.role}</p>
      <p class="text-[11px] text-slate-600 mt-0.5 italic leading-tight">"${hero.kidTrivia}"</p>
    `;

    card.appendChild(imgBox);
    card.appendChild(info);
    container.appendChild(card);
  });
}

// Fun Facts Picker
function renderFunFactsPicker(country) {
  const container = document.getElementById("facts-picker-container");
  const countLabel = document.getElementById("facts-count-badge");
  if (!container) return;
  container.innerHTML = "";

  if (countLabel) {
    countLabel.textContent = `${STATE.selectedFactIndices.length} of 3 Selected`;
    countLabel.className = STATE.selectedFactIndices.length === 3
      ? "text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800"
      : "text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800";
  }

  country.funFacts.forEach((fact, index) => {
    const isChecked = STATE.selectedFactIndices.includes(index);
    const card = document.createElement("div");
    card.className = `p-2.5 rounded-xl border-2 cursor-pointer transition flex items-center gap-3 ${
      isChecked
        ? "border-amber-500 bg-amber-50/70 shadow-sm"
        : "border-slate-200 bg-white hover:border-slate-300"
    }`;

    card.onclick = () => {
      toggleFactIndex(index);
      renderFunFactsPicker(country);
      updateLivePreviews();
    };

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isChecked;
    checkbox.className = "w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer pointer-events-none";

    const imgThumb = document.createElement("div");
    imgThumb.className = "w-10 h-10 bg-white rounded border border-slate-300 overflow-hidden flex-shrink-0 flex items-center justify-center p-0.5";
    imgThumb.innerHTML = `<img src="${fact.img}" class="w-full h-full object-contain" alt="${fact.title}">`;

    const desc = document.createElement("div");
    desc.className = "flex-1";
    desc.innerHTML = `
      <div class="flex items-center gap-1.5">
        <span class="font-extrabold text-xs text-slate-900">${fact.title}</span>
        <span class="text-[10px] text-slate-500">(${fact.subtitle})</span>
      </div>
      <p class="text-[11px] text-slate-600 leading-tight mt-0.5">${fact.kidExplanation}</p>
    `;

    card.appendChild(checkbox);
    card.appendChild(imgThumb);
    card.appendChild(desc);
    container.appendChild(card);
  });
}

function toggleFactIndex(index) {
  const current = [...STATE.selectedFactIndices];
  const pos = current.indexOf(index);
  if (pos >= 0) {
    if (current.length > 1) current.splice(pos, 1);
  } else {
    if (current.length < 3) {
      current.push(index);
    } else {
      current.shift();
      current.push(index);
    }
  }
  STATE.selectedFactIndices = current;
}

// Kid Learning Challenge
function renderKidLearningChallenge(country) {
  const container = document.getElementById("kid-learning-box");
  if (!container) return;

  const hero = country.famousPeople[STATE.selectedHeroIndex] || country.famousPeople[0];
  container.innerHTML = `
    <div class="bg-gradient-to-r from-sky-50 to-indigo-50 border-2 border-sky-300 rounded-2xl p-4 shadow-sm">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-2xl">🎓</span>
        <h3 class="font-black text-sky-950 text-sm uppercase tracking-wider">${STATE.studentName}'s Explorer Challenge: ${country.name}</h3>
      </div>
      <p class="text-xs text-slate-700 leading-relaxed mb-3">
        Here are 3 fun questions for <strong>${STATE.studentName}</strong> to discover with family or classmates:
      </p>
      <div class="space-y-2">
        <div class="bg-white p-2.5 rounded-xl border border-sky-200 text-xs">
          <p class="font-bold text-sky-900">1. Can you shout the cheer out loud?</p>
          <p class="text-slate-600 mt-0.5">In ${country.name}, people shout <strong>"${country.cheer}"</strong> when they celebrate! Let's practice saying it together!</p>
        </div>
        <div class="bg-white p-2.5 rounded-xl border border-sky-200 text-xs">
          <p class="font-bold text-sky-900">2. Who is our superstar hero today?</p>
          <p class="text-slate-600 mt-0.5">We picked <strong>${hero.name}</strong>! Why? <em>${hero.kidTrivia}</em></p>
        </div>
        <div class="bg-white p-2.5 rounded-xl border border-sky-200 text-xs">
          <p class="font-bold text-sky-900">3. Which yummy food would you taste first?</p>
          <p class="text-slate-600 mt-0.5">${country.card2.bullets[0].value}</p>
        </div>
      </div>
    </div>
  `;
}

// Presentation Script with Speech Synthesis
function renderPresentationScript(country) {
  const container = document.getElementById("presentation-script-box");
  if (!container) return;

  const hero = country.famousPeople[STATE.selectedHeroIndex] || country.famousPeople[0];
  const chosenFacts = STATE.selectedFactIndices.map(i => country.funFacts[i] || country.funFacts[0]);

  const scriptLines = [
    `¡Hola! My name is ${STATE.studentName}, and I am in ${STATE.grade} at ${STATE.schoolName}!`,
    `Today, I am proud to share my country: ${country.name}! ${country.flagEmoji}`,
    `The capital city is ${country.capital}, and its nickname is the "${country.nickname}".`,
    `A delicious food from ${country.name} is ${country.card2.tag}!`,
    `My favorite famous hero is ${hero.name}! ${hero.kidTrivia}`,
    `A super cool fun fact is: ${chosenFacts[0].kidExplanation}`,
    `Thank you! ¡Muchas Gracias! ${country.cheer}`
  ];

  container.innerHTML = `
    <div class="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎤</span>
          <h4 class="font-black text-amber-950 text-sm uppercase">1-Minute Speaking Script for ${STATE.studentName}</h4>
        </div>
        <button id="btn-speak-script" class="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg shadow flex items-center gap-1 transition">
          <span>🔊</span> <span>Listen &amp; Practice</span>
        </button>
      </div>
      <div class="space-y-2 text-xs md:text-sm text-slate-800 font-medium">
        ${scriptLines.map((line, idx) => `
          <div class="flex gap-2 items-start bg-white/80 p-2 rounded-lg border border-amber-200">
            <span class="font-bold text-amber-800 w-5 flex-shrink-0">${idx + 1}.</span>
            <p class="leading-relaxed">${line}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const speakBtn = document.getElementById("btn-speak-script");
  if (speakBtn) {
    speakBtn.onclick = () => speakText(scriptLines.join(" "));
  }
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

// Live DOM Updates
function updateLivePreviews() {
  const country = COUNTRY_DATA[STATE.countryKey];
  if (!country) return;

  const hero = country.famousPeople[STATE.selectedHeroIndex] || country.famousPeople[0];
  const chosenFacts = STATE.selectedFactIndices.map(i => country.funFacts[i] || country.funFacts[0]);

  // Mockup Banner
  const mockupBannerName = document.getElementById("mockup-banner-name");
  const mockupBannerTitle = document.getElementById("mockup-banner-title");
  const mockupBannerSubtitle = document.getElementById("mockup-banner-subtitle");
  const mockupSchoolHeader = document.getElementById("mockup-school-header");

  if (mockupBannerName) mockupBannerName.textContent = `${STATE.studentName.toUpperCase()}’S`;
  if (mockupBannerTitle) mockupBannerTitle.textContent = `${country.name.toUpperCase()} ADVENTURE!`;
  if (mockupBannerSubtitle) mockupBannerSubtitle.textContent = `Featuring: Food, Music, History, ${hero.name} & The ${country.card8.tag}! ${country.flagEmoji}`;
  if (mockupSchoolHeader) mockupSchoolHeader.textContent = `${STATE.schoolName.toUpperCase()} • ${STATE.event.toUpperCase()} • ${STATE.grade.toUpperCase()}`;

  // Sheet 1 SVG (Rotated 90° for Max 9.8" x 4.8" Size)
  const svgLine1 = document.getElementById("svg-banner-line1");
  const svgLine2 = document.getElementById("svg-banner-line2");
  const svgHeader = document.getElementById("svg-banner-header");
  const svgSub1 = document.getElementById("svg-banner-sub1");
  const svgSub2 = document.getElementById("svg-banner-sub2");
  const svgSub3 = document.getElementById("svg-banner-sub3");

  if (svgLine1) svgLine1.textContent = `${STATE.studentName.toUpperCase()}’S`;
  if (svgLine2) svgLine2.textContent = `${country.name.toUpperCase()} ADVENTURE!`;
  if (svgHeader) svgHeader.textContent = `${STATE.schoolName.toUpperCase()} • ${STATE.event.toUpperCase()} • ${STATE.grade.toUpperCase()}`;
  if (svgSub1) svgSub1.textContent = `📍 ${country.capital}, ${country.name}`;
  if (svgSub2) svgSub2.textContent = `⭐ Food • Music • History • ${hero.name} ⭐`;
  if (svgSub3) svgSub3.textContent = `🌺 ${country.nickname}`;

  // Cards 1-6
  updateCardDOM("card-1", country.card1);
  updateCardDOM("card-2", country.card2);
  updateCardDOM("card-3", country.card3);
  updateCardDOM("card-4", country.card4);
  updateCardDOM("card-5", country.card5);
  updateCardDOM("card-6", country.card6);

  // Card 7: Famous Person
  const card7Data = {
    title: "7. Famous Person",
    tag: hero.name,
    img: hero.img,
    bullets: hero.bullets
  };
  updateCardDOM("card-7", card7Data);

  // Card 8: Language & Nature
  updateCardDOM("card-8", country.card8);

  // Card 9: 3 Chosen Fun Facts
  updateCard9DOM(chosenFacts, country);

  // Sheet 6 Presentation Cue Cards
  updateCueCardsDOM(hero, country, chosenFacts);

  // Footer Credits
  const footerBadges = document.querySelectorAll(".student-footer-credit");
  footerBadges.forEach(el => {
    el.textContent = `⭐ ${STATE.studentName} • ${STATE.schoolName} • Ready to Share My Culture! ❤️`;
  });
}

function updateCardDOM(cardId, data) {
  // Sheet Card
  const sheetCard = document.getElementById(`sheet-${cardId}`);
  if (sheetCard) {
    const titleEl = sheetCard.querySelector(".card-title");
    const tagEl = sheetCard.querySelector(".card-tag");
    const imgEl = sheetCard.querySelector(".card-img");
    const bulletsEl = sheetCard.querySelector(".card-bullets");

    if (titleEl) titleEl.textContent = data.title;
    if (tagEl) tagEl.textContent = data.tag;
    if (imgEl) {
      imgEl.src = data.img;
      imgEl.alt = data.title;
    }
    if (bulletsEl && data.bullets) {
      bulletsEl.innerHTML = data.bullets.map(b => `
        <p><strong>${b.label}:</strong><br><span class="text-slate-800">${b.value}</span></p>
      `).join("");
    }
  }

  // Mockup Mini-Card
  const mockCard = document.getElementById(`mock-${cardId}`);
  if (mockCard) {
    const titleEl = mockCard.querySelector(".mock-title");
    const tagEl = mockCard.querySelector(".mock-tag");
    const imgEl = mockCard.querySelector(".mock-img");
    const summaryEl = mockCard.querySelector(".mock-summary");

    if (titleEl) titleEl.textContent = data.title;
    if (tagEl) tagEl.textContent = data.tag;
    if (imgEl) {
      imgEl.src = data.img;
      imgEl.alt = data.title;
    }
    if (summaryEl && data.bullets) {
      summaryEl.innerHTML = `
        <span><strong>${data.bullets[0].label}:</strong> ${data.bullets[0].value.split('(')[0]}</span>
      `;
    }
  }
}

function updateCard9DOM(chosenFacts, country) {
  const sheetCard9 = document.getElementById("sheet-card-9");
  if (sheetCard9) {
    const tagEl = sheetCard9.querySelector(".card-tag");
    if (tagEl) tagEl.textContent = country.name;

    const factsGrid = sheetCard9.querySelector(".card-facts-grid");
    if (factsGrid && chosenFacts.length >= 3) {
      factsGrid.innerHTML = `
        <div class="border border-slate-300 rounded p-1.5 flex flex-col items-center justify-between bg-white text-center">
          <div class="h-28 w-full flex items-center justify-center p-1 bg-white">
            <img src="${chosenFacts[0].img}" class="h-full w-full object-contain" alt="${chosenFacts[0].title}">
          </div>
          <p class="font-bold text-slate-800 text-[11px] mt-1">${chosenFacts[0].title}</p>
          <p class="text-[10px] text-slate-600 leading-tight mt-0.5">${chosenFacts[0].caption}</p>
        </div>
        <div class="border border-slate-300 rounded p-1.5 flex flex-col items-center justify-between bg-white text-center">
          <div class="h-28 w-full flex items-center justify-center p-1 bg-white">
            <img src="${chosenFacts[1].img}" class="h-full w-full object-contain" alt="${chosenFacts[1].title}">
          </div>
          <p class="font-bold text-slate-800 text-[11px] mt-1">${chosenFacts[1].title}</p>
          <p class="text-[10px] text-slate-600 leading-tight mt-0.5">${chosenFacts[1].caption}</p>
        </div>
        <div class="border border-slate-300 rounded p-1.5 flex flex-col items-center justify-between bg-white text-center">
          <div class="h-28 w-full flex items-center justify-center p-1 bg-white">
            <img src="${chosenFacts[2].img}" class="h-full w-full object-contain" alt="${chosenFacts[2].title}">
          </div>
          <p class="font-bold text-slate-800 text-[11px] mt-1">${chosenFacts[2].title}</p>
          <p class="text-[10px] text-slate-600 leading-tight mt-0.5">${chosenFacts[2].caption}</p>
        </div>
      `;
    }
  }

  const mockCard9 = document.getElementById("mock-card-9");
  if (mockCard9 && chosenFacts.length >= 3) {
    const mockGrid = mockCard9.querySelector(".mock-facts-grid");
    if (mockGrid) {
      mockGrid.innerHTML = `
        <div class="border rounded p-1 flex flex-col items-center bg-white text-center">
          <img src="${chosenFacts[0].img}" class="h-12 w-full object-contain" alt="${chosenFacts[0].title}">
          <span class="text-[9px] font-bold text-slate-700 mt-0.5">${chosenFacts[0].title}</span>
        </div>
        <div class="border rounded p-1 flex flex-col items-center bg-white text-center">
          <img src="${chosenFacts[1].img}" class="h-12 w-full object-contain" alt="${chosenFacts[1].title}">
          <span class="text-[9px] font-bold text-slate-700 mt-0.5">${chosenFacts[1].title}</span>
        </div>
        <div class="border rounded p-1 flex flex-col items-center bg-white text-center">
          <img src="${chosenFacts[2].img}" class="h-12 w-full object-contain" alt="${chosenFacts[2].title}">
          <span class="text-[9px] font-bold text-slate-700 mt-0.5">${chosenFacts[2].title}</span>
        </div>
      `;
    }
    const mockSummary = mockCard9.querySelector(".mock-summary");
    if (mockSummary) {
      mockSummary.textContent = `${chosenFacts[0].title} • ${chosenFacts[1].title} • ${chosenFacts[2].title}`;
    }
  }
}

function updateCueCardsDOM(hero, country, chosenFacts) {
  const cardAIntro = document.getElementById("cue-card-a-text");
  const cardBText = document.getElementById("cue-card-b-text");

  if (cardAIntro) {
    cardAIntro.innerHTML = `"¡Hola! My name is <strong>${STATE.studentName}</strong> and I am in ${STATE.grade} at ${STATE.schoolName}! Today I am presenting <strong>${country.name}</strong> (${country.nickname})!"`;
  }
  if (cardBText) {
    cardBText.innerHTML = `"My favorite hero is <strong>${hero.name}</strong>, and my favorite food is <strong>${country.card2.tag}</strong>! Did you know: <em>${chosenFacts[0].kidExplanation}</em>"`;
  }
}

// -----------------------------
// INTERACTIVE "WHICH COUNTRY SHOULD I DO?" QUIZ
// -----------------------------

function openQuizModal() {
  quizStep = 0;
  quizAnswers = [];
  const modal = document.getElementById("country-quiz-modal");
  if (modal) {
    modal.classList.remove("hidden");
    renderQuizStep();
  }
}

function closeQuizModal() {
  const modal = document.getElementById("country-quiz-modal");
  if (modal) modal.classList.add("hidden");
}

function renderQuizStep() {
  const modalContent = document.getElementById("quiz-step-content");
  if (!modalContent) return;

  if (quizStep < QUIZ_QUESTIONS.length) {
    const q = QUIZ_QUESTIONS[quizStep];
    modalContent.innerHTML = `
      <div class="space-y-4">
        <div class="flex justify-between items-center text-xs font-bold text-blue-600 uppercase tracking-widest border-b pb-2">
          <span>Question ${quizStep + 1} of ${QUIZ_QUESTIONS.length}</span>
          <span>Explorer Quiz 🧭</span>
        </div>
        <div>
          <h3 class="text-base md:text-lg font-black text-slate-900">${q.q}</h3>
          <p class="text-xs text-slate-500">${q.sub}</p>
        </div>
        <div class="space-y-2 max-h-80 overflow-y-auto pr-1">
          ${q.options.map((opt, i) => `
            <button onclick="handleQuizAnswer('${opt.match}')" class="w-full text-left p-3 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-xs md:text-sm font-semibold transition flex items-center justify-between group">
              <span>${opt.text}</span>
              <span class="text-slate-400 group-hover:text-blue-600 font-bold">➔</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  } else {
    // Calculate Winner Match
    const tally = {};
    quizAnswers.forEach(id => { tally[id] = (tally[id] || 0) + 1; });
    let bestMatch = "pr";
    let maxVotes = 0;
    Object.keys(tally).forEach(id => {
      if (tally[id] > maxVotes) {
        maxVotes = tally[id];
        bestMatch = id;
      }
    });

    const matchCountry = COUNTRY_DATA[bestMatch] || COUNTRY_DATA.pr;

    modalContent.innerHTML = `
      <div class="text-center space-y-4 py-3">
        <span class="text-5xl animate-bounce inline-block">🎉</span>
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-600">Great Job Explorer!</span>
          <h3 class="text-2xl font-black text-slate-900">Your Perfect Match: ${matchCountry.name} ${matchCountry.flagEmoji}</h3>
          <p class="text-xs text-slate-600 max-w-md mx-auto mt-1">${matchCountry.kidIntro}</p>
        </div>
        <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
          ⭐ Cheer to practice: <strong>"${matchCountry.cheer}"</strong> • Famous Food: <strong>${matchCountry.card2.tag}</strong>
        </div>
        <button onclick="applyQuizMatch('${matchCountry.id}')" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm rounded-xl shadow-lg transition">
          🚀 Start My ${matchCountry.name} Adventure!
        </button>
      </div>
    `;
  }
}

function handleQuizAnswer(matchId) {
  quizAnswers.push(matchId);
  quizStep++;
  renderQuizStep();
}

function applyQuizMatch(countryId) {
  selectCountry(countryId);
  closeQuizModal();
  // Scroll to studio
  const studio = document.getElementById("builder-studio");
  if (studio) studio.scrollIntoView({ behavior: "smooth" });
}

// Global functions
window.selectCountry = selectCountry;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
window.handleQuizAnswer = handleQuizAnswer;
window.applyQuizMatch = applyQuizMatch;
window.speakText = speakText;
