# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

Trail.destroy_all

def purl(img)
  'https://hikers-guide.s3.us-west-1.amazonaws.com/HikersGuide_GP2/' + img
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

Review.destroy_all

r1 = Review.create(
  body: "It was great!",
  rating: 5,
  actdate: '2021-11-29',
  author_id: u1.id,
  trail_id: t1.id
)

r2 = Review.create(
  body: "I hated it",
  rating: 1,
  actdate: '2021-11-27',
  author_id: u2.id,
  trail_id: t1.id
)

