"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2, Phone, Mail, UserCircle } from 'lucide-react';
import { getAllServices } from '@/lib/services';
import { getAllNews } from '@/lib/news';

interface Message {
    id: string;
    type: 'user' | 'bot';
    text: string;
    isLeadForm?: boolean;
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', type: 'bot', text: 'Merhaba! VA Partners asistanına hoş geldiniz. Size hizmetlerimiz veya güncel bloglarımız hakkında nasıl yardımcı olabilirim?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isLeadCaptured, setIsLeadCaptured] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const services = getAllServices();
    const news = getAllNews();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const response = generateResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: response.text,
                isLeadForm: response.triggerLead
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (input: string) => {
        const query = input.toLowerCase();

        // Lead capture keywords
        if (query.includes('teşekkür') || query.includes('sağol') || query.includes('sagol')) {
            return { text: 'Rica ederim! Size daha detaylı yardımcı olabilmemiz için iletişim bilgilerinizi bırakmak ister misiniz? Ekibimiz en kısa sürede sizinle iletişime geçecektir.', triggerLead: true };
        }

        if (query.includes('iletişim') || query.includes('telefon') || query.includes('numara') || query.includes('adres')) {
            return { text: 'Bize +90 (212) 345 67 89 numaralı telefondan veya info@vapartners.com.tr adresinden ulaşabilirsiniz. Ya da bilgilerinizi bırakın, biz sizi arayalım:', triggerLead: true };
        }

        // Search in services
        const matchedService = services.find(s =>
            query.includes(s.title.toLowerCase()) ||
            s.title.toLowerCase().split(' ').some(word => word.length > 3 && query.includes(word))
        );

        if (matchedService) {
            return { text: `${matchedService.title} konusunda uzmanız. Kısaca: ${matchedService.content.replace(/<[^>]*>?/gm, '').substring(0, 200)}... Daha fazla detay ister misiniz?`, triggerLead: false };
        }

        // Search in news/blog
        const matchedNews = news.find(n =>
            query.includes(n.title.toLowerCase()) ||
            n.title.toLowerCase().split(' ').some(word => word.length > 3 && query.includes(word))
        );

        if (matchedNews) {
            return { text: `Bununla ilgili bir blog yazımız var: "${matchedNews.title}". Özeti: ${matchedNews.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}... Sizin için bir görüşme ayarlayabilirim?`, triggerLead: true };
        }

        // Broad categories
        if (query.includes('vergi') || query.includes('mali')) return { text: 'Vergi yönetimi ve mali müşavirlik konularında geniş bir deneyime sahibiz. Hangi spesifik konuda bilgi almak istersiniz? (KDV iade, Tam Tasdik vb.)', triggerLead: false };
        if (query.includes('teşvik') || query.includes('kosgeb') || query.includes('destek')) return { text: 'KOSGEB, TÜBİTAK ve Bakanlık teşvikleri konusunda uzman danışmanlarımız var. Hangi teşviki araştırıyorsunuz?', triggerLead: false };
        if (query.includes('şirket') || query.includes('kurulum')) return { text: 'Şirket kuruluşu, M&A (birleşme ve satın alma) ve kurumsal yapılanma süreçlerinde yanınızdayız.', triggerLead: false };

        return { text: 'Anladım. VA Partners olarak mali müşavirlik, devlet teşvikleri, CFO danışmanlığı ve kurumsal finans alanlarında hizmet veriyoruz. Sizin için bir uzmanımızın sizi aramasını ister misiniz?', triggerLead: true };
    };

    const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLeadCaptured(true);
        setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: 'Bilgileriniz başarıyla alındı. Teşekkürler! Uzmanlarımız en kısa sürede sizi arayacak.' }]);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999]">
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-black p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-background" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-[#0A0A0B] border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gold/10 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black font-black italic">VA</div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">VA Asistan</h4>
                                    <span className="text-[10px] text-gold uppercase tracking-widest font-black flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Çevrimiçi
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl p-4 text-sm ${msg.type === 'user'
                                            ? 'bg-gold text-black font-bold'
                                            : 'bg-white/5 text-white/90 border border-white/10'
                                        }`}>
                                        {msg.text}

                                        {msg.isLeadForm && !isLeadCaptured && (
                                            <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3 pt-4 border-t border-white/10">
                                                <div className="relative">
                                                    <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/30" />
                                                    <input
                                                        required
                                                        placeholder="Ad Soyad"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-gold/50 transition-all outline-none"
                                                        value={leadForm.name}
                                                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/30" />
                                                    <input
                                                        required
                                                        placeholder="Telefon"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-gold/50 transition-all outline-none"
                                                        value={leadForm.phone}
                                                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                                                    />
                                                </div>
                                                <button type="submit" className="w-full bg-gold text-black text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl hover:bg-gold/90 transition-colors">
                                                    Sizi Arayalım
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <Loader2 className="animate-spin text-gold size-4" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                            <input
                                placeholder="Bir mesaj yazın..."
                                className="flex-grow bg-black/40 border border-white/10 rounded-full px-5 py-3 text-sm focus:ring-1 focus:ring-gold/50 transition-all outline-none"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                className="bg-gold text-black p-3 rounded-full hover:bg-gold/90 transition-colors"
                            >
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
