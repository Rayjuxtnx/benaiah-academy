import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Building, Heart, Leaf } from 'lucide-react';

const journeyMilestones = [
  {
    date: '2010',
    title: 'Benaiah Academy is Born',
    description: 'Founded with a single class of 10 students, our journey began with a mission to create a joyful learning space.',
    icon: <Heart className="h-6 w-6 text-white" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-1'),
  },
  {
    date: '2014',
    title: 'Moved to Our New Home',
    description: 'We moved into our current, larger campus, featuring a dedicated playground and sunny classrooms.',
    icon: <Building className="h-6 w-6 text-white" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-2'),
  },
  {
    date: '2018',
    title: 'Launched Our Garden Program',
    description: 'Students began learning about nature firsthand by planting and tending to our very own school garden.',
    icon: <Leaf className="h-6 w-6 text-white" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-3'),
  },
  {
    date: '2022',
    title: 'Recognized for Excellence',
    description: 'Received the "Community Choice Award" for best early childhood education center in Sunnyville.',
    icon: <Award className="h-6 w-6 text-white" />,
    image: PlaceHolderImages.find((img) => img.id === 'journey-4'),
  },
];

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
              A timeline of our growth, milestones, and cherished memories.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
            {journeyMilestones.map((item, index) => (
              <div key={item.title} className="relative mb-12">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary p-2">
                  {item.icon}
                </div>
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <p className="font-headline text-2xl font-bold text-primary">
                      {item.date}
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-4 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  } w-full md:w-[calc(50%-2rem)]`}
                >
                  <Card className="shadow-lg transition-transform hover:scale-105">
                    <CardHeader>
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
                      <CardTitle className={`pt-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
