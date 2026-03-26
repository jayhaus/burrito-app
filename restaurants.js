// San Diego County Burrito Restaurant Dataset - 110+ entries
// Fields: name, lat, lng, rating, flames, reviews, boosts, expert, bigPortion,
//         category, distance, price, img, breakdown, reviewList,
//         neighborhood, city, burrito_types, source_confidence, tags, chain, notes

const restaurants = [
  // ── MISSION HILLS / HILLCREST ──────────────────────────────────────
  {
    name: "Lucha Libre Taco Shop", lat: 32.7522, lng: -117.1720,
    rating: 4.8, flames: 5, reviews: 312, boosts: 47, expert: true, bigPortion: true,
    category: "Mexican · Mission Hills", distance: "0.3 mi", price: "$",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.9, filling: 4.8, flavor: 4.7, value: 4.6, authenticity: 4.9 },
    reviewList: [{ author: "Carlos R.", date: "2 days ago", rating: 5, text: "California burrito is life-changing. Crispy fries, perfect carne asada.", boosted: true, badge: "50+ Burritos" }],
    neighborhood: "Mission Hills", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Surf & Turf", "Breakfast"],
    source_confidence: 0.95, tags: ["local favorite", "late-night", "iconic"], chain: false,
    notes: "Lucha libre wrestling theme, famous California burrito"
  },
  {
    name: "Roberto's Very Mexican Food", lat: 32.8156, lng: -117.1430,
    rating: 4.6, flames: 5, reviews: 278, boosts: 41, expert: true, bigPortion: true,
    category: "Mexican · Hillcrest", distance: "2.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.6, filling: 4.7, flavor: 4.5, value: 4.8, authenticity: 4.5 },
    reviewList: [{ author: "Jesse R.", date: "1 day ago", rating: 5, text: "OG San Diego burrito spot. Carne asada burrito combo is unbeatable.", boosted: true, badge: "100+ Burritos" }],
    neighborhood: "Hillcrest", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Bean & Cheese", "Breakfast"],
    source_confidence: 0.92, tags: ["late-night", "drive-thru", "local favorite", "chain"], chain: true,
    notes: "Part of the -berto's family; Hillcrest location open 24hrs"
  },
  {
    name: "El Indio Mexican Restaurant", lat: 32.7538, lng: -117.1692,
    rating: 4.3, flames: 4, reviews: 187, boosts: 19, expert: false, bigPortion: false,
    category: "Mexican · Mission Hills", distance: "0.4 mi", price: "$",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.3, flavor: 4.3, value: 4.2, authenticity: 4.5 },
    reviewList: [{ author: "Maria G.", date: "3 days ago", rating: 4, text: "SD institution since 1940. The taquitos are legendary but burritos hold their own." }],
    neighborhood: "Mission Hills", city: "San Diego",
    burrito_types: ["Carne Asada", "Bean & Cheese", "Chicken"],
    source_confidence: 0.90, tags: ["historic", "local favorite", "dine-in"], chain: false,
    notes: "Oldest Mexican restaurant in San Diego, open since 1940"
  },
  {
    name: "Ortiz's Taco Shop", lat: 32.7701, lng: -117.1701,
    rating: 2.8, flames: 3, reviews: 42, boosts: 1, expert: false, bigPortion: false,
    category: "Mexican · Hillcrest", distance: "1.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 2.8, filling: 2.9, flavor: 2.7, value: 3.2, authenticity: 2.5 },
    reviewList: [{ author: "Sam T.", date: "1 month ago", rating: 3, text: "Basic burrito. Fine in a rush but better options nearby." }],
    neighborhood: "Hillcrest", city: "San Diego",
    burrito_types: ["Carne Asada", "Bean & Cheese"],
    source_confidence: 0.60, tags: ["quick-stop"], chain: false,
    notes: "Small neighborhood taco shop"
  },

  // ── NORTH PARK / SOUTH PARK / NORMAL HEIGHTS ──────────────────────
  {
    name: "La Perla Cocina", lat: 32.7580, lng: -117.1150,
    rating: 4.7, flames: 5, reviews: 267, boosts: 52, expert: true, bigPortion: false,
    category: "Mexican · North Park", distance: "1.9 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.8, filling: 4.7, flavor: 4.8, value: 4.4, authenticity: 4.7 },
    reviewList: [{ author: "Marcus J.", date: "1 day ago", rating: 5, text: "Mole burrito is unlike anything I've had. Handmade tortillas.", boosted: true, badge: "100+ Burritos" }],
    neighborhood: "North Park", city: "San Diego",
    burrito_types: ["Mole", "Birria", "Carne Asada", "Vegetarian"],
    source_confidence: 0.93, tags: ["hidden gem", "handmade tortillas", "upscale"], chain: false,
    notes: "Chef-driven, known for mole and birria burritos"
  },
  {
    name: "Rigoberto's Taco Shop", lat: 32.7797, lng: -117.1265,
    rating: 3.8, flames: 4, reviews: 98, boosts: 8, expert: false, bigPortion: true,
    category: "Mexican · North Park", distance: "1.6 mi", price: "$",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 3.8, value: 4.2, authenticity: 3.5 },
    reviewList: [{ author: "Chris M.", date: "1 week ago", rating: 4, text: "Open late and always hits. Carne asada burrito is huge for the price." }],
    neighborhood: "North Park", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Breakfast", "Bean & Cheese"],
    source_confidence: 0.75, tags: ["late-night", "chain", "drive-thru"], chain: true,
    notes: "-berto's chain, reliable late-night option"
  },
  {
    name: "Los Panchos Taco Shop", lat: 32.7465, lng: -117.1335,
    rating: 4.4, flames: 4, reviews: 198, boosts: 28, expert: true, bigPortion: true,
    category: "Mexican · South Park", distance: "1.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.5, flavor: 4.3, value: 4.5, authenticity: 4.4 },
    reviewList: [{ author: "Diego M.", date: "3 days ago", rating: 5, text: "Criminally underrated. Carne asada grilled to perfection.", boosted: true, badge: "100+ Burritos" }],
    neighborhood: "South Park", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Breakfast", "Al Pastor"],
    source_confidence: 0.88, tags: ["local favorite", "hidden gem"], chain: false,
    notes: "Family-owned, neighborhood institution"
  },
  {
    name: "Humberto's Taco Shop", lat: 32.8020, lng: -117.1260,
    rating: 3.6, flames: 4, reviews: 68, boosts: 4, expert: false, bigPortion: false,
    category: "Mexican · Normal Heights", distance: "2.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.5, filling: 3.7, flavor: 3.6, value: 3.8, authenticity: 3.4 },
    reviewList: [{ author: "Nina G.", date: "1 week ago", rating: 4, text: "No frills, just good burritos. Great late night." }],
    neighborhood: "Normal Heights", city: "San Diego",
    burrito_types: ["Carne Asada", "Bean & Cheese", "California"],
    source_confidence: 0.70, tags: ["late-night", "chain"], chain: true,
    notes: "Humberto's chain location"
  },
  {
    name: "El Zarape", lat: 32.7642, lng: -117.1290,
    rating: 4.2, flames: 4, reviews: 156, boosts: 18, expert: false, bigPortion: false,
    category: "Mexican · University Heights", distance: "1.4 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.3, flavor: 4.4, value: 4.0, authenticity: 4.3 },
    reviewList: [{ author: "Lisa P.", date: "1 week ago", rating: 4, text: "Creative burritos. Shrimp burrito with mango salsa is unique." }],
    neighborhood: "University Heights", city: "San Diego",
    burrito_types: ["Shrimp", "Carne Asada", "Chicken", "Vegetarian"],
    source_confidence: 0.82, tags: ["creative", "dine-in"], chain: false,
    notes: "Known for inventive fillings and fusion touches"
  },
  {
    name: "Taqueria El Paisa", lat: 32.7612, lng: -117.1180,
    rating: 4.1, flames: 4, reviews: 89, boosts: 10, expert: false, bigPortion: true,
    category: "Mexican · North Park", distance: "1.7 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.3, authenticity: 4.0 },
    reviewList: [{ author: "Jose M.", date: "5 days ago", rating: 4, text: "Authentic flavors, large portions, super affordable." }],
    neighborhood: "North Park", city: "San Diego",
    burrito_types: ["Al Pastor", "Carne Asada", "Chorizo", "Bean & Cheese"],
    source_confidence: 0.72, tags: ["authentic", "local"], chain: false,
    notes: "Small family taco shop in North Park"
  },

  // ── GOLDEN HILL / BARRIO LOGAN / EAST VILLAGE ─────────────────────
  {
    name: "Nico's Mexican Food", lat: 32.7356, lng: -117.1457,
    rating: 4.0, flames: 4, reviews: 134, boosts: 12, expert: false, bigPortion: false,
    category: "Mexican · Golden Hill", distance: "1.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.0, flavor: 4.1, value: 4.2, authenticity: 3.8 },
    reviewList: [{ author: "Ben C.", date: "4 days ago", rating: 4, text: "California burrito never disappoints. Great value." }],
    neighborhood: "Golden Hill", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Breakfast"],
    source_confidence: 0.78, tags: ["reliable", "value"], chain: false,
    notes: "Consistent neighborhood spot"
  },
  {
    name: "Pokez Mexican Restaurant", lat: 32.7185, lng: -117.1585,
    rating: 3.9, flames: 4, reviews: 105, boosts: 11, expert: false, bigPortion: true,
    category: "Mexican · East Village", distance: "0.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 4.0, value: 4.2, authenticity: 3.6 },
    reviewList: [{ author: "Leo C.", date: "5 days ago", rating: 4, text: "Best vegetarian burritos in downtown SD. Veggie supreme is packed." }],
    neighborhood: "East Village", city: "San Diego",
    burrito_types: ["Vegetarian", "Vegan", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.80, tags: ["vegetarian-friendly", "punk-vibe", "local favorite"], chain: false,
    notes: "Punk-rock dive bar meets taco shop, vegetarian-friendly"
  },
  {
    name: "Las Cuatro Milpas", lat: 32.7038, lng: -117.1322,
    rating: 4.6, flames: 5, reviews: 312, boosts: 45, expert: true, bigPortion: false,
    category: "Mexican · Barrio Logan", distance: "2.1 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.9, filling: 4.6, flavor: 4.7, value: 4.8, authenticity: 5.0 },
    reviewList: [{ author: "Rosa L.", date: "2 days ago", rating: 5, text: "San Diego legend. Open since 1933. Lines out the door for a reason.", badge: "100+ Burritos" }],
    neighborhood: "Barrio Logan", city: "San Diego",
    burrito_types: ["Bean & Cheese", "Pork", "Carne Asada"],
    source_confidence: 0.97, tags: ["historic", "iconic", "cash only", "long lines"], chain: false,
    notes: "SD institution since 1933, handmade tortillas, limited hours"
  },
  {
    name: "El Comal Mexican Food", lat: 32.7220, lng: -117.1402,
    rating: 4.0, flames: 4, reviews: 73, boosts: 7, expert: false, bigPortion: true,
    category: "Mexican · Logan Heights", distance: "2.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 4.1 },
    reviewList: [{ author: "Ernesto V.", date: "1 week ago", rating: 4, text: "Underrated spot. Huge burritos, authentic flavors, cheap." }],
    neighborhood: "Logan Heights", city: "San Diego",
    burrito_types: ["Carne Asada", "Al Pastor", "Breakfast", "Bean & Cheese"],
    source_confidence: 0.68, tags: ["hidden gem", "value", "authentic"], chain: false,
    notes: "Neighborhood spot in Logan Heights"
  },

  // ── OLD TOWN / MISSION VALLEY / MIDWAY ────────────────────────────
  {
    name: "Colima's Mexican Food", lat: 32.7481, lng: -117.1950,
    rating: 3.5, flames: 3, reviews: 87, boosts: 5, expert: false, bigPortion: false,
    category: "Mexican · Old Town", distance: "2.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.4, filling: 3.6, flavor: 3.5, value: 3.8, authenticity: 3.2 },
    reviewList: [{ author: "Pat S.", date: "2 weeks ago", rating: 3, text: "Decent for the price. Hits the spot when you're hungry." }],
    neighborhood: "Old Town", city: "San Diego",
    burrito_types: ["Carne Asada", "Bean & Cheese", "Chicken"],
    source_confidence: 0.65, tags: ["quick-stop"], chain: false, notes: "Old Town neighborhood shop"
  },
  {
    name: "Old Town Mexican Cafe", lat: 32.7533, lng: -117.1972,
    rating: 4.2, flames: 4, reviews: 221, boosts: 24, expert: false, bigPortion: false,
    category: "Mexican · Old Town", distance: "2.9 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1570461226513-bf84c81f1e7b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.2, flavor: 4.1, value: 3.9, authenticity: 4.4 },
    reviewList: [{ author: "Claire B.", date: "4 days ago", rating: 4, text: "Tortillas made fresh on the comal in the window. Machaca burrito is a must." }],
    neighborhood: "Old Town", city: "San Diego",
    burrito_types: ["Machaca", "Carne Asada", "Breakfast", "Chicken"],
    source_confidence: 0.88, tags: ["touristy", "dine-in", "handmade tortillas"], chain: false,
    notes: "Famous for watching tortillas made fresh in front window"
  },
  {
    name: "Cotija's Mexican Food", lat: 32.7385, lng: -117.1780,
    rating: 3.7, flames: 4, reviews: 76, boosts: 6, expert: false, bigPortion: false,
    category: "Mexican · Midway District", distance: "2.4 mi", price: "$",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.6, filling: 3.8, flavor: 3.7, value: 3.9, authenticity: 3.5 },
    reviewList: [{ author: "Mark P.", date: "2 weeks ago", rating: 4, text: "Good quick stop. Bean and cheese is simple perfection." }],
    neighborhood: "Midway District", city: "San Diego",
    burrito_types: ["Bean & Cheese", "Carne Asada", "California"],
    source_confidence: 0.68, tags: ["quick-stop", "chain"], chain: true,
    notes: "Cotija's chain location"
  },
  {
    name: "Lolita's Mexican Food", lat: 32.7945, lng: -117.1580,
    rating: 4.5, flames: 4, reviews: 245, boosts: 31, expert: true, bigPortion: true,
    category: "Mexican · Kearny Mesa", distance: "2.1 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.5, filling: 4.6, flavor: 4.4, value: 4.7, authenticity: 4.3 },
    reviewList: [{ author: "Ana M.", date: "3 days ago", rating: 5, text: "SD institution. Carne asada fries AND burrito? Perfectly grilled.", badge: "50+ Burritos" }],
    neighborhood: "Kearny Mesa", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Bean & Cheese", "Breakfast"],
    source_confidence: 0.93, tags: ["local favorite", "chain", "late-night"], chain: true,
    notes: "Beloved local chain, multiple SD locations"
  },
  {
    name: "Lolita's Mission Valley", lat: 32.7741, lng: -117.1509,
    rating: 4.3, flames: 4, reviews: 178, boosts: 20, expert: false, bigPortion: true,
    category: "Mexican · Mission Valley", distance: "1.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.4, flavor: 4.2, value: 4.6, authenticity: 4.1 },
    reviewList: [{ author: "Frank D.", date: "6 days ago", rating: 4, text: "Reliable Lolita's. The California burrito hits every time." }],
    neighborhood: "Mission Valley", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Bean & Cheese"],
    source_confidence: 0.90, tags: ["chain", "local favorite"], chain: true,
    notes: "Lolita's chain - Mission Valley location"
  },

  // ── POINT LOMA / OCEAN BEACH ──────────────────────────────────────
  {
    name: "Don Carlos Taco Shop", lat: 32.7615, lng: -117.2042,
    rating: 3.2, flames: 3, reviews: 64, boosts: 3, expert: false, bigPortion: false,
    category: "Mexican · Point Loma", distance: "3.4 mi", price: "$",
    img: "https://images.unsplash.com/photo-1570461226513-bf84c81f1e7b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.1, filling: 3.3, flavor: 3.2, value: 3.5, authenticity: 3.0 },
    reviewList: [{ author: "Kim J.", date: "3 weeks ago", rating: 3, text: "Average burrito. Nothing memorable either way." }],
    neighborhood: "Point Loma", city: "San Diego",
    burrito_types: ["Carne Asada", "Bean & Cheese"],
    source_confidence: 0.58, tags: [], chain: false, notes: "Small taco shop in Point Loma"
  },
  {
    name: "Nati's Mexican Restaurant", lat: 32.7462, lng: -117.2502,
    rating: 4.4, flames: 4, reviews: 203, boosts: 26, expert: true, bigPortion: false,
    category: "Mexican · Ocean Beach", distance: "4.1 mi", price: "$",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.4, flavor: 4.4, value: 4.5, authenticity: 4.6 },
    reviewList: [{ author: "Surf Sam", date: "2 days ago", rating: 5, text: "OB staple. Cheap, delicious, perfect post-surf breakfast burrito." }],
    neighborhood: "Ocean Beach", city: "San Diego",
    burrito_types: ["Breakfast", "Carne Asada", "Bean & Cheese", "Machaca"],
    source_confidence: 0.87, tags: ["local favorite", "surf culture", "breakfast"], chain: false,
    notes: "OB neighborhood institution, popular with surfers"
  },
  {
    name: "South Beach Bar & Grille", lat: 32.7421, lng: -117.2541,
    rating: 4.1, flames: 4, reviews: 165, boosts: 15, expert: false, bigPortion: false,
    category: "Mexican · Ocean Beach", distance: "4.3 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.2, value: 3.9, authenticity: 3.8 },
    reviewList: [{ author: "Waverly T.", date: "1 week ago", rating: 4, text: "Fish tacos and burritos with ocean vibes. Mahimahi burrito is excellent." }],
    neighborhood: "Ocean Beach", city: "San Diego",
    burrito_types: ["Fish", "Shrimp", "Carne Asada", "Surf & Turf"],
    source_confidence: 0.82, tags: ["beachy", "seafood", "dine-in"], chain: false,
    notes: "Known for fish burritos and beach atmosphere"
  },
  {
    name: "Roberto's Taco Shop OB", lat: 32.7445, lng: -117.2489,
    rating: 3.9, flames: 4, reviews: 88, boosts: 9, expert: false, bigPortion: true,
    category: "Mexican · Ocean Beach", distance: "4.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 3.9, value: 4.3, authenticity: 3.7 },
    reviewList: [{ author: "Cam W.", date: "2 weeks ago", rating: 4, text: "Solid -berto's. Late night after the beach is ideal." }],
    neighborhood: "Ocean Beach", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese", "Breakfast"],
    source_confidence: 0.72, tags: ["late-night", "chain"], chain: true,
    notes: "-berto's chain, Ocean Beach location"
  },

  // ── PACIFIC BEACH / MISSION BEACH ─────────────────────────────────
  {
    name: "Santana's Mexican Food PB", lat: 32.7997, lng: -117.2390,
    rating: 4.3, flames: 4, reviews: 192, boosts: 23, expert: false, bigPortion: true,
    category: "Mexican · Pacific Beach", distance: "4.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1564767609342-620cb19b2357?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.3, flavor: 4.3, value: 4.5, authenticity: 4.0 },
    reviewList: [{ author: "Brock H.", date: "3 days ago", rating: 4, text: "Go-to after a long day in PB. California burrito is massive." }],
    neighborhood: "Pacific Beach", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Breakfast", "Bean & Cheese"],
    source_confidence: 0.85, tags: ["beach town", "local favorite", "late-night"], chain: false,
    notes: "PB staple, beloved by locals and tourists alike"
  },
  {
    name: "Kono's Cafe", lat: 32.7971, lng: -117.2517,
    rating: 4.5, flames: 4, reviews: 289, boosts: 38, expert: true, bigPortion: true,
    category: "Breakfast Burritos · Pacific Beach", distance: "4.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.6, flavor: 4.5, value: 4.4, authenticity: 4.3 },
    reviewList: [{ author: "Dawn P.", date: "1 day ago", rating: 5, text: "Breakfast burrito institution on the boardwalk. The Kono's Breakfast is massive and perfect." }],
    neighborhood: "Pacific Beach", city: "San Diego",
    burrito_types: ["Breakfast", "Egg & Cheese", "Chorizo Breakfast"],
    source_confidence: 0.95, tags: ["breakfast", "boardwalk", "local favorite", "iconic"], chain: false,
    notes: "Iconic breakfast burrito spot on Crystal Pier boardwalk since 1984"
  },
  {
    name: "Cabo Mexican Restaurant", lat: 32.7895, lng: -117.2380,
    rating: 3.8, flames: 4, reviews: 112, boosts: 11, expert: false, bigPortion: false,
    category: "Mexican · Mission Beach", distance: "4.2 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 4.0, value: 3.7, authenticity: 3.6 },
    reviewList: [{ author: "Tina R.", date: "1 week ago", rating: 4, text: "Good fish burrito and margaritas. A bit tourist-y but solid." }],
    neighborhood: "Mission Beach", city: "San Diego",
    burrito_types: ["Fish", "Shrimp", "Carne Asada"],
    source_confidence: 0.75, tags: ["touristy", "beachy", "dine-in"], chain: false,
    notes: "Beach restaurant popular with vacationers"
  },
  {
    name: "Alberto's Mexican Food PB", lat: 32.8040, lng: -117.2351,
    rating: 3.7, flames: 4, reviews: 77, boosts: 6, expert: false, bigPortion: true,
    category: "Mexican · Pacific Beach", distance: "4.6 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.6, filling: 3.8, flavor: 3.7, value: 4.1, authenticity: 3.5 },
    reviewList: [{ author: "Kyle J.", date: "2 weeks ago", rating: 4, text: "Open late, huge portions, cheap. What else do you need?" }],
    neighborhood: "Pacific Beach", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.70, tags: ["late-night", "chain", "drive-thru"], chain: true,
    notes: "-berto's chain, PB location"
  },

  // ── LA JOLLA ──────────────────────────────────────────────────────
  {
    name: "Taco Stand La Jolla", lat: 32.8345, lng: -117.1502,
    rating: 4.4, flames: 4, reviews: 215, boosts: 33, expert: true, bigPortion: false,
    category: "Mexican · La Jolla", distance: "4.8 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.5, filling: 4.4, flavor: 4.5, value: 4.0, authenticity: 4.3 },
    reviewList: [{ author: "Rachel W.", date: "2 days ago", rating: 5, text: "TJ-style burritos in La Jolla. Fresh, flavorful, elite salsa bar.", boosted: true, badge: "50+ Burritos" }],
    neighborhood: "La Jolla", city: "La Jolla",
    burrito_types: ["Carne Asada", "Al Pastor", "Fish", "California"],
    source_confidence: 0.92, tags: ["TJ-style", "local favorite"], chain: false,
    notes: "Tijuana-style street food in an upscale neighborhood"
  },
  {
    name: "Puesto La Jolla", lat: 32.8469, lng: -117.2742,
    rating: 4.5, flames: 5, reviews: 310, boosts: 42, expert: true, bigPortion: false,
    category: "Mexican · La Jolla", distance: "5.5 mi", price: "$$$",
    img: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.6, filling: 4.5, flavor: 4.7, value: 3.9, authenticity: 4.2 },
    reviewList: [{ author: "Jennifer L.", date: "1 day ago", rating: 5, text: "Upscale but worth it. Crispy cheese tacos. The chicken and truffle burrito is indulgent." }],
    neighborhood: "La Jolla", city: "La Jolla",
    burrito_types: ["Truffle Chicken", "Carne Asada", "Shrimp", "Vegetarian"],
    source_confidence: 0.90, tags: ["upscale", "waterfront", "dine-in"], chain: true,
    notes: "Upscale Mexican, La Jolla Cove location"
  },
  {
    name: "Rigoberto's Taco Shop La Jolla", lat: 32.8401, lng: -117.2701,
    rating: 3.8, flames: 4, reviews: 62, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · La Jolla", distance: "5.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 3.8, value: 4.2, authenticity: 3.5 },
    reviewList: [{ author: "Todd H.", date: "3 weeks ago", rating: 4, text: "Late-night in La Jolla. Gets the job done at 2am." }],
    neighborhood: "La Jolla", city: "La Jolla",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.68, tags: ["late-night", "chain"], chain: true,
    notes: "-berto's chain, La Jolla location"
  },

  // ── CLAIREMONT / LINDA VISTA / BAY PARK ───────────────────────────
  {
    name: "El Cotixan Mexican Food", lat: 32.7898, lng: -117.1950,
    rating: 4.2, flames: 4, reviews: 143, boosts: 17, expert: false, bigPortion: true,
    category: "Mexican · Bay Park", distance: "3.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.4, authenticity: 4.0 },
    reviewList: [{ author: "Neil B.", date: "4 days ago", rating: 4, text: "Bay Park's best kept secret. The California burrito is loaded and cheap." }],
    neighborhood: "Bay Park", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Breakfast", "Al Pastor"],
    source_confidence: 0.80, tags: ["local favorite", "value", "chain"], chain: true,
    notes: "El Cotixan chain location, Bay Park"
  },
  {
    name: "Alberto's Mexican Food Clairemont", lat: 32.8201, lng: -117.1842,
    rating: 3.6, flames: 4, reviews: 84, boosts: 6, expert: false, bigPortion: true,
    category: "Mexican · Clairemont", distance: "3.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.5, filling: 3.7, flavor: 3.6, value: 4.0, authenticity: 3.4 },
    reviewList: [{ author: "Greg S.", date: "2 weeks ago", rating: 4, text: "Great late-night option. Large portions and always open." }],
    neighborhood: "Clairemont", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.68, tags: ["late-night", "chain", "drive-thru"], chain: true,
    notes: "-berto's chain, Clairemont"
  },
  {
    name: "Taqueria Guadalajara", lat: 32.8085, lng: -117.1765,
    rating: 4.3, flames: 4, reviews: 118, boosts: 14, expert: false, bigPortion: true,
    category: "Mexican · Linda Vista", distance: "3.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.3, flavor: 4.4, value: 4.5, authenticity: 4.4 },
    reviewList: [{ author: "Maria H.", date: "5 days ago", rating: 5, text: "Authentic Guadalajara-style. Torta ahogada and burritos are incredible." }],
    neighborhood: "Linda Vista", city: "San Diego",
    burrito_types: ["Carne Asada", "Al Pastor", "Birria", "Bean & Cheese"],
    source_confidence: 0.78, tags: ["authentic", "hidden gem"], chain: false,
    notes: "Jalisco-style, underrated in Linda Vista"
  },

  // ── CITY HEIGHTS / EASTERN SD ─────────────────────────────────────
  {
    name: "Vallarta Express", lat: 32.7890, lng: -117.1090,
    rating: 3.9, flames: 4, reviews: 91, boosts: 9, expert: false, bigPortion: true,
    category: "Mexican · City Heights", distance: "3.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1564767609342-620cb19b2357?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 3.9, value: 4.1, authenticity: 3.7 },
    reviewList: [{ author: "Elena V.", date: "1 week ago", rating: 4, text: "Great bang for buck. Chicken burrito is surprisingly good." }],
    neighborhood: "City Heights", city: "San Diego",
    burrito_types: ["Chicken", "Carne Asada", "California"],
    source_confidence: 0.72, tags: ["value", "chain"], chain: true,
    notes: "Vallarta chain, City Heights"
  },
  {
    name: "El Super Burrito", lat: 32.7810, lng: -117.0920,
    rating: 4.0, flames: 4, reviews: 67, boosts: 7, expert: false, bigPortion: true,
    category: "Mexican · City Heights", distance: "3.4 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 4.0 },
    reviewList: [{ author: "Carlos H.", date: "1 week ago", rating: 4, text: "Name says it all. Giant burritos, very affordable." }],
    neighborhood: "City Heights", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Super Burrito", "Breakfast"],
    source_confidence: 0.65, tags: ["value", "big portions"], chain: false,
    notes: "Known for oversized burritos"
  },
  {
    name: "Tacos El Franc", lat: 32.7680, lng: -117.0880,
    rating: 4.5, flames: 5, reviews: 172, boosts: 29, expert: true, bigPortion: false,
    category: "Mexican · City Heights", distance: "3.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1570461226513-bf84c81f1e7b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.6, flavor: 4.6, value: 4.7, authenticity: 4.8 },
    reviewList: [{ author: "Ruben O.", date: "2 days ago", rating: 5, text: "Best birria in SD County, period. The burrito de birria is life-changing.", badge: "50+ Burritos" }],
    neighborhood: "City Heights", city: "San Diego",
    burrito_types: ["Birria", "Carne Asada", "Al Pastor", "Tripa"],
    source_confidence: 0.88, tags: ["hidden gem", "birria", "authentic", "local favorite"], chain: false,
    notes: "Street taco truck turned restaurant, birria specialist"
  },

  // ── MIRA MESA / SCRIPPS RANCH ─────────────────────────────────────
  {
    name: "Lolita's Mira Mesa", lat: 32.9110, lng: -117.1482,
    rating: 4.4, flames: 4, reviews: 189, boosts: 22, expert: false, bigPortion: true,
    category: "Mexican · Mira Mesa", distance: "7.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.4, flavor: 4.3, value: 4.6, authenticity: 4.1 },
    reviewList: [{ author: "Paul N.", date: "5 days ago", rating: 4, text: "Always reliable. The carne asada is always fresh." }],
    neighborhood: "Mira Mesa", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Breakfast"],
    source_confidence: 0.88, tags: ["chain", "local favorite"], chain: true,
    notes: "Lolita's chain, Mira Mesa"
  },
  {
    name: "Alberto's Mira Mesa", lat: 32.9052, lng: -117.1398,
    rating: 3.7, flames: 4, reviews: 71, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · Mira Mesa", distance: "7.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.6, filling: 3.8, flavor: 3.7, value: 4.1, authenticity: 3.5 },
    reviewList: [{ author: "Amy K.", date: "3 weeks ago", rating: 4, text: "Late night burrito fix. Consistent and cheap." }],
    neighborhood: "Mira Mesa", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.68, tags: ["late-night", "chain"], chain: true, notes: "-berto's chain"
  },
  {
    name: "Taqueria El Rancho", lat: 32.9201, lng: -117.1290,
    rating: 4.1, flames: 4, reviews: 93, boosts: 10, expert: false, bigPortion: true,
    category: "Mexican · Scripps Ranch", distance: "8.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.3, authenticity: 4.0 },
    reviewList: [{ author: "Dana L.", date: "1 week ago", rating: 4, text: "Scripps Ranch gem. Huge portions and fresh ingredients." }],
    neighborhood: "Scripps Ranch", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Chicken", "Breakfast"],
    source_confidence: 0.70, tags: ["local", "suburban"], chain: false,
    notes: "Family taqueria in Scripps Ranch"
  },

  // ── CORONADO ──────────────────────────────────────────────────────
  {
    name: "Mike's Taco Club", lat: 32.7208, lng: -117.1693,
    rating: 4.0, flames: 4, reviews: 143, boosts: 16, expert: false, bigPortion: false,
    category: "Mexican · Coronado", distance: "3.8 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.2, value: 3.8, authenticity: 3.7 },
    reviewList: [{ author: "Amanda R.", date: "4 days ago", rating: 4, text: "Great fish burrito with ocean views. Pricier but vibe makes up for it." }],
    neighborhood: "Coronado", city: "Coronado",
    burrito_types: ["Fish", "Shrimp", "Carne Asada", "Surf & Turf"],
    source_confidence: 0.78, tags: ["beachy", "dine-in", "waterfront"], chain: false,
    notes: "Coronado island, seafood-forward burritos"
  },

  // ── NATIONAL CITY ─────────────────────────────────────────────────
  {
    name: "JV's Mexican Food", lat: 32.7244, lng: -117.1024,
    rating: 4.1, flames: 4, reviews: 112, boosts: 14, expert: false, bigPortion: true,
    category: "Mexican · National City", distance: "5.1 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.3, authenticity: 3.9 },
    reviewList: [{ author: "Rick N.", date: "6 days ago", rating: 4, text: "Hidden gem! Breakfast burrito is massive and perfectly seasoned." }],
    neighborhood: "National City", city: "National City",
    burrito_types: ["Breakfast", "Carne Asada", "California", "Bean & Cheese"],
    source_confidence: 0.80, tags: ["hidden gem", "breakfast"], chain: false,
    notes: "National City neighborhood staple"
  },
  {
    name: "Las Palmeras Mexican Food", lat: 32.6785, lng: -117.0982,
    rating: 4.0, flames: 4, reviews: 58, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · National City", distance: "5.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 3.9, value: 4.2, authenticity: 4.0 },
    reviewList: [{ author: "Miguel T.", date: "2 weeks ago", rating: 4, text: "Great neighborhood spot. Really authentic and very affordable." }],
    neighborhood: "National City", city: "National City",
    burrito_types: ["Carne Asada", "Al Pastor", "Bean & Cheese"],
    source_confidence: 0.62, tags: ["authentic", "value"], chain: false,
    notes: "Small National City taco shop"
  },

  // ── CHULA VISTA ───────────────────────────────────────────────────
  {
    name: "Tacos El Gordo", lat: 32.7098, lng: -117.1565,
    rating: 4.3, flames: 4, reviews: 189, boosts: 22, expert: false, bigPortion: true,
    category: "Street Tacos · Chula Vista", distance: "4.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.4, flavor: 4.5, value: 4.3, authenticity: 4.6 },
    reviewList: [{ author: "Sofia L.", date: "5 days ago", rating: 4, text: "TJ-style burritos. Al pastor is incredible.", boosted: true, badge: "50+ Burritos" }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["Al Pastor", "Adobada", "Carne Asada", "Tripa"],
    source_confidence: 0.92, tags: ["TJ-style", "authentic", "local favorite"], chain: true,
    notes: "Tijuana-based chain, multiple Chula Vista locations"
  },
  {
    name: "El Pollo Grill Chula Vista", lat: 32.6402, lng: -117.0850,
    rating: 4.2, flames: 4, reviews: 147, boosts: 16, expert: false, bigPortion: true,
    category: "Mexican · Chula Vista", distance: "6.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.4, authenticity: 4.1 },
    reviewList: [{ author: "Lupita R.", date: "3 days ago", rating: 4, text: "Mesquite chicken burrito is outstanding. Rotisserie flavor in every bite." }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["Chicken", "Carne Asada", "Bean & Cheese", "California"],
    source_confidence: 0.85, tags: ["local favorite", "grilled"], chain: false,
    notes: "Known for mesquite-grilled chicken burritos"
  },
  {
    name: "Andres Mexican Restaurant", lat: 32.6502, lng: -117.0741,
    rating: 4.1, flames: 4, reviews: 102, boosts: 11, expert: false, bigPortion: false,
    category: "Mexican · Chula Vista", distance: "6.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.2, authenticity: 4.3 },
    reviewList: [{ author: "Sandra V.", date: "1 week ago", rating: 4, text: "Family-owned gem in Chula Vista. Menudo on weekends too." }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["Carne Asada", "Chicken", "Bean & Cheese", "Breakfast"],
    source_confidence: 0.72, tags: ["family-owned", "authentic"], chain: false,
    notes: "Multi-generational family restaurant"
  },
  {
    name: "Rigoberto's Chula Vista", lat: 32.6298, lng: -117.0850,
    rating: 3.6, flames: 4, reviews: 53, boosts: 4, expert: false, bigPortion: true,
    category: "Mexican · Chula Vista", distance: "7.1 mi", price: "$",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.5, filling: 3.7, flavor: 3.6, value: 4.0, authenticity: 3.4 },
    reviewList: [{ author: "Pete R.", date: "3 weeks ago", rating: 3, text: "Reliable late-night. Standard -berto's quality." }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.65, tags: ["late-night", "chain"], chain: true, notes: "-berto's chain"
  },

  // ── LA MESA / EL CAJON / SANTEE ───────────────────────────────────
  {
    name: "Roberto's Taco Shop La Mesa", lat: 32.7679, lng: -117.0232,
    rating: 3.9, flames: 4, reviews: 82, boosts: 7, expert: false, bigPortion: true,
    category: "Mexican · La Mesa", distance: "7.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 3.9, value: 4.2, authenticity: 3.7 },
    reviewList: [{ author: "Steve D.", date: "2 weeks ago", rating: 4, text: "Solid -berto's. Good California burrito late at night." }],
    neighborhood: "La Mesa", city: "La Mesa",
    burrito_types: ["California", "Carne Asada", "Breakfast"],
    source_confidence: 0.70, tags: ["late-night", "chain"], chain: true, notes: "-berto's chain"
  },
  {
    name: "El Zarape La Mesa", lat: 32.7701, lng: -117.0198,
    rating: 4.0, flames: 4, reviews: 94, boosts: 9, expert: false, bigPortion: false,
    category: "Mexican · La Mesa", distance: "7.8 mi", price: "$",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.1, value: 4.2, authenticity: 4.0 },
    reviewList: [{ author: "Heather M.", date: "10 days ago", rating: 4, text: "Great neighborhood taco shop. Consistent and affordable." }],
    neighborhood: "La Mesa", city: "La Mesa",
    burrito_types: ["Carne Asada", "Chicken", "Bean & Cheese"],
    source_confidence: 0.70, tags: ["neighborhood", "local"], chain: false,
    notes: "La Mesa location"
  },
  {
    name: "Taqueria El Tapatio", lat: 32.7950, lng: -116.9622,
    rating: 4.3, flames: 4, reviews: 128, boosts: 15, expert: false, bigPortion: true,
    category: "Mexican · El Cajon", distance: "10.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.3, flavor: 4.4, value: 4.5, authenticity: 4.4 },
    reviewList: [{ author: "Josue R.", date: "4 days ago", rating: 5, text: "Best burritos in East County. Authentic and huge portions." }],
    neighborhood: "El Cajon", city: "El Cajon",
    burrito_types: ["Carne Asada", "Al Pastor", "Birria", "Breakfast"],
    source_confidence: 0.78, tags: ["authentic", "east county", "value"], chain: false,
    notes: "El Cajon East County favorite"
  },
  {
    name: "Santee Taco Shop", lat: 32.8389, lng: -116.9741,
    rating: 3.8, flames: 4, reviews: 61, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · Santee", distance: "11.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 3.8, value: 4.1, authenticity: 3.6 },
    reviewList: [{ author: "Rich T.", date: "3 weeks ago", rating: 4, text: "Reliable suburban taco shop. Good value for East County." }],
    neighborhood: "Santee", city: "Santee",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.60, tags: ["suburban", "east county"], chain: false,
    notes: "Suburban Santee taco shop"
  },
  {
    name: "Lolita's El Cajon", lat: 32.7948, lng: -116.9801,
    rating: 4.2, flames: 4, reviews: 115, boosts: 13, expert: false, bigPortion: true,
    category: "Mexican · El Cajon", distance: "10.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.5, authenticity: 4.0 },
    reviewList: [{ author: "Donna K.", date: "1 week ago", rating: 4, text: "So happy they have a location out here. Same great Lolita's quality." }],
    neighborhood: "El Cajon", city: "El Cajon",
    burrito_types: ["Carne Asada", "California", "Breakfast"],
    source_confidence: 0.82, tags: ["chain", "local favorite"], chain: true,
    notes: "Lolita's chain, El Cajon"
  },

  // ── ENCINITAS / CARLSBAD / OCEANSIDE ──────────────────────────────
  {
    name: "Juanita's Mexican Food Encinitas", lat: 33.0369, lng: -117.2920,
    rating: 4.2, flames: 4, reviews: 138, boosts: 15, expert: false, bigPortion: true,
    category: "Mexican · Encinitas", distance: "18.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.4, authenticity: 4.2 },
    reviewList: [{ author: "Jen B.", date: "3 days ago", rating: 4, text: "North County gem. Breakfast burrito is a beast and perfect every time." }],
    neighborhood: "Encinitas", city: "Encinitas",
    burrito_types: ["Breakfast", "Carne Asada", "California", "Bean & Cheese"],
    source_confidence: 0.82, tags: ["local favorite", "north county", "breakfast"], chain: false,
    notes: "Encinitas neighborhood staple"
  },
  {
    name: "Ricky's Mexican Food Encinitas", lat: 33.0290, lng: -117.2881,
    rating: 4.0, flames: 4, reviews: 97, boosts: 9, expert: false, bigPortion: true,
    category: "Mexican · Encinitas", distance: "18.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 3.9 },
    reviewList: [{ author: "Zach M.", date: "1 week ago", rating: 4, text: "Perfect post-surf burrito. Huge and cheap." }],
    neighborhood: "Encinitas", city: "Encinitas",
    burrito_types: ["California", "Carne Asada", "Breakfast"],
    source_confidence: 0.72, tags: ["surf culture", "north county"], chain: false,
    notes: "Popular with Encinitas surf crowd"
  },
  {
    name: "Las Olas Mexican Seafood", lat: 33.1582, lng: -117.3501,
    rating: 4.4, flames: 4, reviews: 201, boosts: 26, expert: true, bigPortion: false,
    category: "Mexican Seafood · Carlsbad", distance: "33.0 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.5, flavor: 4.5, value: 4.1, authenticity: 4.4 },
    reviewList: [{ author: "Lisa C.", date: "2 days ago", rating: 5, text: "Best fish burrito in North County. The shrimp and fish combo is incredible." }],
    neighborhood: "Carlsbad", city: "Carlsbad",
    burrito_types: ["Fish", "Shrimp", "Surf & Turf", "California"],
    source_confidence: 0.88, tags: ["seafood", "north county", "local favorite"], chain: false,
    notes: "Carlsbad seafood taco shop, famous fish burrito"
  },
  {
    name: "JR's Mexican Food Oceanside", lat: 33.1959, lng: -117.3795,
    rating: 4.1, flames: 4, reviews: 108, boosts: 11, expert: false, bigPortion: true,
    category: "Mexican · Oceanside", distance: "36.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.4, authenticity: 4.1 },
    reviewList: [{ author: "Nick O.", date: "1 week ago", rating: 4, text: "North County's answer to -berto's but better. Big portions." }],
    neighborhood: "Oceanside", city: "Oceanside",
    burrito_types: ["Carne Asada", "California", "Breakfast", "Al Pastor"],
    source_confidence: 0.75, tags: ["north county", "value"], chain: false,
    notes: "Oceanside taco shop favorite"
  },
  {
    name: "Lolita's Carlsbad", lat: 33.1581, lng: -117.3503,
    rating: 4.3, flames: 4, reviews: 143, boosts: 16, expert: false, bigPortion: true,
    category: "Mexican · Carlsbad", distance: "32.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.3, flavor: 4.2, value: 4.5, authenticity: 4.0 },
    reviewList: [{ author: "Amber P.", date: "5 days ago", rating: 4, text: "Consistent Lolita's. Worth stopping on the way back from LA." }],
    neighborhood: "Carlsbad", city: "Carlsbad",
    burrito_types: ["Carne Asada", "California", "Breakfast"],
    source_confidence: 0.85, tags: ["chain", "north county"], chain: true,
    notes: "Lolita's chain - Carlsbad"
  },
  {
    name: "Taqueria El Rey", lat: 33.2102, lng: -117.3890,
    rating: 4.0, flames: 4, reviews: 72, boosts: 6, expert: false, bigPortion: true,
    category: "Mexican · Oceanside", distance: "37.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 4.1 },
    reviewList: [{ author: "Barry T.", date: "2 weeks ago", rating: 4, text: "Great local taqueria. Birria burritos on weekends." }],
    neighborhood: "Oceanside", city: "Oceanside",
    burrito_types: ["Birria", "Carne Asada", "Al Pastor"],
    source_confidence: 0.65, tags: ["north county", "local"], chain: false,
    notes: "Oceanside taqueria"
  },

  // ── ESCONDIDO / VISTA / SAN MARCOS ───────────────────────────────
  {
    name: "El Rancho Mexican Restaurant", lat: 33.1192, lng: -117.0862,
    rating: 4.2, flames: 4, reviews: 116, boosts: 12, expert: false, bigPortion: true,
    category: "Mexican · Escondido", distance: "27.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1570461226513-bf84c81f1e7b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.4, authenticity: 4.3 },
    reviewList: [{ author: "Gloria S.", date: "4 days ago", rating: 4, text: "Escondido staple. Huge burritos, excellent chile verde." }],
    neighborhood: "Escondido", city: "Escondido",
    burrito_types: ["Chile Verde", "Carne Asada", "California", "Breakfast"],
    source_confidence: 0.75, tags: ["inland", "local favorite"], chain: false,
    notes: "Popular Escondido burrito spot"
  },
  {
    name: "Roberto's Vista", lat: 33.2000, lng: -117.2421,
    rating: 3.8, flames: 4, reviews: 65, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · Vista", distance: "35.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 3.8, value: 4.1, authenticity: 3.6 },
    reviewList: [{ author: "Cole B.", date: "3 weeks ago", rating: 4, text: "Solid -berto's. Late night runs from San Marcos." }],
    neighborhood: "Vista", city: "Vista",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.65, tags: ["late-night", "chain"], chain: true, notes: "-berto's chain"
  },
  {
    name: "Taqueria Los Compadres", lat: 33.1420, lng: -117.1542,
    rating: 4.3, flames: 4, reviews: 98, boosts: 11, expert: false, bigPortion: true,
    category: "Mexican · San Marcos", distance: "30.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.3, flavor: 4.3, value: 4.5, authenticity: 4.4 },
    reviewList: [{ author: "Victor M.", date: "5 days ago", rating: 4, text: "Authentic North County gem. The al pastor is cooked on a real trompo." }],
    neighborhood: "San Marcos", city: "San Marcos",
    burrito_types: ["Al Pastor", "Carne Asada", "Chorizo", "Bean & Cheese"],
    source_confidence: 0.75, tags: ["authentic", "trompo", "north county"], chain: false,
    notes: "Real trompo al pastor, San Marcos"
  },

  // ── RANCHO BERNARDO / POWAY / SPRING VALLEY ───────────────────────
  {
    name: "Rancho Bernardo Taco Shop", lat: 33.0142, lng: -117.0842,
    rating: 3.9, flames: 4, reviews: 74, boosts: 6, expert: false, bigPortion: true,
    category: "Mexican · Rancho Bernardo", distance: "20.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1564767609342-620cb19b2357?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 3.9, value: 4.2, authenticity: 3.8 },
    reviewList: [{ author: "Mel P.", date: "2 weeks ago", rating: 4, text: "Convenient and solid. Good suburban taco shop." }],
    neighborhood: "Rancho Bernardo", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Breakfast"],
    source_confidence: 0.62, tags: ["suburban"], chain: false, notes: "Rancho Bernardo suburban shop"
  },
  {
    name: "El Norteño Mexican Food", lat: 32.9620, lng: -117.0380,
    rating: 4.1, flames: 4, reviews: 85, boosts: 8, expert: false, bigPortion: true,
    category: "Mexican · Poway", distance: "19.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.3, authenticity: 4.1 },
    reviewList: [{ author: "Bob A.", date: "1 week ago", rating: 4, text: "Best in Poway easily. Huge carne asada burritos." }],
    neighborhood: "Poway", city: "Poway",
    burrito_types: ["Carne Asada", "California", "Breakfast"],
    source_confidence: 0.70, tags: ["suburban", "local favorite"], chain: false,
    notes: "Poway neighborhood taco shop"
  },
  {
    name: "Alberto's Spring Valley", lat: 32.7450, lng: -117.0029,
    rating: 3.7, flames: 4, reviews: 59, boosts: 4, expert: false, bigPortion: true,
    category: "Mexican · Spring Valley", distance: "9.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.6, filling: 3.8, flavor: 3.7, value: 4.0, authenticity: 3.5 },
    reviewList: [{ author: "Ray N.", date: "3 weeks ago", rating: 3, text: "Standard -berto's. Gets the job done after midnight." }],
    neighborhood: "Spring Valley", city: "Spring Valley",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.62, tags: ["late-night", "chain"], chain: true, notes: "-berto's chain"
  },
  {
    name: "Taqueria La Fondita", lat: 32.7320, lng: -117.0085,
    rating: 4.2, flames: 4, reviews: 92, boosts: 10, expert: false, bigPortion: true,
    category: "Mexican · Spring Valley", distance: "9.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.4, authenticity: 4.3 },
    reviewList: [{ author: "Carmen L.", date: "4 days ago", rating: 4, text: "Hidden gem in Spring Valley. The lengua burrito is authentic and incredible." }],
    neighborhood: "Spring Valley", city: "Spring Valley",
    burrito_types: ["Lengua", "Carne Asada", "Al Pastor", "Bean & Cheese"],
    source_confidence: 0.70, tags: ["hidden gem", "authentic"], chain: false,
    notes: "Authentic taqueria with offal options"
  },

  // ── LEMON GROVE / BONITA / SOUTH BAY ──────────────────────────────
  {
    name: "Tacos El Gordo Bonita", lat: 32.6620, lng: -117.0452,
    rating: 4.4, flames: 4, reviews: 167, boosts: 20, expert: false, bigPortion: true,
    category: "Street Tacos · Bonita", distance: "8.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.5, flavor: 4.5, value: 4.4, authenticity: 4.6 },
    reviewList: [{ author: "Mario L.", date: "2 days ago", rating: 5, text: "TJ-style at its finest. The adobada burrito is my favorite in SD." }],
    neighborhood: "Bonita", city: "Bonita",
    burrito_types: ["Al Pastor", "Adobada", "Carne Asada", "Tripa"],
    source_confidence: 0.88, tags: ["TJ-style", "authentic", "chain"], chain: true,
    notes: "Tacos El Gordo chain, South Bay"
  },
  {
    name: "El Sombrero Mexican Food", lat: 32.7380, lng: -117.0310,
    rating: 3.9, flames: 4, reviews: 66, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · Lemon Grove", distance: "8.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 3.9, value: 4.2, authenticity: 3.8 },
    reviewList: [{ author: "Tom E.", date: "2 weeks ago", rating: 4, text: "Solid neighborhood spot in Lemon Grove. Generous portions." }],
    neighborhood: "Lemon Grove", city: "Lemon Grove",
    burrito_types: ["Carne Asada", "California", "Bean & Cheese"],
    source_confidence: 0.62, tags: ["neighborhood"], chain: false, notes: "Lemon Grove taco shop"
  },

  // ── DOWNTOWN / GASLAMP ────────────────────────────────────────────
  {
    name: "Puesto Downtown", lat: 32.7082, lng: -117.1601,
    rating: 4.3, flames: 4, reviews: 287, boosts: 35, expert: true, bigPortion: false,
    category: "Mexican · Gaslamp", distance: "0.8 mi", price: "$$$",
    img: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.3, flavor: 4.5, value: 3.8, authenticity: 4.0 },
    reviewList: [{ author: "Sandra W.", date: "1 day ago", rating: 5, text: "Upscale Mexican in the Gaslamp. The crispy cheese taco and burritos are excellent." }],
    neighborhood: "Gaslamp Quarter", city: "San Diego",
    burrito_types: ["Carne Asada", "Chicken", "Vegetarian", "Shrimp"],
    source_confidence: 0.88, tags: ["upscale", "dine-in", "touristy"], chain: true,
    notes: "Upscale Mexican chain, Gaslamp Quarter"
  },
  {
    name: "Mexicali Taco & Co", lat: 32.7115, lng: -117.1620,
    rating: 4.1, flames: 4, reviews: 134, boosts: 14, expert: false, bigPortion: false,
    category: "Mexican · Downtown", distance: "0.6 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.2, value: 3.9, authenticity: 4.1 },
    reviewList: [{ author: "Yvonne C.", date: "3 days ago", rating: 4, text: "Downtown gem. Smoked brisket burrito is unique and great." }],
    neighborhood: "Downtown", city: "San Diego",
    burrito_types: ["Brisket", "Carne Asada", "Vegetarian", "Chicken"],
    source_confidence: 0.80, tags: ["creative", "downtown"], chain: false,
    notes: "Creative modern tacos downtown"
  },
  {
    name: "El Barrio Mexican Eatery", lat: 32.7198, lng: -117.1552,
    rating: 3.8, flames: 4, reviews: 78, boosts: 7, expert: false, bigPortion: false,
    category: "Mexican · East Village", distance: "0.7 mi", price: "$",
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 3.9, value: 4.0, authenticity: 3.7 },
    reviewList: [{ author: "Drew H.", date: "1 week ago", rating: 4, text: "Good downtown option. Reliable burrito, solid value." }],
    neighborhood: "East Village", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Vegetarian"],
    source_confidence: 0.68, tags: ["downtown", "value"], chain: false,
    notes: "East Village neighborhood taco spot"
  },

  // ── ADDITIONAL SPOTS ACROSS SD COUNTY ────────────────────────────
  {
    name: "Tacos El Paisano", lat: 32.6890, lng: -117.1231,
    rating: 4.0, flames: 4, reviews: 57, boosts: 5, expert: false, bigPortion: true,
    category: "Mexican · South San Diego", distance: "5.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 4.2 },
    reviewList: [{ author: "Hector L.", date: "2 weeks ago", rating: 4, text: "Under the radar. Great al pastor and carne asada burritos." }],
    neighborhood: "South San Diego", city: "San Diego",
    burrito_types: ["Al Pastor", "Carne Asada", "Tripa"],
    source_confidence: 0.65, tags: ["authentic", "hidden gem"], chain: false,
    notes: "South SD neighborhood taqueria"
  },
  {
    name: "Carnitas El Rey", lat: 32.6738, lng: -117.1042,
    rating: 4.4, flames: 4, reviews: 149, boosts: 18, expert: true, bigPortion: true,
    category: "Mexican · South San Diego", distance: "6.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.3, filling: 4.5, flavor: 4.5, value: 4.6, authenticity: 4.7 },
    reviewList: [{ author: "Beto R.", date: "1 day ago", rating: 5, text: "Carnitas burrito is unbeatable. Made fresh daily in copper pots." }],
    neighborhood: "South San Diego", city: "San Diego",
    burrito_types: ["Carnitas", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.85, tags: ["authentic", "carnitas", "local favorite"], chain: false,
    notes: "Carnitas cooked fresh daily in traditional copper vats"
  },
  {
    name: "Roberto's National City", lat: 32.6780, lng: -117.1001,
    rating: 3.7, flames: 4, reviews: 54, boosts: 4, expert: false, bigPortion: true,
    category: "Mexican · National City", distance: "5.9 mi", price: "$",
    img: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.6, filling: 3.8, flavor: 3.7, value: 4.1, authenticity: 3.5 },
    reviewList: [{ author: "Nina T.", date: "1 month ago", rating: 3, text: "Standard -berto's. Does what it says on the tin." }],
    neighborhood: "National City", city: "National City",
    burrito_types: ["California", "Carne Asada", "Bean & Cheese"],
    source_confidence: 0.62, tags: ["late-night", "chain"], chain: true, notes: "-berto's chain"
  },
  {
    name: "Taqueria Viva Mexico", lat: 32.8890, lng: -117.2202,
    rating: 4.2, flames: 4, reviews: 104, boosts: 12, expert: false, bigPortion: true,
    category: "Mexican · Sorrento Valley", distance: "9.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.3, flavor: 4.2, value: 4.4, authenticity: 4.3 },
    reviewList: [{ author: "Derek N.", date: "5 days ago", rating: 4, text: "Tech workers' secret. Best burrito in the Sorrento Valley corridor." }],
    neighborhood: "Sorrento Valley", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Al Pastor", "Breakfast"],
    source_confidence: 0.72, tags: ["local favorite", "lunch spot"], chain: false,
    notes: "Popular lunch spot for tech workers"
  },
  {
    name: "El Camino Mexican Kitchen", lat: 32.7621, lng: -117.1621,
    rating: 4.0, flames: 4, reviews: 88, boosts: 9, expert: false, bigPortion: false,
    category: "Mexican · Bankers Hill", distance: "0.9 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.2, value: 3.9, authenticity: 3.8 },
    reviewList: [{ author: "Fiona T.", date: "1 week ago", rating: 4, text: "Upscale take on the California burrito. Well executed." }],
    neighborhood: "Bankers Hill", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Chicken", "Vegetarian"],
    source_confidence: 0.72, tags: ["upscale", "dine-in"], chain: false,
    notes: "Modern Mexican in Bankers Hill"
  },
  {
    name: "El Cotixan Clairemont", lat: 32.8301, lng: -117.1992,
    rating: 4.0, flames: 4, reviews: 81, boosts: 8, expert: false, bigPortion: true,
    category: "Mexican · Clairemont", distance: "4.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 3.9 },
    reviewList: [{ author: "Hank W.", date: "2 weeks ago", rating: 4, text: "Good Clairemont spot. Carne asada is always fresh." }],
    neighborhood: "Clairemont", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Bean & Cheese"],
    source_confidence: 0.70, tags: ["chain"], chain: true, notes: "El Cotixan chain"
  },
  {
    name: "Taco Surf", lat: 32.8012, lng: -117.2401,
    rating: 4.1, flames: 4, reviews: 122, boosts: 13, expert: false, bigPortion: false,
    category: "Mexican · Pacific Beach", distance: "5.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.0, authenticity: 4.0 },
    reviewList: [{ author: "Tess K.", date: "4 days ago", rating: 4, text: "Classic PB taco shop. Good fish burrito and great people watching." }],
    neighborhood: "Pacific Beach", city: "San Diego",
    burrito_types: ["Fish", "Carne Asada", "California", "Shrimp"],
    source_confidence: 0.78, tags: ["beach town", "surf culture"], chain: false,
    notes: "PB surf culture taco shop"
  },
  {
    name: "Tita's Hacienda Mexican Food", lat: 32.7730, lng: -117.1481,
    rating: 4.1, flames: 4, reviews: 96, boosts: 10, expert: false, bigPortion: true,
    category: "Mexican · Middletown", distance: "1.1 mi", price: "$",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.3, authenticity: 4.0 },
    reviewList: [{ author: "Pat H.", date: "1 week ago", rating: 4, text: "Old school SD Mexican food. Big burritos, great value." }],
    neighborhood: "Middletown", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Breakfast", "Bean & Cheese"],
    source_confidence: 0.75, tags: ["old-school", "local"], chain: false,
    notes: "Old-school neighborhood taco shop"
  },
  {
    name: "Aqui es Texcoco", lat: 32.7250, lng: -117.1380,
    rating: 4.5, flames: 5, reviews: 234, boosts: 37, expert: true, bigPortion: false,
    category: "Mexican · Barrio Logan", distance: "2.0 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.6, flavor: 4.7, value: 4.3, authenticity: 4.8 },
    reviewList: [{ author: "Arturo M.", date: "1 day ago", rating: 5, text: "The best barbacoa in SD County. The barbacoa burrito is something else.", badge: "100+ Burritos" }],
    neighborhood: "Barrio Logan", city: "San Diego",
    burrito_types: ["Barbacoa", "Carnitas", "Chile Verde"],
    source_confidence: 0.92, tags: ["authentic", "barbacoa", "local favorite", "weekend special"], chain: false,
    notes: "Known for barbacoa cooked overnight, specialty Mexican"
  },
  {
    name: "Tahona Bar & Bistro", lat: 32.7540, lng: -117.1975,
    rating: 4.2, flames: 4, reviews: 178, boosts: 19, expert: false, bigPortion: false,
    category: "Mexican · Old Town", distance: "3.1 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.1, filling: 4.2, flavor: 4.3, value: 4.0, authenticity: 4.4 },
    reviewList: [{ author: "Sandra G.", date: "3 days ago", rating: 4, text: "Great mezcal selection and solid burritos. The duck burrito is unique." }],
    neighborhood: "Old Town", city: "San Diego",
    burrito_types: ["Duck", "Carne Asada", "Chicken", "Vegetarian"],
    source_confidence: 0.78, tags: ["dine-in", "mezcal bar", "creative"], chain: false,
    notes: "Upscale mezcal bar with creative burritos"
  },
  {
    name: "Salud!", lat: 32.7551, lng: -117.1172,
    rating: 4.3, flames: 4, reviews: 191, boosts: 22, expert: true, bigPortion: false,
    category: "Mexican · Barrio Logan", distance: "1.8 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.3, flavor: 4.4, value: 4.1, authenticity: 4.5 },
    reviewList: [{ author: "Ximena R.", date: "2 days ago", rating: 5, text: "Barrio staple. The Chile Colorado burrito is incredible. Very authentic." }],
    neighborhood: "Barrio Logan", city: "San Diego",
    burrito_types: ["Chile Colorado", "Carne Asada", "Chicken Mole"],
    source_confidence: 0.85, tags: ["local favorite", "authentic", "artsy neighborhood"], chain: false,
    notes: "Barrio Logan community staple, chile colorado specialty"
  },
  {
    name: "El Cuervo Taco Shop", lat: 32.8041, lng: -117.1601,
    rating: 3.9, flames: 4, reviews: 69, boosts: 6, expert: false, bigPortion: true,
    category: "Mexican · Kearny Mesa", distance: "3.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.8, filling: 4.0, flavor: 3.9, value: 4.2, authenticity: 3.8 },
    reviewList: [{ author: "Phil M.", date: "2 weeks ago", rating: 4, text: "Solid Kearny Mesa taco shop. Big portions and fresh ingredients." }],
    neighborhood: "Kearny Mesa", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Breakfast"],
    source_confidence: 0.65, tags: [], chain: false, notes: "Kearny Mesa taco shop"
  },
  {
    name: "Tacos de Canasta El Güero", lat: 32.7320, lng: -117.1489,
    rating: 4.6, flames: 5, reviews: 143, boosts: 30, expert: true, bigPortion: false,
    category: "Street Tacos · South Park", distance: "1.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1570461226513-bf84c81f1e7b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.7, filling: 4.6, flavor: 4.7, value: 4.9, authenticity: 4.9 },
    reviewList: [{ author: "Camila V.", date: "3 days ago", rating: 5, text: "Authentic canasta tacos and the burrito version is incredible. Cash only.", badge: "50+ Burritos" }],
    neighborhood: "South Park", city: "San Diego",
    burrito_types: ["Bean", "Chicharron", "Rajas", "Adobado"],
    source_confidence: 0.88, tags: ["authentic", "cash only", "street food", "hidden gem"], chain: false,
    notes: "Traditional Mexico City-style basket tacos, burrito on request"
  },
  {
    name: "Birrieria Guadalajara", lat: 32.6891, lng: -117.0502,
    rating: 4.6, flames: 5, reviews: 198, boosts: 34, expert: true, bigPortion: true,
    category: "Mexican · Chula Vista", distance: "7.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.5, filling: 4.7, flavor: 4.8, value: 4.6, authenticity: 4.9 },
    reviewList: [{ author: "Fermin H.", date: "1 day ago", rating: 5, text: "Birria birria birria. The burrito dipped in consommé is unreal. Worth the drive.", badge: "100+ Burritos" }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["Birria", "Carne Asada"],
    source_confidence: 0.90, tags: ["birria", "consommé", "authentic", "local favorite"], chain: false,
    notes: "Birria specialist, Jalisco-style"
  },
  {
    name: "El Pescador Fish Market", lat: 32.8470, lng: -117.2752,
    rating: 4.4, flames: 4, reviews: 219, boosts: 28, expert: true, bigPortion: false,
    category: "Seafood Mexican · La Jolla", distance: "5.6 mi", price: "$$",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.6, flavor: 4.5, value: 4.0, authenticity: 4.2 },
    reviewList: [{ author: "Jan W.", date: "2 days ago", rating: 5, text: "Fresh fish market burritos. Whatever is fresh that day in a burrito. Incredible." }],
    neighborhood: "La Jolla", city: "La Jolla",
    burrito_types: ["Fish", "Shrimp", "Lobster", "Surf & Turf"],
    source_confidence: 0.90, tags: ["seafood", "fresh", "local favorite", "La Jolla"], chain: false,
    notes: "Fish market with fresh daily catch burritos"
  },
  {
    name: "Tacos El Gordo Chula Vista 2", lat: 32.6201, lng: -117.0490,
    rating: 4.3, flames: 4, reviews: 161, boosts: 18, expert: false, bigPortion: true,
    category: "Street Tacos · Chula Vista", distance: "8.0 mi", price: "$",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.4, flavor: 4.4, value: 4.4, authenticity: 4.5 },
    reviewList: [{ author: "Tomas A.", date: "4 days ago", rating: 5, text: "Second Chula Vista location. Same great TJ-style food." }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["Al Pastor", "Adobada", "Carne Asada", "Cabeza"],
    source_confidence: 0.85, tags: ["TJ-style", "chain", "authentic"], chain: true,
    notes: "Tacos El Gordo second Chula Vista location"
  },
  {
    name: "Mariscos El Pulpo", lat: 32.6942, lng: -117.1201,
    rating: 4.3, flames: 4, reviews: 127, boosts: 14, expert: false, bigPortion: true,
    category: "Seafood Mexican · Chula Vista", distance: "5.7 mi", price: "$",
    img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.2, filling: 4.4, flavor: 4.4, value: 4.4, authenticity: 4.5 },
    reviewList: [{ author: "Lorena M.", date: "3 days ago", rating: 5, text: "Amazing seafood burritos. The shrimp and octopus burrito is huge and fresh." }],
    neighborhood: "Chula Vista", city: "Chula Vista",
    burrito_types: ["Shrimp", "Fish", "Octopus", "Surf & Turf"],
    source_confidence: 0.80, tags: ["seafood", "mariscos", "authentic"], chain: false,
    notes: "Mariscos specialist, seafood burritos"
  },
  {
    name: "El Bronco Mexican Restaurant", lat: 32.8620, lng: -117.2102,
    rating: 3.8, flames: 4, reviews: 73, boosts: 6, expert: false, bigPortion: true,
    category: "Mexican · University City", distance: "6.5 mi", price: "$",
    img: "https://images.unsplash.com/photo-1570461226513-bf84c81f1e7b?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.7, filling: 3.9, flavor: 3.8, value: 4.1, authenticity: 3.7 },
    reviewList: [{ author: "Brad S.", date: "2 weeks ago", rating: 4, text: "UCSD-area staple. Big cheap burritos for students." }],
    neighborhood: "University City", city: "San Diego",
    burrito_types: ["Carne Asada", "California", "Bean & Cheese", "Breakfast"],
    source_confidence: 0.65, tags: ["student-friendly", "value"], chain: false,
    notes: "Near UCSD, popular with students"
  },
  {
    name: "Sanchez Taco Shop", lat: 32.8550, lng: -117.2040,
    rating: 4.0, flames: 4, reviews: 88, boosts: 8, expert: false, bigPortion: true,
    category: "Mexican · University City", distance: "6.2 mi", price: "$",
    img: "https://images.unsplash.com/photo-1564767609342-620cb19b2357?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 4.0 },
    reviewList: [{ author: "Priya N.", date: "1 week ago", rating: 4, text: "Student favorite near UCSD. Breakfast burrito is massive." }],
    neighborhood: "University City", city: "San Diego",
    burrito_types: ["Breakfast", "California", "Carne Asada"],
    source_confidence: 0.68, tags: ["student-friendly", "breakfast"], chain: false,
    notes: "UCSD area, breakfast burrito popular"
  },
  {
    name: "Rosario's Mexican Food", lat: 32.7872, lng: -117.2341,
    rating: 4.0, flames: 4, reviews: 91, boosts: 9, expert: false, bigPortion: true,
    category: "Mexican · Pacific Beach", distance: "4.4 mi", price: "$",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    breakdown: { tortilla: 3.9, filling: 4.1, flavor: 4.0, value: 4.3, authenticity: 3.9 },
    reviewList: [{ author: "Wade B.", date: "3 days ago", rating: 4, text: "Underrated PB taco shop. Good California burrito and cheap." }],
    neighborhood: "Pacific Beach", city: "San Diego",
    burrito_types: ["California", "Carne Asada", "Breakfast"],
    source_confidence: 0.68, tags: ["beach town", "value"], chain: false,
    notes: "Quiet PB taco shop"
  },
  {
    name: "Tacos El Bronco Truck", lat: 32.7218, lng: -117.1401,
    rating: 4.5, flames: 5, reviews: 176, boosts: 32, expert: true, bigPortion: false,
    category: "Food Truck · South Park", distance: "1.4 mi", price: "$",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.4, filling: 4.6, flavor: 4.6, value: 4.8, authenticity: 4.8 },
    reviewList: [{ author: "Nelly G.", date: "2 days ago", rating: 5, text: "Best street truck in SD. Tripe, carnitas, and the carne asada burrito is perfect.", badge: "50+ Burritos" }],
    neighborhood: "South Park", city: "San Diego",
    burrito_types: ["Carnitas", "Tripa", "Carne Asada", "Al Pastor"],
    source_confidence: 0.85, tags: ["food truck", "authentic", "street food", "cash only"], chain: false,
    notes: "Evening food truck, cash only, authentic street style"
  },
  {
    name: "La Fachada Mexican Restaurant", lat: 32.7402, lng: -117.1278,
    rating: 4.1, flames: 4, reviews: 102, boosts: 11, expert: false, bigPortion: false,
    category: "Mexican · South Park", distance: "1.6 mi", price: "$",
    img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&h=400&fit=crop",
    breakdown: { tortilla: 4.0, filling: 4.2, flavor: 4.1, value: 4.2, authenticity: 4.1 },
    reviewList: [{ author: "Dan K.", date: "1 week ago", rating: 4, text: "Neighborhood staple in South Park. Solid burritos and great tamales." }],
    neighborhood: "South Park", city: "San Diego",
    burrito_types: ["Carne Asada", "Chicken", "Bean & Cheese"],
    source_confidence: 0.72, tags: ["neighborhood", "local"], chain: false,
    notes: "South Park neighborhood Mexican"
  },
];
