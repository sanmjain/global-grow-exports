import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision 
                  of this agreement. These terms apply to all users of the site, including without limitation users 
                  who are browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Use of the Website</h2>
                <p className="text-muted-foreground mb-4">
                  This website is intended for business use only. You may not use our website for any unlawful 
                  purpose or to solicit others to perform unlawful acts. You may not violate any international, 
                  federal, provincial, or state laws, rules, or regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Products and Services</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to refuse service to anyone for any reason at any time. All prices are 
                  subject to change without notice. We are not responsible for any typographical errors that may 
                  appear in our product descriptions or pricing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  In no case shall Groww Internationals, our directors, officers, employees, affiliates, agents, 
                  contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, 
                  claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any 
                  kind.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Questions about the Terms of Service should be sent to us at info@growwinternationals.com
                  or call us at +91 73500 72855.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;