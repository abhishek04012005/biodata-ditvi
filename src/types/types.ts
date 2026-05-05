
import { StaticImageData } from "next/image";

export interface BiodataType {
  id: number;
  slug: string;
  name: string;
  image: StaticImageData | string;
  type: string;
  originalPrice: number;
  discountPrice: number;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  benefits: string[];
  idealFor: string[];
  highlights: string[];
  tags: string[];
  do: string[];
  dont: string[];
}
