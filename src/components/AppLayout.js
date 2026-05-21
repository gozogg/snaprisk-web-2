import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import PageTransition from './PageTransition';
import ScrollRevealProvider from './ScrollRevealProvider';

export default function AppLayout() {
  return (
    <ScrollRevealProvider>
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </ScrollRevealProvider>
  );
}
