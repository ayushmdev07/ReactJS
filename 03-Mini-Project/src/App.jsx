import Card from './components/Card';
const App = () => {
const items = [
  {
    imageUrl: "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288872.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Labubu Gudda Shoes",
    description: "Lightweight shoes for daily running comfort",
    price: 2999,
    category: "Footwear"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=12",
    name: "Coffee Mug",
    description: "Ceramic mug with modern stylish design",
    price: 399,
    category: "Kitchenware"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=13",
    name: "Office Chair",
    description: "Comfortable chair with strong lumbar support",
    price: 7499,
    category: "Furniture"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=14",
    name: "Cotton T-Shirt",
    description: "Soft cotton fabric with breathable comfort",
    price: 699,
    category: "Clothing"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=15",
    name: "Yoga Mat",
    description: "Non slip mat for daily yoga practice",
    price: 999,
    category: "Fitness"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=16",
    name: "Water Bottle",
    description: "Reusable bottle with leak proof lid",
    price: 549,
    category: "Accessories"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=17",
    name: "Wall Clock",
    description: "Minimal wall clock with silent movement",
    price: 1299,
    category: "Decor"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=18",
    name: "Notebook Set",
    description: "Smooth pages ideal for daily writing",
    price: 299,
    category: "Stationery"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=19",
    name: "Indoor Plant",
    description: "Fresh indoor plant for home decor",
    price: 899,
    category: "Plants"
  },
  {
    imageUrl: "https://picsum.photos/300/200?random=20",
    name: "Table Lamp",
    description: "Warm light lamp with elegant design",
    price: 1999,
    category: "Lighting"
  }
];


  return (
    <div className="main">
      {items.map(function(elem, idx){
        return <div key={idx}>
          <Card name={elem.name} image={elem.imageUrl} desc={elem.description} rate={elem.price} category={elem.category} />
        </div>
      })}
    </div>
  )
}

export default App