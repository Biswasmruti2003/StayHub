const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        category: "trending"
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        category: "mountain"
    },
    {
        title: "Cozy Beachfront Cottage 2",
        description:
            "Wake up to ocean views in this charming beachfront cottage, ideal for a relaxing getaway.",
        image: {
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1170&auto=format&fit=crop",
            filename: "ListingImage"
        },
        price: 900,
        location: "Malibu",
        country: "United States",
        category: "beach"
    },
    {
        title: "Luxury Villa with Private Pool",
        description:
            "Experience luxury living in this spacious villa featuring a private pool and garden.",
        image: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
            filename: "ListingImage"
        },
        price: 2500,
        location: "Bali",
        country: "Indonesia",
        category: "camp"
    },
    {
        title: "Rustic Mountain Cabin",
        description:
            "Escape to the mountains in this peaceful cabin surrounded by breathtaking nature.",
        image: {
            url: "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "ListingImage"
        },
        price: 700,
        location: "Manali",
        country: "India",
        category: "castle"
    },
    {
        title: "Elegant City Apartment",
        description:
            "A modern apartment with premium interiors, close to shopping and nightlife.",
        image: {
            url: "https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D",
            filename: "ListingImage"
        },
        price: 1400,
        location: "London",
        country: "United Kingdom",
        category: "castle"
    },
    {
        title: "Traditional Japanese Ryokan",
        description:
            "Experience authentic Japanese culture in this peaceful traditional ryokan.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?q=80&w=1519&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "ListingImage"
        },
        price: 1100,
        location: "Kyoto",
        country: "Japan",
        category: "arctic"
    },
    {
        title: "Desert Luxury Camp",
        description:
            "Stay under the stars in a luxury desert camp with modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1170&auto=format&fit=crop",
            filename: "ListingImage"
        },
        price: 1600,
        location: "Jaisalmer",
        country: "India",
        category: "camp"
    },
    {
        title: "Scandinavian Lake House",
        description:
            "Minimalist lake house offering tranquility and stunning water views.",
        image: {
            url: "https://images.unsplash.com/photo-1685663186841-9796da120d9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "ListingImage"
        },
        price: 1300,
        location: "Oslo",
        country: "Norway",
        category: "farm"
    },
    {
        title: "Historic European Castle",
        description:
            "Live like royalty in this beautifully preserved historic castle.",
        image: {
            url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1170&auto=format&fit=crop",
            filename: "ListingImage"
        },
        price: 3200,
        location: "Bavaria",
        country: "Germany",
        category: "castle"
    },
    {
        title: "Tropical Treehouse Retreat",
        description:
            "A unique treehouse stay surrounded by lush tropical greenery.",
        image: {
            url: "https://images.unsplash.com/photo-1518210329954-e94b5acb69f0?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "ListingImage"
        },
        price: 1000,
        location: "Chiang Mai",
        country: "Thailand",
        category: "arctic"
    },
    {
        title: "Urban Studio Near Tech Hub",
        description:
            "Compact and stylish studio perfect for business travelers and freelancers.",
        image: {
            url: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "ListingImage"
        },
        price: 850,
        location: "Bangalore",
        country: "India",
        category: "pool"
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        category: "home"
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        category: "home"
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 800,
        location: "Portland",
        country: "United States",
        category: "mountain"
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        category: "island"
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        category: "mountain"
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        category: "beach"
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        category: "beach"
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        category: "mountain"
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        category: "camp"
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        category: "island"
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        category: "beach"
    },
    {
        title: "Historic Brownstone in Boston",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        category: "island"
    },
    {
        title: "Beachfront Bungalow in Bali",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        category: "home"
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        category: "camp"
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        category: "arctic"
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        category: "mountain"
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        category: "beach"
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        category: "island"
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        category: "camp"
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "ListingImage"
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        category: "home"
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        category: "beach"
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
        category: "mountain"
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        category: "home"
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        category: "island"
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        category: "beach"
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
        category: "mountain"
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "ListingImage"
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        category: "island"
    },
];

module.exports = { data: sampleListings };