import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <div className="relative min-h-screen  text-charcoal overflow-hidden">
      {/* Beams in background */}
      <div className="absolute inset-0 -z-10">
        <BackgroundBeamsWithCollision />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">Welcome to OrganicMart</h1>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Fresh, organic produce and sustainable goods delivered to your door.
            </p>
          </motion.div>
        </div>

        {/* Categories Section */}
        <div className="py-12 px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
          <BentoGrid>
            <BentoGridItem title="Organic Foods" description="Fresh vegetables & fruits" className="bg-yellow-200" />
            <BentoGridItem title="Natural Textiles" description="Eco-friendly clothing" className="bg-cyan-300" />
            <BentoGridItem title="Cosmetics" description="Cruelty-free skincare" className="bg-teal-200" />
          </BentoGrid>
        </div>

        {/* Testimonials */}
        <div className="bg-green-900 py-16 px-4">
          <h2 className="text-2xl font-semibold text-center mb-8 text-yellow-100">What Our Customers Say</h2>
          <AnimatedTestimonials
            autoplay
            testimonials={[
              {
                name: "Pardha Saradhi",
                quote: "Their vegetables are always fresh. My family loves it!",
                src: "/ps2.png",
                designation: "Nutritionist",
              },
              {
                name: "Saradhi Pardha",
                quote: "Very happy with the sustainable packaging and delivery options.",
                src: "/pardha.png",
                designation: "Home Chef",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
