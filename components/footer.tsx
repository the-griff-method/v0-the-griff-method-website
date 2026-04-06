import { Instagram, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/griff-logo.png"
              alt="The Griff Method"
              width={250}
              height={83}
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming social media presence into measurable business growth through data-driven strategies and
              proven methodologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                
              </a>
            </div>
          </div>

          

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-muted-foreground hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 The Griff Method. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
