import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Paintbrush, Music, Beaker, Trophy, BookOpen, Calculator, GraduationCap, Users, Pencil, Pen } from 'lucide-react';

const clubs = [
  {
    title: 'Art Club',
    description: "Our young artists explore colors, shapes, and creativity through fun projects that develop fine motor skills.",
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-club-art'),
  },
  {
    title: 'Music Club',
    description: "Children discover rhythm, melody, and the joy of making music with simple instruments and movement.",
    icon: <Music className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-club-music'),
  },
  {
    title: 'Science Club',
    description: "Fun experiments and nature exploration spark curiosity about the world around us.",
    icon: <Beaker className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-club-science'),
  },
  {
    title: 'Sports Club',
    description: "Basic sports skills, teamwork, and healthy competition in a fun, supportive environment.",
    icon: <Trophy className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-club-sports'),
  },
];

const academics = [
    {
        title: 'Language Development',
        description: 'Phonics, vocabulary, and storytelling build strong communication foundations.',
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-academic-language'),
    },
    {
        title: 'Math Readiness',
        description: 'Counting, sorting, and pattern recognition through engaging activities.',
        icon: <Calculator className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-academic-math'),
    },
     {
        title: 'Writing Practice',
        description: 'Developing fine motor skills for writing.',
        icon: <Pen className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-academic-writing'),
    },
    {
        title: 'Learning Through Play',
        description: 'Structured play builds social and cognitive skills.',
        icon: <Users className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-academic-social'),
    },
]

const graduations = [
    {
        title: 'Graduation Day',
        description: 'A special ceremony marking the completion of kindergarten.',
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-graduation-day'),
    },
    {
        title: 'Cap Decorating',
        description: 'Students personalize their graduation caps as a creative keepsake.',
        icon: <Paintbrush className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-graduation-caps'),
    },
    {
        title: 'Class Performance',
        description: 'Students showcase what they\'ve learned through songs and poems.',
        icon: <Users className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-graduation-performance'),
    },
    {
        title: 'Family Photos',
        description: 'Special moments captured with proud parents and teachers.',
        icon: <Users className="h-8 w-8 text-primary" />,
        image: PlaceHolderImages.find((img) => img.id === 'journey-graduation-family'),
    },
]


export default function OurJourneyPage() {
  return (
    <>
      <section className="bg-card text-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Journey
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Explore the milestones and experiences that shape our students' educational path at Benaiah Academy.
            </p>
          </div>
        </div>
      </section>

      <section id="clubs">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Clubs</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">Discover the vibrant extracurricular activities that enrich our students' learning experience.</p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {clubs.map((club) => (
                <CarouselItem key={club.title} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                     {club.image && (
                        <Image
                          src={club.image.imageUrl}
                          alt={club.image.description}
                          width={600}
                          height={400}
                          className="rounded-t-lg object-cover aspect-video"
                          data-ai-hint={club.image.imageHint}
                        />
                      )}
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">{club.icon} {club.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{club.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="academic-journey" className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Academic Journey</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">Follow our students' learning path from foundational skills to kindergarten readiness.</p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {academics.map((item) => (
                <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                     {item.image && (
                        <Image
                          src={item.image.imageUrl}
                          alt={item.image.description}
                          width={600}
                          height={400}
                          className="rounded-t-lg object-cover aspect-video"
                          data-ai-hint={item.image.imageHint}
                        />
                      )}
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">{item.icon} {item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="graduations">
        <div className="container px-4 md:px-6">
           <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Graduations</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">Celebrating our students' achievements as they prepare for their next educational journey.</p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {graduations.map((item) => (
                <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                     {item.image && (
                        <Image
                          src={item.image.imageUrl}
                          alt={item.image.description}
                          width={600}
                          height={400}
                          className="rounded-t-lg object-cover aspect-video"
                          data-ai-hint={item.image.imageHint}
                        />
                      )}
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">{item.icon} {item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
