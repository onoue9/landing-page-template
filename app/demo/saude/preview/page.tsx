import { notFound } from 'next/navigation';
import SaudePreviewClient from './PreviewClient';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === 'true';

export default function SaudePreviewPage() {
  if (!IS_DEMO) notFound();
  return <SaudePreviewClient />;
}
