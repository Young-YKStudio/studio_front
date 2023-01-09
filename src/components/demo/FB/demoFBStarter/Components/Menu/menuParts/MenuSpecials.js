
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
      return <div key={menu.id}>
        <h3>{menu.name}</h3>
        <p>{menu.description}</p>
        <p>${menu.price}</p>
      </div>
  }
  return (
    <>
      <h2>Combos</h2>
      {specialMenu.map((menu) => {
        if(menu.category === 'Combos') {
          return menuDistributor(menu)
        }
      })}
      <h2>Sandwich Specials</h2>
      {specialMenu.map((menu) => {
        if(menu.category === 'Sandwich Specials') {
          return menuDistributor(menu)
        }
      })}
    </>
  );
}
export default MenuSpecials;