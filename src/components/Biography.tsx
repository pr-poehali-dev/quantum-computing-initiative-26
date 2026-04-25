interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "Artyom Gennadyevich Nikitin, known as MAYOT, was born on May 3, 2000, in Kazan, Russia. His artist name comes from a childhood nickname — a shortened version of his surname. Growing up in the working-class neighborhoods of Kazan, he absorbed the sounds of the streets that would later define his music.",
      "He started making music at the age of 14, recording his first tracks in home studios. In 2018–2019, his tracks began spreading across VKontakte and SoundCloud, quickly building a loyal following in the Russian underground rap scene.",
      "A breakthrough came with his collaboration with Скриптонит on «Медленно», which brought him to a wide national audience. MAYOT became known for raw emotional delivery, melodic hooks, and deeply personal storytelling — a voice speaking directly from the ghettos of Kazan.",
      "His discography grew rapidly with key features alongside Boulevard Depo, Flesh, Yanix, and other pillars of the Russian rap scene. His signature blends introspective lyrics, trap production, and a unique Tatar street poetry sensibility.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "Artjom Gennadjewitsch Nikitin, bekannt als MAYOT, wurde am 3. Mai 2000 in Kasan geboren. Sein Künstlername stammt von einem Kindheitsspitznamen — einer Kurzform seines Nachnamens. Er wuchs in den Arbeitervierteln Kasans auf.",
      "Er begann im Alter von 14 Jahren Musik zu machen. In den Jahren 2018–2019 begannen seine Tracks sich über VKontakte und SoundCloud zu verbreiten und brachten ihm schnell eine treue Fangemeinde in der russischen Underground-Rap-Szene.",
      "Ein Durchbruch gelang mit der Zusammenarbeit mit Скриптонит auf «Медленно». MAYOT wurde für seine rohe emotionale Darbietung und zutiefst persönliche Geschichtenerzählung bekannt — eine Stimme direkt aus den Kasaner Ghettos.",
      "Seine Diskografie wuchs rasch durch Kollaborationen mit Boulevard Depo, Flesh, Yanix und anderen Schlüsselfiguren der russischen Rap-Szene. Sein Stil verbindet introspektive Texte, Trap-Beats und tatarische Straßenpoesie.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "Артём Геннадьевич Никитин, известный как MAYOT, родился 3 мая 2000 года в Казани. Псевдоним возник из детского прозвища — сокращения от фамилии. Вырастая в рабочих кварталах Казани, он впитывал звуки улиц, которые впоследствии стали основой его музыки.",
      "Начал заниматься музыкой в 14 лет, записывая первые треки дома. В 2018–2019 годах его треки начали распространяться во ВКонтакте и SoundCloud, быстро собрав преданную аудиторию в российском андеграунде.",
      "Переломным стало сотрудничество со Скриптонитом на треке «Медленно», который вывел его на широкую аудиторию. MAYOT стал известен сырой эмоциональной подачей и откровенными личными текстами — голосом, говорящим прямо с казанских улиц.",
      "Дискография быстро расширялась: совместные проекты с Boulevard Depo, Flesh, Yanix и другими ключевыми фигурами сцены. Фирменный стиль MAYOT — интроспективные тексты, трэп-биты и самобытная татарская уличная поэтика.",
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