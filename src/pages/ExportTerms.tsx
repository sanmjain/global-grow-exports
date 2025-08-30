import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ExportTerms = () => {
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
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Export Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are typically 30% advance payment upon order confirmation and 70% against 
                  shipping documents. We accept payments via bank transfer, letter of credit, or other 
                  mutually agreed payment methods. All payments must be in USD unless otherwise specified.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping & Delivery</h2>
                <p className="text-muted-foreground mb-4">
                  We offer FOB, CIF, and CFR terms as per Incoterms 2020. Delivery times vary based on product 
                  availability and destination. Standard delivery time is 15-30 days from order confirmation. 
                  We work with reputable shipping lines to ensure safe and timely delivery.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Quality Assurance</h2>
                <p className="text-muted-foreground mb-4">
                  All products undergo strict quality control measures before shipment. We provide quality 
                  certificates, certificates of origin, and other required documentation. Products are 
                  inspected by third-party agencies when required by the buyer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Force Majeure</h2>
                <p className="text-muted-foreground mb-4">
                  We shall not be liable for any delay or failure to perform due to circumstances beyond our 
                  reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, 
                  government regulations, or natural disasters.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
                <p className="text-muted-foreground mb-4">
                  Any disputes arising from export transactions shall be resolved through arbitration in 
                  accordance with the rules of the International Chamber of Commerce. The place of arbitration 
                  shall be Mumbai, India, and the language of proceedings shall be English.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact for Export Queries</h2>
                <p className="text-muted-foreground">
                  For any queries regarding export terms and conditions, please contact our export department 
                  at exports@growwinternationals.com or call us at +91 73500 72855.
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

export default ExportTerms;