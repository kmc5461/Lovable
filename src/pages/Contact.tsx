import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Mesajınız alındı!', {
      description: 'En kısa sürede size geri dönüş yapacağız.',
    });
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-mann">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            İletişim
          </h1>
          <p className="text-lg text-muted-foreground">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bize ulaşın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Bize Yazın</h2>
            
            {submitted ? (
              <div className="bg-secondary p-8 rounded-sm text-center space-y-4">
                <div className="text-4xl">✓</div>
                <h3 className="text-xl font-semibold">Teşekkürler!</h3>
                <p className="text-muted-foreground">
                  Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ad Soyad
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ornek@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Gönder
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">İletişim Bilgileri</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">E-posta</h3>
                  <a 
                    href="mailto:info@mann.com.tr" 
                    className="text-muted-foreground hover:text-foreground transition-mann"
                  >
                    info@mann.com.tr
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <a 
                    href="tel:+902121234567" 
                    className="text-muted-foreground hover:text-foreground transition-mann"
                  >
                    +90 (212) 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Adres</h3>
                  <p className="text-muted-foreground">
                    Nişantaşı Mah.<br />
                    Teşvikiye Cad. No: 123<br />
                    Şişli / İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-muted p-6 rounded-sm space-y-4">
              <h3 className="font-semibold">Çalışma Saatleri</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span>10:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
