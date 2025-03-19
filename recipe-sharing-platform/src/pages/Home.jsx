import RecipeCard from '../components/RecipeCard';

const dummyRecipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    description: 'A classic Italian pasta dish with rich meat sauce.',
    image: 'https://source.unsplash.com/400x300/?spaghetti',
  },
  {
    id: 2,
    title: 'Chicken Curry',
    description: 'Spicy and flavorful chicken curry made with aromatic spices.',
    image: 'https://source.unsplash.com/400x300/?chicken-curry',
  },
  {
    id: 3,
    title: 'Avocado Toast',
    description: 'Healthy avocado toast topped with eggs and herbs.',
    image: 'https://source.unsplash.com/400x300/?avocado-toast',
  },
];

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dummyRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
