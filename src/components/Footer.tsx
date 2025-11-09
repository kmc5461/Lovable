import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted mt-24">
      <div className="container-mann py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tighter">MÄNN</h3>
            <p className="text-sm text-muted-foreground">
              Zamansız minimal giyim. Premium kalite, sade tasarım.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Alışveriş</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-mann">Tüm Ürünler</Link></li>
              <li><Link to="/shop?category=Üst Giyim" className="hover:text-foreground transition-mann">Üst Giyim</Link></li>
              <li><Link to="/shop?category=Alt Giyim" className="hover:text-foreground transition-mann">Alt Giyim</Link></li>
              <li><Link to="/shop?category=Aksesuar" className="hover:text-foreground transition-mann">Aksesuar</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Kurumsal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-mann">Hakkımızda</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-mann">İletişim</Link></li>
              <li><a href="#" className="hover:text-foreground transition-mann">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-foreground transition-mann">İade & Değişim</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/mann" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-mann"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/mann" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-mann"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              info@mann.com.tr
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MÄNN. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
