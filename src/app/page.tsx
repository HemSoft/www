import {
  AboutSection,
  Footer,
  HeroSection,
  ProductShowcase,
} from "@/components/landing";

const products = [
  {
    title: "HemSoft Dashboard",
    description:
      "A unified command center for monitoring and managing your HemSoft services. Track AI usage, monitor system health, and configure your development environment—all from one elegant interface.",
    url: "https://dashboard.hemmer.us",
    imageUrl: "/images/dashboard-screenshot.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      {/* Product Showcases */}
      <div className="bg-background">
        {products.map((product, index) => (
          <ProductShowcase
            key={product.title}
            title={product.title}
            description={product.description}
            url={product.url}
            imageUrl={product.imageUrl}
            index={index}
          />
        ))}
      </div>

      <AboutSection />
      <Footer />
    </main>
  );
}
