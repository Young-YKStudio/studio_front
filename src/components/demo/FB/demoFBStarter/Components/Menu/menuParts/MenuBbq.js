const bbqMenu = [
  { 
    name: 'Brisket',
    description: 'chopped or sliced',
    category: 'Barbeque',
    id: 1
  },
  { 
    name: 'Pork Rib Tips',
    description: '',
    category: 'Barbeque',
    id: 2
  },
  { 
    name: 'Pork Spare Ribs',
    description: '',
    category: 'Barbeque',
    id: 3
  },
  { 
    name: 'Pulled Pork Shoulder',
    description: '',
    category: 'Barbeque',
    id: 4
  },
  { 
    name: 'Pork Belly',
    description: '',
    category: 'Barbeque',
    id: 5
  },
  { 
    name: 'Turkey Breast',
    description: '',
    category: 'Barbeque',
    id: 6
  },
  { 
    name: 'Chicken',
    description: '',
    category: 'Barbeque',
    id: 7
  },
  { 
    name: 'Chicken Wings',
    description: '',
    category: 'Barbeque',
    id: 8
  },
  { 
    name: 'Jalapeno Cheese Sausage',
    description: '',
    category: 'Barbeque',
    id: 9
  },
  { 
    name: 'Smoked Cheddar Mac & cheese',
    description: 'shell pasta baked with smoked cheddar and jack cheese',
    category: 'Sides',
    id: 10
  },
  { 
    name: 'Seasoned French Fries',
    description: 'skin-on fries seasoned with Fed Pig BBQ rub',
    category: 'Sides',
    id: 11
  },
  { 
    name: 'Crispy Brussels Sprouts',
    description: 'fried and seasoned with Fed Pig BBQ rub',
    category: 'Sides',
    id: 12
  },
  { 
    name: 'chipotle Garlic Green Beans',
    description: 'stewed with roasted garlic and chipotle peppers',
    category: 'Sides',
    id: 13
  },
  { 
    name: 'Red Bliss Potato Salad',
    description: 'southern style potato salad with chopped pickles, celery, and hard boiled eggs',
    category: 'Sides',
    id: 14
  },
  { 
    name: 'Classic Coleslaw',
    description: 'carolina style shredded cabbage slaw',
    category: 'Sides',
    id: 15
  },
  { 
    name: 'BBQ Beans',
    description: 'smoky, savory, and a little sweet',
    category: 'Sides',
    id: 16
  },
  { 
    name: 'Loaded Fries',
    description: 'seasoned fries topped with pulled pork, melted cheese, ranch, and BBQ sauce',
    category: 'Sides',
    id: 17
  },
  { 
    name: 'Carolina On My Mind',
    description: 'pulled pork, crispy skin, coleslaw, spicy vinegar sauce, sesame bun',
    category: 'signature',
    id: 18
  },
  { 
    name: 'Music City',
    description: 'spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun',
    category: 'signature',
    id: 19
  },
  { 
    name: 'Big Cheese',
    description: 'chopped pork or brisket, melted cheese, crispy onions, BBQ sauce, sesame bun',
    category: 'signature',
    id: 20
  },
  { 
    name: 'Club',
    description: 'smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, texas toast',
    category: 'signature',
    id: 21
  },
  { 
    name: 'Jive Turkey',
    description: 'smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, texas toast',
    category: 'signature',
    id: 22
  },
  { 
    name: 'Texas Ranger',
    description: 'sliced brisket, crispy onions, house pickles, BBQ sauce, texas toast',
    category: 'signature',
    id: 23
  },
  { 
    name: 'Jimmy Muscles',
    description: 'crispy chicken breast, pork belly, jalapeño relish, sticky garlic sauce, ranch, herbs, sesame bun',
    category: 'signature',
    id: 24
  },
  { 
    name: 'Texas Flood',
    description: 'chopped brisket, jalapeño cheese sausage, spicy pickles, crispy onions, bbq sauce, sesame bun',
    category: 'signature',
    id: 25
  },
  { 
    name: 'Tofu Banh Mi',
    description: 'crispy tofu burnt ends, pickled veggies, fresh herbs, crispy onions, sticky garlic, aioli, hoagie roll',
    category: 'signature',
    id: 26
  },
  { 
    name: 'Brisket',
    description: 'chopped or sliced',
    category: 'traditional',
    id: 27
  },
  { 
    name: 'Sliced Smoked Turkey',
    description: '',
    category: 'traditional',
    id: 28
  },
  { 
    name: 'Pulled Pork',
    description: '',
    category: 'traditional',
    id: 29
  },
  { 
    name: 'Sliced Pork Belly',
    description: '',
    category: 'traditional',
    id: 30
  },
  { 
    name: 'BBQ Green Salad',
    description: 'Choice of meat, mixed greens, smoked tomato, pickles, crispy onions, apple cider vinaigrette',
    category: 'salad',
    id: 31
  },
  { 
    name: 'Nana\'s Banana Nana Pudding',
    description: 'fresh bananas layered with vanilla pudding and nilla wafers',
    category: 'dessert',
    id: 32
  },
  { 
    name: 'Oreo Chocolate Pudding',
    description: 'chocolate pudding layered with oreo cookie crumbles',
    category: 'dessert',
    id: 33
  },
  { 
    name: 'Two Step',
    description: 'pick any 2 meats & 2 small sides',
    category: 'combos',
    id: 34
  },
  { 
    name: 'Rib & Chicken',
    description: '1/2 lb. of ribs, 1/4 chicken & 2 small sides',
    category: 'combos',
    id: 35
  },
  { 
    name: 'Sampler Platter',
    description: 'pick any 3 meats & 2 small sides',
    category: 'combos',
    id: 36
  },
  { 
    name: 'Pitmaster Special for 2',
    description: 'pick any 4 meats & 3 small sides',
    category: 'combos',
    id: 37
  },
  { 
    name: 'Feed the Fam',
    description: 'pick any 4 meats & 4 large sides',
    category: 'combos',
    id: 38
  },
]

const MenuBbq = (props) => {

  const menuDistributor = (menu) => {
    return <div key={menu.id}>
      <h3>{menu.name}</h3>
      {menu.description == '' ? null :
        <p>{menu.description}</p>
      }
    </div>
  }
  return (
    <>
      {/* BBQ description */}
      <div>
        <p>We are open for patio dining! Check out our menu here for specials & dining in!</p>
        <button 
            className='flex justify-center border-2 px-4 py-2 mx-2 border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400'
            onClick={(e) => console.log(e, 'clicked')}
          >
            Order Online
        </button>
      </div>

      {/* Barbeque */}
      <div className="my-4">
        <h2>Barbeque</h2>
        <p>Smoked daily, all served with Texas toast & pickles.</p>
        {bbqMenu.map((menu) => {
          if(menu.category === 'Barbeque') {
            return menuDistributor(menu)
          }
        })}
      </div>

      {/* Platter */}
      <div className="mb-4">
        <h2>Platters and Combos</h2>
        {bbqMenu.map((menu) => {
          if(menu.category === 'combos') {
            return menuDistributor(menu)
          }
        })}
      </div>

      {/* signature Sandwiches */}
      <div className="mb-4">
        <h2>Signature Sandwiches</h2>
        <p>When bread meets what could go between bread, there’s no end to the culinary possibilities.</p>
        {bbqMenu.map((menu) => {
          if(menu.category === 'signature') {
            return menuDistributor(menu)
          }
        })}
      </div>

      {/* traditional Sandwiches */}
      <div className="mb-4">
        <h2>Traditional Sandwiches</h2>
        <p>1/3 lb. of any off-the-bone meat on a sesame bun with BBQ sauce. Ask not what BBQ can do for the sandwich — just get the sandwich. You can figure out the rest later.</p>
        {bbqMenu.map((menu) => {
          if(menu.category === 'traditional') {
            return menuDistributor(menu)
          }
        })}
      </div>

      {/* sides */}
      <div className="mb-4">
        <h2>Sides</h2>
        <p>A wise leader once said that unless both sides win, no agreement can be permanent. So — just agree to get more sides later.</p>
        {bbqMenu.map((menu) => {
          if(menu.category === 'Sides') {
            return menuDistributor(menu)
          }
        })}
      </div>

      {/* salad */}
      <div className="mb-4">
        <h2>Salads</h2>
        <p>Crunch crunch, who's there? You, getting a tangy, acidic crunch of greens to really make your plate sing.</p>
        {bbqMenu.map((menu) => {
          if(menu.category === 'salad') {
            return menuDistributor(menu)
          }
        })}
      </div>

      {/* dessert */}
      <div className="mb-4">
        <h2>Dessert</h2>
        <p>The kind of blue-ribbon treats usually reserved for a State Fair judge, straight to you.</p>
        {bbqMenu.map((menu) => {
          if(menu.category === 'dessert') {
            return menuDistributor(menu)
          }
        })}
      </div>
    </>
  );
}
export default MenuBbq;