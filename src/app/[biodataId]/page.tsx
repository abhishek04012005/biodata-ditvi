import BiodataDetail from "@/structure/biodatadetail/BiodataDetail";
import { Metadata } from "next";
import biodataList from "@/data/biodata";
import { getBiodataDetailMetadata } from "@/lib/seo";
import { biodataSeoData } from "@/data/seo";

interface BiodataPageProps {
  params: Promise<{
    biodataId: string;
  }>;
}

// ✅ Metadata
export async function generateMetadata(
  { params }: BiodataPageProps
): Promise<Metadata> {
  const { biodataId } = await params;

  const biodata = biodataList.find(
    (item) => item.slug === biodataId
  );

  if (!biodata) {
    return {
      title: "Biodata Details",
      description: "View biodata details and options",
    };
  }

  const seoData = Object.values(biodataSeoData).find(
    (item) => item.path.split("/")[2] === biodata.slug
  );

  if (seoData) {
    return {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        images: [{ url: seoData.ogImage }],
      },
    };
  }

  return getBiodataDetailMetadata({
    titleTarget: biodata.name,
    slug: biodata.slug,
    biodataId: "biodata",
  });
}

// ✅ Page Component
export default async function BiodataPage(
  { params }: BiodataPageProps
) {
  const { biodataId } = await params;

  const biodata = biodataList.find(
    (item) => item.slug === biodataId
  );

  const seoData = biodata
    ? Object.values(biodataSeoData).find(
        (item) => item.path.split("/")[2] === biodata.slug
      )
    : undefined;

  return <BiodataDetail seoData={seoData} />;
}