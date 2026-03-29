import { notFound } from 'next/navigation';
import ImoveisPreviewClient from './PreviewClient';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === 'true';

export default function ImoveisPreviewPage() {
  if (!IS_DEMO) notFound();
  return <ImoveisPreviewClient />;
}
