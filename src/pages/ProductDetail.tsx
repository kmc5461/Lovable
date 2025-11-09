import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import productsData from '@/data/products.json';
import { ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const product = productsData.find(p => p.slug === slug);
  const similarProducts = productsData.filter(p => 
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Ürün bulunamadı</h1>
          <Button asChild>
            <Link to="/shop">Mağazaya Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      toast.error('Lütfen beden seçin');
      return;
    }
    if (product.colors && product.colors.length > 1 && !selectedColor) {
      toast.error('Lütfen renk seçin');
      return;
    }

    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize || product.sizes?.[0],
      color: selectedColor || product.colors?.[0],
    });

    toast.success('Ürün sepete eklendi', {
      description: `${product.title} - ${selectedSize || ''} ${selectedColor || ''}`,
    });
  };

  const formatPrice = (price: number) => {
    return `₺${price.toLocaleString('tr-TR')}`;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-mann">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Mağazaya Dön
          </Link>
        </Button>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Image */}
          <div className="aspect-square bg-muted rounded-sm overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight mb-4">
                {product.title}
              </h1>
              <p className="text-3xl font-semibold">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Beden</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Beden seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 1 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Renk</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Renk seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Add to Cart */}
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Sepete Ekle
            </Button>

            {/* Product Info */}
            <div className="pt-6 border-t border-border space-y-4 text-sm text-muted-foreground">
              <p>✓ Ücretsiz kargo (500₺ üzeri siparişlerde)</p>
              <p>✓ 14 gün içinde ücretsiz iade</p>
              <p>✓ Premium kalite garanti</p>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">
              Benzer Ürünler
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
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
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
