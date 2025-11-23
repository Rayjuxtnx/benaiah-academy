import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from './ContactForm';

export default function ContactPage() {
  const contactImages = PlaceHolderImages.contact_page || [];
  const contactImage = contactImages.find(
    (img) => img.id === 'info'
  );

  return (
    <>
      <section className="bg-card text-center">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We'd love to hear from you! Whether you have a question about our programs or want to schedule a tour, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <Card className="p-6 sm:p-8 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-muted-foreground">Find us at our campus or reach out via phone or email.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-muted-foreground">Benaiah Academy Campus</p>
                      <p className="text-muted-foreground">Machakos Town, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a href="mailto:benaiahkindergarten@gmail.com" className="block text-primary hover:text-primary/80">
                        benaiahkindergarten@gmail.com
                      </a>
                       <a href="mailto:admissions@benaiah.ac.ke" className="block text-primary hover:text-primary/80">
                        admissions@benaiah.ac.ke
                      </a>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <a href="tel:0110003397" className="text-primary hover:text-primary/80">
                        0110 003397
                      </a>
                       <p className="text-sm text-muted-foreground">Office Hours: 7:30 AM - 5:00pm</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  {contactImage && (
                    <Image
                      src={contactImage.imageUrl}
                      alt={contactImage.description}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover aspect-video shadow-lg"
                      data-ai-hint={contactImage.imageHint}
                    />
                  )}
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-3xl font-bold">Send Us a Message</h2>
                  <p className="mt-2 text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
