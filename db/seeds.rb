# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
demo = User.create(fname: 'demo', lname: 'user', email: 'demo@user.com', password:'password')

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

base_url = 'https://hikers-guide.s3.us-west-1.amazonaws.com/HikersGuide_GP2/'

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
  m_photo: base_url + 'IMG_8338.jpg'
)

# tp1 = URI.open('https://hikers-guide.s3.us-west-1.amazonaws.com/HikersGuide_GP2/IMG_8338.jpg')
# t1.main_photo.attach(io: tp1, filename: 'IMG_8338.jpg')

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
  m_photo: base_url + 'DSCN4130.jpg'
)

t3 = Trail.create(
  name: "Glacier Point to Half Dome",
  overview:"Glacier Point to Half Dome is a 20.3 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is only recommended for very experienced adventurers. The trail is primarily used for hiking and is best used from June until September.",
  description:"Enjoy gorgeous views of Half Dome from Glacier Point before you begin your hike. Soak in the views as you descend from Glacier Point toward Illilouette Falls. Wear sunscreen, as this section of trail is quite exposed. A couple of miles of elevation loss take you over the top of the falls, a great place to filter water or cool off. Continuing onward, the next few miles contain some elevation gains and losses, with plenty of tree cover for shade and breaks. Enjoy continual peeks at Half Dome and the valley floor along this stretch of trail. Approximately 6 miles in, you will approach Nevada Falls, a popular destination which many hike to via 4 mile trail. There is plenty of space at the top of the falls for a lunch or snack break, as well as photo ops before you continue your journey to Half Dome. Pit toilets are also located just past the falls as you continue toward Half Dome. The trail is easy to moderate at this point, as you approach Little Yosemite Valley Backpackers Camp and branch off toward Half Dome. Signs are well marked and easy to follow in this area. Another couple of miles bring you to the approach of Half Dome, where you will begin your +2 mile ascent with permit in hand.",
  difficulty: "Hard",
  length: 3.2,
  elevation: 672,
  route_type: "Out & Back",
  lat: 37.72736,
  lng: -119.57502,
  park_id: p2.id,
  m_photo: base_url + 'IMG_20210913_125258718.jpg'
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
  m_photo: base_url + 'IMG_8823.jpg'
)

