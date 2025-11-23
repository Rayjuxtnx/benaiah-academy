import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const programs = [
  {
    value: 'item-1',
    title: 'Toddler Program (The Little Sprouts)',
    age: '18 months - 3 years',
    image: PlaceHolderImages.find((img) => img.id === 'program-toddler'),
    description:
      'Our Little Sprouts program is a gentle introduction to the school environment. We focus on sensory exploration, motor skill development, and early social interaction in a safe and loving space.',
    curriculum: [
      'Sensory Play (water, sand, textures)',
      'Music & Movement',
      'Basic Shape & Color Recognition',
      'Story Time & Puppetry',
      'Outdoor Exploration',
    ],
    schedule: 'Monday - Friday, 9:00 AM - 12:00 PM (Half-day options available)',
  },
  {
    value: 'item-2',
    title: 'Preschool Program (The Busy Bees)',
    age: '3 - 4 years',
    image: PlaceHolderImages.find((img) => img.id === 'program-preschool'),
    description:
      'The Busy Bees program encourages independence and curiosity. Through thematic units and project-based learning, children develop foundational academic skills while honing their social and emotional intelligence.',
    curriculum: [
      'Early Literacy & Phonics',
      'Simple Math Concepts',
      'Creative Arts & Crafts',
      'Introduction to Science',
      'Group Games & Collaboration',
    ],
    schedule: 'Monday - Friday, 9:00 AM - 1:00 PM',
  },
  {
    value: 'item-3',
    title: 'Pre-Kindergarten (The Wise Owls)',
    age: '4 - 5 years',
    image: PlaceHolderImages.find((img) => img.id === 'program-prek'),
    description:
      'Our Wise Owls program is designed to prepare children for kindergarten and beyond. We focus on school readiness skills, critical thinking, and problem-solving in a structured yet playful setting.',
    curriculum: [
      'Advanced Literacy (reading & writing)',
      'Mathematics & Problem Solving',
      'STEM Exploration Projects',
      'Public Speaking (Show & Tell)',
      'Mindfulness & Emotional Regulation',
    ],
schedule: 'Monday - Friday, 9:00 AM - 3:00 PM',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-card text-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Programs
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Tailored learning adventures for every stage of early childhood.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-4xl mx-auto">
            {programs.map((program) => (
              <AccordionItem key={program.value} value={program.value}>
                <AccordionTrigger className="font-headline text-2xl hover:no-underline">
                  {program.title}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid gap-8 md:grid-cols-2 items-start">
                    <div className="space-y-4">
                      <p className="font-bold text-primary">{program.age}</p>
                      <p className="text-muted-foreground">{program.description}</p>
                      
                      <h4 className="font-headline font-semibold">Curriculum Highlights:</h4>
                      <ul className="space-y-2">
                        {program.curriculum.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-headline font-semibold">Schedule:</h4>
                      <p className="text-muted-foreground">{program.schedule}</p>
                    </div>
                    <div>
                      {program.image && (
                        <Image
                          src={program.image.imageUrl}
                          alt={program.image.description}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover aspect-video shadow-lg"
                          data-ai-hint={program.image.imageHint}
                        />
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
