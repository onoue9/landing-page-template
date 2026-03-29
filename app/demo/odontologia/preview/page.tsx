import { notFound } from 'next/navigation';
import OdontologiaPreviewClient from './PreviewClient';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === 'true';

export default function OdontologiaPreviewPage() {
  if (!IS_DEMO) notFound();
  return <OdontologiaPreviewClient />;
}
