import { ShoppingBag, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-ivory/90 backdrop-blur-md border-b border-elara-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-slate lg:hidden cursor-pointer" />
            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">Collections</a>
              <a href="#" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">Our Story</a>
              <a href="#" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">The Promise</a>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex flex-col items-center justify-center cursor-pointer">
            <h1 className="font-serif font-bold text-2xl tracking-wider text-midnight leading-none">ELARA</h1>
            <span className="font-serif tracking-[0.3em] text-[10px] text-aged-gold mt-1">GEMS</span>
          </div>

          <div className="flex items-center space-x-6">
            <User className="h-5 w-5 text-slate hover:text-elara-gold cursor-pointer transition-colors" />
            <ShoppingBag className="h-5 w-5 text-slate hover:text-elara-gold cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
}