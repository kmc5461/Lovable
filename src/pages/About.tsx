const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container-mann">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            MÄNN: Şehirli, Zamansız, Minimal
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Modern erkeğin gardırobuna zamansız parçalar sunuyoruz
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Philosophy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Felsefemiz</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                MÄNN, minimalizmi ve kaliteyi bir araya getiren bir erkek giyim markasıdır. 
                Hızlı moda trendlerini takip etmek yerine, uzun yıllar kullanabileceğiniz, 
                zamansız ve şık parçalar tasarlıyoruz.
              </p>
              <p>
                Her ürünümüz, sade tasarım anlayışı ile özenle seçilmiş premium kumaşlardan 
                üretilir. Gardırobunuzun temelini oluşturacak, kombinlemenin kolay olduğu ve 
                her sezon kullanabileceğiniz parçalar sunuyoruz.
              </p>
            </div>
          </section>

          {/* Values Grid */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Kalite</h3>
              <p className="text-muted-foreground">
                Yalnızca en kaliteli kumaşlar ve malzemeler kullanarak dayanıklı ürünler üretiyoruz.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Minimalizm</h3>
              <p className="text-muted-foreground">
                Sade, temiz çizgiler ve zamansız tasarımlar ile gösterişsiz zarafet anlayışı.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Sürdürülebilirlik</h3>
              <p className="text-muted-foreground">
                Uzun ömürlü, kaliteli ürünler üreterek sürdürülebilir modayı destekliyoruz.
              </p>
            </div>
          </section>

          {/* Sustainability */}
          <section className="bg-muted p-8 md:p-12 rounded-sm space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Sürdürülebilir Üretim</h2>
            <div className="prose max-w-none text-muted-foreground">
              <p>
                MÄNN olarak, moda endüstrisinin çevreye olan etkisinin farkındayız. 
                Bu nedenle üretim süreçlerimizde sürdürülebilirliği ön planda tutuyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Organik ve geri dönüştürülmüş kumaşların kullanımı</li>
                <li>Etik üretim koşulları ve adil ücretlendirme</li>
                <li>Minimal ambalaj ve çevre dostu paketleme</li>
                <li>Yerel üretim ile karbon ayak izinin azaltılması</li>
              </ul>
            </div>
          </section>

          {/* Story */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Hikayemiz</h2>
            <div className="prose max-w-none text-muted-foreground">
              <p>
                MÄNN, şehir hayatının karmaşasında sadeliği arayan modern erkekler için doğdu. 
                Gardırop kararlarını basitleştirmek, kaliteli ve zamansız parçalar sunmak amacıyla 
                yola çıktık.
              </p>
              <p>
                Markamız, karmaşanın içinde sakinliği, gösterişin yerine özü, trendlerin ötesinde 
                klasiği tercih eden bir anlayışı temsil ediyor. Her koleksiyon, bu değerler 
                ışığında özenle hazırlanıyor.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Koleksiyonumuzu keşfedin</p>
          <a 
            href="/shop" 
            className="inline-flex items-center text-lg font-medium hover:underline"
          >
            Mağazaya Git →
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
