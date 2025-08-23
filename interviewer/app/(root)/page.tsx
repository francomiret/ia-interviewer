import { Contacts, HeroBlock, HowItWorks, Navbar, Pricing } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <Navbar />
      <HeroBlock />
      <HowItWorks />
      <Pricing />
      <Contacts />
    </div>
  );
}
