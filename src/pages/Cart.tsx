import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return `₺${price.toLocaleString('tr-TR')}`;
  };

  const handleCheckout = () => {
    toast.success('Ödeme sayfasına yönlendiriliyorsunuz...', {
      description: 'Bu özellik yakında eklenecek.',
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
          <h1 className="text-2xl font-semibold">Sepetiniz Boş</h1>
          <p className="text-muted-foreground">Alışverişe başlamak için ürünlerimize göz atın</p>
          <Button asChild size="lg">
            <Link to="/shop">Mağazaya Git</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-mann">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">Sepetim</h1>
          <Button variant="ghost" size="sm" onClick={clearCart}>
            Sepeti Temizle
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-card border border-border rounded-sm"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{item.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.size && <span>Beden: {item.size}</span>}
                    {item.size && item.color && <span className="mx-2">•</span>}
                    {item.color && <span>Renk: {item.color}</span>}
                  </div>
                  <p className="font-semibold mt-2">{formatPrice(item.price)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted p-6 rounded-sm sticky top-24 space-y-4">
              <h2 className="text-xl font-semibold">Sipariş Özeti</h2>
              
              <div className="space-y-2 py-4 border-y border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ara Toplam</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Kargo</span>
                  <span className="text-green-600">Ücretsiz</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Toplam</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <Button size="lg" className="w-full" onClick={handleCheckout}>
                Satın Al
              </Button>

              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/shop">Alışverişe Devam Et</Link>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                500₺ üzeri siparişlerde ücretsiz kargo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
