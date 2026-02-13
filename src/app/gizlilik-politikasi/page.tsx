import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | VA Partners',
    description: 'VA Partners gizlilik politikası ve veri güvenliği bilgilendirmesi.',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs className="mb-6" />
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
                    Gizlilik Politikası
                </h1>
                <div className="h-1 w-24 bg-gold rounded-full mb-12" />

                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground">
                    <h3>İnternet Sitesi Analizi</h3>
                    <p>
                        İnternet sitemiz 1600 Amphitheatre Parkway, Mountain View, CA 94043, ABD adresinde yerleşik olan Google Inc. (&ldquo;Google&ldquo;) internet analizi hizmetleri sunan Google Analytics&rsquo;i kullanmaktadır.
                    </p>
                    <p>
                        &Ouml;nceden verdiğiniz onay doğrultusunda veya yukarıdaki kurallar doğrultusunda, Google bizim adımıza internet sitemizi kullanımlarınızı analiz edecektir. Bu ama&ccedil;la, yukarıda detaylı olarak tanımlanan, ancak bunlarla sınırlı olmaksızın, &Ccedil;erezleri kullanıyoruz.
                    </p>
                    <p>
                        İnternet sitesini kullanırken Google tarafından toplanan bilgiler (&ouml;rneğin başvuran URL&lsquo;ler, internet sitemizin hangi sayfalarını ziyaret ettiğinize ilişkin bilgi, tarayıcınızın tipi, dil se&ccedil;enekleriniz, işletim sisteminiz, ekranınızın &ccedil;&ouml;z&uuml;n&uuml;rl&uuml;ğ&uuml;) ABD&rsquo;deki bir Google sunucusuna g&ouml;nderilir ve burada depolanır ve analiz edilir. İlgili sonu&ccedil;lar anonim şekilde bize sunulabilecektir.
                    </p>

                    <h3>Google Haritalar</h3>
                    <p>
                        Bu sayfa bir Uygulama Programlama Aray&uuml;z&uuml; (API) &uuml;zerinden Google Haritalar harita servisini kullanmaktadır. Sağlayıcı; Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, ABD&rsquo;dir. Google Haritalar&rsquo;ın &ouml;zelliklerini kullanmak i&ccedil;in IP adresinizi kaydetmeniz gerekir.
                    </p>

                    <h3>Google Web Fonts</h3>
                    <p>
                        Bu internet sitesi, ara&ccedil;ların tekd&uuml;ze g&ouml;sterimiyle ilgili olarak sağlayıcı Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, ABD&rsquo;ye ait web fontlarını kullanmaktadır. Bir sayfaya eriştiğinizde, tarayıcınız, metin ve yazı tiplerini doğru g&ouml;r&uuml;nt&uuml;lemek adına gerekli web yazı tiplerini tarayıcı &ouml;nbelleğinize y&uuml;kler.
                    </p>

                    <h3>Dış Bağlantılar</h3>
                    <p>
                        İnternet sitemiz, sayfalarından farklı internet adreslerine bağlantı vermektedir. İnternet sitemiz link verdiği, banner tanıtımını yaptığı sitelerin i&ccedil;eriklerinden veya gizlilik prensiplerinden sorumlu değildir.
                    </p>

                    <h3>İletişim</h3>
                    <p>
                        İnternet sitemizde uygulanan gizlilik politikası ile ilgili; her t&uuml;rl&uuml; soru, g&ouml;r&uuml;ş ve d&uuml;ş&uuml;ncelerinizi bize iletişim sayfamızdan iletebilirsiniz.
                    </p>
                </div>
            </div>
        </main>
    );
}
