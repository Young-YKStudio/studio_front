
const specialMenu = [
  { 
    name: 'Dino Beef Short Rib combo for 2',
    description: 'available Monday & Tuesdays only! smoked beef short rib with two 6 oz sides of your choice, texas toast, and pickles.',
    category: 'Combos',
    price: '39',
    id: 1
  },
  { 
    name: 'Korea Town',
    description: 'smoked and glazed pork belly, kimchi slaw, crispy skins, herbs, chipotle aioli, sesame bun',
    category: 'Sandwich Specials',
    price: '13.50',
    id: 2
  },
  { 
    name: 'Tofu Banh Mi',
    description: 'crispy tofu burnt ends, pickled veggies, fresh herbs, crispy onions, jalapeño relish, sticky garlic, aioli, hoagie roll (vegetarian - can be made vegan on request)',
    category: 'Sandwich Specials',
    price: '12.50',
    id: 3
  },
  { 
    name: 'Fixer',
    description: 'pulled pork, pimento cheese, pickled onions, crispy skins, bbq sauce, sesame bun',
    category: 'Sandwich Specials',
    price: '12.50',
    id: 4
  },
  { 
    name: 'Jose Canseco',
    description: 'pulled pork, smoked ham, melted swiss, pickles, pickled red onions, mojo mustard, hoagie roll',
    category: 'Sandwich Specials',
    price: '13.50',
    id: 5
  },
  { 
    name: 'Beef Bulgogi Hoagie',
    description: 'marinated shaved ribeye, kimchi carrot slaw, jalapeño relish, chipotle aioli, cilantro, sesame seeds, hoagie roll',
    category: 'Sandwich Specials',
    price: '14',
    id: 6
  },
  { 
    name: 'Smoked Jackfruit Paneer Tikka Melt',
    description: 'smoked and shredded jackfruit, paneer cheese, roasted green chilies, tomatoes, crispy onions, cilantro sauce, texas toast',
    category: 'Sandwich Specials',
    price: '11.50',
    id: 7
  },
]

const MenuSpecials = (props) => {

  const menuDistributor = (menu) => {
      return <div key={menu.id} className='py-4'>
        <h3 className="text-2xl font-bold">{menu.name}</h3>
        <p className="py-2">{menu.description}</p>
        <p className="font-bold pb-2">${menu.price}</p>
      </div>
  }
  return (
    <div className="w-2/5">
      <div className="mb-8">
        <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Combos</h2>
        {specialMenu.map((menu) => {
          if(menu.category === 'Combos') {
            return menuDistributor(menu)
          }
        })}
      </div>
      <div className="mb-8">
        <h2 className="text-4xl font-bold py-4 border-b-2 border-white mb-4">Sandwich Specials</h2>
        {specialMenu.map((menu) => {
          if(menu.category === 'Sandwich Specials') {
            return menuDistributor(menu)
          }
        })}
      </div>
    </div>
  );
}
export default MenuSpecials;