import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, slug, price, image, category }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id,
      title,
      price,
      image,
    });
    toast.success('Ürün sepete eklendi', {
      description: title,
    });
  };

  const formatPrice = (price: number) => {
    return `₺${price.toLocaleString('tr-TR')}`;
  };

  return (
    <Link to={`/product/${slug}`} className="group">
      <div className="space-y-4">
        {/* Image */}
        <div className="aspect-square bg-muted overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-mann group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
              <h3 className="font-medium text-sm leading-tight">{title}</h3>
            </div>
            <p className="font-semibold text-sm whitespace-nowrap">{formatPrice(price)}</p>
          </div>

          {/* Actions on hover */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-mann">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={(e) => {
                e.preventDefault();
                // Navigate handled by Link
              }}
            >
              Detay
            </Button>
            <Button 
              size="sm" 
              className="flex-1 text-xs"
              onClick={handleAddToCart}
            >
              Sepete Ekle
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
