interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "Mayot (Marat Khairullin) is a Russian rapper and singer from Kazan, born on May 3, 2000. His artistic pseudonym derives from a childhood nickname. He began his music career in his early teens, inspired by the atmosphere of his hometown streets.",
      "His debut tracks gained attention in the underground scene, and after releasing his first full-length projects, he quickly became one of the most talked-about figures in the new wave of Russian rap. His style is a blend of melodic flows, street lyricism, and emotional vulnerability.",
      "Mayot collaborated with major Russian artists including Скриптонит, Boulevard Depo, and Flesh, cementing his place in the contemporary rap landscape. His music is distinguished by heartfelt, personal lyrics and a unique sound that mixes elements of trap, melodic rap, and post-Soviet street poetry.",
      "Among his landmark releases are the albums «Getto Garden» and «Эдем», which received widespread acclaim and millions of streams across all major platforms.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "Mayot (Marat Khairullin) ist ein russischer Rapper und Sänger aus Kasan, geboren am 3. Mai 2000. Sein Künstlername stammt von einem Kindheitsspitznamen. Er begann seine Musikkarriere in seiner frühen Jugend, inspiriert von der Atmosphäre der Straßen seiner Heimatstadt.",
      "Seine Debüttracks erregten Aufmerksamkeit in der Underground-Szene, und nach der Veröffentlichung seiner ersten Vollprojekte wurde er schnell zu einer der meistdiskutierten Figuren in der neuen Welle des russischen Raps.",
      "Mayot arbeitete mit großen russischen Künstlern zusammen, darunter Скриптонит, Boulevard Depo und Flesh. Seine Musik zeichnet sich durch aufrichtige, persönliche Texte und einen einzigartigen Sound aus, der Elemente von Trap, melodischem Rap und postsowjetischer Straßenpoesie verbindet.",
      "Zu seinen wichtigsten Veröffentlichungen gehören die Alben «Getto Garden» und «Эдем», die breite Anerkennung und Millionen von Streams auf allen großen Plattformen erhielten.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "Майот (Марат Хайруллин) — российский рэпер и певец из Казани, родился 3 мая 2000 года. Свой творческий псевдоним он получил от детского прозвища. Музыкальную карьеру начал в раннем подростковом возрасте, вдохновлённый атмосферой улиц родного города.",
      "Его дебютные треки привлекли внимание в андеграунд-сцене, а после выхода первых полноформатных проектов он быстро стал одним из самых обсуждаемых исполнителей новой волны российского рэпа. Его стиль — сплав мелодичных флоу, уличной лирики и эмоциональной открытости.",
      "Майот сотрудничал с крупнейшими российскими артистами — Скриптонитом, Boulevard Depo, Flesh и другими, — закрепив своё место на современной рэп-сцене. Его музыка отличается личными текстами от сердца и уникальным звучанием, объединяющим элементы трэпа, мелодичного рэпа и постсоветской уличной поэзии.",
      "Среди ключевых релизов — альбомы «Getto Garden» и «Эдем», получившие широкое признание и десятки миллионов прослушиваний на всех крупных платформах.",
    ],
  },
}

const photoUrl = "https://cdn.poehali.dev/projects/e9707ece-5d5f-4949-ad48-f33630ca0c36/files/a08f9586-7b85-4ae4-aadd-e987e4491b51.jpg"

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-charcoal mb-12 text-pretty">{t.heading}</h2>
            <div className="space-y-6">
              {t.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={photoUrl}
                alt="Mayot"
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
