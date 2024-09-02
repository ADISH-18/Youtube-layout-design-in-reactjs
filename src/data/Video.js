const videos = [
    {
        id: 1,
        title: "Last minute super bowl food spread",
        description: "It’s Super Bowl Sunday and you forgot to prepare your spread. The best football snacks shouldn’t take all of your game day though.  Homemade garlic knots, korean style wings, sandwich bites, and much more in 3 hours.",
        thumbnail: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://www.youtube.com/watch?v=DFjkHnZCqmU&pp=ygUERm9vZA%3D%3D",
    },
    {
        id: 2,
        title: "$100 British Street Food Challenge!! London’s Borough Market!!",
        description: "🤑 £100 CHALLENGE (British Pound Sterling)💸 $128.00 USD * (United States Dollar)📍 BOROUGH MARKET Address: Southwark, London SE1 9AL, United Kingdom",
        thumbnail: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 3,
        title: "I Tried Every Japanese Fast Food",
        description: "I Tried Every Japanese Fast Food",
        thumbnail: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://youtu.be/XnQ7Py8D6v0?feature=shared",
    },{
        id: 4,
        title: "I Tested Kitchen Gadgets From Every Decade",
        description: "These kitchen gadgets just keep getting crazier and crazier, but the last one is hilarious.",
        thumbnail: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://youtu.be/Ho1AIq4T5Gw?feature=shared",
    },{
        id: 5,
        title: "Best Rare Everyday Cars from my Collection | Diecast Model Cars",
        description: "So these are Rare Everyday/mass market Cars Diecast Models in 1/18 Scale, i have picked one car from every segment like sedan, hatchback, crossover & SUV. Officially licenaed Scale models of mass market cars rare and hard to get. ",
        thumbnail: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/_7o97BbMFok?feature=shared",
    },{
        id: 6,
        title: "Destroyed Mercedes Benz G Wagon Restoration",
        description: "In this Video, We Restored an Abandoned Destroyed Mercedes Benz G Wagon and made this Brand New. Hope U like this.",
        thumbnail: "https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/1CAIT4X_ozM?feature=shared",
    },{
        id: 7,
        title: "G-Wagon Durability Test #3",
        description: "Welcome to Durability Test #3 featuring ‪@eddiehallwsm‬  ‪@HeavyDSparks‬  Test 3 is nearly IMPOSSIBLE to complete, very few vehicles make it this far. Only the Toyota Hilux has made it to test #4. Enjoy 22 minutes of destruction.",
        thumbnail: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/Gio3DSTkQH4?feature=shared",
    },{
        id: 8,
        title: "WhistlinDiesel Cybertruck Durability Test #1",
        description: "Welcome to the place that’s going to tell you everything you ACTUALLY need to know about the Cybertruck 😏 This test is at my lowest power level and is intended to simulate real life scenarios of actual cybertruck buyers. If Tesla is able to fix the truck, we will move on to episode 2  ",
        thumbnail: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/PK_EJ3DyiiA?feature=shared",
    },{
        id: 9,
        title: "9 countries in Europe under ₹50,000 with average daily spends! Travel now! ",
        description: "9 countries in Europe under ₹50,000 with average daily spends! Travel now! ",
        thumbnail: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtube.com/shorts/i3Ns-WFKrmo?feature=shared",
    },{
        id: 10,
        title: "Wonders of The Netherlands | The Most Amazing Places in The Netherlands | Travel Video 4K",
        description: "In today's video, we embark on an incredible journey through the wonders of the Netherlands. 🇳🇱 From the bustling streets of Amsterdam to the tranquil canals of Giethoorn, join us as we uncover the rich history, vibrant culture, and stunning landscapes that make the Netherlands a must-visit destination.",
        thumbnail: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/QVoSgRbd69c?feature=shared",
    },{
        id: 11,
        title: "How to Spend 14 Days in Japan - A Japan Travel Itinerary",
        description: "This video and description contain affiliate links. Any purchase made through the links helps support the channel and allows me to continue making videos. Thank you for the support!",
        thumbnail: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/IuTDuvYr7f0?feature=shared",
    },{
        id: 12,
        title: "12 Reasons NOT to Move to Japan",
        description: "Moving to Japan to live and work is a life changing event. But is it worth it? From tiny apartments and outdated thinking, to complicated dating and being an outsider, these are stories and experiences of the difficulties you might face along the way.",
        thumbnail: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/nfpWAqK0YZE?feature=shared",
    },{
        id: 13,
        title: "പയ്യൻ escapes from boarding school Uncharted part 1",
        description: "ᴛʜɪs ᴄʜᴀɴɴᴇʟ ᴍᴀɪɴʟʏ ғᴏᴄᴜsᴇᴅ ᴏɴ ɢᴀᴍɪɴɢ ᴠɪᴅᴇᴏs ɪɴ ᴍᴀʟᴀʏᴀʟᴀᴍ മല്ലു ബ്രോസ്💪 💥അടി ഇല്ല വെടി മാത്രം💥",
        thumbnail: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/GHN_Mn4E4yw?feature=shared",
    },{
        id: 14,
        title: "Black Myth: Wukong The monkey king Part #1 | Malayalam Gameplay",
        description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
        thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/Bh6ajo3l51c?feature=shared",
    },{
        id: 15,
        title: "KSRTC SUPER FAST BUS RACE പണി പാളി IN KERALA 🔥 Maalbro Gaming",
        description: "KSRTC SUPER FAST BUS RACE പണി പാളി IN KERALA 🔥 Maalbro Gaming KSRTC SABARIMALA MUNNAR ROUTE  DANGEROUS ROADS KSRTC KERALA BUS RACE IN DANGEROUS ROADS 🔥 | LOGITECH G29  KSRTC Trip to kodaikanal KSRTC challenge gone wrong",
        thumbnail: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/HjnZLgLTzFY?feature=shared",
    },{
        id: 16,
        title: "GTA 5 : Stealing RARE Police SUPERCAR As FAKE COP!",
        description: "GTA 5 : Stealing RARE Police SUPERCAR As FAKE COP!",
        thumbnail: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
        url: "https://youtu.be/Fnkfl90nxvI?feature=shared",
    }
];

export default videos;
