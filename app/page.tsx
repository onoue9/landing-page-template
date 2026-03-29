import LandingPage from '@/components/LandingPage';
import PortfolioPage from '@/components/portfolio/PortfolioPage';

const IS_CLIENT = !!process.env.NEXT_PUBLIC_CLIENT;

export default function Home() {
  if (IS_CLIENT) return <LandingPage />;
  return <PortfolioPage />;
}
