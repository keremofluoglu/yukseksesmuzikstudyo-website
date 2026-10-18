/*
 * ALL SITE TEXT IS HERE: lessons, contact info, gallery, everything.
 * Each text has a Turkish (tr) and English (en) version.
 * Write {name} anywhere to insert the teacher's name.
 *
 * PHOTOS: put photos in the images/ folder with the names written below
 * (images/ana-gorsel.jpg, images/ogretmen.jpg, images/galeri-1.jpg ...,
 * lesson cards: images/ders-piyano.jpg, ders-gitar.jpg, ders-san.jpg, ders-ukulele.jpg).
 * Until a photo exists, a brown placeholder showing the expected file name appears.
 * Names are case-sensitive online: use lowercase .jpg, not .JPG.
 * Keep the quotes and commas intact; the last item in a list has no comma.
 */
const SITE_CONTENT = {
  "site": {
    "name": "Yüksek Ses Müzik Stüdyo",
    "teacherName": "Büşra Ofluoğlu",
    "phone": "+905000000000",
    "phoneDisplay": "+90 500 000 00 00",
    "whatsapp": "905000000000",
    "email": "ornek@email.com",
    "instagram": "@kerem.ofluoglu",
    "instagramUrl": "https://instagram.com/kerem.ofluoglu",
    "youtube": "YouTube'da izle",
    "youtubeUrl": "https://www.youtube.com/watch?v=OyDyOweu-PA"
  },

  "images": {
    "hero": {
      "src": "images/ana-gorsel.jpg",
      "alt": { "tr": "Ders sırasında piyano başında", "en": "At the piano during a lesson" }
    },
    "teacher": {
      "src": "images/ogretmen.jpg",
      "alt": { "tr": "Öğretmen portresi", "en": "Portrait of the teacher" }
    }
  },

  "meta": {
    "title": {
      "tr": "{name} | Bornova, İzmir Piyano, Gitar, Şan ve Ukulele Dersleri",
      "en": "{name} | Piano, Guitar, Voice & Ukulele Lessons in Bornova, İzmir"
    },
    "description": {
      "tr": "İzmir Bornova'da birebir piyano, gitar, şan ve ukulele dersleri. Her yaşa ve seviyeye uygun, yüz yüze veya Türkiye geneli online. Ücretsiz deneme dersi.",
      "en": "Private piano, guitar, voice and ukulele lessons in Bornova, İzmir. For all ages and levels, in person or online across Türkiye. Free trial lesson."
    }
  },

  "whatsappMessage": {
    "tr": "Merhaba, dersler hakkında bilgi almak istiyorum.",
    "en": "Hello, I'd like to get information about lessons."
  },

  "nav": {
    "about": { "tr": "Hakkımda", "en": "About" },
    "video": { "tr": "Tanıtım", "en": "Video" },
    "lessons": { "tr": "Dersler", "en": "Lessons" },
    "gallery": { "tr": "Galeri", "en": "Gallery" },
    "contact": { "tr": "İletişim", "en": "Contact" }
  },

  "hero": {
    "eyebrow": { "tr": "Piyano · Gitar · Şan · Ukulele", "en": "Piano · Guitar · Voice · Ukulele" },
    "title": { "tr": "Müziği keşfetmenin en keyifli yolu", "en": "The most enjoyable way to discover music" },
    "lead": {
      "tr": "İzmir Bornova'da her yaşa ve seviyeye özel, sabırlı ve keyifli birebir müzik dersleri. Stüdyoda yüz yüze veya Türkiye'nin her yerinden online.",
      "en": "Patient, fun one-on-one music lessons for every age and level in Bornova, İzmir. In person at the studio or online from anywhere in Türkiye."
    },
    "cta": { "tr": "Ücretsiz Deneme Dersi", "en": "Free Trial Lesson" },
    "cta2": { "tr": "Dersleri İncele", "en": "See Lessons" }
  },

  "about": {
    "eyebrow": { "tr": "Hakkımda", "en": "About Me" },
    "title": { "tr": "Merhaba, ben {teacher}", "en": "Hi, I'm {teacher}" },
    "paragraphs": [
      {
        "tr": "15 yılı aşkın süredir müzikle uğraşıyor, 10 yıldır her yaştan öğrenciye enstrüman ve şan dersi veriyorum. Amacım, öğrencilerimin müziği sevmesini ve kendi hızlarında ilerlemesini sağlamak.",
        "en": "I have been making music for over 15 years and teaching instrument and voice lessons to students of all ages for 10. My goal is to help my students love music and progress at their own pace."
      },
      {
        "tr": "Derslerimde sağlam teknik ile öğrencinin sevdiği parçaları bir araya getiriyorum. Sınavlara, konservatuvar yeteneğine veya sadece keyif için çalanlara uygun program hazırlıyorum.",
        "en": "My lessons combine solid technique with the pieces each student loves. I prepare programs for exams, conservatory auditions, or simply playing for fun."
      }
    ],
    "highlights": [
      {
        "title": { "tr": "Eğitim", "en": "Education" },
        "text": { "tr": "X Üniversitesi Devlet Konservatuvarı", "en": "X University State Conservatory" }
      },
      {
        "title": { "tr": "Deneyim", "en": "Experience" },
        "text": { "tr": "10+ yıl, 150+ öğrenci", "en": "10+ years, 150+ students" }
      },
      {
        "title": { "tr": "Öğrenciler", "en": "Students" },
        "text": { "tr": "6 yaştan yetişkinlere, başlangıçtan ileri seviyeye", "en": "From age 6 to adults, beginner to advanced" }
      }
    ]
  },

  "intro": {
    "eyebrow": { "tr": "Tanıtım Videosu", "en": "Intro Video" },
    "title": { "tr": "Stüdyomuzu yakından tanıyın", "en": "Get to know our studio" },
    "lead": {
      "tr": "Derslerin nasıl geçtiğini izleyin. Daha fazlası için YouTube kanalımıza ve Instagram sayfamıza göz atın.",
      "en": "See what a lesson looks like. Find more on our YouTube channel and Instagram page."
    },
    // Paste the YouTube video link here, e.g. "https://www.youtube.com/watch?v=abc123XYZ"
    "video": "https://www.youtube.com/watch?v=OyDyOweu-PA",
    "placeholder": { "tr": "Tanıtım videosu yakında burada", "en": "Intro video coming soon" },
    "youtubeButton": { "tr": "YouTube'da İzle", "en": "Watch on YouTube" },
    "instagramButton": { "tr": "Instagram'da Takip Et", "en": "Follow on Instagram" }
  },

  "lessons": {
    "eyebrow": { "tr": "Dersler", "en": "Lessons" },
    "title": { "tr": "Verdiğim dersler", "en": "Lessons I teach" },
    "lead": {
      "tr": "Tüm dersler birebir yapılır. İlk ders ücretsiz tanışma dersidir.",
      "en": "All lessons are one-on-one. The first lesson is a free introductory lesson."
    },
    // Card design: "ust" = photo on top of the card, "arka" = blurred photo behind the text
    "cardStyle": "ust",
    "onlineLabel": { "tr": "Online", "en": "Online" },
    "inPersonLabel": { "tr": "Yüz yüze", "en": "In person" },

    "formats": [
      {
        "title": { "tr": "Yüz yüze", "en": "In person" },
        "text": {
          "tr": "Bornova'daki stüdyoda veya evinizde birebir ders.",
          "en": "One-on-one lessons at the Bornova studio or at your home."
        }
      },
      {
        "title": { "tr": "Online", "en": "Online" },
        "text": {
          "tr": "Görüntülü görüşmeyle, Türkiye'nin her yerinden.",
          "en": "Over video call, from anywhere."
        }
      }
    ],

    "items": [
      {
        "icon": "🎹",
        "image": "images/ders-piyano.jpg",
        "title": { "tr": "Piyano", "en": "Piano" },
        "description": {
          "tr": "Nota okuma, teknik ve sevdiğiniz parçalar. Klasikten popa geniş repertuvar.",
          "en": "Reading music, technique and the pieces you love. Wide repertoire from classical to pop."
        },
        "levels": { "tr": "Başlangıç · Orta · İleri", "en": "Beginner · Intermediate · Advanced" },
        "online": true,
        "inPerson": true
      },
      {
        "icon": "🎸",
        "image": "images/ders-gitar.jpg",
        "title": { "tr": "Gitar", "en": "Guitar" },
        "description": {
          "tr": "Akor, ritim ve solo teknikleri. Klasik veya akustik gitar.",
          "en": "Chords, rhythm and lead techniques. Classical or acoustic guitar."
        },
        "levels": { "tr": "Başlangıç · Orta · İleri", "en": "Beginner · Intermediate · Advanced" },
        "online": true,
        "inPerson": true
      },
      {
        "icon": "🎤",
        "image": "images/ders-san.jpg",
        "title": { "tr": "Şan", "en": "Voice / Singing" },
        "description": {
          "tr": "Nefes, ses açma, diksiyon ve doğru ses kullanımı. Konservatuvar sınavlarına hazırlık.",
          "en": "Breathing, vocal warm-ups, diction and healthy voice use. Conservatory audition prep."
        },
        "levels": { "tr": "Her seviye", "en": "All levels" },
        "online": true,
        "inPerson": true
      },
      {
        "icon": "🎶",
        "image": "images/ders-ukulele.jpg",
        "title": { "tr": "Ukulele", "en": "Ukulele" },
        "description": {
          "tr": "Öğrenmesi en kolay ve keyifli enstrümanlardan biri. Kısa sürede sevdiğiniz şarkılara eşlik edin.",
          "en": "One of the easiest and most fun instruments to learn. Play along with your favourite songs in no time."
        },
        "levels": { "tr": "Başlangıç · Orta", "en": "Beginner · Intermediate" },
        "online": true,
        "inPerson": true
      }
    ],

    "priceTitle": { "tr": "Fiyat bilgisi için arayın veya yazın", "en": "Call or message for prices" },
    "priceText": {
      "tr": "Ders ücretleri ders türüne, süresine ve paketlere göre değişir. Size uygun seçeneği birlikte belirleyelim.",
      "en": "Fees depend on the lesson type, length and package. Let's find the option that suits you."
    },
    "whatsappLabel": { "tr": "WhatsApp'tan Yaz", "en": "Message on WhatsApp" }
  },

  "gallery": {
    "eyebrow": { "tr": "Galeri", "en": "Gallery" },
    "title": { "tr": "Derslerden ve konserlerden", "en": "From lessons and concerts" },
    "images": [
      { "src": "images/galeri-1.jpg", "alt": { "tr": "Galeri fotoğrafı 1", "en": "Gallery photo 1" } },
      { "src": "images/galeri-2.jpg", "alt": { "tr": "Galeri fotoğrafı 2", "en": "Gallery photo 2" } },
      { "src": "images/galeri-3.jpg", "alt": { "tr": "Galeri fotoğrafı 3", "en": "Gallery photo 3" } },
      { "src": "images/galeri-4.jpg", "alt": { "tr": "Galeri fotoğrafı 4", "en": "Gallery photo 4" } },
      { "src": "images/galeri-5.jpg", "alt": { "tr": "Galeri fotoğrafı 5", "en": "Gallery photo 5" } },
      { "src": "images/galeri-6.jpg", "alt": { "tr": "Galeri fotoğrafı 6", "en": "Gallery photo 6" } }
    ],
    "videos": []
  },

  "contact": {
    "eyebrow": { "tr": "İletişim", "en": "Contact" },
    "title": { "tr": "Deneme dersinizi planlayalım", "en": "Let's plan your trial lesson" },
    "lead": {
      "tr": "En hızlı yanıt için WhatsApp'tan yazabilirsiniz. Uygun gün ve saatleri birlikte belirleyelim.",
      "en": "For the fastest reply, message me on WhatsApp. We'll find a day and time that works for you."
    },
    "whatsapp": { "tr": "WhatsApp'tan Yaz", "en": "Message on WhatsApp" },
    "phone": { "tr": "Telefon", "en": "Phone" },
    "email": { "tr": "E-posta", "en": "Email" },
    "youtube": { "tr": "YouTube", "en": "YouTube" },
    "location": { "tr": "Konum", "en": "Location" },
    "locationText": {
      "tr": "Bornova, İzmir · Online dersler tüm Türkiye'ye",
      "en": "Bornova, İzmir · Online lessons across Türkiye"
    }
  },

  "footer": {
    "rights": { "tr": "Tüm hakları saklıdır.", "en": "All rights reserved." },
    "top": { "tr": "Başa dön ↑", "en": "Back to top ↑" }
  }
};
