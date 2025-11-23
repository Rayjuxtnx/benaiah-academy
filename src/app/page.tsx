import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpenText,
  Smile,
  Sparkles,
  Star,
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

const programs = [
  {
    name: 'Toddler Program',
    age: '18 months - 3 years',
    image: PlaceHolderImages.find((img) => img.id === 'program-toddler'),
  },
  {
    name: 'Preschool',
    age: '3 - 4 years',
    image: PlaceHolderImages.find((img) => img.id === 'program-preschool'),
  },
  {
    name: 'Pre-Kindergarten',
    age: '4 - 5 years',
    image: PlaceHolderImages.find((img) => img.id === 'program-prek'),
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
  const heroImage = PlaceHolderImages.find((img) => img.id === 'home-hero');

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
                Welcome to Benaiah Academy
              </h1>
              <p className="text-lg md:text-xl">
                A happy place for little learners to grow, play, and discover.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="transition-transform hover:scale-105">
                  <Link href="/programs">Our Programs</Link>
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

      <section id="why-us" className="bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="mt-4 mb-2 font-headline text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Programs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of programs tailored to different age groups,
                each designed to spark curiosity and a love for learning.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card
                key={program.name}
                className="overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
              >
                {program.image && (
                  <Image
                    src={program.image.imageUrl}
                    alt={program.image.description}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                    data-ai-hint={program.image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{program.name}</CardTitle>
                  <CardDescription>{program.age}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/programs">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            What Parents Are Saying
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mx-auto mt-12 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardHeader className="flex-row items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{testimonial.name}</CardTitle>
                          <div className="flex gap-0.5">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-primary text-primary"
                                />
                              ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="cta" className="bg-accent text-accent-foreground">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Join the Benaiah Academy Family
            </h2>
            <p className="text-lg">
              Ready to give your child an unforgettable start? Schedule a tour
              or contact us to learn more about our enrollment process.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 transition-transform hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
