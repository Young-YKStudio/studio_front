import { BsFillEmojiNeutralFill } from "react-icons/bs"

const cateringMenu = [
  {
    name: '"BCR" Brisket, Chicken, Ribs',
    description1: '1 lb. brisket, 1 whole chicken, 2 lbs. pork ribs, Texas toast, choice of 2 sauces, and 4 large (16 oz) sides (serves 4-6).',
    description2: 'Side choices: fries, brussels sprouts (+$1), mac & cheese, coleslaw, potato salad, chipotle garlic green beans, or BBQ beans.',
    price1: '$110',
    category: 'Specialty Packs',
    id: 1
  },
  {
    name: 'Fed Favorites',
    description1: 'Includes 1.5 lbs. sliced brisket, 1.5 lbs. jalapeño cheese sausage, 1.5 lbs. pork rib tips, 20 smoked wings, 1 pan of mac & cheese, 1 pan brussels sprouts, 1 dozen slider buns, and your choice of two 5oz cups BBQ sauce (mild BBQ, sticky garlic BBQ, Carolina vinegar, or ranch)',
    price1: '$195, (serves 8-10)',
    category: 'Specialty Packs',
    id: 2
  },
  {
    name: 'Individually Packed 2 Meat Platters',
    description1: 'Includes your choice of 2 meats, 2 sides, Texas toast, and BBQ sauce. Meat choices: sliced brisket (+$1), chopped brisket, pulled pork, pork ribs, rib tips, pork belly, sausage, chicken wings +$1.00, ¼ chicken, or sliced turkey).',
    description2: 'Side choices: fries, brussels sprouts (+$1), mac & cheese (+$1), coleslaw, potato salad, chipotle garlic green beans, and BBQ beans.',
    description3: 'Sauce choices: mild BBQ, sticky garlic BBQ, Carolina vinegar, mustard BBQ, hot BBQ, or ranch.',
    price1: '$19.50',
    category: 'Specialty Packs',
    id: 3
  },
  {
    name: 'Individually Packed BBQ sampler Platters',
    description1: 'Includes your choice of 3 meats, 2 sides, Texas toast, and BBQ sauce. Meat choices: sliced brisket (+$1), chopped brisket, pulled pork, pork ribs, rib tips, pork belly, sausage, chicken wings, ¼ chicken, and sliced turkey).',
    description2: 'Side choices: fries, brussels sprouts (+$1), mac & cheese (+$1), coleslaw, potato salad, chipotle garlic green beans, or BBQ beans.',
    description3: 'Sauce choices: mild BBQ, sticky garlic BBQ, Carolina vinegar, mustard BBQ, hot BBQ, or ranch.',
    price1: '$26.50',
    category: 'Specialty Packs',
    id: 4
  },
  {
    name: 'BBQ Sandwich Boxed Lunch',
    sandwiches: [
      {
        name: 'Carolina On My Mind',
        description: 'chopped pork shoulder, crispy skin, spicy vinegar sauce, coleslaw, sesame bun',
        id: 5
      },
      {
        name: 'Music City',
        description: 'spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun',
        id: 6
      },
      {
        name: 'Big Cheese',
        description: 'chopped pork, melted cheese, crispy onions, BBQ sauce, sesame bun',
        id: 7
      },
      {
        name: 'Club',
        description: 'smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, Texas toast',
        id: 8
      },
      {
        name: 'Jive Turkey',
        description: 'smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, Texas toast',
        id: 9
      },
      {
        name: 'Texas Ranger (+$1)',
        description: 'sliced brisket, crispy onions, house pickles, BBQ sauce, Texas toast',
        id: 10
      },
      {
        name: 'Jimmy Muscles (+$1)',
        description: 'crispy chicken breast, pork belly, jalapeño relish, sticky garlic sauce, ranch, herbs, sesame bun',
        id: 11
      },
      {
        name: 'Tofu Banh Mi',
        description: 'crispy tofu burnt ends, pickled veggies, fresh herbs, crispy onions, sticky garlic, aioli, hoagie roll',
        id: 12
      },
    ],
    description1: 'Side choices: seasoned fries, brussels sprouts (+$1), mac & cheese (+$1), coleslaw, potato salad, chipotle garlic green beans, or BBQ beans).',
    price1: '$18 per person (5 minimum)',
    category: 'Specialty Packs',
    id: 13
  },
  {
    name: 'Brisket',
    price1: '$60 for 2 lbs. (serves 4-5)',
    price2: '$115 for 4 lbs. (serves 8)',
    category: 'bbq',
    id: 14
  },
  {
    name: 'Pulled Pork',
    price1: '$45 for 2 lbs. (serves 4-5)',
    price2: '$85 for 4 lbs. (serves 8)',
    category: 'bbq',
    id: 15
  },
  {
    name: 'Pork Belly',
    price1: '$50 for 2 lbs. (serves 4-5)',
    price2: '$95 for 4 lbs. (serves 8)',
    category: 'bbq',
    id: 16
  },
  {
    name: 'Pork Ribs & Tips',
    price1: '$40 for 2 lbs. (serves 4-5)',
    price2: '$75 for 4 lbs. (serves 8)',
    category: 'bbq',
    id: 17
  },
  {
    name: 'Turkey Breast',
    price1: '$45 for 2 lbs. (serves 4-5)',
    price2: '$85 for 4 lbs. (serves 8)',
    category: 'bbq',
    id: 18
  },
  {
    name: 'BBQ Chicken',
    price1: '$20 for 8pc drums + thighs',
    price2: '$38 for 16pc drums + thighs',
    category: 'bbq',
    id: 19
  },
  {
    name: 'Chicken Wings',
    price1: '$35 for 20 wings (serves 4-5)',
    price2: '$65 for 40 wings (serves 8)',
    category: 'bbq',
    id: 20
  },
  {
    name: 'Jalapeno Cheddar Sausage',
    price1: '$45 for 2 lbs (serves 4-5)',
    price2: '$85 for 4 lbs (serves 8)',
    category: 'bbq',
    id: 21
  },
  {
    name: 'Tofu Burnt Ends',
    price1: '$28 per small (serves 4-5)',
    price2: '$50 per large (serves 8)',
    category: 'bbq',
    id: 22
  },
  {
    name: 'Sliders',
    sandwiches: [
      {
        name: 'Jive Turkey',
        description: 'smoked turkey with cheddar, crispy onions, ranch, bbq sauce',
        id: 23
      },
      {
        name: 'Carolina Pork',
        description: 'pulled pork, slaw, carolina vinegar bbq sauce',
        id: 24
      },
      {
        name: 'Texas Ranger (+$5)',
        description: 'chopped brisket, crispy onions, spicy pickles, bbq sauce',
        id: 25
      },
      {
        name: 'Crispy Chicken',
        description: 'crispy chicken bitres, spicy pickles, ranch',
        id: 26
      },
      {
        name: 'Big Cheese',
        description: 'pulled pork, melted cheese crispy onions, bbq sauce',
        id: 27
      },
      {
        name: 'Tofu Burnt Ends',
        description: 'smokey tofu, slaw, pickles, sticky garlic, bbq sauce',
        id: 28
      },
    ],
    price1: '$38 (1 dozen)',
    price2: '$70 (2 dozen)',
    category: 'Appetizers',
    id: 29
  },
  {
    name: 'BBQ Bites',
    sandwiches: [
      {
        name: 'Brisket Burnt Ends',
        id: 30
      },
      {
        name: 'Pork Belly',
        id: 31
      },
      {
        name: 'Turkey',
        id: 32
      },
      {
        name: 'Jalapeño Cheddar Sausage',
        id: 33
      },
    ],
    description: 'mix & match 4 lbs. with your choice of:',
    price1: '$110 per tray (serves 15)',
    category: 'Appetizers',
    id: 34
  },
  {
    name: 'Mac & Cheese',
    description1: 'shell pasta baked with smoked cheddar and jack cheese',
    price1: '$25 per 36oz (serves 4-5)',
    price2: '$45 per 80oz (serves 8-10)',
    category: 'sides',
    id: 35
  },
  {
    name: 'Crispy Brussels Sprouts',
    description1: 'fried and seasoned with Fed Pig BBQ rub',
    price1: '$25 per 36oz (serves 4)',
    price2: '$45 per 80oz (serves 8)',
    category: 'sides',
    id: 36
  },
  {
    name: 'Chipotle Garlic Green Beans',
    description1: 'sautéed with roasted garlic and chipotle peppers',
    price1: '$20 per 36oz (serves 4-5)',
    price2: '$38 per 80oz (serves 8-10)',
    category: 'sides',
    id: 37
  },
  {
    name: 'BBQ Pinto Beans',
    description1: 'smokey, savory, and a little sweet',
    price1: '$20 per 36oz (serves 4-5)',
    price2: '$38 per 80oz (serves 8-10)',
    category: 'sides',
    id: 38
  },
  {
    name: 'Classic Coleslaw',
    description1: 'carolina style chopped cabbage slaw',
    price1: '$16 per 32oz (serves 4-5)',
    price2: '$35 per 80oz (serves 8-10)',
    category: 'sides',
    id: 39
  },
  {
    name: 'Red Bliss Potato Salad',
    description1: 'southern style potato salad with chopped pickles, celery, and hard boiled eggs',
    price1: '$16 per 32oz (serves 4)',
    price2: '$38 per 80oz (serves 8)',
    category: 'sides',
    id: 40
  },
  {
    name: 'Side Salad',
    description1: 'with ranch or mustard vinaigrette',
    price1: '$12 per 32oz (serves 1-2)',
    price2: '$25 per 5 lbs. (serves 8)',
    category: 'sides',
    id: 41
  },
  {
    name: 'Nana\'s Banana Nana Pudding',
    description1: 'fresh bananas layered with vanilla pudding and nilla wafers',
    price1: '$25 per 32oz',
    price2: '$45 per 80oz',
    category: 'desserts',
    id: 42
  },
  {
    name: 'Oreo Chocolate Pudding',
    description1: 'chocolate pudding layered with oreo cookie crumbles',
    price1: '$25 per 32oz',
    price2: '$45 per 80oz',
    category: 'desserts',
    id: 43
  },
  {
    name: 'Bottled Water',
    price1: '$2',
    category: 'drinks',
    id: 44
  },
  {
    name: 'Canned Coke',
    price1: '$2.50',
    category: 'drinks',
    id: 45
  },
  {
    name: 'Canned Diet Coke',
    price1: '$2.50',
    category: 'drinks',
    id: 46
  },
  {
    name: 'Canned Sprite',
    price1: '$2.50',
    category: 'drinks',
    id: 47
  },
  {
    name: 'Canned Dr. Brown\'s Black Cherry',
    price1: '$2.50',
    category: 'drinks',
    id: 48
  },
  {
    name: 'Canned Dr. Brown\'s Diet Black Cherry',
    price1: '$2.50',
    category: 'drinks',
    id: 49
  },
  {
    name: 'House Pickles',
    price1: '$2.50',
    category: 'Extras',
    id: 50
  },
  {
    name: '1 Dozen Slider Buns',
    price1: '$6',
    category: 'Extras',
    id: 51
  },
  {
    name: '5 Pieces of Texas Toast',
    price1: '$5',
    category: 'Extras',
    id: 52
  },
  {
    name: '10 Pieces of Texas Toast',
    price1: '$8',
    category: 'Extras',
    id: 53
  },
  {
    name: '6oz BBQ Sauce',
    description1: 'sauce Choices: mild BBQ, sticky garlic BBQ, carolina vinegar, ranch',
    price1: '$3',
    category: 'Extras',
    id: 54
  },
  {
    name: 'Chafing Rack Set',
    description1: 'includes 1 rack, 1 pan for water, and 2 sterno cans',
    price1: '$10',
    category: 'Extras',
    id: 55
  },
  {
    name: 'Serving Items',
    description1: 'utensil kits and paper serving trays',
    price1: '$0.50 per person',
    category: 'Extras',
    id: 56
  },
]

const MenuCatering = (props) => {

  const menuDistributor = (menu) => {
    return <div key={menu.id} className='py-4'>
      <h3 className="text-2xl font-bold pb-2">{menu.name}</h3>

      {/* description 1 */}
      {
        !!menu.description1 ?
        <p className="py-2">{menu.description1}</p>
        :
        null
      }

      {/* description 2 */}
      {
        !!menu.description2 ?
        <p className="py-2">{menu.description2}</p>
        :
        null
      }

      {/* description 3 */}
      {
        !!menu.description3 ?
        <p className="py-2">{menu.description3}</p>
        :
        null
      }

      {/* sandwich array? */}
      {
        !!menu.sandwiches ?
          menu.sandwiches.map((sandwich) => {
          return <p key={sandwich.id} className='py-2'><span className="font-bold">{sandwich.name}</span> {sandwich.description? ` - ${sandwich.description}` : null}</p>
        })
      : 
        null 
      }

      {/* price1 */}
      {
        !!menu.price1 ?
        <p className="font-bold py-2">{menu.price1}</p>
        :
        null
      }

      {/* price2 */}
      {
        !!menu.price2 ?
        <p className="font-bold">{menu.price2}</p>
        :
        null
      }
    </div>
  }
  return (
    <>
      {/* Title */}
      <div className="w-2/5 flex flex-col justify-center items-center flex-nowrap">
        <h1 className="mb-4 text-4xl font-bold">Catering Menu</h1>
        <button
          className='flex justify-center border-2 px-4 py-2 mx-2 border-white bg-red-800 text-white font-bold hover:bg-white hover:text-red-800 mb-24'
          onClick={(e) => console.log(e, 'clicked')}
        >
          Reserve Catering
        </button>
      </div>
      
      <div className="w-4/5 flex flex-row flex-wrap">

        {/* Left side */}
        <div className="lg:w-1/2 lg:px-12 w-full">
          {/* Specialty */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Specialty Packs</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'Specialty Packs') {
                return menuDistributor(menu)
              }
            })}
          </div>

          {/* BBQ */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Barbeque</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'bbq') {
                return menuDistributor(menu)
              }
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 lg:px-12 w-full">

          {/* Appetizers */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Appetizers</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'Appetizers') {
                return menuDistributor(menu)
              }
            })}
          </div>

          {/* sides */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Sides</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'sides') {
                return menuDistributor(menu)
              }
            })}
          </div>

          {/* desserts */}
          <div className="mb-8"> 
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Desserts</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'desserts') {
                return menuDistributor(menu)
              }
            })}
          </div>

          {/* drinks */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Drinks</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'drinks') {
                return menuDistributor(menu)
              }
            })}
          </div>

          {/* Extras */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Extras</h2>
            {cateringMenu.map((menu) => {
              if(menu.category == 'Extras') {
                return menuDistributor(menu)
              }
            })}
          </div>

        </div>

      </div>

    </>
  );
}
export default MenuCatering;