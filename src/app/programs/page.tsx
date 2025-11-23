import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Bus, Leaf, Music, Wind, Puzzle, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const funActivities = [
    { title: 'Playful Learning', description: 'Joyful activities that make learning an adventure.' },
    { title: 'Creative Expression', description: 'Encouraging imagination through artistic play.' },
    { title: 'Social Development', description: 'Building friendships through shared experiences.' },
    { title: 'Physical Growth', description: 'Active play for healthy bodies and minds.' },
]

export default function ProgramsPage() {
  const programImages = PlaceHolderImages.programs_page || [];
  const pageHeaderImage = programImages.find((img) => img.id === 'header');
  const quoteImage = programImages.find((img) => img.id === 'quote');

  const activities = [
    {
      title: 'Arts and Crafts',
      description: 'Face painting at Benaiah Academy adds a splash of color and joy, sparking creativity and fun in every child\'s experience.',
      icon: <Paintbrush className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-arts'),
    },
    {
      title: 'Field Trips',
      description: 'Our regular visits to the National Orphanage help instill empathy, kindness, and a strong sense of social responsibility in our learners.',
      icon: <Bus className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-trips'),
    },
    {
      title: 'Connecting with Nature',
      description: 'Our frequent outdoor activities immerse students in the beauty of the natural world, fostering curiosity, environmental awareness, and a lifelong love for nature.',
      icon: <Leaf className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-nature'),
    },
    {
      title: 'Celebrating Through Music',
      description: 'Our regular music festivals bring students together to express creativity, build confidence, and enjoy the joy of rhythm and melody in a vibrant community setting.',
      icon: <Music className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-music'),
    },
    {
      title: 'The Playground',
      description: 'Our students regularly enjoy the playground, a vibrant space where they play, explore, and develop their physical skills while building lasting friendships.',
      icon: <Wind className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-playground'),
    },
    {
      title: 'Drama Festivals',
      description: 'We frequently participate in drama festivals, giving our students the chance to showcase their creativity, build confidence, and express themselves through captivating performances.',
      icon: <Users className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-drama'),
    },
     {
      title: 'Skating',
      description: 'Skating sessions are a regular part of our activities, helping students develop balance, coordination, and have fun while staying active.',
      icon: <Award className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-skating'),
    },
     {
      title: 'Just Chilling',
      description: 'Our students often enjoy relaxed moments together, unwinding and bonding in a calm and friendly environment that nurtures friendship and well-being.',
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-chilling'),
    },
  ];

  return (
    <>
      <section className="bg-card text-center relative">
        {pageHeaderImage && (
          <Image
            src={pageHeaderImage.imageUrl}
            alt={pageHeaderImage.description}
            fill
            className="object-cover blur-sm"
            data-ai-hint={pageHeaderImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl space-y-2 py-12 md:py-24 lg:py-32">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground">
              Our Programs
            </h1>
            <p className="text-primary-foreground/90 md:text-xl/relaxed">
             Our Fun Programs are thoughtfully designed to spark imagination, nurture social development, and promote active learning through engaging, age-appropriate activities—ensuring every kindergarten child experiences joy, discovery, and growth in a safe and stimulating environment.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {activities.map((activity) => (
              <Card key={activity.title} className="flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
                {activity.image && (
                  <Image
                    src={activity.image.imageUrl}
                    alt={activity.image.description}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                    data-ai-hint={activity.image.imageHint}
                  />
                )}
                <CardHeader className="flex flex-row items-center gap-4">
                  {activity.icon}
                  <CardTitle>{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Having Fun is Growing</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {funActivities.map((fun) => (
              <div key={fun.title} className="text-center">
                <h3 className="font-headline text-xl font-bold">{fun.title}</h3>
                <p className="mt-2 text-muted-foreground">{fun.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild className="transition-transform hover:scale-105">
              <Link href="/contact">Enroll Today <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

       <section className="relative text-white">
         {quoteImage && (
          <Image
            src={quoteImage.imageUrl}
            alt={quoteImage.description}
            fill
            className="object-cover blur-sm"
            data-ai-hint={quoteImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container px-4 md:px-6 relative text-white">
          <div className="mx-auto max-w-3xl text-center space-y-4 py-12 md:py-24 lg:py-32">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Let Them Breathe the World</h2>
            <p className="text-lg">
              The great outdoors is more than just fresh air and open skies—it's a living classroom for growing minds. At Benaiah Academy, we believe that nature awakens curiosity, fosters independence, and builds strength in every child. Whether they're running, exploring, or simply feeling the sun on their skin, children discover who they are best when they're free to move, play, and dream outside.
            </p>
             <p className="font-semibold">Let's raise a generation that grows with the ground beneath their feet and the sky as their limit.</p>
          </div>
        </div>
      </section>
    </>
  );
}
