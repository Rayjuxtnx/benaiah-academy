import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from './ContactForm';

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find(
    (img) => img.id === 'contact-info'
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
                      <h3 className="font-semibold">Our Address</h3>
                      <p className="text-muted-foreground">123 Blossom Lane, Sunnyville, FL 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a href="mailto:contact@benaiah.edu" className="text-muted-foreground hover:text-primary">
                        contact@benaiah.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary">
                        (123) 456-7890
                      </a>
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
