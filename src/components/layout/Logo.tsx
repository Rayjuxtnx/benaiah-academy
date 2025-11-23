import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.logo?.[0];

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Benaiah Academy Home">
      {logoImage && (
        <Image
          src={logoImage.imageUrl}
          alt={logoImage.description}
          width={40}
          height={40}
          className="rounded-full"
          data-ai-hint={logoImage.imageHint}
        />
      )}
      <span className="text-xl font-bold font-headline text-foreground">
        Benaiah Academy
      </span>
    </Link>
  );
}
