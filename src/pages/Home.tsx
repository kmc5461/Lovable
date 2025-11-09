import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import heroBanner from '@/assets/hero-banner.jpg';

const Home = () => {
  const featuredProducts = productsData.slice(0, 6);

  const categories = [
    { name: 'Üst Giyim', href: '/shop?category=Üst Giyim' },
    { name: 'Alt Giyim', href: '/shop?category=Alt Giyim' },
    { name: 'Dış Giyim', href: '/shop?category=Dış Giyim' },
    { name: 'Aksesuar', href: '/shop?category=Aksesuar' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-muted overflow-hidden">
        <img 
          src={heroBanner} 
          alt="MÄNN Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative h-full container-mann flex flex-col items-center justify-center text-center text-background">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">
            MÄNN
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Zamansız Minimal Giyim
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/shop">Alışverişe Başla</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container-mann">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
            Kategoriler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group p-6 bg-muted rounded-sm text-center transition-mann hover:bg-accent"
              >
                <h3 className="font-medium group-hover:text-accent-foreground">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container-mann">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Yeni Ürünler
            </h2>
            <Button variant="ghost" asChild>
              <Link to="/shop">Tümünü Gör</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                slug={product.slug}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Message */}
      <section className="py-16 bg-secondary">
        <div className="container-mann text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Minimalizm, Kalite, Zamansızlık
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            MÄNN, şehirli erkeğin gardırobuna zamansız parçalar sunuyor. 
            Her ürün, sade tasarım anlayışı ve üstün kalite ile özenle seçilmiş 
            kumaşlardan üretiliyor. Trendleri takip etmek yerine, klasik ve 
            minimal estetiği benimseyerek uzun yıllar kullanabileceğiniz 
            parçalar yaratıyoruz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
