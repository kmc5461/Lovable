import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import productsData from '@/data/products.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'Tümü');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['Tümü', 'Üst Giyim', 'Alt Giyim', 'Dış Giyim', 'Aksesuar'];

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...productsData];

    // Filter by category
    if (selectedCategory !== 'Tümü') {
      products = products.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        products.sort((a, b) => a.title.localeCompare(b.title, 'tr'));
        break;
      default:
        break;
    }

    return products;
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'Tümü') {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-mann">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Mağaza</h1>
          <p className="text-muted-foreground">
            Zamansız ve minimal tasarımlarımızı keşfedin
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-border">
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px] ml-auto">
              <SelectValue placeholder="Sırala" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Varsayılan</SelectItem>
              <SelectItem value="price-low">Fiyat: Düşükten Yükseğe</SelectItem>
              <SelectItem value="price-high">Fiyat: Yüksekten Düşüğe</SelectItem>
              <SelectItem value="name">İsim: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Bu kategoride ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
