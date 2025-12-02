import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpenText,
  Heart,
  Smile,
  Sparkles,
  Star,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedMissionVision } from '@/components/layout/AnimatedMissionVision';

const features = [
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Play-Based Learning',
    description:
      'Our curriculum is built around learning through play, fostering creativity and imagination.',
  },
  {
    icon: <BookOpenText className="h-10 w-10 text-primary" />,
    title: 'Experienced Educators',
    description:
      'Our passionate and certified teachers are dedicated to your child’s growth and happiness.',
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: 'Nurturing Environment',
    description:
      'We provide a safe, inclusive, and supportive space where every child feels valued.',
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: 'SL',
    text: 'Benaiah Academy is a wonderful, nurturing place. My daughter has blossomed since she started. The teachers are so caring and creative!',
    rating: 5,
  },
  {
    name: 'Mike P.',
    avatar: 'MP',
    text: 'We couldn’t be happier with our choice. The play-based learning approach is fantastic and our son is always excited to go to school.',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    avatar: 'JT',
    text: 'A five-star experience. The facilities are bright and clean, and the communication from staff is excellent. Highly recommend!',
    rating: 5,
  },
];

export default function Home() {
  const homeImages = PlaceHolderImages.home_page || [];
  const heroImage = homeImages.find((img) => img.id === 'hero');
  const welcomeImage = homeImages.find((img) => img.id === 'welcome');
  const nurturingImage = homeImages.find((img) => img.id === 'nurturing');
  const ctaImage = homeImages.find((img) => img.id === 'cta');

  const programsPageImages = PlaceHolderImages.programs_page || [];
  const journeyPageImages = PlaceHolderImages.our_journey_page || [];

  const programs = [
    {
      name: 'Love Embrace Program',
      age: 'The Love Embrace Programme is a heartfelt outreach initiative dedicated to bringing hope, joy, and encouragement to vulnerable children—especially orphans within our community. Through organized visits, our learners and staff come together to share their time, resources, and compassion with these young ones.',
      image: programsPageImages.find((img) => img.id === 'activity-Embrace'),
    },
    {
      name: 'Debate',
      age: 'Debate sharpens the mind, builds confidence, and empowers learners to express themselves with clarity and respect.',
      image:  programsPageImages.find((img) => img.id === 'activity-Debate'),
    },
    {
      name: 'soccer',
      age: 'football is more than a sport, its a pathway to discipline, determination and lifelong opportunity. At Pro Soccer, we focus on shaping players who are skilled on the field and strong in character, Every child deserve a chance to discover their talent.',
      image: programsPageImages.find((img) => img.id === 'activity-soccer'),
    },
  ];


  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full pt-0 md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Benaiah Academy
              </h1>
              <p className="text-lg md:text-xl">
                "At Benaiah Academy, we believe every child is uniquely gifted, and we are committed to helping them discover and grow their individual potential. We provide a holistic education that blends academic excellence, character development, and essential life skills.We use the Montessori Method to deliver Competency-Based Education (CBE) at the Preparatory and Primary levels. Our learner-centered approach supports physical, social, emotional, and cognitive development, nurturing confident, independent, and solution-oriented young learners.."
              </p>
              <p className="text-lg md:text-xl italic">
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="transition-transform hover:scale-105">
                  <Link href="/programs">Our Academic Program</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="transition-transform hover:scale-105"
                >
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section id="welcome" className="bg-background relative">
        {welcomeImage && (
          <Image
            src={welcomeImage.imageUrl}
            alt={welcomeImage.description}
            fill
            className="object-cover blur-sm"
            data-ai-hint={welcomeImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Welcome to Our School
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Benaiah Academy is a Christ-centered academy dedicated to providing a nurturing environment where children can grow spiritually, academically, socially, and physically. Located in the heart of Machakos, we offer quality early childhood education with a focus on Christian values and holistic development.
            </p>
          </div>
        </div>
      </section>

      <AnimatedMissionVision />

       <section id="programs-overview" className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Academic Programs</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
              We offer a range of programs tailored to different age groups, each designed to foster growth and curiosity in a supportive setting.
            </p>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Link href="/programs" key={program.name}>
                <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full">
                  {program.image && (
                    <Image
                      src={program.image.imageUrl}
                      alt={program.image.description}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover"
                      data-ai-hint={program.image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle>{program.name}</CardTitle>
                    <CardDescription>{program.age}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="transition-transform hover:scale-105">
              <Link href="/our-journey">Discover Our Journey <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>


      <section id="nurturing" className="bg-background relative">
         {nurturingImage && (
          <Image
            src={nurturingImage.imageUrl}
            alt={nurturingImage.description}
            fill
            className="object-cover blur-sm"
            data-ai-hint={nurturingImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Heart className="mx-auto h-12 w-12 text-primary"/>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Nurturing
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              At Benaiah Academy, we believe that children have neither past nor future—they live fully in the present, exploring, discovering, and growing with joy. It is our calling to nurture this precious moment, because in their present lies the promise of a brighter tomorrow.
            </p>
          </div>
        </div>
      </section>

       <section id="cta" className="relative text-white">
        {ctaImage && (
          <Image
            src={ctaImage.imageUrl}
            alt={ctaImage.description}
            fill
            className="object-cover blur-sm"
            data-ai-hint={ctaImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Join the Benaiah Academy Family
            </h2>
            <p className="text-lg text-white">
              We take pride in offering a conducive learning environment that fosters excellence in both academic and co-curricular pursuits. English is our main language of communication, helping learners express themselves confidently both in and out of school.
              Our dedicated teachers and support staff are fully committed to walking each learner’s educational journey with care and excellence. Beyond academics, we equip learners with essential life skills through programs such as swimming, skating, music, pro soccer, poetry, dance, Girl Guides, Scouts, and more.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-transform hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
