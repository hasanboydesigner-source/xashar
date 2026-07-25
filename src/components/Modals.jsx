import React from 'react';
import { Smartphone, X } from 'lucide-react';
import qrCodeImg from '../qrcode.gif';

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
              <img src={qrCodeImg} alt="HASHARCHI QR Code" className="modal-qr-img" />
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
