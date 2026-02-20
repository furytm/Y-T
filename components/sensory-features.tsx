'use client'

export default function SensoryFeatures() {
  const features = [
    {
      title: 'Interactive Play',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXZt9zYmKymDjCab6GUGNtObgBT7f3.png',
      description: 'Multi-sensory spaces with LEGO walls, colorful floors, and foam pits for active engagement'
    },
    {
      title: 'Ambient Lighting',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nWhJkMVBFWp7yfqB5TxK63FFJtnYhD.png',
      description: 'Advanced LED systems creating various moods and sensory environments'
    },
    {
      title: 'Tactile Exploration',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jc8i4PQW5uC4hzG7wceU8Wg8xmUYCH.png',
      description: 'Textured surfaces, padding, and interactive boards for sensory discovery'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 crimson-text-bold">
            Key Features of Sensory Rooms
          </h2>
          <p className="crimson-text-regular text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore the essential design elements that create immersive sensory experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-80 rounded-full overflow-hidden mb-6 mx-auto w-80 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-serif font-bold text-foreground crimson-text-bold">
                  {feature.title}
                </h3>
                <p className="crimson-text-regular text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
