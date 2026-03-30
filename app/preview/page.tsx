import { notFound } from 'next/navigation';
import PreviewClient from './PreviewClient';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === 'true';

export default function PreviewPage() {
  if (!IS_DEMO) notFound();
  return <PreviewClient />;
}
