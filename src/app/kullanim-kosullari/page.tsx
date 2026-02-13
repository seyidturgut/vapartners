import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | VA Partners',
    description: 'VA Partners web sitesi kullanım koşulları ve yasal şartlar.',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs className="mb-6" />
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
                    Kullanım Koşulları
                </h1>
                <div className="h-1 w-24 bg-gold rounded-full mb-12" />

                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground">
                    <h3>1. Giriş</h3>
                    <p>
                        Bu hizmet şartları, VA Partners (bundan sonra &quot;Site&quot; olarak anılacaktır) ve kullanıcıları arasındaki yasal anlaşmayı oluşturur. Siteye erişim ve kullanım, bu şartlar ve koşullara bağlıdır. Siteyi kullanarak, bu şartları kabul etmiş olursunuz.
                    </p>

                    <h3>2. Site Kullanımı</h3>
                    <p>
                        Site, yalnızca yasal ama&ccedil;larla kullanılabilir. Herhangi bir yasa dışı, zararlı veya etik olmayan faaliyet ger&ccedil;ekleştirilmesi yasaktır. Siteye erişim hakkı, tamamen VA Partners'in takdirine bağlı olarak sağlanmaktadır.
                    </p>

                    <h3>3. Hesap Oluşumu</h3>
                    <p>
                        Siteyi kullanmak i&ccedil;in bir hesap oluşturmanız gerekebilir. Hesap oluştururken verdiğiniz bilgilerin doğru, g&uuml;ncel ve eksiksiz olmasını sağlamak sizlerin sorumluluğundadır.
                    </p>

                    <h3>4. İ&ccedil;erik ve Telif Hakları</h3>
                    <p>
                        Site &uuml;zerinden paylaşılan i&ccedil;erikler, VA Partners&rsquo;in m&uuml;lkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. Sadece izin verilen kullanım haklarına sahip olursunuz.
                    </p>

                    <h3>5. Kullanıcı Davranışları</h3>
                    <p>
                        Kullanıcılar, Siteyi kullanırken diğer kullanıcıların haklarına saygı g&ouml;stermeli ve Siteyi zarar vermemek adına etik bir şekilde kullanmalıdır.
                    </p>

                    <h3>6. Sorumluluk Reddi</h3>
                    <p>
                        VA Partners, Siteyi kullanımınızdan dolayı oluşan herhangi bir kayıp, zarar veya hasar i&ccedil;in sorumlu tutulamaz.
                    </p>

                    <h3>7. Değişiklikler</h3>
                    <p>
                        VA Partners, bu kullanım şartlarını istediği zaman değiştirme hakkına sahiptir. Şartlarındaki değişiklikler, Site &uuml;zerinde yayımlandığı tarihten itibaren ge&ccedil;erlidir.
                    </p>

                    <h3>8. Yasal Y&uuml;k&uuml;ml&uuml;l&uuml;kler</h3>
                    <p>
                        Bu kullanım şartları, ge&ccedil;erli yasalara uygun olarak y&uuml;r&uuml;t&uuml;l&uuml;r. Herhangi bir ihtilaf durumunda, VA Partners&rsquo;in bulunduğu yargı b&ouml;lgesindeki yasal d&uuml;zenlemeler uygulanır.
                    </p>

                    <h3>9. İletişim</h3>
                    <p>
                        Bu kullanım şartları ile ilgili sorularınız i&ccedil;in iletisim@vapartners.com adresinden bizimle iletişime ge&ccedil;ebilirsiniz.
                    </p>
                </div>
            </div>
        </main>
    );
}
