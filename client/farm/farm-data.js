var farms = [
{
  id: 1,
  name: 'Autumn’s Golden Splendor, LLC',
  address: 'PO Box 182, Big Bay 49808',
  phoneNumber: '906 250-3095',
  email: 'autumnkjn@gmail.com',
  products: ['Mushrooms', 'Honey'],
  growingMethod: 'Authentic'
},
{
  id: 2,
  name: 'Avalon Farm Alpacas',
  address: '118 McLaughlin Rd, Skandia 49885',
  phoneNumber: '906 942-7599',
  email: 'alpacaafa@aol.com',
  website: 'www.avalonfarmalpacas.com',
  products: ['Fibers', 'Livestock'],
  growingMethod: 'Conventional'
},
{
  id: 3,
  name: 'Beaver Grove Bison',
  address: '336 County Road 480, Marquette 49855',
  phoneNumber: '906 249-1126',
  email: ' beavergrovebison@aol.com',
  products: ['Meat', 'Livestock'],
  growingMethod: 'Authentic'
},
{
  id: 4,
  name: 'BSB Farm',
  address: '467 Beckman Rd, Skandia 49885',
  phoneNumber: '906 942-7254',
  email: 'hbelle9999@aol.com',
  products: ['Eggs', 'Poultry'],
  carriers: ['Marquette Food Co-op, Econo Foods'],
  growingMethod: 'Authentic'
},
{
  id: 5,
  name: 'Cedar Creek Farm',
  address: '678 Cherry Creek Road, Marquette 49855',
  phoneNumber: '906 232-9852',
  email: 'cedarcreekfarmup@gmail.com',
  products: ['Vegetables', 'Fruits', 'Mushrooms', 'Trees'],
  carriers: ['Local restaurants'],
  growingMethod: 'Authentic'
},
{
  id: 6,
  name: 'Dionysus',
  address: '1652 Engman Lake Rd, Skandia 49885',
  phoneNumber: '906 360-1010',
  email: 'dionysus1@ymail.com',
  products: ['Vegetables', 'Fruits'],
  growingMethod: 'Conventional'
},
{
  id: 7,
  name: 'Dukes Farm',
  address: '254 Dukes Rd, Skandia 49885',
  phoneNumber: '906 942-7325',
  email: 'caplettg@gmail.com',
  website: 'www.dukesfarm.net',
  products: ['Vegetables', 'Fruits', 'Flowers'],
  carriers: ['Marquette Farmers Market, Marquette Food Co-op'],
  growingMethod: 'Authentic',
  CSA: true,
},
{
  id: 8,
  name: 'Ever Yielding Acres',
  address: '9042 US 41 South, Skandia 49885',
  phoneNumber: '906 362-5016',
  email: 'everyieldingacres@yahoo.com',
  products: ['Vegetables', 'Fruits', 'Eggs', 'Poultry', 'Meat', 'Maple Syrup', 'Gourds', 'Trees', 'Livestock', 'Straw'],
  carriers: ['Marquette Farmers Market', 'Negaunee Farmers Market'],
  growingMethod: 'Authentic'
},
{
  id: 9,
  name: 'Gather’n Greens',
  address: '116 Arbutus Trail, Negaunee 49866',
  phoneNumber: '906 475-9338',
  email: 'gatherngreens@hotmail.com',
  products: ['Vegetables', 'Fruits', 'Mushrooms', 'Honey', 'Flowers'],
  growingMethod: 'Authentic'
},
{
  id: 10,
  name: 'Goodwins Farm',
  address: '436 Town Hall Rd, Skandia 49885',
  phoneNumber: '906 942-7061',
  email: 'ggoodwindb@aol.com',
  products: ['Eggs', 'Dairy', 'Maple Syrup', 'Livestock'],
  growingMethod: 'Authentic'
},
{
  id: 11,
  name: 'Hannah’s Garden',
  address: '2503 Werner St Apt 2, Marquette 49855',
  phoneNumber: '906 226-2213',
  products: ['Vegetables', 'Fruits', 'Flowers', 'Trees'],
  carriers: ['Marquette Farmers Market', 'Negaunee Farmers Market', 'Marquette Food Co-op'],
  growingMethod: 'Authentic'
},
{
  id: 12,
  name: 'Hyer Farm',
  address: '306 Kunde Road, Skandia 49855',
  phoneNumber: '906 942-7546',
  email: 'happyhyeracres@live.com',
  products: ['Vegetables', 'Maple Syrup'],
  carriers: ['Marquette Food Co-op'],
  growingMethod: 'Authentic'
},
{
  id: 13,
  name: 'Lauren Family Farm, LLC',
  address: '775 North River Dr, Gwinn 49841',
  phoneNumber: '906 346-7525',
  email: 'rlauren@honorcu.com',
  products: ['Poultry', 'Meat', 'Honey', 'Livestock'],
  growingMethod: 'Conventional'
},
{
  id: 14,
  name: 'Mindowkin Sugarbush',
  address: 'Marquette 49855',
  phoneNumber: '906 346-4307',
  email: 'jermohl@gmail.com',
  products: ['Maple Syrup'],
  carriers: ['Marquette Farmers Market'],
  growingMethod: 'Authentic'
},
{
  id: 15,
  name: 'Moonrise Gardens',
  address: '201 Greengarden Rd, Marquette 49855',
  phoneNumber: '906 235-4242',
  email: 'moonrisegardens@gmail.com',
  products: ['Vegetables', 'Fruits', 'Eggs', 'Poultry', 'Meat'],
  growingMethod: 'Authentic',
  CSA: true,
},
{
  id: 16,
  name: 'NMU Hoop House',
  address: 'Jacobetti Center, NMU, Marquette 49855',
  email: 'tswenor@nmu.edu',
  products: ['Vegetables', 'Fruits'],
  carriers: ['NMU’s Culinary Cafe'],
  growingMethod: 'Authentic'
} ,
{
  id: 17,
  name: 'Pirman Corner Farm',
  address: '137 Lawson Road, Skandia 49885',
  phoneNumber: '906 942-7389',
  email: 'hangitwsct@gmail.com',
  products: ['Eggs', 'Meat', 'Livestock'],
  growingMethod: 'Conventional'
},
{
  id: 18,
  name: 'Seeds and Spores Family Farm',
  address: '724 Greenfield Rd, Marquette 49855',
  phoneNumber: '906 458-8616',
  email: 'seedsandspores@miuplink.com',
  website: 'www.seedsandspores.com',
  products: ['Vegetables', 'Fruits', 'Mushrooms', 'Eggs', 'Poultry', 'Meat', 'Flowers', 'Trees'],
  carriers: ['Marquette Food Co-op', 'Marquette Farmers Market'],
  growingMethod: 'Authentic, CNG',
  CSA: true
},
{
  id: 19,
  name: 'Shady Grove Farm U.P.',
  address: '254 S Francis Mine Dr, Gwinn 49841',
  phoneNumber: '906 360-9124',
  email: 'rlht@charter.net',
  website: 'www.shadygrovefarmup.com',
  products: ['Vegetables', 'Fruits', 'Mushrooms', 'Eggs', 'Poultry', 'Meat', 'Honey', 'Fibers'],
  carriers: ['Mares Z Doats', 'Babycakes Muffin Company'],
  growingMethod: 'Authentic, CNG, MAEAP Verified'
},
{
  id: 20,
  name: 'Speckled Hens Garden',
  address: '6774 Caps Creek Road, Republic 49879',
  phoneNumber: '906 376-2267',
  email: 'countrymom89@hotmail.com',
  products: ['Vegetables'],
  carriers: ['Republic Farmers Market'],
  growingMethod: 'Conventional'
},
{
  id: 21,
  name: 'Virgin Earth Farm',
  address: '2480 Yukon Trail, Republic 49879',
  phoneNumber: '906 629-6405',
  email: 'greggreen_8@hotmail.com',
  products: ['Vegetables', 'Flowers', 'Hay'],
  carriers: ['Negaunee Farmers Market', 'Marquette Farmers Market', 'Marquette Food Co-op'],
  growingMethod: 'Authentic, CNG'
},
{
  id: 22,
  name: 'Wiaters Farm and Adventures',
  address: '219 Lawson Rd, Skandia 49885',
  phoneNumber: '906 942-7744',
  email: 'cwiater@tds.net',
  products: ['Vegetables', 'Poultry'],
  carriers: ['Farmers Market'],
  growingMethod: 'Authentic'
},
{
  id: 23,
  name: 'Winter Sky Wool Company',
  address: '9497 County Road 510, Negaunee 49866',
  phoneNumber: '906 204-4310',
  email: 'upwintersky@yahoo.com',
  website: 'www.winterskyshetlands.blogspot.com',
  products: ['Vegetables', 'Fruits', 'Eggs', 'Fibers', 'Livestock'],
  carriers: ['Marquette Farmer’s Market', 'Knitter’s Niche'],
  growingMethod: 'Conventional'
},
{
  id: 24,
  name: 'Wixtrom Natural Farms',
  address: '4697 Fence River Road, Republic 49879',
  phoneNumber: '906 376-2136',
  email: 'mlwix@yahoo.com',
  products: ['Vegetables', 'Small Grains', 'Maple Syrup', 'Hay', 'Straw'],
  carriers: ['Marquette Food Co-op', 'UP Food Exchange', 'Sweet Water Cafe', 'Superior Entertainment'],
  growingMethod: 'Authentic'
}
]

module.exports = farms;
