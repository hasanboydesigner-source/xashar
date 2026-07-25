import React from 'react';
import { Smartphone, X } from 'lucide-react';

export default function Modals({
  t,
  downloadOpen,
  setDownloadOpen,
  privacyOpen,
  setPrivacyOpen,
  termsOpen,
  setTermsOpen
}) {
  return (
    <>
      {/* Download QR Center Modal */}
      {downloadOpen && (
        <div className="modal-backdrop" onClick={() => setDownloadOpen(false)}>
          <div className="modal-card modal-center-glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setDownloadOpen(false)}>
              <X size={20} color="#ffffff" />
            </button>

            <div className="modal-icon-badge">
              <Smartphone size={28} color="#2F6BF0" />
            </div>

            <h3 className="modal-title-text">
              {t.modalDownloadTitle || 'HASHARCHI Ilovasini yuklab oling'}
            </h3>
            
            <p className="modal-desc-text">
              {t.modalDownloadDesc || 'Telefoningiz kamerasi orqali QR-kodni skanerlang va ilovani darhol yuklab oling.'}
            </p>

            <div className="modal-qr-wrapper">
              <svg viewBox="0 0 200 200" width="160" height="160">
                <rect width="200" height="200" fill="#ffffff" rx="12"/>
                <rect x="15" y="15" width="50" height="50" fill="#1251cc" rx="4"/>
                <rect x="25" y="25" width="30" height="30" fill="#ffffff" rx="2"/>
                <rect x="33" y="33" width="14" height="14" fill="#ff6b00" rx="1"/>

                <rect x="135" y="15" width="50" height="50" fill="#1251cc" rx="4"/>
                <rect x="145" y="25" width="30" height="30" fill="#ffffff" rx="2"/>
                <rect x="153" y="33" width="14" height="14" fill="#ff6b00" rx="1"/>

                <rect x="15" y="135" width="50" height="50" fill="#1251cc" rx="4"/>
                <rect x="25" y="145" width="30" height="30" fill="#ffffff" rx="2"/>
                <rect x="33" y="153" width="14" height="14" fill="#ff6b00" rx="1"/>

                <rect x="80" y="20" width="12" height="12" fill="#1251cc"/>
                <rect x="100" y="35" width="14" height="12" fill="#ff6b00"/>
                <rect x="75" y="55" width="18" height="12" fill="#1251cc"/>
                <rect x="20" y="80" width="12" height="14" fill="#1251cc"/>
                <rect x="45" y="90" width="15" height="15" fill="#ff6b00"/>
                <rect x="75" y="85" width="25" height="12" fill="#1251cc"/>
                <rect x="110" y="75" width="14" height="20" fill="#1251cc"/>
                <rect x="140" y="80" width="20" height="12" fill="#ff6b00"/>
                <rect x="170" y="95" width="15" height="15" fill="#1251cc"/>

                <rect x="80" y="115" width="20" height="15" fill="#1251cc"/>
                <rect x="110" y="120" width="15" height="25" fill="#ff6b00"/>
                <rect x="145" y="110" width="25" height="12" fill="#1251cc"/>
                <rect x="80" y="145" width="15" height="35" fill="#ff6b00"/>
                <rect x="105" y="155" width="30" height="14" fill="#1251cc"/>
                <rect x="145" y="145" width="20" height="25" fill="#1251cc"/>
                <rect x="170" y="170" width="15" height="15" fill="#ff6b00"/>
              </svg>
            </div>

            <div className="modal-store-btns">
              <a
                href="https://play.google.com/store/apps/details?id=uz.developer.hasharchi"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-store-badge-link"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="38" />
              </a>
              <a
                href="https://apps.apple.com/uz/app/hasharchi/id6755495405"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-store-badge-link"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" height="38" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="modal-backdrop" onClick={() => setPrivacyOpen(false)}>
          <div className="modal-card modal-large-glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPrivacyOpen(false)}>
              <X size={20} color="#ffffff" />
            </button>
            <h3 className="modal-title-text">{t.privacyModalTitle}</h3>
            <div className="modal-scroll-body">
              <p><strong>HASHARCHI</strong> platformasi foydalanuvchilarning shaxsiy ma'lumotlari xavfsizligini ta'minlashni o'zining eng muhim ustuvor vazifasi deb biladi.</p>
              <h4>1. Shaxsiy Ma'lumotlarni Yig'ish</h4>
              <p>Biz ilovada ro'yxatdan o'tishda va xizmatlardan foydalanishda kiritilgan ism, telefon raqami, joylashuv va profil ma'lumotlarini to'playmiz.</p>
              <h4>2. Ma'lumotlardan Foydalanish</h4>
              <p>Yig'ilgan ma'lumotlar faqat mijoz va ishchi o'rtasida aloqani o'rnatish, xizmat ko'rsatish sifatini oshirish va xavfsizlikni ta'minlash uchun ishlatiladi.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {termsOpen && (
        <div className="modal-backdrop" onClick={() => setTermsOpen(false)}>
          <div className="modal-card modal-large-glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setTermsOpen(false)}>
              <X size={20} color="#ffffff" />
            </button>
            <h3 className="modal-title-text">{t.termsModalTitle}</h3>
            <div className="modal-scroll-body">
              <p><strong>HASHARCHI</strong> mobil ilovasidan foydalanish orqali siz ushbu shartlarga to'liq rozilik bildirasiz.</p>
              <h4>1. Platforma Maqsadi</h4>
              <p>HASHARCHI — kunlik ishchilar va ish beruvchilar o'rtasida vositachisiz axborot almashtirish platformasidir. Veb-sayt orqali buyurtma berish imkoniyati mavjud emas, barcha amallar faqat mobil ilovada qabul qilinadi.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
