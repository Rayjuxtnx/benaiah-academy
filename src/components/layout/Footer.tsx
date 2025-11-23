import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-8 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <Logo />
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:benaiahkindergarten@gmail.com" className="hover:text-primary">
                benaiahkindergarten@gmail.com
              </a>
            </div>
          </div>
          <div className="space-y-2 sm:text-right">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out hover:-translate-y-0.5 inline-block">About Us</Link></li>
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out hover:-translate-y-0.5 inline-block">Programs</Link></li>
              <li><Link href="/our-journey" className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out hover:-translate-y-0.5 inline-block">Our Journey</Link></li>
              <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out hover:-translate-y-0.5 inline-block">Gallery</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out hover:-translate-y-0.5 inline-block">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Benaiah Academy – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
