
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Heart,
  BookCopy,
  Shield,
  Users,
  Building2,
  Car,
  Star,
  Quote,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer K.',
    role: 'Parent (Pre-K)',
    avatar: 'JK',
    text: 'Benaiah Academy has been a blessing for our family. The teachers are so attentive and creative - my daughter comes home every day excited to share what she learned!',
    rating: 5,
  },
  {
    name: 'Marcus D.',
    role: 'Parent (Kindergarten)',
    avatar: 'MD',
    text: 'As an educator myself, I\'m consistently impressed with the thoughtful curriculum and emphasis on social-emotional development. The staff truly understands early childhood.',
    rating: 5,
  },
  {
    name: 'John S.',
    role: 'Parent (Toddler Program)',
    avatar: 'JS',
    text: 'The communication from the school is excellent, and I always feel welcome when I visit. My son has blossomed here in just a few months - he\'s more confident and curious!',
    rating: 5,
  },
];

export default function AboutPage() {
  const aboutImages = PlaceHolderImages.about_page || [];
  const pageHeaderImage = aboutImages.find((img) => img.id === 'header');
  const missionImage = aboutImages.find(
    (img) => img.id === 'mission-image'
  );
  const inspirationImage = aboutImages.find(
    (img) => img.id === 'inspiration'
  );
  const commitmentImage = aboutImages.find(
    (img) => img.id === 'commitment'
  );

  const headTeacherImg = aboutImages.find(
    (img) => img.id === 'team-headteacher'
  );
  const teachingStaffImg = aboutImages.find(
    (img) => img.id === 'team-teaching-staff'
  );
  const nonTeachingStaffImg = aboutImages.find(
    (img) => img.id === 'team-non-teaching-staff'
  );
  const classroomImg = aboutImages.find(
    (img) => img.id === 'facilities-classrooms'
  );
  const vanImg = aboutImages.find(
    (img) => img.id === 'facilities-vans'
  );
  const quoteImage = aboutImages.find((img) => img.id === 'quote');


  return (
    <div>
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
          <div className="mx-auto max-w-3xl space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground">
              About Benaiah Academy
            </h1>
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
            <div className="space-y-4">
              <Heart className="h-12 w-12 text-primary" />
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                "At this school, every role—whether in the classroom or behind the scenes—feels meaningful and valued. It's more than just a workplace; it's a family united by a shared purpose: to create a safe, supportive, and inspiring environment where students and staff can thrive. We're proud to be part of a community that truly cares and works together to make a lasting difference."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4 lg:order-2">
              {inspirationImage && (
                <Image
                  src={inspirationImage.imageUrl}
                  alt={inspirationImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={inspirationImage.imageHint}
                />
              )}
            </div>
            <div className="space-y-4 lg:order-1">
              <Shield className="h-12 w-12 text-primary" />
              <h2 className="font-headline text-3xl font-bold">Our Inspiration</h2>
              <p className="text-muted-foreground">
                Benaiah, a valiant fighter from Kabzeel, was known for his mighty exploits: striking down Moab's warriors, facing a lion in a snowy pit, and defeating a giant Egyptian with his own spear. Like him, we cultivate in our learners a fearless spirit, unwavering resilience, and a commitment to excellence in all they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              {commitmentImage && (
                <Image
                  src={commitmentImage.imageUrl}
                  alt={commitmentImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint={commitmentImage.imageHint}
                />
              )}
            </div>
            <div className="space-y-4">
              <BookCopy className="h-12 w-12 text-primary" />
              <h2 className="font-headline text-3xl font-bold">Our Commitment</h2>
              <p className="text-muted-foreground">
                We are devoted to nurturing learners not just academically, but also in character and purpose—preparing them to rise and stand out in every area of life. At Benaiah Academy, every child is equipped to lead, conquer, and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2>
            </div>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                 {headTeacherImg && (
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={headTeacherImg.imageUrl} alt={'Headteacher'} data-ai-hint={headTeacherImg.imageHint}/>
                    <AvatarFallback>TG</AvatarFallback>
                  </Avatar>
                )}
                <h3 className="font-headline text-xl font-bold">Tr. Gedion</h3>
                <p className="text-primary">Headteacher</p>
                <p className="mt-2 text-sm text-muted-foreground">"Your passion and dedication inspire our learners daily. Benaiah Academy is proud to have you as a model of excellence in education."</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                {teachingStaffImg && (
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={teachingStaffImg.imageUrl} alt={'Teaching Staff'} data-ai-hint={teachingStaffImg.imageHint}/>
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                )}
                <h3 className="font-headline text-xl font-bold">Teaching Staff</h3>
                <p className="text-primary">Passionate educators nurturing young minds</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                 {nonTeachingStaffImg && (
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={nonTeachingStaffImg.imageUrl} alt={'Non-Teaching Staff'} data-ai-hint={nonTeachingStaffImg.imageHint}/>
                    <AvatarFallback>NTS</AvatarFallback>
                  </Avatar>
                )}
                <h3 className="font-headline text-xl font-bold">Non-Teaching Staff</h3>
                <p className="text-primary">Supporting our school community every day</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="facilities">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Building2 className="mx-auto h-12 w-12 text-primary" />
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Facilities
              </h2>
            </div>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              {classroomImg && <Image src={classroomImg.imageUrl} alt="Classroom" width={600} height={400} className="rounded-t-lg object-cover aspect-video" data-ai-hint={classroomImg.imageHint} />}
              <CardHeader>
                <CardTitle>Classrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bright, safe learning environments designed for young children.
                </p>
              </CardContent>
            </Card>
            <Card>
              {vanImg && <Image src={vanImg.imageUrl} alt="School Van" width={600} height={400} className="rounded-t-lg object-cover aspect-video" data-ai-hint={vanImg.imageHint} />}
              <CardHeader>
                <CardTitle>School Vans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Safe and reliable transportation for our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              What the Parents Say
            </h2>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="flex flex-col items-center text-center p-6 flex-1">
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="items-center pt-4">
                  <h3 className="font-headline text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </CardHeader>
              </Card>
            ))}
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
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Quote className="mx-auto h-12 w-12" />
            <blockquote className="text-xl italic">
              "Every child deserves a champion—an adult who will never give up on them, who understands the power of connection and insists that they become the best that they can possibly be."
            </blockquote>
            <p className="font-semibold">— Rita Pierson</p>
          </div>
        </div>
      </section>
    </div>
  );
}

    