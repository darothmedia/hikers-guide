# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
demo = User.create(fname: 'demo', lname: 'user', email: 'demo@user.com', password:'password')
u1 = User.create(fname: 'Adrian', lname: 'Rothschild', email: 'adrian@hikersguide.com', password:'password')
u2 = User.create(fname: 'Bono', lname: 'The Great', email: 'bono@u2.com', password: 'password')

Park.destroy_all
p1 = Park.create(
  name: "Tilden Regional Park",
  acreage: 2079,
  hours: "Monday 5:00 am - 10:00 pm | Tuesday 5:00 am - 10:00 pm | Wednesday 5:00 am - 10:00 pm | Thursday 5:00 am - 10:00 pm |Friday 5:00 am - 10:00 pm | Saturday 5:00 am - 10:00 pm | Sunday 5:00 am - 10:00 pm",
  description: "Tilden Regional Park, also known as Tilden Park, is a 2,079-acre regional park in the East Bay, part of the San Francisco Bay Area in California. It is between the Berkeley Hills and San Pablo Ridge.",
  web_link: 'http://www.ebparks.org/parks/tilden.htm',
  lat: 37.90486,
  lng: -122.24505,
  state: "California"
)

p2 = Park.create(
  name: "Yosemite National Park",
  acreage: 759620,
  hours: 'Monday: All day | Tuesday: All day | Wednesday: All day | Thursday: All day | Friday: All day | Saturday All day | Sunday All day',
  description: "With over 3.5 million yearly visitors from throughout the world, the iconic Yosemite National Park is known for some of the most beautiful hikes and landscapes in the United States. There are over 800 miles of trails to explore through Yosemite Valley, Tuolumne Meadows, and Wawona. Yosemite has so much to see including the sequoias, the flower filed meadows and valleys left behind from the glaciers, the highest waterfall in the United States, and the spectacular Half Dome and El Capitan.",
  contact: '209-372-0200',
  fb_link: 'https://www.facebook.com/YosemiteNPS',
  twitter_link: 'https://twitter.com/YosemiteNPS',
  web_link: 'https://www.nps.gov/yose/index.htm',
  lat: 37.72736,
  lng: -119.57502,
  state: "California"
)

p3 = Park.create(
  name: "Mount Tamalpais State Park",
  acreage: 6300,
  hours: "Monday 7:00 am - dusk | Tuesday 7:00 am - dusk | Wednesday 7:00 am - dusk | Thursday 7:00 am - dusk |Friday 7:00 am - dusk | Saturday 7:00 am - dusk | Sunday 7:00 am - dusk",
  description: "With over 3.5 million yearly visitors from throughout the world, the iconic Yosemite National Park is known for some of the most beautiful hikes and landscapes in the United States. There are over 800 miles of trails to explore through Yosemite Valley, Tuolumne Meadows, and Wawona. Yosemite has so much to see including the sequoias, the flower filed meadows and valleys left behind from the glaciers, the highest waterfall in the United States, and the spectacular Half Dome and El Capitan.",
  contact: '415-388-2070',
  web_link: 'http://www.parks.ca.gov/default.asp?page_id=471',
  lat: 37.92743,
  lng: -122.57986,
  state: "California"
)

p4 = Park.create(
  name: 'Acadia'
  state: 'Maine'
  lat: 44.35
  lng: -68.21
  acreage: 49077
  description: 'Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.'
)

p5 = Park.create(
  name: 'American Samoa'
  state: 'American Samoa'
  lat: 14.25
  lng: -170.68
  acreage: 8257
  description: 'The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.'
)

p6 = Park.create(
name: 'Arches'
state: 'Utah'
lat: 38.68
lng: -109.57
acreage: 76679
description: 'This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.'
)

p7 = Park.create(
name: 'Badlands'
state: 'South Dakota'
lat: 43.75
lng: -102.5
acreage: 242756
description: 'The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils. The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.'
)

p8 = Park.create(
name: 'Big Bend'
state: 'Texas'
lat: 29.25
lng: -103.25
acreage: 801163
description: 'Named for the prominent bend in the Rio Grande along the U.S.–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders. '
)

p9 = Park.create(
name: 'Biscayne'
state: 'Florida'
lat: 25.65
lng: -80.08
acreage: 172971
description: 'The central part of Biscayne Bay, this mostly underwater park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon.'
)

p10 = Park.create(
name: 'Black Canyon of the Gunnison'
state: 'Colorado'
lat: 38.57
lng: -107.72
acreage: 30780
description: 'The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist, which appears black when in shadow.'
)

p11 = Park.create(
name: 'Bryce Canyon'
state: 'Utah'
lat: 37.57
lng: -112.18
acreage: 35835
description: 'Bryce Canyon is a geological amphitheater on the Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.'
)

p12 = Park.create(
name: 'Canyonlands'
state: 'Utah'
lat: 38.2
lng: -109.93
acreage: 337598
description: 'This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park also contains rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples.'
)

p13 = Park.create(
name: 'Capitol Reef'
state: 'Utah'
lat: 38.2
lng: -111.17
acreage: 241905
description: 'The parks Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earths diverse geologic layers. Other natural features include monoliths, cliffs, and sandstone domes shaped like the United States Capitol.'
)

p15 = Park.create(
name: 'Channel Islands'
state: 'California'
lat: 34.01
lng: -119.42
acreage: 249561
description: 'Five of the eight Channel Islands are protected, with half of the parks area underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, 145 endemic to them, including the island fox. Ferry services offer transportation to the islands from the mainland. '
)

p16 = Park.create(
name: 'Congaree'
state: 'South Carolina'
lat: 33.78
lng: -80.78
acreage: 26476
description: 'On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp. '
)

p17 = Park.create(
name: 'Crater Lake'
state: 'Oregon'
lat: 42.94
lng: -122.1
acreage: 183224
description: 'Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. The lake is the deepest in the United States and is noted for its vivid blue color and water clarity. Wizard Island and the Phantom Ship are more recent volcanic formations within the caldera. As the lake has no inlets or outlets, it is replenished only by precipitation.'
)

p18 = Park.create(
name: 'Cuyahoga Valley'
state: 'Ohio'
lat: 41.24
lng: -81.55
acreage: 32572
description: 'This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures, and also offers a scenic train ride.'
)

p19 = Park.create(
name: 'Death Valley'
state: 'California, Nevada'
lat: 36.24
lng: -116.82
acreage: 3408407
description: 'Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats at the lowest elevation in North America, −282 ft (−86 m). The park also protects canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1,000 species of plants that grow in this geologic graben. '
)

p20 = Park.create(
name: 'Denali'
state: 'Alaska'
lat: 63.33
lng: -150.5
acreage: 4740911
description: 'Centered on Denali, the tallest and highest prominence mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, Porcupine caribou, and wolves. '
)

p21 = Park.create(
name: 'Dry Tortugas'
state: 'Florida'
lat: 24.63
lng: -82.87
acreage: 64701
description: 'The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. The park is home to undisturbed coral reefs and shipwrecks, and is only accessible by plane or boat. '
)

p22 = Park.create(
name: 'Everglades'
state: 'Florida'
lat: 25.32
lng: -80.93
acreage: 1508939
description: 'The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.  '
)

p23 = Park.create(
name: 'Gates of the Arctic'
state: 'Alaska'
lat: 67.78
lng: -153.3
acreage: 7523897
description: 'The countrys northernmost park protects an expanse of pure wilderness in Alaskas Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years.'
)

p24 = Park.create(
name: 'Gateway Arch'
state: 'Missouri'
lat: 38.63
lng: -90.19
acreage: 193
description: 'The Gateway Arch is a 630-foot (192 m) (both high and wide) catenary arch built to commemorate the Lewis and Clark Expedition, initiated by Thomas Jefferson, and the subsequent westward expansion of the country. The nearby Old Courthouse, across a greenway to the west of the arch, was the first site of the Dred Scott case about slavery. An underground museum describes the archs construction and the countrys westward expansion.'
)

p25 = Park.create(
name: 'Glacier'
state: 'Montana'
lat: 48.8
lng: -114
acreage: 1013126
description: 'The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 glaciers and 130 named lakes surrounded by Rocky Mountain peaks. There are historic hotels and the landmark Going-to-the-Sun Road in this region of rapidly receding glaciers. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs. The park is also home to Triple Divide Peak, which forms the boundary between the watersheds of the Atlantic, Pacific, and Arctic Oceans.  '
)

p26 = Park.create(
name: 'Glacier Bay'
state: 'Alaska'
lat: 58.5
lng: -137
acreage: 3223383
description: 'Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km).  '
)

p27 = Park.create(
name: 'Grand Canyon *'
state: 'Arizona'
lat: 36.06
lng: -112.14
acreage: 1201647
description: 'The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from trails that descend into the canyon from north and south rims. '
)

p28 = Park.create(
name: 'Grand Teton'
state: 'Wyoming'
lat: 43.73
lng: -110.8
acreage: 310044
description: 'Grand Teton is the tallest mountain in the Teton Range. The parks historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley. '
)

p29 = Park.create(
name: 'Great Basin'
state: 'Nevada'
lat: 38.98
lng: -114.3
acreage: 77180
description: 'Based around Nevadas second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park has some of the countrys darkest night skies. Wildlife includes the Townsends big-eared bat, pronghorn, and Bonneville cutthroat trout.'
)

p30 = Park.create(
name: 'Great Sand Dunes'
state: 'Colorado'
lat: 37.73
lng: -105.51
acreage: 107342
description: 'The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.'
)

p31 = Park.create(
name: 'Great Smoky Mountains'
state: 'North Carolina, Tennessee'
lat: 35.68
lng: -83.53
acreage: 522427
description: 'The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the parks main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.  '
)

p32 = Park.create(
name: 'Guadalupe Mountains'
state: 'Texas'
lat: 31.92
lng: -104.87
acreage: 86367
description: 'This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef from the Permian era.'
)

p33 = Park.create(
name: 'Haleakalā'
state: 'Hawaii'
lat: 20.72
lng: -156.17
acreage: 33265
description: 'The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, Hosmers Grove of alien trees, the Kipahulu sections scenic pools of freshwater fish, and the native Hawaiian goose. The park protects the greatest number of endangered species within a U.S. national park. '
)

p34 = Park.create(
name: 'Hawaiʻi Volcanoes'
state: 'Hawaii'
lat: 19.38
lng: -155.2
acreage: 325605
description: 'This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the worlds most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).  '
)

p35 = Park.create(
name: 'Hot Springs'
state: 'Arkansas'
lat: 34.51
lng: -93.05
acreage: 5554
description: 'Hot Springs was original established as a federal reserve by Congress on April 20, 1832—the oldest area managed by the National Park Service. Natural hot springs flow out of the Ouachita Mountains, providing opportunities for relaxation in a historic setting. Bathhouse Row preserves examples of 19th-century architecture. Hot Springs is the first national park in a city and was the smallest national park until 2018.'
)

p36 = Park.create(
name: 'Indiana Dunes'
state: 'Indiana'
lat: 41.6533
lng: -87.0524
acreage: 15349
description: 'Previously designated a national lakeshore, parts of this 20-mile (32 km) stretch of the southern shore of Lake Michigan have sandy beaches and tall dunes. The park includes grassy prairies, peat bogs, and marsh wetlands home to over 2,000 species.'
)

p37 = Park.create(
name: 'Isle Royale'
state: 'Michigan'
lat: 48.1
lng: -88.55
acreage: 571790
description: 'The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the island, though the relationship between its wolf and moose populations is especially unique. '
)

p38 = Park.create(
name: 'Joshua Tree'
state: 'California'
lat: 33.79
lng: -115.9
acreage: 795156
description: 'Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths. '
)

p39 = Park.create(
name: 'Katmai'
state: 'Alaska'
lat: 58.5
lng: -155
acreage: 3674529
description: 'This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, and the stratovolcano Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines.'
)

p40 = Park.create(
name: 'Kenai Fjords'
state: 'Alaska'
lat: 59.92
lng: -149.65
acreage: 669650
description: 'Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is the rapidly shrinking Exit Glacier. Boat and kayak tours offer views of tidewater glaciers, whales, and marine birds.'
)

p41 = Park.create(
name: 'Kings Canyon'
state: 'California'
lat: 36.8
lng: -118.55
acreage: 461901
description: 'Home to several giant sequoia groves and the General Grant Tree, the worlds second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave. Although Kings Canyon National Park was designated as such in 1940, it subsumed General Grant National Park, which had been established on October 1, 1890 as the United States fourth national park. '
)

p42 = Park.create(
name: 'Kobuk Valley'
state: 'Alaska'
lat: 67.55
lng: -159.28
acreage: 1750716
description: 'Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils.'
)

p43 = Park.create(
name: 'Lake Clark'
state: 'Alaska'
lat: 60.97
lng: -153.42
acreage: 2619816
description: 'The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape.'
)

p44 = Park.create(
name: 'Lassen Volcanic'
state: 'California'
lat: 40.49
lng: -121.51
acreage: 106589
description: 'Lassen Peak, the largest lava dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder cone, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak.'
)

p45 = Park.create(
name: 'Mammoth Cave'
state: 'Kentucky'
lat: 37.18
lng: -86.1
acreage: 54012
description: 'With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the worlds longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs.  '
)

p46 = Park.create(
name: 'Mesa Verde *'
state: 'Colorado'
lat: 37.18
lng: -108.49
acreage: 52485
description: 'This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels. '
)

p47 = Park.create(
name: 'Mount Rainier'
state: 'Washington'
lat: 46.85
lng: -121.75
acreage: 236382
description: 'Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the longest and largest in the contiguous United States respectively. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is among the snowiest places on Earth. The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain.'
)

p48 = Park.create(
name: 'New River Gorge'
state: 'West Virginia'
lat: 38.07
lng: -81.08
acreage: 7021
description: 'The New River Gorge is the deepest river gorge east of the Mississippi River. The park is primarily the lower gorge area around the New River Gorge Bridge, which features some of the countrys best whitewater rafting. Smaller noncontiguous sections showcase the ghost town of Thurmond, the scenic Grandview vista, and Sandstone Falls. The other 65,165 acres (263.71 km2) of the redesignated national river is now a national preserve, spanning 53 mi (85 km) of the New River.'
)

p49 = Park.create(
name: 'North Cascades'
state: 'Washington'
lat: 48.7
lng: -121.2
acreage: 504781
description: 'The highly glaciated mountains of the North Cascades Range exhibit spectacular and complex geologic history. Between the river valleys and high peaks there are eight diverse life zones with 75 mammal and 1,600 vascular plant species. Popular hiking and climbing areas of the Stephen Mather Wilderness include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak. Ross Lake and Lake Chelan National Recreation Areas adjoin the two segments of the park and are all administered together.'
)

p50 = Park.create(
name: 'Olympic'
state: 'Washington'
lat: 47.97
lng: -123.5
acreage: 922649
description: 'This park on the Olympic Peninsula includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the glaciated alpine peaks of the Olympic Mountains, the tallest of which is Mount Olympus. The Hoh and Quinault Rainforests are the wettest areas in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year.  '
)

p51 = Park.create(
name: 'Petrified Forest'
state: 'Arizona'
lat: 35.07
lng: -109.78
acreage: 221390
description: 'This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.'
)

p52 = Park.create(
name: 'Pinnacles'
state: 'California'
lat: 36.48
lng: -121.16
acreage: 26686
description: 'Named for the eroded leftovers of a portion of an extinct volcano, the parks massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is one of the few locations the endangered California condor can be seen in the wild. Pinnacles also supports a dense population of prairie falcons and more than 13 species of bat that populate its talus caves.1'
)

p53 = Park.create(
name: 'Redwood *'
state: 'California'
lat: 41.3
lng: -124
acreage: 138999
description: 'This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species.1 1'
)

p54 = Park.create(
name: 'Rocky Mountain'
state: 'Colorado'
lat: 40.4
lng: -105.58
acreage: 265807
description: 'Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).1 1'
)

p55 = Park.create(
name: 'Saguaro'
state: 'Arizona'
lat: 32.25
lng: -110.5
acreage: 92867
description: 'Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.1'
)

p56 = Park.create(
name: 'Sequoia'
state: 'California'
lat: 36.43
lng: -118.68
acreage: 404063
description: 'This park protects the Giant Forest, which boasts some of the worlds largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome.1 '
)

p57 = Park.create(
name: 'Shenandoah'
state: 'Virginia'
lat: 38.53
lng: -78.35
acreage: 199224
description: 'Shenandoahs Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River.1'
)

p58 = Park.create(
name: 'Theodore Roosevelt'
state: 'North Dakota'
lat: 46.97
lng: -103.45
acreage: 70447
description: 'This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelts historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses.1'
)

p59 = Park.create(
name: 'Virgin Islands'
state: 'U.S. Virgin Islands'
lat: 18.33
lng: -64.73
acreage: 15053
description: 'This island park on Saint John preserves pristine beaches surrounded by mangrove forests, seagrass beds, and coral reefs. It also has Taíno archaeological sites and the ruins of sugar plantations from Columbuss time.1'
)

p60 = Park.create(
name: 'Voyageurs'
state: 'Minnesota'
lat: 48.5
lng: -92.88
acreage: 218222
description: 'This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings.1'
)

p61 = Park.create(
name: 'White Sands'
state: 'New Mexico'
lat: 32.78
lng: -106.17
acreage: 146344
description: 'Located in the mountain-ringed Tularosa Basin, White Sands consists of the southern part of a 275-square-mile (710 km2) field of white sand dunes composed of gypsum crystals—the worlds largest gypsum dunefield. The park is completely within the White Sands Missile Range and is subject to closure when tests are conducted.1'
)

p62 = Park.create(
name: 'Wind Cave'
state: 'South Dakota'
lat: 43.57
lng: -103.48
acreage: 33971
description: 'Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. It is one of the longest caves in the world and creates a wind as air pressure changes. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs and ponderosa pine forests home to cougars and elk.1 The cave is culturally significant to the Lakota people as a creation site.1'
)

p63 = Park.create(
name: 'Wrangell–St. Elias *'
state: 'Alaska'
lat: 61
lng: -142
acreage: 8323146
description: 'The largest national park in the system protects the convergence of the Alaska, Chugach, Wrangell, and Saint Elias Ranges, which include many of the continents tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier.1 '
)

p64 = Park.create(
name: 'Yellowstone'
state: 'Wyoming, Montana, Idaho'
lat: 44.6
lng: -110.5
acreage: 2219791
description: 'Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including timber wolves, grizzly bears, black bears, lynxes, bison, and elk make this park one of the best wildlife viewing spots in the country.1 1 1'
)

p66 = Park.create(
name: 'Zion'
state: 'Utah'
lat: 37.3
lng: -113.05
acreage: 147243
description: 'Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest.1'
)


Trail.destroy_all

def purl(img)
  'https://hikers-guide-seeds.s3.us-west-1.amazonaws.com/img/' + img
end

t1 = Trail.create(
  name: "Wildcat Peak Trail",
  overview:"Wildcat Peak Trail via Laurel Canyon and Sylvan Trail is a 3.2 mile heavily trafficked loop trail located near Berkeley, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, and nature trips and is accessible year-round.",
  description:"This scenic loop takes you from the Tilden Park Environmental Education Center to the summit of Wildcat Peak via the Jewel Lake, Sylvan, Peak and Laurel Canyon trails. Terrific views of the Bay Area and a variety of plants and birds keep this route interesting throughout. This route may be very muddy in wet weather.",
  difficulty: "Moderate",
  length: 3.2,
  elevation: 672,
  route_type: "Loop",
  lat: 37.90486,
  lng: -122.24505,
  park_id: p1.id,
  m_photo: purl('IMG_8338.jpg')
)

ph1 = URI.open(purl('IMG_8338.jpg'))
t1.main_photo.attach(io: ph1, filename: 'IMG_8338.jpg')

t2 = Trail.create(
  name: "Inspiration Point Trail",
  overview:"Inspiration Point to Wildcat Peak is a 4 mile heavily trafficked out and back trail located near Kensington, California that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, running, and bird watching and is best used from March until October.",
  description:"4.6 mi round trip on paved trail. Beautiful views of whole Bay Area. Good for biking or hiking. Went off pavement at Peace Park sign, about 1/4 mile to stone circle with fabulous views of Bay and Mt Diablo. Room to sit and enjoy early lunch or snack. This was out and back. One can continue on the Nimitz for a longer walk for many miles. Lot can fill up but there is additional parking along the road for a few cars. Suitable any time of the year.",
  difficulty: "Moderate",
  length: 4.0,
  elevation: 452,
  route_type: "Out & Back",
  lat: 37.90486,
  lng: -122.24505,
  park_id: p1.id,
  m_photo: purl('DSCN4130.jpg')
)

ph2 = URI.open(purl('DSCN4130.jpg'))
t2.main_photo.attach(io: ph2, filename: 'DSCN4130.jpg')

t3 = Trail.create(
  name: "Glacier Point to Half Dome",
  overview:"Glacier Point to Half Dome is a 20.3 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is only recommended for very experienced adventurers. The trail is primarily used for hiking and is best used from June until September.",
  description:"Enjoy gorgeous views of Half Dome from Glacier Point before you begin your hike. Soak in the views as you descend from Glacier Point toward Illilouette Falls. Wear sunscreen, as this section of trail is quite exposed. A couple of miles of elevation loss take you over the top of the falls, a great place to filter water or cool off. Continuing onward, the next few miles contain some elevation gains and losses, with plenty of tree cover for shade and breaks. Enjoy continual peeks at Half Dome and the valley floor along this stretch of trail. Approximately 6 miles in, you will approach Nevada Falls, a popular destination which many hike to via 4 mile trail. There is plenty of space at the top of the falls for a lunch or snack break, as well as photo ops before you continue your journey to Half Dome. Pit toilets are also located just past the falls as you continue toward Half Dome. The trail is easy to moderate at this point, as you approach Little Yosemite Valley Backpackers Camp and branch off toward Half Dome. Signs are well marked and easy to follow in this area. Another couple of miles bring you to the approach of Half Dome, where you will begin your +2 mile ascent with permit in hand.",
  difficulty: "Hard",
  length: 20.3,
  elevation: 672,
  route_type: "Out & Back",
  lat: 37.72736,
  lng: -119.57502,
  park_id: p2.id,
  m_photo: purl('IMG_20210913_125258718.jpg')
)

ph3 = URI.open(purl('IMG_20210913_125258718.jpg'))
t3.main_photo.attach(io: ph3, filename: 'IMG_20210913_125258718.jpg')

t4 = Trail.create(
  name: "Verna Dunshee Loop",
  overview: "Verna Dunshee Loop is a 0.8 mile lightly trafficked loop trail located near Mill Valley, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, running, and nature trips and is accessible year-round.",
  description: "According to Access Northern California (http://accessnca.org/access-northern-california/explore/explore-detail-view/?site_id=89): Just north of San Francisco’s Golden Gate Bridge, Mount Tamalpais State Park rises majestically from the heart of Marin County. Its deep canyons and sweeping hillsides are cloaked with cool redwood forests, oak woodlands, open grasslands, and sturdy chaparral. Most of it inaccessible to wheelchair riders.",
  difficulty: "Easy",
  length: 0.8,
  elevation: 68,
  route_type: "Loop",
  lat: 37.92743,
  lng: -122.57986,
  park_id: p3.id,
  m_photo: purl('IMG_8823.jpg')
)

ph4 = URI.open(purl('IMG_8823.jpg'))
t4.main_photo.attach(io: ph4, filename: 'IMG_8823.jpg')

t5 = Trail.create(
  name: "Vernal and Nevada Falls via Mist Trail",
  overview: "Vernal and Nevada Falls via Mist Trail is a 6 mile heavily trafficked loop trail located near Yosemite Valley, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking and is best used from May until October.",
  description: "Hike to two breathtaking waterfalls along some of Yosemite Valley's most popular hiking trails. If you only have time for one hike while in Yosemite look no further - the Mist Trail is the hike for you. It is no wonder why this trail is one of the most traveled in Yosemite National Park. You will hike so close to these two massive waterfalls that you may get wet from the trail. The best time to hike this trail is in Spring or early Summer, while the snow runoff is high and the falls are full of water. The Mist Trail starts at Happy Isles Trailhead (YARTS Happy Isles shuttle stop #16, and within walking distance of Curry Village and the parking lot). The park recommends starting early to avoid the larger crowds. After a brief stroll along the river, you climb a pretty steep initial accent over stone steps until you reach the footbridge, which offers the first glimpse of Vernal Falls in the distance. You will also find a water fountain and restrooms. You will then continue up to Vernal Falls, past Emerald Pool, and alongside Nevada Falls until you reach the high-point of this hike. You can choose to take the alternate route down along the John Muir Trail to see great views of Nevada Falls and Liberty Cap in the distance before meeting back up with the Mist Trail near the footbridge. This route back is slightly longer, but offers a change of scenery and is easier on the knees. Before hopping back on the YARTS shuttle, treat yourself to some ice cream or a refreshing drink at the small stand, or head over to Curry Village for a larger variety of choices.",
  difficulty: "Hard",
  length: 6.0,
  elevation: 2162,
  route_type: "Loop",
  lat: 37.73279,
  lng: -119.55782,
  park_id: p2.id,
  m_photo: purl('IMG_3063.jpg')
)

ph5 = URI.open(purl('IMG_3063.jpg'))
t5.main_photo.attach(io: ph5, filename: 'IMG_3063.jpg')

t6 = Trail.create(
  name: "Upper Yosemite Falls Trail",
  overview: "Upper Yosemite Falls Trail is a 7.6 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking, camping, and backpacking and is best used from April until October.",
  description: "Enjoy the incredible views of looking down from the top of Yosemite Falls, the tallest waterfall in the continental US. Yosemite Falls, dropping 2,425 feet to the bottom of the valley from the top, is one of the most visited places in Yosemite National Park. The falls consists of three sections: upper falls, middle cascade and lower falls. While most people only make the short trip to visit lower falls, upper falls is definitely worthy of visiting due to its panoramic views of Yosemite Valley and the opportunity to see this amazing waterfall up close.",
  difficulty: "Hard",
  length: 7.6,
  elevation: 3218,
  route_type: "Out & Back",
  lat: 37.6408178,
  lng: -119.9443979,
  park_id: p2.id,
  m_photo: purl('IMG_3109.jpg')
)

ph6 = URI.open(purl('IMG_3109.jpg'))
t6.main_photo.attach(io: ph6, filename: 'IMG_3109.jpg')

t7 = Trail.create(
  name: "Half Dome via the John Muir Trail",
  overview: "Half Dome via the John Muir Trail (JMT) is a 15 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is only recommended for very experienced adventurers. The trail is primarily used for hiking.",
  description: "Half Dome is a serious endurance hike taking you 4800 feet above the Yosemite Valley to spectacular views of Vernal and Nevada Falls, Liberty Cap, the Yosemite Valley, and the High Sierra. This is one of Yosemite National Park’s most iconic hikes. You must obtain a permit to hike to the summit of Half Dome. Preparation and safety are key to having a fantastic experience. This is a hike that requires users to be in good shape. Most people take 10 to 12 hours to hike to Half Dome and back, depending on the way chosen to come down. Plan to leave around sunrise (or earlier) and then have a non-negotiable turn-around time. The trail is fairly well marked but make sure to watch for all trail signs as it can be easy to miss them.",
  difficulty: "Hard",
  length: 15.0,
  elevation: 5193,
  route_type: "Out & Back",
  lat: 37.7357108,
  lng: -119.5657707,
  park_id: p2.id,
  m_photo: purl('IMG_3681.jpg')
)

ph7 = URI.open(purl('IMG_3681.jpg'))
t7.main_photo.attach(io: ph7, filename: 'IMG_3681.jpg')

t8 = Trail.create(
  name: "Clouds Rest Trail",
  overview: "Clouds Rest Trail is a 14 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a lake and is rated as difficult. The trail is primarily used for hiking, camping, and backpacking and is best used from May until October.",
  description: "Cloud's Rest, a massive granite formation just northeast of Half Dome in Yosemite Valley, is famous for its very high degree of visual prominence in the valley as well as its razor-sharp ridge near the summit. For people who have hiked Cloud's Rest, they are most impressed with the thrilling feeling they have while scrambling up the narrow ridge, with sheer drop-offs on both sides, to the summit. The fastest way to day hike Cloud's Rest starts from the Sunrise Lakes trailhead on Tioga Road near Tenaya Lake.",
  difficulty: "Hard",
  length: 14.0,
  elevation: 3166,
  route_type: "Out & Back",
  lat: 37.82569,
  lng: -119.46999,
  park_id: p2.id,
  m_photo: purl('IMG_20210913_100444372.jpg')
)

ph8 = URI.open(purl('IMG_20210913_100444372.jpg'))
t8.main_photo.attach(io: ph8, filename: 'IMG_20210913_100444372.jpg')

t9 = Trail.create(
  name: "Sentinel Dome Trail",
  overview: "Sentinel Dome Trail is a 2.1 mile heavily trafficked out and back trail located near Yosemite Valley, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking and is best used from April until November.",
  description: "Sentinel Dome starts from Glacier Point Road and scales one of Yosemite's high domes and offers a fully breathtaking 360-degree view. It provides one of the very best NP experiences for the effort you can find. To the west, you'll see almost a reverse Tunnel View of the Yosemite Valley and can see beyond the Merced River canyon. To the north is Yosemite Valley, including El Capitan and Yosemite Falls. You'll see Nevada Falls, Half Dome and Clouds Rest to the east, and many of the High Sierra peaks.",
  difficulty: "Easy",
  length: 2.1,
  elevation: 456,
  route_type: "Out & Back",
  lat: 37.71243,
  lng: -119.58632,
  park_id: p2.id,
  m_photo: purl('IMG_8407.jpg')
)

ph9 = URI.open(purl('IMG_8407.jpg'))
t9.main_photo.attach(io: ph9, filename: 'IMG_8407.jpg')

t10 = Trail.create(
  name: "Four Mile Trail",
  overview: "Four Mile Trail is a 9.2 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking and is best used from May until November.",
  description: "The Four Mile Trail switchbacks 3,200 feet up from Yosemite Valley to Glacier Point, providing wonderful views of the valley.  Views of Half Dome, North Dome, El Capitan, Cathedral Rocks, the Royal Arches, Tenaya Canyon, and Yosemite Falls can be seen here.",
  difficulty: "Hard",
  length: 9.2,
  elevation: 3612,
  route_type: "Out & Back",
  lat: 37.73385,
  lng: -119.60187,
  park_id: p2.id,
  m_photo: purl('IMG_8373.jpg')
)

ph10 = URI.open(purl('IMG_8373.jpg'))
t10.main_photo.attach(io: ph10, filename: 'IMG_8373.jpg')

Review.destroy_all

r1 = Review.create(
  body: "It was great!",
  rating: 5,
  actdate: Date.parse('2021-11-29'),
  author_id: u1.id,
  trail_id: t1.id
)

r2 = Review.create(
  body: "I hated it",
  rating: 1,
  actdate: Date.parse('2021-11-27'),
  author_id: u2.id,
  trail_id: t1.id
)

r3 = Review.create(
  body: "Decent",
  rating: 2,
  actdate: Date.parse('2021-11-24'),
  author_id: u2.id,
  trail_id: t2.id
)

