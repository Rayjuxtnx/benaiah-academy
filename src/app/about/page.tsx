import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Milestone, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Lead Teacher',
    image: PlaceHolderImages.find((img) => img.id === 'about-team-1'),
    fallback: 'JD',
  },
  {
    name: 'John Smith',
    role: 'Assistant Teacher',
    image: PlaceHolderImages.find((img) => img.id === 'about-team-2'),
    fallback: 'JS',
  },
  {
    name: 'Emily White',
    role: 'Art & Music Specialist',
    image: PlaceHolderImages.find((img) => img.id === 'about-team-3'),
    fallback: 'EW',
  },
];

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find(
    (img) => img.id === 'about-mission'
  );

  return (
    <div>
      <section className="bg-card text-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              About Benaiah Academy
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Fostering a lifelong love of learning in a warm, creative, and joyful environment.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              {missionImage && (
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={missionImage.imageHint}
                />
              )}
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Target className="h-12 w-12 text-primary mt-1" />
                <div>
                  <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
                  <p className="mt-2 text-muted-foreground">
                    To provide a safe, nurturing, and stimulating environment where young children can develop socially, emotionally, physically, and cognitively. We believe in the power of play and hands-on experiences to build a strong foundation for future learning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Milestone className="h-12 w-12 text-primary mt-1" />
                <div>
                  <h2 className="font-headline text-3xl font-bold">Our Vision</h2>
                  <p className="mt-2 text-muted-foreground">
                    To be a community where every child is celebrated for their unique gifts, where curiosity is encouraged, and where a passion for discovery is ignited every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg">
              Founded in 2010 by a group of passionate educators and parents, Benaiah Academy was born from a simple idea: to create a preschool that felt like a second home. We started in a small, rented space with just one class. Over the years, thanks to our dedicated community, we've grown into the vibrant, beloved school we are today, always staying true to our core belief that learning should be a joyous adventure.
            </p>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Users className="mx-auto h-12 w-12 text-primary"/>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Educators
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is the heart of Benaiah Academy. Each member is a dedicated professional with a passion for early childhood education.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-24 w-24 mb-4">
                    {member.image && (
                      <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint}/>
                    )}
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
