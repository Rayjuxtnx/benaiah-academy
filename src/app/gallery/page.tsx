import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
  const pageHeaderImage = PlaceHolderImages.find((img) => img.id === 'gallery-header');
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-') && img.id !== 'gallery-header');

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
          <div className="mx-auto max-w-3xl space-y-4">
            <Camera className="mx-auto h-12 w-12 text-primary-foreground" />
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground">
              Our Gallery
            </h1>
            <p className="text-primary-foreground/90 md:text-xl/relaxed">
              A glimpse into the joyful moments and cherished memories we create every day at Benaiah Academy.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
