import type { Metadata } from "next";
import BiodataDetail from "@/structure/biodatadetail/BiodataDetail";
import { getBiodataDetailMetadataFromSlug } from "@/lib/seo";

interface BiodataSlugPageProps {
  params: Promise<{
    biodataId: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BiodataSlugPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return getBiodataDetailMetadataFromSlug(resolvedParams.slug, resolvedParams.biodataId);
}

export default function BiodataSlugPage() {
  return <BiodataDetail />;
}
