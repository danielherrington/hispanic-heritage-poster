/**
 * Kids Country Poster Board Builder & Interactive Learning Tool
 * North Beach Elementary & Culture Displays
 * Fully Debugged & Calibrated Version
 */

// Helper to generate crisp, colorable 100% Black-and-White vector SVG line art
function generateColoringSvg(type, iconSymbol, title, subline) {
  // Pure B&W outlines with colorable hollow white interiors
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
    <!-- Outer Card Frame -->
    <rect width="100%" height="100%" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
    <rect x="15" y="15" width="570" height="420" rx="14" fill="#ffffff" stroke="#334155" stroke-dasharray="8,8" stroke-width="2.5"/>
    
    <!-- Decorative Colorable Corner Stars -->
    <polygon points="45,45 51,60 67,62 55,73 59,88 45,80 31,88 35,73 23,62 39,60" fill="#ffffff" stroke="#000000" stroke-width="2.5" stroke-linejoin="round"/>
    <polygon points="555,45 561,60 577,62 565,73 569,88 555,80 541,88 545,73 533,62 549,60" fill="#ffffff" stroke="#000000" stroke-width="2.5" stroke-linejoin="round"/>

    <!-- Central Colorable Artwork Vignette -->
    <circle cx="300" cy="165" r="95" fill="#ffffff" stroke="#000000" stroke-width="4"/>
    <circle cx="300" cy="165" r="82" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="6,6" stroke-width="2"/>
    
    <!-- Central Icon/Symbol -->
    <text x="300" y="195" text-anchor="middle" font-size="80">${iconSymbol}</text>

    <!-- Colorable Title Bubble Letters -->
    <text x="300" y="305" text-anchor="middle" font-family="'Arial Black', Impact, sans-serif" font-weight="900" font-size="28" fill="#ffffff" stroke="#000000" stroke-width="3" letter-spacing="1.5">
      ${title}
    </text>

    <!-- Clear Subline Label -->
    <text x="300" y="348" text-anchor="middle" font-family="'Arial', sans-serif" font-weight="bold" font-size="19" fill="#1e293b">
      ${subline}
    </text>

    <!-- Bottom Colorable Flowers & Guide -->
    <line x1="100" y1="395" x2="500" y2="395" stroke="#cbd5e1" stroke-width="2"/>
    <polygon points="250,405 255,415 267,416 258,424 261,435 250,429 239,435 242,424 233,416 245,415" fill="#ffffff" stroke="#000000" stroke-width="2"/>
    <polygon points="300,405 305,415 317,416 308,424 311,435 300,429 289,435 292,424 283,416 295,415" fill="#ffffff" stroke="#000000" stroke-width="2"/>
    <polygon points="350,405 355,415 367,416 358,424 361,435 350,429 339,435 342,424 333,416 345,415" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// 10 Rich, Full Country Catalogs
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
    kidIntro: "A warm tropical island surrounded by turquoise ocean waters with singing tiny frogs and historic seaside forts!",
    card1: {
      title: "1. Country Information",
      tag: "Puerto Rico",
      img: "images/pr_flag_map_bw_1791649663152.jpg",
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
      img: "images/mofongo_malta_coloring_1791649366385.jpg",
      bullets: [
        { label: "Main Dish", value: "Mofongo (mashed plantains with garlic in a wooden pilón bowl!)" },
        { label: "Sweet Treat", value: "Piragua (shaved ice drizzled with tropical fruit syrup)" },
        { label: "Favorite Drink", value: "Malta India (fizzy, sweet malt beverage)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Bomba & Plena",
      img: "images/bomba_dance_coloring_1791649428063.jpg",
      bullets: [
        { label: "Folk Dance", value: "Bomba (dancers challenge drummers with swishing skirts!)" },
        { label: "Storytelling Beat", value: "Plena ('the singing newspaper' of the island)" },
        { label: "Instruments", value: "Maracas, Barril drums, and Güiro scraper" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Jíbaro",
      img: "images/traditional_clothing_coloring_1791649442768.jpg",
      bullets: [
        { label: "Boy's Outfit", value: "Straw pava hat, crisp white shirt & red bandana sash" },
        { label: "Girl's Outfit", value: "Flowing white dress with ruffles & island hibiscus flowers" },
        { label: "Heritage", value: "Jíbaro pride celebrating mountain farmers and country life" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Vejigante Masks",
      img: "images/vejigante_mask_coloring_1791649380499.jpg",
      bullets: [
        { label: "Carnival Tradition", value: "Vejigante masks for Ponce Carnival & Fiesta Santiago Apóstol" },
        { label: "How It's Made", value: "Crafted from papier-mâché or dried coconuts with many horns!" },
        { label: "Style", value: "Bold polka dots, wild smiling teeth & vibrant parade dances" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "El Morro",
      img: "images/castillo_el_morro_bw_1791649678009.jpg",
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
        img: "images/bad_bunny_landscape_1791650572668.jpg",
        bullets: [
          { label: "Full Name", value: "Benito Antonio Martínez Ocasio" },
          { label: "Born", value: "Vega Baja, Puerto Rico" },
          { label: "Achievement", value: "Grammy winner & one of the most streamed artists in the world!" },
          { label: "Kid Superpower", value: "Wears the traditional straw pava hat and shares island culture" }
        ],
        kidTrivia: "He loves wearing traditional straw hats from Puerto Rico and writes songs that make millions dance!"
      },
      {
        id: "roberto_clemente",
        name: "Roberto Clemente",
        role: "Baseball Hall of Famer & Humanitarian Hero",
        img: generateColoringSvg("hero", "⚾", "ROBERTO CLEMENTE #21", "Baseball Legend & Hero"),
        bullets: [
          { label: "Born", value: "Carolina, Puerto Rico" },
          { label: "Achievement", value: "Hall of Famer, 3,000 hits, and 12-time Gold Glove winner" },
          { label: "Humanitarian", value: "Spent off-seasons delivering food, medicine & gear to children" },
          { label: "Legacy", value: "MLB's highest community service award is named in his honor" }
        ],
        kidTrivia: "He wasn't just an amazing baseball player—he spent his free time bringing food and toys to families!"
      },
      {
        id: "sonia_sotomayor",
        name: "Sonia Sotomayor",
        role: "First Latina US Supreme Court Justice",
        img: generateColoringSvg("hero", "⚖️", "JUSTICE SOTOMAYOR", "First Latina Supreme Court Justice"),
        bullets: [
          { label: "Heritage", value: "Proud Puerto Rican family roots" },
          { label: "Historic First", value: "First Hispanic Justice on the US Supreme Court (appointed 2009)" },
          { label: "Superpower", value: "Passionate reader who solved mysteries like Nancy Drew as a kid!" },
          { label: "Author", value: "Writes inspirational children's books teaching kids to never give up" }
        ],
        kidTrivia: "As a young girl, she loved reading books and dreamed big. Today she makes important decisions for the nation!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Coquí Frog",
      img: "images/coqui_frog_coloring_1791649457119.jpg",
      bullets: [
        { label: "Official Language", value: "Spanish & English" },
        { label: "Beloved Mascot", value: "The tiny Coquí tree frog (only 1 inch long!)" },
        { label: "Its Song", value: "Sings '¡Ko-Kee! ¡Ko-Kee!' every evening at sunset" },
        { label: "Island Cheer", value: "¡Wepa! (expresses pure joy, excitement, and celebration!)" }
      ]
    },
    funFacts: [
      {
        id: "glowing_water",
        title: "Glowing Bay",
        subtitle: "Mosquito Bay, Vieques",
        img: "images/glowing_water_coloring_1791650764522.jpg",
        caption: "Bioluminescent waters light up with glowing blue magic whenever touched!",
        kidExplanation: "Tiny creatures in the water light up like neon blue glow-sticks when you splash your hands!"
      },
      {
        id: "plane_clapping",
        title: "Airport Clap",
        subtitle: "San Juan Landing",
        img: "images/plane_clapping_coloring_1791650782941.jpg",
        caption: "Passengers burst into applause when landing in San Juan to celebrate coming home!",
        kidExplanation: "When the airplane wheels touch down in Puerto Rico, the whole plane claps and cheers with happiness!"
      },
      {
        id: "pirate_gold",
        title: "Pirate Gold",
        subtitle: "Cabo Rojo Caves",
        img: "images/pirate_treasure_coloring_1791650801521.jpg",
        caption: "Pirate Roberto Cofresí hid treasure chests in sea caves along Cabo Rojo!",
        kidExplanation: "A real pirate used to sail the Caribbean and hid secret chests filled with gold inside beach caves!"
      },
      {
        id: "rainforest",
        title: "El Yunque Jungle",
        subtitle: "Only US Rainforest",
        img: generateColoringSvg("fact", "🌿", "EL YUNQUE RAINFOREST", "Misty Waterfalls & Giant Ferns"),
        caption: "El Yunque is the ONLY tropical rainforest in the US National Forest system!",
        kidExplanation: "It rains almost every day here, creating giant misty waterfalls and trees taller than school buildings!"
      },
      {
        id: "giant_telescope",
        title: "Giant Telescope",
        subtitle: "Arecibo Dish",
        img: generateColoringSvg("fact", "📡", "ARECIBO TELESCOPE", "Giant Radio Dish in the Mountains"),
        caption: "Arecibo was once home to a gigantic 1,000-foot radio dish listening for signals in deep space!",
        kidExplanation: "Scientists built a radio bowl bigger than three football fields to listen for stars in outer space!"
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
      img: generateColoringSvg("map", "🇲🇽", "MEXICO MAP & FLAG", "Golden Eagle, Serpent & Cactus"),
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
      img: generateColoringSvg("food", "🌮", "TACOS & HORCHATA", "Fresh Tortillas & Sweet Churros"),
      bullets: [
        { label: "Favorite Food", value: "Tacos al Pastor (warm corn tortillas with pineapple & lime)" },
        { label: "Sweet Treat", value: "Churros rolled in cinnamon sugar dipped in hot chocolate" },
        { label: "Refreshing Drink", value: "Agua de Horchata (sweet vanilla cinnamon rice milk)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Mariachi",
      img: generateColoringSvg("music", "🎺", "MARIACHI & DANCE", "Brass Trumpets & Swirling Skirts"),
      bullets: [
        { label: "Traditional Music", value: "Mariachi band with brass trumpets and acoustic guitars" },
        { label: "Folk Dance", value: "Ballet Folklórico (dancers swirl giant rainbow-colored dresses)" },
        { label: "Famous Song", value: "La Bamba & Cielito Lindo ('Canta y no llores!')" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Charro",
      img: generateColoringSvg("cloth", "👒", "CHARRO & POBLANA", "Embroidered Sombrero & Dress"),
      bullets: [
        { label: "Boy's Outfit", value: "Charro suit with silver embroidery and a wide felt sombrero" },
        { label: "Girl's Outfit", value: "China Poblana dress with embroidered flowers & rebozo scarf" },
        { label: "Pride", value: "Worn proudly during parades, holidays, and celebrations" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Día de los Muertos",
      img: generateColoringSvg("art", "💀", "CALAVERAS & FLOWERS", "Smiling Sugar Skulls & Marigolds"),
      bullets: [
        { label: "Joyful Holiday", value: "Día de los Muertos (family celebration honoring loved ones)" },
        { label: "Art Tradition", value: "Calaveras (decorated sugar skulls painted with bright flowers)" },
        { label: "Bright Flower", value: "Golden Cempasúchil marigold petals guide families together" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Chichén Itzá",
      img: generateColoringSvg("place", "🏛️", "CHICHÉN ITZÁ", "Ancient Mayan Step Pyramid"),
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
        img: generateColoringSvg("hero", "🎨", "FRIDA KAHLO", "Legendary Artist with Flower Crown"),
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
        role: "First Hispanic Woman Astronaut in Space",
        img: generateColoringSvg("hero", "🚀", "DR. ELLEN OCHOA", "NASA Astronaut & Space Pioneer"),
        bullets: [
          { label: "Space Missions", value: "Flew on 4 space shuttle missions with NASA!" },
          { label: "Historic First", value: "First Hispanic woman in the world to travel to space (1993)" },
          { label: "Musical Talent", value: "Classical flute player who played her flute in zero gravity!" },
          { label: "Leadership", value: "Later served as Director of NASA's Johnson Space Center" }
        ],
        kidTrivia: "She brought her flute into outer space and floated upside-down while playing music!"
      },
      {
        id: "cesar_chavez",
        name: "Cesar Chavez",
        role: "Civil Rights Hero & Community Champion",
        img: generateColoringSvg("hero", "🤝", "CESAR CHAVEZ", "Civil Rights Leader • ¡Sí Se Puede!"),
        bullets: [
          { label: "Mission", value: "Stood up for farm workers harvesting food for American families" },
          { label: "Famous Motto", value: "'¡Sí, se puede!' ('Yes, we can!')" },
          { label: "Method", value: "Peaceful marches, speeches, and community solidarity" },
          { label: "Honor", value: "Celebrated across the US with Cesar Chavez Day on March 31" }
        ],
        kidTrivia: "He created the cheer '¡Sí se puede!' to remind everyone that kids can do anything when they help each other!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Axolotl",
      img: generateColoringSvg("animal", "🦎", "SMILING AXOLOTL", "Endangered Lake Water Mascot"),
      bullets: [
        { label: "Official Language", value: "Spanish + 68 Indigenous Languages (like Nahuatl & Maya)" },
        { label: "Magical Animal", value: "Axolotl (smiling underwater salamander with pink gills)" },
        { label: "Superpower", value: "Can regrow its legs, tail, and heart if it gets hurt!" },
        { label: "Kid Cheer", value: "¡Órale! (used for 'Wow!', 'Awesome!', or 'Let's go!')" }
      ]
    },
    funFacts: [
      {
        id: "monarch_butterflies",
        title: "Monarch Trees",
        subtitle: "3,000 Mile Journey",
        img: generateColoringSvg("fact", "🦋", "MONARCH MIGRATION", "Millions of Orange Butterflies"),
        caption: "Millions of monarch butterflies fly 3,000 miles to sleep in Mexican fir trees every winter!",
        kidExplanation: "Millions of orange butterflies fly all the way across North America to cuddle in Mexican trees!"
      },
      {
        id: "chocolate_invented",
        title: "Chocolate Birth",
        subtitle: "Ancient Cacao",
        img: generateColoringSvg("fact", "🍫", "CHOCOLATE ORIGIN", "The Maya's Sweet Gift to World"),
        caption: "Ancient Maya and Aztecs were the very first people to discover and drink chocolate!",
        kidExplanation: "Ancient Mexican civilizations invented hot chocolate, vanilla, and popcorn!"
      },
      {
        id: "floating_city",
        title: "Floating City",
        subtitle: "Tenochtitlan",
        img: generateColoringSvg("fact", "🛶", "FLOATING CANALS", "Aztec Lake City with Canals"),
        caption: "Mexico City was originally built on islands in the middle of a giant ancient lake!",
        kidExplanation: "Before cars, Aztecs traveled around Mexico City in wooden boats on water canals!"
      },
      {
        id: "smiling_axolotl",
        title: "Smiling Salamander",
        subtitle: "Xochimilco Mascot",
        img: generateColoringSvg("fact", "✨", "BABY AXOLOTL", "Pink Gills & Cute Smile"),
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
      img: generateColoringSvg("map", "🇩🇴", "DOMINICAN REPUBLIC", "Hispaniola • Santo Domingo"),
      bullets: [
        { label: "Country Name", value: "Dominican Republic" },
        { label: "Nickname", value: "Quisqueya la Bella" },
        { label: "Capital City", value: "Santo Domingo ⭐ (oldest European city in Americas)" },
        { label: "Region", value: "Caribbean (Island of Hispaniola)" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Mangú",
      img: generateColoringSvg("food", "🍳", "MANGÚ • LOS 3 GOLPES", "Mashed Plantains, Salami & Cheese"),
      bullets: [
        { label: "National Dish", value: "Mangú (creamy mashed green plantains with pickled red onions)" },
        { label: "Los Tres Golpes", value: "Served with fried Dominican cheese, eggs, and crispy salami!" },
        { label: "Dream Drink", value: "Morir Soñando ('To Die Dreaming' - cold orange juice & sweet cream)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Merengue & Bachata",
      img: generateColoringSvg("music", "🪗", "MERENGUE & GÜIRA", "Fast Tambora Drum & Accordion"),
      bullets: [
        { label: "National Dance", value: "Merengue (energetic, 2-step dance that makes everyone smile)" },
        { label: "Guitar Rhythms", value: "Bachata (rhythmic romantic guitar music born in the countryside)" },
        { label: "Key Instrument", value: "Güira (metal scraper played with a metal comb fork)" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje Típico",
      img: generateColoringSvg("cloth", "💃", "TRAJE TÍPICO", "Red, White & Royal Blue Ruffles"),
      bullets: [
        { label: "Colors", value: "Bright red, white, and royal blue matching the Dominican flag" },
        { label: "Style", value: "Flowing off-the-shoulder ruffled blouses and long circular skirts" },
        { label: "Hair Flowers", value: "Worn with island hibiscus or jasmine blossoms behind the ear" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Diablos Cojuelos",
      img: generateColoringSvg("art", "🎭", "DIABLOS COJUELOS", "Carnival Costumes & Jingle Bells"),
      bullets: [
        { label: "February Carnival", value: "Celebrated across La Vega, Santiago, and Santo Domingo" },
        { label: "Outfits", value: "Satin suits adorned with thousands of tiny shiny mirrors and jingle bells" },
        { label: "Horned Masks", value: "Sculpted with fierce, playful faces and sweeping horns" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Alcázar de Colón",
      img: generateColoringSvg("place", "🏰", "ALCÁZAR DE COLÓN", "Historic Coral Limestone Palace"),
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
        img: generateColoringSvg("hero", "⚾", "DAVID ORTIZ #34", "Big Papi • Baseball Hall of Fame"),
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
        img: generateColoringSvg("hero", "🎵", "JUAN LUIS GUERRA", "Merengue & Bachata Global Pioneer"),
        bullets: [
          { label: "Born", value: "Santo Domingo, Dominican Republic" },
          { label: "Global Hits", value: "Brought Merengue and Bachata to concerts across the entire world" },
          { label: "Awards", value: "Over 20 Latin Grammy Awards and 3 Grammy Awards" },
          { label: "Famous Song", value: "'Ojalá Que Llueva Café' ('May It Rain Coffee in the Countryside!')" }
        ],
        kidTrivia: "He wrote a famous song wishing that coffee, tea, and strawberries would rain down from the sky like magic!"
      },
      {
        id: "oscar_de_la_renta",
        name: "Oscar de la Renta",
        role: "World-Renowned Fashion Designer",
        img: generateColoringSvg("hero", "✨", "OSCAR DE LA RENTA", "Iconic Fashion Designer"),
        bullets: [
          { label: "Born", value: "Santo Domingo, Dominican Republic" },
          { label: "Fame", value: "Designed glamorous gowns for first ladies, movie stars, and royalty" },
          { label: "Inspiration", value: "Used the vivid tropical colors and flowers of his homeland" },
          { label: "Philanthropy", value: "Built an orphanage and school in Punta Cana for over a thousand kids" }
        ],
        kidTrivia: "He grew up smelling tropical island flowers and turned those bright colors into world-famous dresses!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Palmchat & Qué Lo Qué",
      img: generateColoringSvg("animal", "🦜", "CIGUA PALMERA", "Palmchat Bird & Mangroves"),
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
        img: generateColoringSvg("fact", "🐋", "HUMPBACK WHALES", "Giant Whales in Samaná Bay"),
        caption: "Over 3,000 giant Humpback Whales swim to Samaná Bay every winter to give birth to baby calves!",
        kidExplanation: "Giant friendly mother whales swim thousands of miles so their baby calves can splash in warm water!"
      },
      {
        id: "larimar_stone",
        title: "Sky-Blue Stone",
        subtitle: "Only in DR",
        img: generateColoringSvg("fact", "💎", "LARIMAR GEMSTONE", "Sky-Blue Volcanic Jewel"),
        caption: "Larimar is a rare turquoise-blue gemstone that exists ONLY in Dominican mountains!",
        kidExplanation: "It's a magical blue crystal stone that looks like ocean water and is found nowhere else in the world!"
      },
      {
        id: "los_tres_golpes",
        title: "The Three Hits!",
        subtitle: "Mangú Power Breakfast",
        img: generateColoringSvg("fact", "🍳", "LOS TRES GOLPES", "Salami, Cheese & Fried Eggs"),
        caption: "The classic breakfast of Mangú with salami, cheese, and eggs is called 'Los Tres Golpes'!",
        kidExplanation: "It gives kids super strength for school and tastes amazing with crunchy fried cheese!"
      },
      {
        id: "bible_flag",
        title: "Unique Flag",
        subtitle: "Only Flag with a Bible",
        img: generateColoringSvg("fact", "📖", "DOMINICAN FLAG", "Coat of Arms & Center Bible"),
        caption: "The Dominican Republic flag is the ONLY national flag in the world that features a Bible in its center shield!",
        kidExplanation: "The coat of arms has a book right in the middle surrounded by palm leaves and arrows!"
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
      img: generateColoringSvg("map", "🇨🇴", "COLOMBIA MAP & FLAG", "Yellow, Blue & Red • Andes Mountains"),
      bullets: [
        { label: "Country Name", value: "Colombia" },
        { label: "Nickname", value: "Tierra de Encanto" },
        { label: "Capital City", value: "Bogotá ⭐ (high in the Andes mountains)" },
        { label: "Continent", value: "South America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Arepas con Queso",
      img: generateColoringSvg("food", "🧀", "AREPAS CON QUESO", "Golden Corn Cakes with Melting Cheese"),
      bullets: [
        { label: "Daily Favorite", value: "Arepas con Queso (warm, round corn cakes with gooey melted cheese)" },
        { label: "Famous Platter", value: "Bandeja Paisa (rice, beans, plantains, avocado & fried egg)" },
        { label: "Tropical Fruit", value: "Jugo de Lulo or Maracuyá (tangy passion fruit smoothies)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Cumbia & Vallenato",
      img: generateColoringSvg("music", "🪘", "CUMBIA CANDLE DANCE", "Flutes, Drums & Accordion"),
      bullets: [
        { label: "Traditional Dance", value: "Cumbia (dancers hold glowing bundles of candles as they sway!)" },
        { label: "Storytelling Beat", value: "Vallenato (celebratory accordion music with drums)" },
        { label: "Global Pop", value: "Home to Shakira, Carlos Vives, and Juanes!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Ruana & Sombrero",
      img: generateColoringSvg("cloth", "🤠", "SOMBRERO VUELTIAO", "Foldable Hat & Wool Ruana"),
      bullets: [
        { label: "Mountain Poncho", value: "Ruana (thick wool poncho keeping farmers warm in chilly Andes hills)" },
        { label: "National Hat", value: "Sombrero Vueltiao (woven cane hat with black & white geometric patterns)" },
        { label: "Super Feature", value: "The hat is so flexible you can fold it completely flat in your backpack!" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Feria de las Flores",
      img: generateColoringSvg("art", "🌸", "FERIA DE LAS FLORES", "Silleteros Carrying Flower Silletas"),
      bullets: [
        { label: "Medellín Festival", value: "Feria de las Flores (The world-famous Flower Festival)" },
        { label: "Silletero Parade", value: "Farmers carry giant 100-pound wooden flower disks on their backs!" },
        { label: "Famous Motto", value: "'When a Silletero walks by, it's Colombia that passes!'" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Ciudad Perdida",
      img: generateColoringSvg("place", "🏛️", "CIUDAD PERDIDA", "Ancient Lost Stone City in Jungle"),
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
        img: generateColoringSvg("hero", "🎤", "SHAKIRA", "Grammy Winner & School Founder"),
        bullets: [
          { label: "Born", value: "Barranquilla, Colombia" },
          { label: "Music Career", value: "Multi-Grammy winner famous for 'Hips Don't Lie' and 'Waka Waka'" },
          { label: "Philanthropy", value: "Her Pies Descalzos Foundation built public schools for thousands of kids" },
          { label: "Superpower", value: "Learned traditional belly dance and guitar when she was in elementary school" }
        ],
        kidTrivia: "She wrote her first song when she was only 8 years old and now builds schools for kids!"
      },
      {
        id: "gabriel_garcia_marquez",
        name: "Gabriel García Márquez ('Gabo')",
        role: "Nobel Prize Author of Magical Realism",
        img: generateColoringSvg("hero", "📚", "GABRIEL GARCÍA MÁRQUEZ", "Nobel Prize in Literature"),
        bullets: [
          { label: "Born", value: "Aracataca, Colombia" },
          { label: "Nobel Prize", value: "Won the Nobel Prize in Literature in 1982" },
          { label: "Magical Realism", value: "Wrote stories where yellow butterflies swarm and carpets fly through towns" },
          { label: "Inspiration", value: "His books inspired the magical universe of Disney's Encanto!" }
        ],
        kidTrivia: "His grandmother told him bedtime stories filled with magic, which helped him write famous books!"
      },
      {
        id: "fernando_botero",
        name: "Fernando Botero",
        role: "Famous Painter & Sculptor of 'Boterismo'",
        img: generateColoringSvg("hero", "🎨", "FERNANDO BOTERO", "Iconic Sculptor of Plump Figures"),
        bullets: [
          { label: "Born", value: "Medellín, Colombia" },
          { label: "Art Style", value: "'Boterismo' - paintings and giant bronze statues of round people and animals" },
          { label: "Museums", value: "Donated hundreds of his masterpieces to free public museums for kids" }
        ],
        kidTrivia: "He loved painting chubby horses, round birds, and laughing plump characters that make kids smile!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Condor & Encanto",
      img: generateColoringSvg("animal", "🦅", "ANDEAN CONDOR", "Giant Wings & Yellow Butterflies"),
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
        img: generateColoringSvg("fact", "🌈", "RIVER OF 5 COLORS", "Caño Cristales Liquid Rainbow"),
        caption: "Caño Cristales is called the 'River of Five Colors' because underwater plants turn it glowing red, yellow, and green!",
        kidExplanation: "It looks like a real liquid rainbow flowing through the mountains with pink and red glowing water plants!"
      },
      {
        id: "encanto_palms",
        title: "Encanto Palms",
        subtitle: "Cocora Valley",
        img: generateColoringSvg("fact", "🌴", "WAX PALM TREES", "Tallest Palm Trees on Earth"),
        caption: "The Cocora Valley has Wax Palm trees that grow over 200 feet high—the tallest in the world!",
        kidExplanation: "These palm trees grow taller than 15-story buildings and inspired the magic in the movie Encanto!"
      },
      {
        id: "pink_dolphins",
        title: "Pink Dolphins",
        subtitle: "Amazon River",
        img: generateColoringSvg("fact", "🐬", "PINK RIVER DOLPHIN", "Amazon Freshwater Dolphins"),
        caption: "Colombia's Amazon rivers are home to rare freshwater dolphins that are naturally bright pink!",
        kidExplanation: "They really are bright bubblegum pink and swim playfully through the jungle rivers!"
      },
      {
        id: "magic_butterflies",
        title: "Butterfly Capital",
        subtitle: "20% of Earth's Species",
        img: generateColoringSvg("fact", "🦋", "COLOMBIAN BUTTERFLIES", "Yellow Butterflies of Macondo"),
        caption: "One out of every five butterfly species in the entire world lives in Colombia!",
        kidExplanation: "Thousands of shimmering blue and yellow butterflies flutter all around you in the forests!"
      }
    ]
  },

  cu: {
    id: "cu",
    name: "Cuba",
    adjective: "Cuban",
    flagEmoji: "🇨🇺",
    nickname: "La Perla de las Antillas",
    capital: "Havana",
    region: "Caribbean",
    greeting: "¡Hola!",
    cheer: "¡Qué bola!",
    kidIntro: "A sunny island of vibrant music, candy-colored vintage convertibles, the world's smallest birds, and joyful salsa beats!",
    card1: {
      title: "1. Country Information",
      tag: "Cuba",
      img: generateColoringSvg("map", "🇨🇺", "CUBA MAP & FLAG", "White Star, Red Triangle & Stripes"),
      bullets: [
        { label: "Country Name", value: "Cuba (República de Cuba)" },
        { label: "Nickname", value: "La Perla de las Antillas" },
        { label: "Capital City", value: "Havana (La Habana) ⭐" },
        { label: "Region", value: "Caribbean Sea (Greater Antilles)" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Ropa Vieja",
      img: generateColoringSvg("food", "🥩", "ROPA VIEJA & PLATANOS", "Savory Shredded Beef & Sweet Plantains"),
      bullets: [
        { label: "National Dish", value: "Ropa Vieja (shredded flank steak simmered in sweet bell peppers & tomatoes)" },
        { label: "Side Dish", value: "Moros y Cristianos (black beans and white rice cooked with garlic)" },
        { label: "Sweet Treat", value: "Flan de Caramelo & Batido de Mamey (rich tropical fruit milkshake)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Salsa & Son Cubano",
      img: generateColoringSvg("music", "🪇", "SALSA & CONGAS", "Bongos, Trumpets & Claves"),
      bullets: [
        { label: "Famous Styles", value: "Son Cubano, Mambo, Cha-cha-chá, and lively Afro-Cuban Rumba" },
        { label: "Secret Beat", value: "The Clave rhythm (two wooden sticks tapping out the heart-beat rhythm)" },
        { label: "Celebration Shout", value: "'¡Azúcar!' made famous by Celia Cruz!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Guayabera",
      img: generateColoringSvg("cloth", "👔", "GUAYABERA SHIRT", "Four Pockets & Cool Linen"),
      bullets: [
        { label: "Famous Shirt", value: "Guayabera (crisp, lightweight linen shirt with 4 front pockets and vertical pleats)" },
        { label: "Why 4 Pockets?", value: "Legend says farmers needed pockets to carry fresh guava fruits home!" },
        { label: "Elegance", value: "Worn untucked in hot tropical weather for formal events and celebrations" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Vintage Cars",
      img: generateColoringSvg("art", "🚗", "CLASSIC CARS • ALMENDRONES", "Pastel 1950s Convertibles"),
      bullets: [
        { label: "Rolling Museum", value: "Over 60,000 classic 1950s American cars ('Almendrones') still cruise Havana" },
        { label: "Bright Colors", value: "Painted in candy pink, turquoise, yellow, and sky blue" },
        { label: "Ingenuity", value: "Cuban mechanics have kept them running smoothly for over 70 years!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Castillo del Morro",
      img: generateColoringSvg("place", "🏰", "CASTILLO DEL MORRO", "Historic Havana Harbor Lighthouse"),
      bullets: [
        { label: "Harbor Fortress", value: "Castillo de los Tres Reyes del Morro (built in 1589)" },
        { label: "Lighthouse", value: "The towering stone lighthouse guards the entrance to Havana Bay" },
        { label: "Night Cannon", value: "At 9:00 PM every night, soldiers fire the ceremonial cannon ('El Cañonazo')!" }
      ]
    },
    famousPeople: [
      {
        id: "celia_cruz",
        name: "Celia Cruz",
        role: "The 'Queen of Salsa' & Global Icon",
        img: generateColoringSvg("hero", "👑", "CELIA CRUZ • ¡AZÚCAR!", "Queen of Salsa in Ruffled Gown"),
        bullets: [
          { label: "Born", value: "Havana, Cuba" },
          { label: "Famous Shout", value: "'¡AZÚCAR!' (bringing joy and sweetness to everyone)" },
          { label: "Legendary Career", value: "Recorded over 70 albums, won 3 Grammys and 4 Latin Grammys" },
          { label: "Iconic Style", value: "Famous for her colorful rainbow wigs and dazzling stage costumes" }
        ],
        kidTrivia: "She was famous for shouting '¡AZÚCAR!' which means sugar, because she believed music makes everyone happy!"
      },
      {
        id: "jose_marti",
        name: "José Martí",
        role: "Poet, National Hero & Children's Author",
        img: generateColoringSvg("hero", "📜", "JOSÉ MARTÍ", "Poet of Guantanamera"),
        bullets: [
          { label: "Born", value: "Havana, Cuba" },
          { label: "Poetry", value: "Wrote the famous poem 'Versos Sencillos' used in the song 'Guantanamera'" },
          { label: "Kids Magazine", value: "Created 'La Edad de Oro' (The Golden Age) magazine just for children" },
          { label: "Hero", value: "Dedicated his entire life to freedom, education, and art" }
        ],
        kidTrivia: "He wrote poetry and stories especially for kids, teaching them that being kind makes you a true hero!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Bee Hummingbird",
      img: generateColoringSvg("animal", "🐦", "BEE HUMMINGBIRD", "Smallest Bird in the World"),
      bullets: [
        { label: "Official Language", value: "Spanish" },
        { label: "World Record Bird", value: "The Bee Hummingbird (Zunzuncito - only 2 inches long!)" },
        { label: "Weight", value: "Weighs less than a single US penny!" },
        { label: "Island Greeting", value: "¡Qué bola! (friendly Cuban slang for 'What's happening?!')" }
      ]
    },
    funFacts: [
      {
        id: "smallest_bird",
        title: "World's Smallest Bird",
        subtitle: "Zunzuncito",
        img: generateColoringSvg("fact", "🪶", "TINIEST BIRD ON EARTH", "Weighs Less Than a Penny"),
        caption: "Cuba is home to the Bee Hummingbird, the smallest bird species on planet Earth!",
        kidExplanation: "It's smaller than your thumb and flutters its wings 80 times every single second!"
      },
      {
        id: "rolling_museum",
        title: "Candy-Colored Cars",
        subtitle: "Havana Cruisers",
        img: generateColoringSvg("fact", "🚗", "VINTAGE CRUISERS", "Bubblegum Pink Convertibles"),
        caption: "Havana has tens of thousands of real 1950s classic cars still driving every day!",
        kidExplanation: "Riding down the street feels like stepping into a cartoon with bright pink classic convertibles!"
      },
      {
        id: "nightly_cannon",
        title: "9:00 PM Cannon Boom!",
        subtitle: "El Cañonazo",
        img: generateColoringSvg("fact", "💣", "EL CAÑONAZO", "Ceremonial Havana Harbor Cannon"),
        caption: "Every single night at 9:00 PM, soldiers fire a real historic cannon over the harbor!",
        kidExplanation: "It's a 300-year-old tradition that used to tell everyone it was time to close city gates for bedtime!"
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
    kidIntro: "A historic land of magnificent fairytale castles, rhythmic flamenco dancing, warm saffron paella, and brave explorers!",
    card1: {
      title: "1. Country Information",
      tag: "Spain",
      img: generateColoringSvg("map", "🇪🇸", "SPAIN MAP & CASTLES", "Madrid • Red & Yellow Stripes"),
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
      img: generateColoringSvg("food", "🥘", "PAELLA VALENCIANA", "Saffron Rice & Churros con Chocolate"),
      bullets: [
        { label: "National Dish", value: "Paella Valenciana (golden saffron rice with vegetables, beans & savory meats)" },
        { label: "Sweet Treat", value: "Churros con Chocolate (crunchy pastry dipped in thick melted chocolate)" },
        { label: "Snack Style", value: "Tapas (small shared plates for friends and family)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Flamenco",
      img: generateColoringSvg("music", "💃", "FLAMENCO & GUITAR", "Spanish Guitar, Castanets & Clapping"),
      bullets: [
        { label: "Passionate Art", value: "Flamenco (intense foot-stomping dance with Spanish guitar and hand clapping)" },
        { label: "Instruments", value: "Acoustic nylon-string guitar and click-clack castanets" },
        { label: "Cheer", value: "'¡Olé!' shouted when dancers do an incredible move!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Flamenca",
      img: generateColoringSvg("cloth", "👗", "TRAJE DE GITANA", "Polka Dots & Ruffled Skirts"),
      bullets: [
        { label: "Feria Dress", value: "Traje de Gitana (polka-dot ruffled dresses worn for Spring Fair in Seville)" },
        { label: "Accessories", value: "Mantón shawl with long fringe and large flower hair combs" },
        { label: "Gentlemen", value: "Traje Corto (fitted short jacket with wide-brimmed Cordobés hat)" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Fiestas & Castles",
      img: generateColoringSvg("art", "🏰", "CASTLES OF SPAIN", "Fairytale Alcázar of Segovia"),
      bullets: [
        { label: "Fairytale Fort", value: "The Alcázar of Segovia inspired Walt Disney's Cinderella castle!" },
        { label: "Festivals", value: "La Tomatina (giant playful tomato fight in Buñol!)" },
        { label: "Human Towers", value: "Castells where kids climb to the top of 9-person human towers!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "La Sagrada Família",
      img: generateColoringSvg("place", "⛪", "SAGRADA FAMÍLIA", "Antoni Gaudí's Forest Cathedral"),
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
        img: generateColoringSvg("hero", "🎾", "RAFAEL NADAL", "The King of Clay • 22 Grand Slams"),
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
        img: generateColoringSvg("hero", "🎨", "SALVADOR DALÍ", "Melting Clocks & Upturned Moustache"),
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
      img: generateColoringSvg("animal", "🐱", "IBERIAN LYNX", "Tufted Ears & Forest Wild Cat"),
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
        img: generateColoringSvg("fact", "🏰", "SEGOVIA CASTLE", "Disney's Fairytale Inspiration"),
        caption: "The stone castle in Segovia, Spain helped inspire Walt Disney's Cinderella castle!",
        kidExplanation: "It sits on a cliff like a real giant stone ship and looks just like a fairytale princess castle!"
      },
      {
        id: "tomato_battle",
        title: "Giant Tomato Fight!",
        subtitle: "La Tomatina Festival",
        img: generateColoringSvg("fact", "🍅", "LA TOMATINA", "World's Biggest Food Fight"),
        caption: "Every August in Buñol, 20,000 people throw squishy ripe tomatoes in a giant friendly food fight!",
        kidExplanation: "Trucks dump 100,000 pounds of squishy red tomatoes into the streets for the world's biggest food fight!"
      },
      {
        id: "human_towers",
        title: "Human Castles",
        subtitle: "Castells of Catalonia",
        img: generateColoringSvg("fact", "🤸", "CASTELLS OF CATALONIA", "Towers of Brave Kids"),
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
      img: generateColoringSvg("map", "🇦🇷", "ARGENTINA MAP & FLAG", "Sun of May • Buenos Aires"),
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
      img: generateColoringSvg("food", "🥟", "EMPANADAS & DULCE DE LECHE", "Stuffed Pastries & Caramel Cookies"),
      bullets: [
        { label: "Snack Favorite", value: "Empanadas (golden baked pastry pockets stuffed with beef, corn, or cheese)" },
        { label: "Sweet Wonder", value: "Alfajores (soft crumbly cookies filled with sweet caramel Dulce de Leche)" },
        { label: "National Drink", value: "Mate (herbal tea shared among friends with a metal straw called a bombilla)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Tango",
      img: generateColoringSvg("music", "🎶", "ARGENTINE TANGO", "Bandoneón Accordion & Drama"),
      bullets: [
        { label: "Famous Dance", value: "Tango (dramatic, graceful dance born in the historic streets of Buenos Aires)" },
        { label: "Soulful Sound", value: "Bandoneón (special accordion that gives Tango its emotional heartbeat)" },
        { label: "Street Art", value: "Danced outdoors on the colorful cobblestone sidewalks of Caminito!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje de Gaucho",
      img: generateColoringSvg("cloth", "🐎", "GAUCHO COWBOY", "Wide Bombachas & Leather Belt"),
      bullets: [
        { label: "Pampas Cowboy", value: "Gaucho (brave Argentine horseman roaming the grassy plains)" },
        { label: "Outfit", value: "Bombachas de campo (baggy trousers), leather belt decorated with silver coins & felt hat" },
        { label: "Skill", value: "Master horse riders and caretakers of cattle" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Soccer Passion",
      img: generateColoringSvg("art", "⚽", "WORLD CUP CHAMPIONS", "Albiceleste • 3 World Cups"),
      bullets: [
        { label: "National Passion", value: "Fútbol (Soccer is loved by every kid and family across the country!)" },
        { label: "World Champions", value: "3-time FIFA World Cup winners (1978, 1986, and 2022)" },
        { label: "Stadiums", value: "Fans sing, wave blue-and-white flags, and throw confetti for 90 minutes straight!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Iguazú Falls",
      img: generateColoringSvg("place", "🌊", "IGUAZÚ FALLS", "Garganta del Diablo Roar"),
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
        img: generateColoringSvg("hero", "⚽", "LIONEL MESSI #10", "World Cup Champion • GOAT"),
        bullets: [
          { label: "Born", value: "Rosario, Argentina" },
          { label: "World Cup Hero", value: "Led Argentina to win the 2022 FIFA World Cup!" },
          { label: "Superpower", value: "Dribbles the soccer ball as if it's glued to his left shoe!" },
          { label: "Philanthropy", value: "His Leo Messi Foundation builds playgrounds and helps sick kids" }
        ],
        kidTrivia: "When he was a little boy, his grandmother walked him to every soccer practice, and he points to the sky for her every goal!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Magellanic Penguins",
      img: generateColoringSvg("animal", "🐧", "PATAGONIA PENGUINS", "Punta Tombo Penguin Colony"),
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
        img: generateColoringSvg("fact", "🦕", "PATAGOTITAN DINOSAUR", "Bigger Than a Blue Whale"),
        caption: "The largest dinosaur ever discovered on Earth was found in Patagonia, Argentina!",
        kidExplanation: "It was as long as two school buses and weighed more than 10 African elephants!"
      },
      {
        id: "penguin_beaches",
        title: "Million Penguin Beach",
        subtitle: "Punta Tombo Colony",
        img: generateColoringSvg("fact", "🐧", "PATAGONIA PENGUINS", "Penguin Families on the Sand"),
        caption: "Over one million penguins waddle on the beaches of southern Argentina every year!",
        kidExplanation: "You can walk right along the beach path while mother penguins feed fluffy baby chicks!"
      },
      {
        id: "iguazu_rainbows",
        title: "Rainbow Waterfall",
        subtitle: "Iguazú Falls Mist",
        img: generateColoringSvg("fact", "🌈", "IGUAZÚ WATERFALL", "275 Crashing Waterfalls"),
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
      img: generateColoringSvg("map", "🇵🇪", "PERU MAP & VICUÑA", "Inca Heritage • Lima"),
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
      img: generateColoringSvg("food", "🥔", "CAUSA & 4,000 POTATOES", "Rainbow Potatoes & Causa Limeña"),
      bullets: [
        { label: "Potato Capital", value: "Peru grows over 4,000 colorful varieties of native potatoes (blue, red, yellow!)" },
        { label: "Causa Limeña", value: "Layered chilled yellow potato cake filled with avocado and chicken" },
        { label: "Sweet Treat", value: "Picarones (warm sweet potato donuts drizzled with spiced syrup)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Huayno & Panpipes",
      img: generateColoringSvg("music", "🪈", "ZAMPOÑA PANPIPES", "Andean Flutes & Marinera Dance"),
      bullets: [
        { label: "Andean Melodies", value: "Zampoña (panpipes made of bamboo tubes) and Charango (small 10-string lute)" },
        { label: "Coastal Dance", value: "Marinera (courtship dance where dancers wave white handkerchiefs)" },
        { label: "Highland Beats", value: "Huayno (lively mountain dance with stamping steps and colorful skirts)" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Poncho & Chullo",
      img: generateColoringSvg("cloth", "🧶", "CHULLO HAT & PONCHO", "Warm Alpaca Wool with Ear Flaps"),
      bullets: [
        { label: "Warm Andean Hat", value: "Chullo (knitted wool hat with warm ear flaps worn in cold mountain winds)" },
        { label: "Woven Poncho", value: "Handwoven from soft alpaca fleece dyed with natural berries and plants" },
        { label: "Pollera", value: "Layered skirts embroidered with flowers and geometric Inca symbols" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Inti Raymi",
      img: generateColoringSvg("art", "☀️", "INTI RAYMI SUN FESTIVAL", "Inca Emperor at Sacsayhuamán"),
      bullets: [
        { label: "Festival of the Sun", value: "Inti Raymi (celebrates the Inca New Year and the winter solstice)" },
        { label: "Golden Procession", value: "Actors dress as Inca royalty with golden crowns and feathered scepters" },
        { label: "Sacsayhuamán", value: "Held at a fortress made of giant stones that fit together without cement!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Machu Picchu",
      img: generateColoringSvg("place", "⛰️", "MACHU PICCHU", "Lost City of the Incas in Clouds"),
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
        img: generateColoringSvg("hero", "👨‍🍳", "CHEF GASTÓN ACURIO", "Global Ambassador of Peruvian Food"),
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
      img: generateColoringSvg("animal", "🦙", "FRIENDLY ALPACAS", "Fluffy Fleece & Andes Mountains"),
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
        img: generateColoringSvg("fact", "🌈", "VINICUNCA RAINBOW", "Natural Striped Mineral Mountain"),
        caption: "Vinicunca is a mountain with natural mineral stripes of turquoise, gold, lavender, and pink!",
        kidExplanation: "It looks like a giant scoop of rainbow sherbet ice cream painted across the mountains!"
      },
      {
        id: "floating_reed_islands",
        title: "Floating Grass Islands",
        subtitle: "Lake Titicaca",
        img: generateColoringSvg("fact", "🛶", "FLOATING UROS ISLANDS", "Totora Reed Villages on Water"),
        caption: "The Uros people live on islands made completely of buoyant totora reeds floating on Lake Titicaca!",
        kidExplanation: "When the floor gets soft, they simply layer fresh yellow reeds right on top of their island!"
      },
      {
        id: "thousands_of_potatoes",
        title: "4,000 Potato Varieties",
        subtitle: "Native Andes Harvest",
        img: generateColoringSvg("fact", "🥔", "NATIVE POTATOES", "Purple, Yellow & Red Spuds"),
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
      img: generateColoringSvg("map", "🇨🇷", "COSTA RICA MAP", "Rich Coast • San José"),
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
      img: generateColoringSvg("food", "🍚", "GALLO PINTO", "Spotted Rooster Rice & Beans"),
      bullets: [
        { label: "Breakfast King", value: "Gallo Pinto ('Spotted Rooster' - rice and black beans with sweet sauce)" },
        { label: "Casado Lunch", value: "Platter of rice, beans, plantains, salad, and fresh tropical fruit" },
        { label: "Sweet Treat", value: "Chorreadas (sweet corn pancakes served with sour cream)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Punto Guanacasteco",
      img: generateColoringSvg("music", "🎶", "MARIMBA & PUNTO", "Wooden Marimba Keys & Shouts"),
      bullets: [
        { label: "National Dance", value: "El Punto Guanacasteco (energetic couple dance with handkerchiefs and cheering)" },
        { label: "Joyful Cry", value: "'¡Bomba!' shouted before a funny rhyming joke is told to the crowd!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje Típico",
      img: generateColoringSvg("cloth", "👗", "COSTA RICAN RUFFLES", "Swirling Rainbow Skirts"),
      bullets: [
        { label: "Traditional Colors", value: "Dresses decorated with bright red, blue, and yellow ribbon bands" },
        { label: "Oxcart Painters", value: "Famous for beautifully painted wooden carts ('Carretas') with star patterns" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Carretas Típicas",
      img: generateColoringSvg("art", "🛞", "PAINTED OXCART WHEEL", "Mandala Patterns of Sarchí"),
      bullets: [
        { label: "Painted Oxcart", value: "Carreta Típica (UNESCO Masterpiece painted in vivid geometric flowers)" },
        { label: "National Symbol", value: "Celebrates peaceful farmers transporting coffee down mountain trails" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Arenal Volcano",
      img: generateColoringSvg("place", "🌋", "ARENAL VOLCANO", "Conical Volcano & Hot Springs"),
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
        img: generateColoringSvg("hero", "🚀", "DR. CHANG-DÍAZ", "7 Space Shuttle Missions"),
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
      img: generateColoringSvg("animal", "🦥", "THREE-TOED SLOTH", "Smiling Sloths & Tree Canopies"),
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
        img: generateColoringSvg("fact", "🦥", "SLOTH CLIMBER", "Slow-Moving Tree Friends"),
        caption: "Costa Rica is home to adorable two-toed and three-toed sloths hanging upside-down in trees!",
        kidExplanation: "Sloths move so slowly that tiny green plants actually grow on their fur like camouflage!"
      },
      {
        id: "peaceful_country",
        title: "No Army Since 1948",
        subtitle: "Schools Over Soldiers",
        img: generateColoringSvg("fact", "🕊️", "PEACE & NATURE", "Butterflies Over Soldiers"),
        caption: "Costa Rica dissolved its military in 1948 and invests its budget in national parks and public schools!",
        kidExplanation: "Instead of soldiers, they have park rangers who protect monkeys, toucans, and sea turtles!"
      },
      {
        id: "sea_turtle_nesting",
        title: "Turtle Arrival Parade",
        subtitle: "Ostional Wildlife Refuge",
        img: generateColoringSvg("fact", "🐢", "SEA TURTLE ARRIBADA", "Thousands of Baby Turtles"),
        caption: "Hundreds of thousands of Olive Ridley sea turtles crawl onto the sand at once in an 'Arribada'!",
        kidExplanation: "Thousands of mama turtles crawl out of the waves together under the moonlight to lay their eggs!"
      }
    ]
  },

  gt: {
    id: "gt",
    name: "Guatemala",
    adjective: "Guatemalan",
    flagEmoji: "🇬🇹",
    nickname: "Tierra de la Eterna Primavera",
    capital: "Guatemala City",
    region: "Central America",
    greeting: "¡Hola!",
    cheer: "¡Guate!",
    kidIntro: "The land of eternal spring, towering ancient Mayan stone temples in deep rainforests, and emerald Quetzal birds!",
    card1: {
      title: "1. Country Information",
      tag: "Guatemala",
      img: generateColoringSvg("map", "🇬🇹", "GUATEMALA MAP & FLAG", "Sky Blue & Resplendent Quetzal"),
      bullets: [
        { label: "Country Name", value: "Guatemala (República de Guatemala)" },
        { label: "Nickname", value: "Tierra de la Eterna Primavera" },
        { label: "Capital City", value: "Guatemala City ⭐" },
        { label: "Region", value: "Central America" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Pepián & Rellenitos",
      img: generateColoringSvg("food", "🍲", "PEPIÁN DE POLLO", "Spiced Pumpkin Seed Stew & Plantain Donuts"),
      bullets: [
        { label: "National Dish", value: "Pepián (rich spiced stew made with roasted squash seeds, tomatoes & chilies)" },
        { label: "Sweet Treat", value: "Rellenitos (warm mashed plantain balls stuffed with sweet black beans and cinnamon)" },
        { label: "Drink", value: "Atol de Elote (warm sweet corn drink with cinnamon)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Marimba",
      img: generateColoringSvg("music", "🎶", "MARIMBA DE GUATEMALA", "Resonant Rosewood Keyboard"),
      bullets: [
        { label: "National Instrument", value: "Marimba (giant wooden keyboard played by 4 musicians at the same time!)" },
        { label: "Wood", value: "Made from precious Hormigo wood called 'the singing tree'" },
        { label: "Dance", value: "Danza de los Venados (ancient deer dance celebrating animals and nature)" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Traje Maya & Huipil",
      img: generateColoringSvg("cloth", "🧶", "HUIPIL WEAVING", "Backstrap Loom & Rainbow Threads"),
      bullets: [
        { label: "Huipil", value: "Intricately handwoven blouse featuring sacred birds, corn stalks & stars" },
        { label: "Backstrap Loom", value: "Woven on wooden looms tied around the waist—a technique 2,000 years old!" },
        { label: "Colors", value: "Every Mayan village has its own secret pattern and color combinations" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Giant Kites",
      img: generateColoringSvg("art", "🪁", "BARRILETES GIGANTES", "Giant Sumpango Tissue Kites"),
      bullets: [
        { label: "Sumpango Kites", value: "Barriletes Gigantes (giant tissue paper kites up to 60 feet tall!)" },
        { label: "Festival", value: "Flown on November 1st to send messages of love to family in the heavens" },
        { label: "Colors", value: "Hand-glued with thousands of geometric bamboo and colored tissue patterns" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Tikal Pyramids",
      img: generateColoringSvg("place", "🏛️", "TIKAL MAYAN RUINS", "Temple of the Great Jaguar in Jungle"),
      bullets: [
        { label: "Ancient Capital", value: "Tikal (soaring Mayan stone pyramid temples rising above the jungle canopy)" },
        { label: "Temple I", value: "The Temple of the Great Jaguar stands over 154 feet high!" },
        { label: "Wildlife", value: "Surrounded by howler monkeys roaring in the trees and colorful toucans" }
      ]
    },
    famousPeople: [
      {
        id: "rigoberta_menchu",
        name: "Rigoberta Menchú",
        role: "Nobel Peace Prize Laureate & Indigenous Rights Leader",
        img: generateColoringSvg("hero", "🕊️", "RIGOBERTA MENCHÚ", "Nobel Peace Prize Laureate"),
        bullets: [
          { label: "Born", value: "Laj Chimel, Guatemala" },
          { label: "Nobel Peace Prize", value: "Won the Nobel Peace Prize in 1992 for defending indigenous Mayan people" },
          { label: "Heritage", value: "K'iche' Maya culture and human rights champion" },
          { label: "Kid Superpower", value: "Spoke truth to power with courage, kindness, and perseverance" }
        ],
        kidTrivia: "She grew up working in the fields and learned Spanish as a teenager so she could stand up for human rights!"
      }
    ],
    card8: {
      title: "8. Language & Nature",
      tag: "Quetzal Bird",
      img: generateColoringSvg("animal", "🦜", "RESPLENDENT QUETZAL", "Emerald Feathers & Liberty Bird"),
      bullets: [
        { label: "Languages", value: "Spanish + 22 Mayan Languages (including K'iche', Kaqchikel & Mam)" },
        { label: "National Bird", value: "Resplendent Quetzal (radiant emerald-green bird with 3-foot tail feathers!)" },
        { label: "Currency", value: "The national money is also named the Quetzal!" },
        { label: "Cheer", value: "¡Guate Linda!" }
      ]
    },
    funFacts: [
      {
        id: "giant_kites",
        title: "60-Foot Kites",
        subtitle: "Sumpango Festival",
        img: generateColoringSvg("fact", "🪁", "BARRILETE GIGANTE", "Kites Bigger Than Houses"),
        caption: "Villagers spend months crafting kites as big as three-story houses out of tissue paper and bamboo!",
        kidExplanation: "They fly kites bigger than school classrooms up into the blue sky to send messages to the stars!"
      },
      {
        id: "lake_atitlan",
        title: "Volcano Lake",
        subtitle: "Lake Atitlán",
        img: generateColoringSvg("fact", "🌋", "LAKE ATITLÁN", "Giant Lake Surrounded by 3 Volcanoes"),
        caption: "Lake Atitlán is a shimmering blue lake formed inside a collapsed volcanic caldera surrounded by 3 giant volcanoes!",
        kidExplanation: "It looks like a magical sunken water world surrounded by giant green volcanoes!"
      },
      {
        id: "quetzal_freedom",
        title: "The Freedom Bird",
        subtitle: "Cannot Live in Cages",
        img: generateColoringSvg("fact", "🦜", "EMERALD QUETZAL", "Symbol of Pure Freedom"),
        caption: "Legend says the Quetzal bird will die of a broken heart if kept in a cage, making it the supreme symbol of liberty!",
        kidExplanation: "Its tail feathers are bright emerald green and trail behind it like flying ribbons!"
      }
    ]
  }
};

// Global State
let STATE = {
  studentName: "Izzy",
  schoolName: "North Beach Elementary",
  grade: "Kindergarten",
  event: "Hispanic Heritage Month",
  countryKey: "pr",
  selectedHeroIndex: 0,
  selectedFactIndices: [0, 1, 2]
};

// 4 Focused, Delightful Kid Quiz Questions (4 archetypes)
const QUIZ_QUESTIONS = [
  {
    q: "1. Where do you want your adventure to take place?",
    sub: "Choose your favorite kind of magical landscape to explore!",
    options: [
      { text: "🏝️ A warm tropical island with turquoise beaches & glowing water", match: "pr" },
      { text: "🏛️ Ancient stone pyramids, desert sun & giant Mayan ruins", match: "mx" },
      { text: "🌿 Misty cloud forests with the world's tallest palm trees & butterflies", match: "co" },
      { text: "🏰 Fairytale stone castles, guitar music & flamenco dancing", match: "es" }
    ]
  },
  {
    q: "2. What sounds like the yummiest lunch to taste?",
    sub: "Which food would make your tummy happiest?",
    options: [
      { text: "🌮 Warm corn tacos with fresh guacamole & cinnamon churros", match: "mx" },
      { text: "🍌 Savory plantains mashed with garlic & fruit shaved ice", match: "pr" },
      { text: "🧀 Cheesy golden corn arepas & passion fruit smoothies", match: "co" },
      { text: "🥟 Crispy baked empanadas & sweet caramel dulce de leche", match: "ar" }
    ]
  },
  {
    q: "3. Which friendly animal would you love to meet?",
    sub: "Every country has a special creature mascot!",
    options: [
      { text: "🐸 A tiny singing tree frog that chirps '¡Ko-Kee!' at sunset", match: "pr" },
      { text: "🦎 A smiling underwater salamander with pink feathery gills", match: "mx" },
      { text: "🦥 A smiling, slow-moving sloth hanging upside down in a tree", match: "cr" },
      { text: "🦙 A fluffy, gentle alpaca smiling high in the Andes mountains", match: "pe" }
    ]
  },
  {
    q: "4. What kind of superstar hero inspires you the most?",
    sub: "Pick the person you'd love to learn from!",
    options: [
      { text: "🎤 An energetic music star who gets whole stadiums dancing", match: "pr" },
      { text: "🎨 A brave artist who painted colorful animals and self-portraits", match: "mx" },
      { text: "⚽ A World Cup soccer champion who dribbles with magic in his boots", match: "ar" },
      { text: "🚀 An astronaut who flew to space on 4 NASA missions", match: "mx" }
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
  if (!COUNTRY_DATA[countryId]) return;
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

  const syncAll = () => {
    updateLivePreviews();
    const country = COUNTRY_DATA[STATE.countryKey];
    if (country) {
      renderPresentationScript(country);
      renderKidLearningChallenge(country);
    }
  };

  if (nameInput) {
    nameInput.value = STATE.studentName;
    nameInput.addEventListener("input", (e) => {
      STATE.studentName = e.target.value.trim() || "Explorer";
      syncAll();
    });
  }

  if (schoolInput) {
    schoolInput.value = STATE.schoolName;
    schoolInput.addEventListener("input", (e) => {
      STATE.schoolName = e.target.value.trim() || "Elementary School";
      syncAll();
    });
  }

  if (gradeInput) {
    gradeInput.value = STATE.grade;
    gradeInput.addEventListener("input", (e) => {
      STATE.grade = e.target.value.trim() || "Grade";
      syncAll();
    });
  }

  if (eventInput) {
    eventInput.value = STATE.event;
    eventInput.addEventListener("input", (e) => {
      STATE.event = e.target.value.trim() || "Cultural Display";
      syncAll();
    });
  }
}

// Master Render
function renderApp() {
  const country = COUNTRY_DATA[STATE.countryKey] || COUNTRY_DATA.pr;

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
        ? "border-blue-600 bg-blue-50/90 shadow-md ring-2 ring-blue-400"
        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
    }`;
    card.onclick = () => {
      STATE.selectedHeroIndex = index;
      renderHeroSelector(country);
      updateLivePreviews();
      renderPresentationScript(country);
      renderKidLearningChallenge(country);
    };

    const imgBox = document.createElement("div");
    imgBox.className = "w-14 h-14 rounded-lg bg-white border border-slate-300 flex-shrink-0 overflow-hidden flex items-center justify-center p-0.5";
    imgBox.innerHTML = `<img src="${hero.img}" class="w-full h-full object-contain" alt="${hero.name}">`;

    const info = document.createElement("div");
    info.className = "flex-1 min-w-0";
    info.innerHTML = `
      <div class="flex items-center justify-between">
        <h4 class="font-extrabold text-xs md:text-sm text-slate-900 truncate">${hero.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}">
          ${isSelected ? 'Selected ⭐' : 'Choose'}
        </span>
      </div>
      <p class="text-xs font-semibold text-blue-800 truncate">${hero.role}</p>
      <p class="text-[11px] text-slate-600 mt-0.5 italic leading-tight line-clamp-2">"${hero.kidTrivia}"</p>
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

  const validCount = Math.min(STATE.selectedFactIndices.length, 3);
  if (countLabel) {
    countLabel.textContent = `${validCount} of 3 Selected`;
    countLabel.className = validCount === 3
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
      renderPresentationScript(country);
    };

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isChecked;
    checkbox.className = "w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer pointer-events-none";

    const imgThumb = document.createElement("div");
    imgThumb.className = "w-10 h-10 bg-white rounded border border-slate-300 overflow-hidden flex-shrink-0 flex items-center justify-center p-0.5";
    imgThumb.innerHTML = `<img src="${fact.img}" class="w-full h-full object-contain" alt="${fact.title}">`;

    const desc = document.createElement("div");
    desc.className = "flex-1 min-w-0";
    desc.innerHTML = `
      <div class="flex items-center gap-1.5">
        <span class="font-extrabold text-xs text-slate-900 truncate">${fact.title}</span>
        <span class="text-[10px] text-slate-500 truncate">(${fact.subtitle})</span>
      </div>
      <p class="text-[11px] text-slate-600 leading-tight mt-0.5 line-clamp-2">${fact.kidExplanation}</p>
    `;

    card.appendChild(checkbox);
    card.appendChild(imgThumb);
    card.appendChild(desc);
    container.appendChild(card);
  });
}

function toggleFactIndex(index) {
  let current = [...STATE.selectedFactIndices];
  const pos = current.indexOf(index);
  if (pos >= 0) {
    if (current.length > 1) {
      current.splice(pos, 1);
    }
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
  const primaryFact = chosenFacts[0] || country.funFacts[0];

  const scriptLines = [
    `¡Hola! My name is ${STATE.studentName}, and I am in ${STATE.grade} at ${STATE.schoolName}!`,
    `Today, I am proud to share my country: ${country.name}! ${country.flagEmoji}`,
    `The capital city is ${country.capital}, and its nickname is the "${country.nickname}".`,
    `A delicious food from ${country.name} is ${country.card2.tag}!`,
    `My favorite famous hero is ${hero.name}! ${hero.kidTrivia}`,
    `A super cool fun fact is: ${primaryFact.kidExplanation}`,
    `Thank you! ¡Muchas Gracias! ${country.cheer}`
  ];

  container.innerHTML = `
    <div class="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎤</span>
          <h4 class="font-black text-amber-950 text-sm uppercase">1-Minute Speaking Script for ${STATE.studentName}</h4>
        </div>
        <button id="btn-speak-script" class="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition">
          <span>🔊</span> <span>Listen &amp; Practice</span>
        </button>
      </div>
      <div class="space-y-2 text-xs md:text-sm text-slate-800 font-medium">
        ${scriptLines.map((line, idx) => `
          <div class="flex gap-2 items-start bg-white/90 p-2 rounded-lg border border-amber-200">
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

  const speakBtn = document.getElementById("btn-speak-script");
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    if (speakBtn) speakBtn.innerHTML = `<span>🔊</span> <span>Listen &amp; Practice</span>`;
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88; // friendly, steady kindergarten speed
  utterance.pitch = 1.05;

  if (speakBtn) speakBtn.innerHTML = `<span>⏹️</span> <span>Stop Speaking</span>`;
  utterance.onend = () => {
    if (speakBtn) speakBtn.innerHTML = `<span>🔊</span> <span>Listen &amp; Practice</span>`;
  };
  utterance.onerror = () => {
    if (speakBtn) speakBtn.innerHTML = `<span>🔊</span> <span>Listen &amp; Practice</span>`;
  };

  window.speechSynthesis.speak(utterance);
}

// Live DOM Updates
function updateLivePreviews() {
  const country = COUNTRY_DATA[STATE.countryKey] || COUNTRY_DATA.pr;
  const hero = country.famousPeople[STATE.selectedHeroIndex] || country.famousPeople[0];
  
  // Safe resolution of 3 facts
  const chosenFacts = STATE.selectedFactIndices.map(i => country.funFacts[i]).filter(Boolean);
  while (chosenFacts.length < 3) {
    const fallback = country.funFacts.find(f => !chosenFacts.includes(f)) || country.funFacts[0];
    chosenFacts.push(fallback);
  }

  // 1. Mockup Banner
  const mockupBannerName = document.getElementById("mockup-banner-name");
  const mockupBannerTitle = document.getElementById("mockup-banner-title");
  const mockupBannerSubtitle = document.getElementById("mockup-banner-subtitle");
  const mockupSchoolHeader = document.getElementById("mockup-school-header");

  const nameUpper = STATE.studentName.toUpperCase();
  const nameDisplay = nameUpper.endsWith("S") ? `${nameUpper}’` : `${nameUpper}’S`;

  if (mockupBannerName) mockupBannerName.textContent = nameDisplay;
  if (mockupBannerTitle) mockupBannerTitle.textContent = `${country.name.toUpperCase()} ADVENTURE!`;
  if (mockupBannerSubtitle) mockupBannerSubtitle.textContent = `Featuring: Food, Music, History, ${hero.name} & The ${country.card8.tag}! ${country.flagEmoji}`;
  if (mockupSchoolHeader) mockupSchoolHeader.textContent = `${STATE.schoolName.toUpperCase()} • ${STATE.event.toUpperCase()} • ${STATE.grade.toUpperCase()}`;

  // 2. Sheet 1 SVG (Rotated 90° for Max 9.8" x 4.8" Size with Dynamic Font Sizing)
  const svgLine1 = document.getElementById("svg-banner-line1");
  const svgLine2 = document.getElementById("svg-banner-line2");
  const svgHeader = document.getElementById("svg-banner-header");
  const svgSub1 = document.getElementById("svg-banner-sub1");
  const svgSub2 = document.getElementById("svg-banner-sub2");
  const svgSub3 = document.getElementById("svg-banner-sub3");

  if (svgLine1) {
    svgLine1.textContent = nameDisplay;
    // Dynamic font sizing for long student names
    let fontSize = 80;
    const len = nameDisplay.length;
    if (len > 14) fontSize = 44;
    else if (len > 11) fontSize = 54;
    else if (len > 8) fontSize = 66;
    svgLine1.setAttribute("font-size", fontSize.toString());
  }

  if (svgLine2) {
    const countryTitle = `${country.name.toUpperCase()} ADVENTURE!`;
    svgLine2.textContent = countryTitle;
    // Dynamic font sizing for long country titles
    let cFontSize = 52;
    const cLen = countryTitle.length;
    if (cLen > 24) cFontSize = 36;
    else if (cLen > 18) cFontSize = 44;
    svgLine2.setAttribute("font-size", cFontSize.toString());
  }

  if (svgHeader) svgHeader.textContent = `${STATE.schoolName.toUpperCase()} • ${STATE.event.toUpperCase()} • ${STATE.grade.toUpperCase()}`;
  if (svgSub1) svgSub1.textContent = `📍 ${country.capital}, ${country.name}`;
  if (svgSub2) svgSub2.textContent = `⭐ Food • Music • History • ${hero.name} ⭐`;
  if (svgSub3) svgSub3.textContent = `🌺 ${country.nickname}`;

  // 3. Category Cards 1-6
  updateCardDOM("card-1", country.card1);
  updateCardDOM("card-2", country.card2);
  updateCardDOM("card-3", country.card3);
  updateCardDOM("card-4", country.card4);
  updateCardDOM("card-5", country.card5);
  updateCardDOM("card-6", country.card6);

  // 4. Card 7: Famous Person
  const card7Data = {
    title: "7. Famous Person",
    tag: hero.name,
    img: hero.img,
    bullets: hero.bullets
  };
  updateCardDOM("card-7", card7Data);

  // 5. Card 8: Language & Nature
  updateCardDOM("card-8", country.card8);

  // 6. Card 9: 3 Chosen Fun Facts
  updateCard9DOM(chosenFacts, country);

  // 7. Sheet 6 Presentation Cue Cards
  updateCueCardsDOM(hero, country, chosenFacts);

  // 8. Footer Credits
  const footerBadges = document.querySelectorAll(".student-footer-credit");
  footerBadges.forEach(el => {
    el.textContent = `⭐ ${STATE.studentName} • ${STATE.schoolName} • Ready to Share My Culture! ❤️`;
  });
}

function updateCardDOM(cardId, data) {
  if (!data) return;

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
        <p class="leading-snug"><strong>${b.label}:</strong><br><span class="text-slate-800">${b.value}</span></p>
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
    if (summaryEl && data.bullets && data.bullets[0]) {
      summaryEl.innerHTML = `
        <span><strong>${data.bullets[0].label}:</strong> ${data.bullets[0].value.split('(')[0]}</span>
      `;
    }
  }
}

function updateCard9DOM(chosenFacts, country) {
  const sheetCard9 = document.getElementById("sheet-card-9");
  if (sheetCard9 && chosenFacts && chosenFacts.length > 0) {
    const tagEl = sheetCard9.querySelector(".card-tag");
    if (tagEl) tagEl.textContent = country.name;

    const factsGrid = sheetCard9.querySelector(".card-facts-grid");
    if (factsGrid) {
      factsGrid.innerHTML = chosenFacts.slice(0, 3).map(fact => `
        <div class="border border-slate-300 rounded-lg p-2 flex flex-col items-center justify-between bg-white text-center">
          <div class="fact-drawing-box">
            <img src="${fact.img}" class="h-full w-full object-contain" alt="${fact.title}">
          </div>
          <div class="mt-1.5 w-full">
            <p class="font-extrabold text-slate-900 text-xs">${fact.title}</p>
            <p class="text-[10px] text-slate-600 leading-snug mt-0.5">${fact.caption}</p>
          </div>
        </div>
      `).join("");
    }
  }

  const mockCard9 = document.getElementById("mock-card-9");
  if (mockCard9 && chosenFacts && chosenFacts.length > 0) {
    const mockGrid = mockCard9.querySelector(".mock-facts-grid");
    if (mockGrid) {
      mockGrid.innerHTML = chosenFacts.slice(0, 3).map(fact => `
        <div class="border rounded p-1 flex flex-col items-center bg-white text-center">
          <img src="${fact.img}" class="h-12 w-full object-contain" alt="${fact.title}">
          <span class="text-[9px] font-bold text-slate-700 mt-0.5 truncate w-full">${fact.title}</span>
        </div>
      `).join("");
    }
    const mockSummary = mockCard9.querySelector(".mock-summary");
    if (mockSummary) {
      mockSummary.textContent = chosenFacts.slice(0, 3).map(f => f.title).join(" • ");
    }
  }
}

function updateCueCardsDOM(hero, country, chosenFacts) {
  const cardAIntro = document.getElementById("cue-card-a-text");
  const cardBText = document.getElementById("cue-card-b-text");
  const fact = (chosenFacts && chosenFacts[0]) || country.funFacts[0];

  if (cardAIntro) {
    cardAIntro.innerHTML = `"¡Hola! My name is <strong>${STATE.studentName}</strong> and I am in ${STATE.grade} at ${STATE.schoolName}! Today I am presenting <strong>${country.name}</strong> (${country.nickname})!"`;
  }
  if (cardBText) {
    cardBText.innerHTML = `"My favorite hero is <strong>${hero.name}</strong>, and my favorite food is <strong>${country.card2.tag}</strong>! Did you know: <em>${fact.kidExplanation}</em>"`;
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
          <span>Explorer Match 🧭</span>
        </div>
        <div>
          <h3 class="text-base md:text-lg font-black text-slate-900">${q.q}</h3>
          <p class="text-xs text-slate-500 mt-0.5">${q.sub}</p>
        </div>
        <div class="space-y-2.5">
          ${q.options.map(opt => `
            <button onclick="handleQuizAnswer('${opt.match}')" class="w-full text-left p-3.5 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50/80 text-xs md:text-sm font-semibold transition flex items-center justify-between group shadow-sm">
              <span class="pr-2 leading-snug">${opt.text}</span>
              <span class="text-slate-400 group-hover:text-blue-600 font-bold flex-shrink-0">➔</span>
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
          <h3 class="text-2xl font-black text-slate-900 mt-1">Your Perfect Match: ${matchCountry.name} ${matchCountry.flagEmoji}</h3>
          <p class="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">${matchCountry.kidIntro}</p>
        </div>
        <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
          ⭐ Island/Nation Cheer: <strong>"${matchCountry.cheer}"</strong> • Famous Dish: <strong>${matchCountry.card2.tag}</strong>
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
  const studio = document.getElementById("builder-studio");
  if (studio) studio.scrollIntoView({ behavior: "smooth" });
}

// Global functions exposed to window
window.selectCountry = selectCountry;
window.openQuizModal = openQuizModal;
window.closeQuizModal = closeQuizModal;
window.handleQuizAnswer = handleQuizAnswer;
window.applyQuizMatch = applyQuizMatch;
window.speakText = speakText;
