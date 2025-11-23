import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              A happy place for little learners to grow, play, and discover.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-primary">Programs</Link></li>
              <li><Link href="/our-journey" className="text-sm text-muted-foreground hover:text-primary">Our Journey</Link></li>
              <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
           <div className="space-y-2">
            <h4 className="font-headline font-semibold">Contact</h4>
             <ul className="space-y-1 text-sm text-muted-foreground">
               <li>Machakos Town, Kenya</li>
               <li>benaiahkindergarten@gmail.com</li>
               <li>0110 003397</li>
             </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Follow Us</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Benaiah Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
