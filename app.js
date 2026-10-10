/**
 * Country Poster Board Builder & Kid Learning Tool
 * For Kindergarten & Elementary School Culture Displays
 */

// Helper to generate SVG coloring line-art data URIs for countries without pre-rendered JPGs
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
    <text x="300" y="420" text-anchor="middle" font-family="'Arial', sans-serif" font-size="12" fill="#94a3b8">Ready for Izzy &amp; Friends to Color!</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Preset Country Data Catalog
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
    kidIntro: "Puerto Rico is a warm tropical island surrounded by turquoise ocean waters with singing tiny frogs and colorful colonial forts!",
    
    // Cards 1-6 & 8
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
    
    // Famous Person Choices (Parent & Child can pick!)
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

    // Card 8: Language & Nature
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

    // Card 9: Fun Facts Library (Child picks their 3 favorites!)
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
    kidIntro: "Mexico is a land of towering ancient pyramids, delicious tacos, colorful Mariachi music, and smiling underwater axolotls!",
    
    card1: {
      title: "1. Country Information",
      tag: "Mexico",
      img: generateOutlineSvg("🇲🇽", "MEXICO MAP & FLAG", "Eagle, Serpent & Cactus"),
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
        id: "giant_pyramid",
        title: "Cholula Pyramid",
        subtitle: "Largest in the World",
        img: generateOutlineSvg("⛰️", "PYRAMID OF CHOLULA", "Hidden Giant Inside a Mountain"),
        caption: "The Great Pyramid of Cholula is the largest pyramid monument by volume on Earth!",
        kidExplanation: "It's so huge that it actually looks like a giant green grassy hill with a church on top!"
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
    kidIntro: "The Dominican Republic is a sun-drenched island paradise of swinging palm trees, bouncing Merengue music, and home run baseball heroes!",
    
    card1: {
      title: "1. Country Information",
      tag: "Dominican Republic",
      img: generateOutlineSvg("🇩🇴", "DOMINICAN REPUBLIC", "Hispaniola • Santo Domingo"),
      bullets: [
        { label: "Country Name", value: "Dominican Republic (República Dominicana)" },
        { label: "Nickname", value: "Quisqueya la Bella" },
        { label: "Capital City", value: "Santo Domingo ⭐ (oldest European city in Americas)" },
        { label: "Region", value: "Caribbean (Island of Hispaniola)" }
      ]
    },
    card2: {
      title: "2. Food & Treats",
      tag: "Mangú & Morir Soñando",
      img: generateOutlineSvg("🍳", "MANGÚ • LOS 3 GOLPES", "Mashed Green Plantains & Salami"),
      bullets: [
        { label: "National Dish", value: "Mangú (creamy mashed green plantains topped with pickled red onions)" },
        { label: "Los Tres Golpes", value: "Served with fried Dominican cheese, eggs, and crispy salami!" },
        { label: "Dream Drink", value: "Morir Soñando ('To Die Dreaming' - cold fresh orange juice mixed with sweet cream)" }
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
      },
      {
        id: "oscar_de_la_renta",
        name: "Oscar de la Renta",
        role: "World-Renowned Fashion Designer",
        img: generateOutlineSvg("✨", "OSCAR DE LA RENTA", "Iconic Fashion Designer"),
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
      img: generateOutlineSvg("🦜", "CIGUA PALMERA & BIRD", "Palmchat Bird & Mangroves"),
      bullets: [
        { label: "Official Language", value: "Spanish (spoken with a quick, musical Caribbean rhythm!)" },
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
        caption: "The classic Dominican breakfast of Mangú with salami, fried cheese, and eggs is called 'Los Tres Golpes'!",
        kidExplanation: "It gives kids super strength for school and tastes amazing with crunchy fried cheese!"
      },
      {
        id: "bible_flag",
        title: "Unique Flag",
        subtitle: "Only One with a Bible",
        img: generateOutlineSvg("📖", "DOMINICAN FLAG", "Coat of Arms & Bible"),
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
    kidIntro: "Colombia is a magical land of green Andean mountains, colorful butterflies, wax palm trees reaching into the clouds, and world-class music!",
    
    card1: {
      title: "1. Country Information",
      tag: "Colombia",
      img: generateOutlineSvg("🇨🇴", "COLOMBIA MAP & FLAG", "Yellow, Blue & Red • Andes"),
      bullets: [
        { label: "Country Name", value: "Colombia (República de Colombia)" },
        { label: "Nickname", value: "Tierra de Encanto" },
        { label: "Capital City", value: "Bogotá ⭐ (high in the Andes mountains)" },
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
      },
      {
        id: "fernando_botero",
        name: "Fernando Botero",
        role: "Famous Painter & Sculptor of 'Boterismo'",
        img: generateOutlineSvg("🎨", "FERNANDO BOTERO", "Iconic Sculptor of Plump Figures"),
        bullets: [
          { label: "Born", value: "Medellín, Colombia" },
          { label: "Art Style", value: "'Boterismo' - paintings and giant bronze statues of pleasantly plump people and round animals" },
          { label: "Museums", value: "Donated hundreds of his masterpieces to free public museums for kids in Bogotá and Medellín" }
        ],
        kidTrivia: "He loved painting chubby horses, round birds, and laughing plump characters that make kids smile!"
      }
    ],

    card8: {
      title: "8. Language & Nature",
      tag: "Condor & Encanto",
      img: generateOutlineSvg("🦅", "ANDEAN CONDOR", "Giant Wings & Yellow Butterflies"),
      bullets: [
        { label: "Official Language", value: "Spanish" },
        { label: "National Bird", value: "Andean Condor (one of the largest flying birds in the entire world!)" },
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
        id: "encanto_inspiration",
        title: "Encanto Palms",
        subtitle: "Cocora Valley",
        img: generateOutlineSvg("🌴", "WAX PALM TREES", "Tallest Palm Trees on Earth"),
        caption: "The Cocora Valley has Wax Palm trees that grow over 200 feet high—the tallest palm trees in the world!",
        kidExplanation: "These palm trees grow taller than 15-story buildings and inspired the magic in the movie Encanto!"
      },
      {
        id: "pink_dolphins",
        title: "Pink Dolphins",
        subtitle: "Amazon River",
        img: generateOutlineSvg("🐬", "PINK RIVER DOLPHIN", "Amazon Freshwater Dolphins"),
        caption: "Colombia's Amazon jungle rivers are home to rare freshwater dolphins that are naturally bright pink!",
        kidExplanation: "They really are bright bubblegum pink and swim playfully through the jungle rivers!"
      },
      {
        id: "magic_butterflies",
        title: "Butterfly Capital",
        subtitle: "20% of Earth's Species",
        img: generateOutlineSvg("🦋", "COLOMBIAN BUTTERFLIES", "Yellow Butterflies of Macondo"),
        caption: "One out of every five butterfly species in the entire world lives in Colombia!",
        kidExplanation: "If you walk through a Colombian forest, thousands of shimmering blue and yellow butterflies flutter all around you!"
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
    kidIntro: "Cuba is a sunny island of vibrant music, vintage pastel cars, the world's smallest hummingbirds, and joyful celebrations!",
    
    card1: {
      title: "1. Country Information",
      tag: "Cuba",
      img: generateOutlineSvg("🇨🇺", "CUBA MAP & FLAG", "White Star, Red Triangle & Stripes"),
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
      img: generateOutlineSvg("🥩", "ROPA VIEJA & PLATANOS", "Savory Shredded Beef & Sweet Plantains"),
      bullets: [
        { label: "National Dish", value: "Ropa Vieja (shredded flank steak simmered in sweet bell peppers & tomatoes)" },
        { label: "Side Dish", value: "Moros y Cristianos (black beans and white rice cooked with garlic)" },
        { label: "Sweet Treat", value: "Flan de Caramelo & Batido de Mamey (rich tropical fruit milkshake)" }
      ]
    },
    card3: {
      title: "3. Music & Dance",
      tag: "Salsa & Son Cubano",
      img: generateOutlineSvg("🪇", "SALSA & CONGAS", "Bongos, Trumpets & Claves"),
      bullets: [
        { label: "Famous Styles", value: "Son Cubano, Mambo, Cha-cha-chá, and lively Afro-Cuban Rumba" },
        { label: "Secret Beat", value: "The Clave rhythm (two wooden sticks tapping out the heart-beat rhythm)" },
        { label: "Celebration Shout", value: "'¡Azúcar!' made famous by Celia Cruz!" }
      ]
    },
    card4: {
      title: "4. Traditional Clothing",
      tag: "Guayabera",
      img: generateOutlineSvg("👔", "GUAYABERA SHIRT", "Four Pockets & Cool Linen"),
      bullets: [
        { label: "Famous Shirt", value: "Guayabera (crisp, lightweight linen shirt with 4 front pockets and vertical pleats)" },
        { label: "Why 4 Pockets?", value: "Legend says farmers needed pockets to carry fresh guava fruits home!" },
        { label: "Elegance", value: "Worn untucked in hot tropical weather for formal events and weddings" }
      ]
    },
    card5: {
      title: "5. Culture & Festival",
      tag: "Vintage Cars",
      img: generateOutlineSvg("🚗", "VINTAGE CARS • ALMENDRONES", "Pastel 1950s Classic Convertibles"),
      bullets: [
        { label: "Rolling Museum", value: "Over 60,000 classic 1950s American cars ('Almendrones') still cruise Havana" },
        { label: "Bright Colors", value: "Painted in candy pink, turquoise, yellow, and sky blue" },
        { label: "Ingenuity", value: "Cuban mechanics have kept them running smoothly for over 70 years!" }
      ]
    },
    card6: {
      title: "6. Historic Landmarks",
      tag: "Castillo del Morro",
      img: generateOutlineSvg("🏰", "CASTILLO DE LOS TRES REYES", "Historic Havana Harbor Lighthouse"),
      bullets: [
        { label: "Harbor Fortress", value: "Castillo de los Tres Reyes del Morro (built in 1589)" },
        { label: "Lighthouse", value: "The towering stone lighthouse guards the entrance to Havana Bay" },
        { label: "Night Cannon", value: "At 9:00 PM every night, soldiers in historic uniforms fire the ceremonial cannon ('El Cañonazo')!" }
      ]
    },

    famousPeople: [
      {
        id: "celia_cruz",
        name: "Celia Cruz",
        role: "The 'Queen of Salsa' & Global Icon",
        img: generateOutlineSvg("👑", "CELIA CRUZ • ¡AZÚCAR!", "Queen of Salsa in Ruffled Gown"),
        bullets: [
          { label: "Born", value: "Havana, Cuba" },
          { label: "Famous Shout", value: "'¡AZÚCAR!' (bringing joy and sweetness to everyone)" },
          { label: "Legendary Career", value: "Recorded over 70 albums, won 3 Grammys and 4 Latin Grammys" },
          { label: "Iconic Style", value: "Famous for her colorful rainbow wigs and dazzling stage costumes" }
        ],
        kidTrivia: "She was famous for shouting '¡AZÚCAR!' which means sugar, because she believed music should make everyone happy!"
      },
      {
        id: "jose_marti",
        name: "José Martí",
        role: "Poet, National Hero & Children's Author",
        img: generateOutlineSvg("📜", "JOSÉ MARTÍ", "Poet of Guantanamera"),
        bullets: [
          { label: "Born", value: "Havana, Cuba" },
          { label: "Poetry", value: "Wrote the famous poem 'Versos Sencillos' used in the song 'Guantanamera'" },
          { label: "Kids Magazine", value: "Created 'La Edad de Oro' (The Golden Age) magazine just for children" },
          { label: "Hero", value: "Dedicated his entire life to freedom, education, and art" }
        ],
        kidTrivia: "He wrote poetry and stories especially for kids, teaching them that being kind and honest makes you a true hero!"
      }
    ],

    card8: {
      title: "8. Language & Nature",
      tag: "Bee Hummingbird",
      img: generateOutlineSvg("🐦", "BEE HUMMINGBIRD", "Smallest Bird in the World"),
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
        subtitle: "Zunzuncito Hummingbird",
        img: generateOutlineSvg("🪶", "TINIEST BIRD ON EARTH", "Weighs Less Than a Penny"),
        caption: "Cuba is home to the Bee Hummingbird, the smallest bird species on planet Earth!",
        kidExplanation: "It's smaller than your thumb and flutters its wings 80 times every single second!"
      },
      {
        id: "rolling_museum",
        title: "Candy-Colored Cars",
        subtitle: "Havana Street Cruisers",
        img: generateOutlineSvg("🚗", "1950s VINTAGE CRUISERS", "Bubblegum Pink Convertibles"),
        caption: "Havana has tens of thousands of real 1950s classic cars still driving every day!",
        kidExplanation: "Riding down the street feels like stepping into a cartoon with bright pink and yellow classic convertibles!"
      },
      {
        id: "nightly_cannon",
        title: "9:00 PM Cannon Boom!",
        subtitle: "El Cañonazo de las Nueve",
        img: generateOutlineSvg("💣", "EL CAÑONAZO DE LAS NUEVE", "Ceremonial Havana Harbor Cannon"),
        caption: "Every single night at 9:00 PM, soldiers fire a real historic cannon over the harbor!",
        kidExplanation: "It's a 300-year-old tradition that used to tell everyone it was time to close the city gates for bedtime!"
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
  selectedFactIndices: [0, 1, 2], // 3 chosen facts
  currentStep: 1,
  totalSteps: 5,
  customUploads: {} // key -> dataUrl
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initCountrySelector();
  initFormBindings();
  renderApp();
});

// Setup country selector cards
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
  speakSoundFeedback();
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

// Master Render Function
function renderApp() {
  const country = COUNTRY_DATA[STATE.countryKey];
  if (!country) return;

  renderHeroSelector(country);
  renderFunFactsPicker(country);
  renderKidLearningChallenge(country);
  renderPresentationScript(country);
  updateLivePreviews();
}

// Render the Famous Person Multiple-Choice Selector
function renderHeroSelector(country) {
  const container = document.getElementById("hero-picker-container");
  if (!container) return;
  container.innerHTML = "";

  country.famousPeople.forEach((hero, index) => {
    const isSelected = STATE.selectedHeroIndex === index;
    const card = document.createElement("div");
    card.className = `p-3.5 rounded-xl border-2 cursor-pointer transition flex gap-3 items-center ${
      isSelected
        ? "border-blue-600 bg-blue-50/80 shadow-md ring-2 ring-blue-400"
        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
    }`;
    card.onclick = () => {
      STATE.selectedHeroIndex = index;
      renderHeroSelector(country);
      updateLivePreviews();
      speakSoundFeedback();
    };

    const imgBox = document.createElement("div");
    imgBox.className = "w-16 h-16 rounded-lg bg-white border border-slate-300 flex-shrink-0 overflow-hidden flex items-center justify-center p-1";
    imgBox.innerHTML = `<img src="${hero.img}" class="w-full h-full object-contain" alt="${hero.name}">`;

    const info = document.createElement("div");
    info.className = "flex-1";
    info.innerHTML = `
      <div class="flex items-center justify-between">
        <h4 class="font-extrabold text-sm text-slate-900">${hero.name}</h4>
        <span class="text-xs px-2 py-0.5 rounded-full font-bold ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}">
          ${isSelected ? 'Selected ⭐' : 'Choose'}
        </span>
      </div>
      <p class="text-xs font-semibold text-blue-800">${hero.role}</p>
      <p class="text-[11px] text-slate-600 mt-1 italic leading-tight">"${hero.kidTrivia}"</p>
    `;

    card.appendChild(imgBox);
    card.appendChild(info);
    container.appendChild(card);
  });
}

// Render the 3-out-of-N Fun Facts Selector
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
    card.className = `p-3 rounded-xl border-2 cursor-pointer transition flex items-center gap-3 ${
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
    imgThumb.className = "w-12 h-12 bg-white rounded border border-slate-300 overflow-hidden flex-shrink-0 flex items-center justify-center p-0.5";
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
    if (current.length > 1) { // keep at least 1
      current.splice(pos, 1);
    }
  } else {
    if (current.length < 3) {
      current.push(index);
    } else {
      // replace first
      current.shift();
      current.push(index);
    }
  }
  STATE.selectedFactIndices = current;
}

// Render "Kid Learning Challenge" - Interactive prompts for the child & parent
function renderKidLearningChallenge(country) {
  const container = document.getElementById("kid-learning-box");
  if (!container) return;

  const hero = country.famousPeople[STATE.selectedHeroIndex];
  container.innerHTML = `
    <div class="bg-gradient-to-r from-sky-50 to-indigo-50 border-2 border-sky-300 rounded-2xl p-4 shadow-sm">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-2xl">🎓</span>
        <h3 class="font-black text-sky-950 text-sm uppercase tracking-wider">Izzy's Kid Explorer Challenge: ${country.name}</h3>
      </div>
      <p class="text-xs text-slate-700 leading-relaxed mb-3">
        Here are 3 fun questions for <strong>${STATE.studentName}</strong> to discover with family or classmates:
      </p>
      <div class="space-y-2">
        <div class="bg-white p-2.5 rounded-xl border border-sky-200 text-xs">
          <p class="font-bold text-sky-900">1. Can you say the cheer out loud?</p>
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

// Render "Practice My Presentation" Script with Speech Synthesis
function renderPresentationScript(country) {
  const container = document.getElementById("presentation-script-box");
  if (!container) return;

  const hero = country.famousPeople[STATE.selectedHeroIndex];
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

// Text-to-speech helper
function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; // clear, gentle speed for kids
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

function speakSoundFeedback() {
  // gentle audio affirmation if supported
  if ("speechSynthesis" in window && false) {
    const cheer = new SpeechSynthesisUtterance("¡Excelente!");
    cheer.lang = "es-ES";
    window.speechSynthesis.speak(cheer);
  }
}

// Update all live previews (Mockup board and 5 Printable Sheets)
function updateLivePreviews() {
  const country = COUNTRY_DATA[STATE.countryKey];
  if (!country) return;

  const hero = country.famousPeople[STATE.selectedHeroIndex];
  const chosenFacts = STATE.selectedFactIndices.map(i => country.funFacts[i] || country.funFacts[0]);

  // 1. Update Mockup Banner
  const mockupBannerName = document.getElementById("mockup-banner-name");
  const mockupBannerTitle = document.getElementById("mockup-banner-title");
  const mockupBannerSubtitle = document.getElementById("mockup-banner-subtitle");
  const mockupSchoolHeader = document.getElementById("mockup-school-header");

  if (mockupBannerName) mockupBannerName.textContent = `${STATE.studentName.toUpperCase()}’S`;
  if (mockupBannerTitle) mockupBannerTitle.textContent = `${country.name.toUpperCase()} ADVENTURE!`;
  if (mockupBannerSubtitle) mockupBannerSubtitle.textContent = `Featuring: Food, Music, History, ${hero.name} & The ${country.card8.tag}! ${country.flagEmoji}`;
  if (mockupSchoolHeader) mockupSchoolHeader.textContent = `${STATE.schoolName.toUpperCase()} • ${STATE.event.toUpperCase()} • ${STATE.grade.toUpperCase()}`;

  // 2. Update Sheet 1 SVG (Rotated 90° for Max 9.8" x 4.8" Size)
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

  // 3. Update Category Cards (Cards 1 to 9) in both Mockup & Printable Sheets
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

  // Card 8: Language & Mascot
  updateCardDOM("card-8", country.card8);

  // Card 9: 3 Chosen Fun Facts
  updateCard9DOM(chosenFacts, country);

  // Update Footer Credit
  const footerBadges = document.querySelectorAll(".student-footer-credit");
  footerBadges.forEach(el => {
    el.textContent = `⭐ ${STATE.studentName} • ${STATE.schoolName} • Ready to Share My Culture! ❤️`;
  });
}

// Update single card DOM in both mockup and sheet
function updateCardDOM(cardId, data) {
  // Update Printable Sheet Card
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

  // Update Mockup Mini-Card
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

// Special handler for Card 9 (3 Fun Facts)
function updateCard9DOM(chosenFacts, country) {
  // Printable Sheet 5 (Card 9)
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

  // Mockup Card 9
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

// Convert Uploaded Photo to Crisp B&W Coloring Line Art using HTML5 Canvas Edge Detection
function convertImageToColoringArt(imageElement, threshold = 40) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 450;

  // Draw image scaled to fit
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const width = canvas.width;
  const height = canvas.height;

  // Convert to grayscale
  const gray = new Float32Array(width * height);
  for (let i = 0; i < data.length; i += 4) {
    gray[i / 4] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  }

  // Sobel edge operator
  const edges = new Uint8ClampedArray(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      const gx =
        -1 * gray[(y - 1) * width + (x - 1)] +
         1 * gray[(y - 1) * width + (x + 1)] +
        -2 * gray[y * width + (x - 1)] +
         2 * gray[y * width + (x + 1)] +
        -1 * gray[(y + 1) * width + (x - 1)] +
         1 * gray[(y + 1) * width + (x + 1)];

      const gy =
        -1 * gray[(y - 1) * width + (x - 1)] +
        -2 * gray[(y - 1) * width + x] +
        -1 * gray[(y - 1) * width + (x + 1)] +
         1 * gray[(y + 1) * width + (x - 1)] +
         2 * gray[(y + 1) * width + x] +
         1 * gray[(y + 1) * width + (x + 1)];

      const mag = Math.sqrt(gx * gx + gy * gy);
      // Invert: dark edge becomes black line (0), flat areas become pure white (255)
      edges[idx] = mag > threshold ? 0 : 255;
    }
  }

  // Put edges back onto canvas
  for (let i = 0; i < edges.length; i++) {
    const val = edges[i];
    const pixelIdx = i * 4;
    data[pixelIdx] = val;
    data[pixelIdx + 1] = val;
    data[pixelIdx + 2] = val;
    data[pixelIdx + 3] = 255;
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas.toDataURL("image/png");
}

// Project Export / Import
function exportProjectJSON() {
  const jsonStr = JSON.stringify(STATE, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${STATE.studentName.toLowerCase()}_${STATE.countryKey}_poster_project.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProjectJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const importedState = JSON.parse(e.target.result);
      STATE = { ...STATE, ...importedState };
      initFormBindings();
      initCountrySelector();
      renderApp();
      alert("Project loaded successfully! ⭐");
    } catch (err) {
      alert("Error reading project file.");
    }
  };
  reader.readAsText(file);
}

// Global functions exposed to window
window.selectCountry = selectCountry;
window.exportProjectJSON = exportProjectJSON;
window.importProjectJSON = importProjectJSON;
window.speakText = speakText;
