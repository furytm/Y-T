'use client'

export default function ForeshoreShowcase() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 crimson-text-bold">
            Featured Project: The Foreshore School
          </h2>
          <p className="crimson-text-regular text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A transformative sensory room design that creates an immersive, inclusive experience for students of all abilities
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '100ms' }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bl3n45ajF76qCcbjBXznYvVOh2zrqV.png"
            alt="Y&T Sensory Experience - The Foreshore School"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Multi-Sensory Design',
              description: 'Engaging visual, auditory, and tactile experiences that promote exploration and learning'
            },
            {
              title: 'Safe & Inclusive',
              description: 'Thoughtfully designed spaces that support students with diverse sensory and developmental needs'
            },
            {
              title: 'Sustainable Impact',
              description: 'Creating lasting positive change in how educational environments support student wellbeing'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 crimson-text-bold">
                {feature.title}
              </h3>
              <p className="crimson-text-regular text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
