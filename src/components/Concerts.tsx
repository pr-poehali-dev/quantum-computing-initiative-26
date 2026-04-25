interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Key Releases",
    albumHeading: "Getto Garden",
    albumYear: "2022",
    albumLabel: "Album",
    tracklist: "Tracklist",
    albumDesc: "A debut album that became a manifesto of a generation. The record weaves raw street life in Kazan with floral imagery — concrete gardens where people survive and grow. Dark, honest, and deeply melodic.",
    learnMore: "Listen",
  },
  de: {
    heading: "Wichtige Releases",
    albumHeading: "Getto Garden",
    albumYear: "2022",
    albumLabel: "Album",
    tracklist: "Tracklist",
    albumDesc: "Ein Debütalbum, das zum Manifest einer Generation wurde. Die Platte verwebt das raue Straßenleben in Kasan mit floralen Bildern — Betongartenanlagen, in denen Menschen überleben und wachsen. Dunkel, ehrlich und tief melodisch.",
    learnMore: "Anhören",
  },
  ru: {
    heading: "Знаковые релизы",
    albumHeading: "Getto Garden",
    albumYear: "2022",
    albumLabel: "Альбом",
    tracklist: "Трек-лист",
    albumDesc: "Дебютный альбом, ставший манифестом целого поколения. Пластинка переплетает суровую уличную жизнь Казани с образами растений и садов — бетонные сады, в которых люди выживают и расцветают вопреки всему. Тёмно, честно и глубоко мелодично.",
    learnMore: "Слушать",
  },
}

const releases = {
  en: [
    { year: "2019", title: "Медленно (feat. Скриптонит)", type: "Single" },
    { year: "2020", title: "Мотылёк", type: "Single" },
    { year: "2021", title: "Мне не нужно", type: "Single" },
    { year: "2021", title: "Эдем", type: "EP" },
    { year: "2022", title: "Getto Garden", type: "Album" },
    { year: "2023", title: "Пыль (feat. Boulevard Depo)", type: "Single" },
    { year: "2024", title: "Голос", type: "Single" },
  ],
  de: [
    { year: "2019", title: "Медленно (feat. Скриптонит)", type: "Single" },
    { year: "2020", title: "Мотылёк", type: "Single" },
    { year: "2021", title: "Мне не нужно", type: "Single" },
    { year: "2021", title: "Эдем", type: "EP" },
    { year: "2022", title: "Getto Garden", type: "Album" },
    { year: "2023", title: "Пыль (feat. Boulevard Depo)", type: "Single" },
    { year: "2024", title: "Голос", type: "Single" },
  ],
  ru: [
    { year: "2019", title: "Медленно (feat. Скриптонит)", type: "Сингл" },
    { year: "2020", title: "Мотылёк", type: "Сингл" },
    { year: "2021", title: "Мне не нужно", type: "Сингл" },
    { year: "2021", title: "Эдем", type: "EP" },
    { year: "2022", title: "Getto Garden", type: "Альбом" },
    { year: "2023", title: "Пыль (feat. Boulevard Depo)", type: "Сингл" },
    { year: "2024", title: "Голос", type: "Сингл" },
  ],
}

const gettoGardenTracks = [
  { num: "01", title: "Интро" },
  { num: "02", title: "Getto Garden" },
  { num: "03", title: "Розы" },
  { num: "04", title: "Мне не нужно" },
  { num: "05", title: "Цветы" },
  { num: "06", title: "Малиновый закат" },
  { num: "07", title: "Пепел" },
  { num: "08", title: "Мутные воды" },
  { num: "09", title: "Небо" },
  { num: "10", title: "Золото" },
  { num: "11", title: "Сны" },
  { num: "12", title: "Аутро" },
]

const albumCoverUrl = "https://cdn.poehali.dev/projects/e9707ece-5d5f-4949-ad48-f33630ca0c36/files/b816178e-db06-488d-aa7c-a654deb2eb97.jpg"

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const releaseList = releases[language]

  return (
    <section id="concerts" className="py-32 md:py-48" style={{ background: "linear-gradient(180deg, var(--cream) 0%, #0a1509 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Releases list */}
          <div className="space-y-6">
            {releaseList.map((release, idx) => (
              <div key={idx} className="pb-6 border-b border-taupe/20 last:border-b-0">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div>
                    <p className="text-charcoal font-mono text-sm">{release.year}</p>
                    <small className="text-taupe uppercase tracking-widest text-xs">{release.type}</small>
                  </div>
                  <div className="col-span-2">
                    <p className="text-charcoal font-medium">{release.title}</p>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://music.yandex.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold/60 transition-colors text-sm font-medium"
                    >
                      {t.learnMore} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Getto Garden album block */}
          <div className="border border-taupe/20 p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="flex gap-6 mb-6">
              <img
                src={albumCoverUrl}
                alt="Getto Garden"
                className="w-28 h-28 object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <small className="text-taupe uppercase tracking-widest text-xs mb-1">{t.albumLabel} · {t.albumYear}</small>
                <h3 className="text-charcoal mb-1">{t.albumHeading}</h3>
                <small className="text-taupe">MAYOT</small>
              </div>
            </div>

            <p className="text-charcoal/60 text-sm leading-relaxed mb-8 italic">{t.albumDesc}</p>

            <p className="text-taupe text-xs uppercase tracking-widest mb-4">{t.tracklist}</p>
            <div className="space-y-0">
              {gettoGardenTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 py-2.5 border-b border-taupe/10 last:border-b-0 group hover:border-gold/30 transition-colors"
                >
                  <span className="text-taupe/50 font-mono text-xs w-6 flex-shrink-0 group-hover:text-gold transition-colors">{track.num}</span>
                  <span className="text-charcoal/80 text-sm group-hover:text-charcoal transition-colors">{track.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
