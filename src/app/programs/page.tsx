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
      icon: <Paintbrush className="h-4 w-4 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-arts'),
    },
    {
      title: 'Field Trips',
      description: 'Our regular visits to the National Orphanage help instill empathy, kindness, and a strong sense of social responsibility in our learners.',
      icon: <Bus className="h-4 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-trips'),
    },
    {
      title: 'Connecting with Nature',
      description: 'Our frequent outdoor activities immerse students in the beauty of the natural world, fostering curiosity, environmental awareness, and a lifelong love for nature.',
      icon: <Leaf className="h-4 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-nature'),
    },
    {
      title: 'Celebrating Through Music',
      description: 'Music and poetry allow learners to express their emotions, creativity, and identity in powerful ways. Through these arts, we build confidence, discipline, and teamwork, helping each child discover their unique voice. I am proud of the dedication our learners show, and their journey to the Nationals is proof of what passion and hard work can achieve. We will continue nurturing talent and celebrating the beauty of artistic expression.',
      icon: <Music className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-music'),
    },
    {
      title: 'Drama Festivals',
      description: 'We frequently participate in drama festivals, giving our students the chance to showcase their creativity, build confidence, and express themselves through captivating performances.',
      icon: <Users className="h-8 w-8 text-primary" />,
      image: programImages.find((img) => img.id === 'activity-drama'),
     },
     {
      title: 'Soccer Club' ,
      description: 'football is more than a sport, its a pathway to discipline, determination and lifelong opportunity. At Pro Soccer, we focus on shaping players who are skilled on the field and strong in character, Every child deserve a chance to discover their talent, train with purpose and rise with confidence, i am honoured to guide this vision and help nurture the next generation of champion. — Gideon Ochieng, Patron',
      icon: <Users className="h-8 w-8 text-primary" />,
      image: programImages.find((img)  => img.id === 'activity-soccer'),
    },
    {
      title: 'Swimming Club' ,
      description: 'Swimming teaches discipline, confidence, and resilience. In our program, every learner is encouraged to conquer their fears, develop strong skills, and enjoy the beauty of the sport. My mission is to ensure that every child feels supported, safe, and inspired as they grow in both ability and character. — Lilian Nzisa, Swimming Patron' ,
      icon: <Users className="h-8 w-8 text-primary" />,
      image: programImages.find((img)  => img.id === 'activity-Swimming'),
    },
    {
      title: 'Debate Club' ,
      description: 'Debate sharpens the mind, builds confidence, and empowers learners to express themselves with clarity and respect. Through every discussion and argument, we nurture critical thinkers who can analyze issues, communicate effectively, and lead with purpose. I am committed to guiding our learners as they grow into articulate, informed, and confident speakers. -Cynthia Chirchir, Debate Patron' ,
      icon: <Award className="h-8 w-8 text-primary" />,
      image: programImages.find((img)  => img.id === 'activity-Debate'),
     },
    {
      title: 'Love Embrace Program' , 
      description: 'we create moments that inspire hope, build friendships, and strengthen the spirit of community service' ,
      icon: <Award className="h-8 w-8 text-primary" />,
      image: programImages.find((img)  => img.id === 'activity-Embrace'),
    },
    {  
      title: 'Skating Club' ,
      description: 'Skating builds balance, courage, and creativity. It teaches learners to trust themselves, stay focused, and enjoy movement in a unique and exciting way. My goal is to guide every child to grow in confidence, master new skills, and discover the joy that skating brings. Faith Muthiani, Skating Patron' ,
      icon: <Award className="h-8 w-8 text-primary" />,
      image: programImages.find((img)  => img.id === 'activity-Skating'),
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
              Our Academic Programs
            </h1>
            <p className="text-primary-foreground/90 md:text-xl/relaxed">
             Our Academic Programs are thoughtfully designed to spark imagination, nurture social development, and promote active learning through engaging, age-appropriate activities—ensuring every kindergarten child experiences joy, discovery, and growth in a safe and stimulating environment.
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Love Embrace Program</h2>
            <p className="text-lg">
              The Love Embrace Program is a heartfelt outreach initiative dedicated to bringing hope, joy, and encouragement to vulnerable children—especially orphans within our community. Through organized visits, our learners and staff come together to share their time, resources, and compassion with these young ones.
              We believe that meaningful acts of kindness shape not only the lives of those we help, but also the character of our learners. Each visit is an opportunity for them to understand the value of empathy, gratitude, and generosity. From sharing food, clothes, and essential items to spending quality time, playing, and listening, our goal is to remind every child that they are loved, valued, and never forgotten.
              The Love Embrace Programme continues to grow as more learners, teachers, and partners join this mission of spreading warmth and making a real difference. Together.
            </p>
             <p className="font-semibold">we create moments that inspire hope, build friendships, and strengthen the spirit of community service</p>
          </div>
        </div>
      </section>
    </>
  );
}
