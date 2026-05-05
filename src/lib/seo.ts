import type { Metadata } from "next";
import { createSlug } from "./slug";

interface BiodataSeoArgs {
    titleTarget?: string;
    name?: string;
    slug?: string;
    biodataId?: string;
    rawTitle?: boolean;
}

const toTitleCase = (value: string): string => {
    const smallWords = new Set([
        "a",
        "an",
        "the",
        "and",
        "or",
        "for",
        "of",
        "in",
        "on",
        "with",
        "to",
        "at",
        "by",
        "from",
        "as",
    ]);

    return value
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)
        .map((word, index) => {
            if (index > 0 && smallWords.has(word)) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
};

export const biodataSeoTargets = [
    "Best marriage biodata for Hindu proposal",
    "Best marriage biodata for Muslim proposal",
    "Best marriage biodata for Christian proposal",
    "Best marriage biodata for Sikh proposal",
    "Best marriage biodata for Jain proposal",
    "Best marriage biodata for Buddhist proposal",
    "Best marriage biodata for Telugu proposal",
    "Best marriage biodata for Tamil proposal",
    "Best marriage biodata for Gujarati proposal",
    "Best marriage biodata for Punjabi proposal",
    "Best marriage biodata for Marathi proposal",
    "Best marriage biodata for Bengali proposal",
    "Best marriage biodata for Kannada proposal",
    "Best marriage biodata for Odia proposal",
    "Best marriage biodata for Malayali proposal",
    "Best marriage biodata for Marwari proposal",
    "Best marriage biodata for Rajput proposal",
    "Best marriage biodata for Brahmin profile",
    "Best marriage biodata for Kshatriya profile",
    "Best marriage biodata for Vaishya profile",
    "Best marriage biodata for OBC marriage biodata",
    "Best marriage biodata for SC marriage biodata",
    "Best marriage biodata for ST marriage biodata",
    "Best marriage biodata for inter caste marriage",
    "Best marriage biodata for arranged marriage",
    "Best marriage biodata for love marriage",
    "Best marriage biodata for Bengali bride",
    "Best marriage biodata for Marathi groom",
    "Best marriage biodata for Telugu bride",
    "Best marriage biodata for Punjabi groom",
    "Best marriage biodata for Muslim bride",
    "Best marriage biodata for Christian groom",
    "Best marriage biodata for Hindu bride",
    "Best marriage biodata for Sikh groom",
    "Best marriage biodata for Rajput groom",
    "Best marriage biodata for Marwari bride",
    "Best marriage biodata for Bengali marriage biodata",
    "Best marriage biodata for South Indian marriage biodata",
    "Best marriage biodata for North Indian marriage biodata",
    "Best marriage biodata for Indian matrimony profile",
    "Best marriage biodata for caste based matrimony",
    "Best marriage biodata for community proposal",
    "Best marriage biodata for traditional marriage profile",
    "Best marriage biodata for modern marriage profile",
    "Marriage biodata format for every caste",
    "Marriage proposal biodata format for Hindu",
    "Marriage proposal biodata format for Muslim",
    "Marriage proposal biodata format for Christian",
    "Marriage proposal biodata format for Sikh",
    "Marriage proposal biodata format for Jain",
    "Marriage proposal biodata format for OBC",
    "Marriage proposal biodata format for SC ST",
    "Best caste based biodata template",
    "Best matrimony biodata template for all castes",
    "Best marriage biodata for Pasi",
    "Marriage biodata format for Pasi community",
    "Pasi caste marriage biodata template",
    "Best matrimony biodata for Pasi bride",
    "Best matrimony biodata for Pasi groom",

    "Best marriage biodata for Yadav",
    "Marriage biodata format for Yadav community",
    "Yadav caste marriage biodata template",
    "Best matrimony biodata for Yadav bride",
    "Best matrimony biodata for Yadav groom",

    "Best marriage biodata for Kurmi",
    "Marriage biodata format for Kurmi community",
    "Kurmi caste marriage biodata template",
    "Best matrimony biodata for Kurmi bride",
    "Best matrimony biodata for Kurmi groom",

    "Best marriage biodata for Kushwaha",
    "Marriage biodata format for Kushwaha community",
    "Kushwaha caste marriage biodata template",
    "Best matrimony biodata for Kushwaha bride",
    "Best matrimony biodata for Kushwaha groom",

    "Best marriage biodata for Maurya",
    "Marriage biodata format for Maurya community",
    "Maurya caste marriage biodata template",
    "Best matrimony biodata for Maurya bride",
    "Best matrimony biodata for Maurya groom",

    "Best marriage biodata for Jat",
    "Marriage biodata format for Jat community",
    "Jat caste marriage biodata template",
    "Best matrimony biodata for Jat bride",
    "Best matrimony biodata for Jat groom",

    "Best marriage biodata for Agarwal",
    "Marriage biodata format for Agarwal community",
    "Agarwal caste marriage biodata template",
    "Best matrimony biodata for Agarwal bride",
    "Best matrimony biodata for Agarwal groom",

    "Best marriage biodata for Baniya",
    "Marriage biodata format for Baniya community",
    "Baniya caste marriage biodata template",
    "Best matrimony biodata for Baniya bride",
    "Best matrimony biodata for Baniya groom",

    "Best marriage biodata for Kayastha",
    "Marriage biodata format for Kayastha community",
    "Kayastha caste marriage biodata template",
    "Best matrimony biodata for Kayastha bride",
    "Best matrimony biodata for Kayastha groom",

    "Best marriage biodata for Nai",
    "Marriage biodata format for Nai community",
    "Nai caste marriage biodata template",
    "Best matrimony biodata for Nai bride",
    "Best matrimony biodata for Nai groom",

    "Best marriage biodata for Lohar",
    "Marriage biodata format for Lohar community",
    "Lohar caste marriage biodata template",
    "Best matrimony biodata for Lohar bride",
    "Best matrimony biodata for Lohar groom",

    "Best marriage biodata for Teli",
    "Marriage biodata format for Teli community",
    "Teli caste marriage biodata template",
    "Best matrimony biodata for Teli bride",
    "Best matrimony biodata for Teli groom",

    "Best marriage biodata for Khatik",
    "Marriage biodata format for Khatik community",
    "Khatik caste marriage biodata template",
    "Best matrimony biodata for Khatik bride",
    "Best matrimony biodata for Khatik groom",

    "Best marriage biodata for Chamar",
    "Marriage biodata format for Chamar community",
    "Chamar caste marriage biodata template",
    "Best matrimony biodata for Chamar bride",
    "Best matrimony biodata for Chamar groom",

    "Best marriage biodata for Valmiki",
    "Marriage biodata format for Valmiki community",
    "Valmiki caste marriage biodata template",
    "Best matrimony biodata for Valmiki bride",
    "Best matrimony biodata for Valmiki groom",
    "Best marriage biodata for Kalal",
    "Marriage biodata format for Kalal community",
    "Kalal caste marriage biodata template",
    "Best matrimony biodata for Kalal bride",
    "Best matrimony biodata for Kalal groom",

    "Best marriage biodata for Sahu",
    "Marriage biodata format for Sahu community",
    "Sahu caste marriage biodata template",
    "Best matrimony biodata for Sahu bride",
    "Best matrimony biodata for Sahu groom",

    "Best marriage biodata for Sonar",
    "Marriage biodata format for Sonar community",
    "Sonar caste marriage biodata template",
    "Best matrimony biodata for Sonar bride",
    "Best matrimony biodata for Sonar groom",

    "Best marriage biodata for Vishwakarma",
    "Marriage biodata format for Vishwakarma community",
    "Vishwakarma caste marriage biodata template",
    "Best matrimony biodata for Vishwakarma bride",
    "Best matrimony biodata for Vishwakarma groom",

    "Best marriage biodata for Prajapati",
    "Marriage biodata format for Prajapati community",
    "Prajapati caste marriage biodata template",
    "Best matrimony biodata for Prajapati bride",
    "Best matrimony biodata for Prajapati groom",

    "Best marriage biodata for Patel",
    "Marriage biodata format for Patel community",
    "Patel caste marriage biodata template",
    "Best matrimony biodata for Patel bride",
    "Best matrimony biodata for Patel groom",

    "Best marriage biodata for Chauhan",
    "Marriage biodata format for Chauhan community",
    "Chauhan caste marriage biodata template",
    "Best matrimony biodata for Chauhan bride",
    "Best matrimony biodata for Chauhan groom",

    "Best marriage biodata for Thakur",
    "Marriage biodata format for Thakur community",
    "Thakur caste marriage biodata template",
    "Best matrimony biodata for Thakur bride",
    "Best matrimony biodata for Thakur groom",

    "Best marriage biodata for Bairwa",
    "Marriage biodata format for Bairwa community",
    "Bairwa caste marriage biodata template",
    "Best matrimony biodata for Bairwa bride",
    "Best matrimony biodata for Bairwa groom",

    "Best marriage biodata for Meena",
    "Marriage biodata format for Meena community",
    "Meena caste marriage biodata template",
    "Best matrimony biodata for Meena bride",
    "Best matrimony biodata for Meena groom",

    "Best marriage biodata for Lodhi",
    "Marriage biodata format for Lodhi community",
    "Lodhi caste marriage biodata template",
    "Best matrimony biodata for Lodhi bride",
    "Best matrimony biodata for Lodhi groom",

    "Best marriage biodata for Gurjar",
    "Marriage biodata format for Gurjar community",
    "Gurjar caste marriage biodata template",
    "Best matrimony biodata for Gurjar bride",
    "Best matrimony biodata for Gurjar groom",

    "Best marriage biodata for Koli",
    "Marriage biodata format for Koli community",
    "Koli caste marriage biodata template",
    "Best matrimony biodata for Koli bride",
    "Best matrimony biodata for Koli groom",

    "Best marriage biodata for Reddy",
    "Marriage biodata format for Reddy community",
    "Reddy caste marriage biodata template",
    "Best matrimony biodata for Reddy bride",
    "Best matrimony biodata for Reddy groom",

    "Best marriage biodata for Nadar",
    "Marriage biodata format for Nadar community",
    "Nadar caste marriage biodata template",
    "Best matrimony biodata for Nadar bride",
    "Best matrimony biodata for Nadar groom",
    "Best marriage biodata for Kumbhar",
    "Marriage biodata format for Kumbhar community",
    "Kumbhar caste marriage biodata template",
    "Best matrimony biodata for Kumbhar bride",
    "Best matrimony biodata for Kumbhar groom",

    "Best marriage biodata for Mali",
    "Marriage biodata format for Mali community",
    "Mali caste marriage biodata template",
    "Best matrimony biodata for Mali bride",
    "Best matrimony biodata for Mali groom",

    "Best marriage biodata for Kahar",
    "Marriage biodata format for Kahar community",
    "Kahar caste marriage biodata template",
    "Best matrimony biodata for Kahar bride",
    "Best matrimony biodata for Kahar groom",

    "Best marriage biodata for Dhobi",
    "Marriage biodata format for Dhobi community",
    "Dhobi caste marriage biodata template",
    "Best matrimony biodata for Dhobi bride",
    "Best matrimony biodata for Dhobi groom",

    "Best marriage biodata for Beldar",
    "Marriage biodata format for Beldar community",
    "Beldar caste marriage biodata template",
    "Best matrimony biodata for Beldar bride",
    "Best matrimony biodata for Beldar groom",

    "Best marriage biodata for Ahir",
    "Marriage biodata format for Ahir community",
    "Ahir caste marriage biodata template",
    "Best matrimony biodata for Ahir bride",
    "Best matrimony biodata for Ahir groom",

    "Best marriage biodata for Gound",
    "Marriage biodata format for Gound community",
    "Gound caste marriage biodata template",
    "Best matrimony biodata for Gound bride",
    "Best matrimony biodata for Gound groom",

    "Best marriage biodata for Gond",
    "Marriage biodata format for Gond community",
    "Gond caste marriage biodata template",
    "Best matrimony biodata for Gond bride",
    "Best matrimony biodata for Gond groom",

    "Best marriage biodata for Halba",
    "Marriage biodata format for Halba community",
    "Halba caste marriage biodata template",
    "Best matrimony biodata for Halba bride",
    "Best matrimony biodata for Halba groom",

    "Best marriage biodata for Koshti",
    "Marriage biodata format for Koshti community",
    "Koshti caste marriage biodata template",
    "Best matrimony biodata for Koshti bride",
    "Best matrimony biodata for Koshti groom",

    "Best marriage biodata for Tiwari",
    "Marriage biodata format for Tiwari community",
    "Tiwari caste marriage biodata template",
    "Best matrimony biodata for Tiwari bride",
    "Best matrimony biodata for Tiwari groom",

    "Best marriage biodata for Mishra",
    "Marriage biodata format for Mishra community",
    "Mishra caste marriage biodata template",
    "Best matrimony biodata for Mishra bride",
    "Best matrimony biodata for Mishra groom",

    "Best marriage biodata for Shukla",
    "Marriage biodata format for Shukla community",
    "Shukla caste marriage biodata template",
    "Best matrimony biodata for Shukla bride",
    "Best matrimony biodata for Shukla groom",

    "Best marriage biodata for Pandey",
    "Marriage biodata format for Pandey community",
    "Pandey caste marriage biodata template",
    "Best matrimony biodata for Pandey bride",
    "Best matrimony biodata for Pandey groom",

    "Best marriage biodata for Dubey",
    "Marriage biodata format for Dubey community",
    "Dubey caste marriage biodata template",
    "Best matrimony biodata for Dubey bride",
    "Best matrimony biodata for Dubey groom",

    "Best marriage biodata for Pathak",
    "Marriage biodata format for Pathak community",
    "Pathak caste marriage biodata template",
    "Best matrimony biodata for Pathak bride",
    "Best matrimony biodata for Pathak groom",

    "Best marriage biodata for Sen",
    "Marriage biodata format for Sen community",
    "Sen caste marriage biodata template",
    "Best matrimony biodata for Sen bride",
    "Best matrimony biodata for Sen groom",

    "Best marriage biodata for Gupta",
    "Marriage biodata format for Gupta community",
    "Gupta caste marriage biodata template",
    "Best matrimony biodata for Gupta bride",
    "Best matrimony biodata for Gupta groom",

    "Best marriage biodata for Jain Agarwal",
    "Marriage biodata format for Jain Agarwal community",
    "Jain Agarwal caste marriage biodata template",
    "Best matrimony biodata for Jain Agarwal bride",
    "Best matrimony biodata for Jain Agarwal groom",

    "Best marriage biodata for Bhosale",
    "Marriage biodata format for Bhosale community",
    "Bhosale caste marriage biodata template",
    "Best matrimony biodata for Bhosale bride",
    "Best matrimony biodata for Bhosale groom",
    "biodata for shaadi.com profile",
    "best biodata for shaadi profile india",
    "marriage biodata for shaadi website",
    "matrimony biodata format for shaadi.com",
    "shaadi profile biodata template free download",

    "best shaadi biodata for bride",
    "best shaadi biodata for groom",
    "simple shaadi biodata format",
    "modern shaadi biodata template",
    "traditional shaadi biodata format india",

    "shaadi.com profile sample for girl",
    "shaadi.com profile sample for boy",
    "how to create shaadi.com biodata",
    "perfect shaadi profile format",
    "traditional matrimony biodata for shaadi",

    "hindu shaadi biodata format",
    "muslim shaadi biodata format",
    "sikh shaadi biodata template",
    "christian shaadi biodata format",
    "jain shaadi biodata template",

    "shaadi biodata word format download",
    "shaadi biodata pdf format free",
    "free shaadi biodata maker online",
    "download shaadi biodata template free",
    "editable shaadi biodata format",

    "best shaadi profile headline examples",
    "shaadi bio examples for girl",
    "shaadi bio examples for boy",
    "attractive shaadi profile description",
    "shaadi profile summary samples",

    "premium shaadi biodata design",
    "creative shaadi biodata templates",
    "one page shaadi biodata format",
    "latest shaadi biodata design 2026",
    "trending matrimony biodata format india",

    "shaadi profile for nri marriage",
    "shaadi biodata for working traditionals",
    "shaadi biodata for government job",
    "shaadi biodata for software engineer",
    "shaadi biodata for businessman",

    "caste wise shaadi biodata format",
    "community based shaadi biodata template",
    "arranged marriage shaadi biodata",
    "love marriage shaadi biodata format",
    "indian matrimony shaadi profile format",
    "Biodata for jeevansathi profile",
    "Best biodata for jeevansathi.com",
    "Marriage biodata format for jeevansathi",
    "Jeevansathi profile biodata template",
    "Jeevansathi biodata format free download",

    "Best jeevansathi biodata for bride",
    "Best jeevansathi biodata for groom",
    "Simple jeevansathi biodata format",
    "Modern jeevansathi biodata template",
    "Traditional jeevansathi biodata format india",

    "Jeevansathi profile sample for girl",
    "Jeevansathi profile sample for boy",
    "How to create jeevansathi profile biodata",
    "Perfect jeevansathi profile format",
    "Traditional matrimony biodata for jeevansathi",

    "Hindu jeevansathi biodata format",
    "Muslim jeevansathi biodata format",
    "Sikh jeevansathi biodata template",
    "Christian jeevansathi biodata format",
    "Jain jeevansathi biodata template",

    "Jeevansathi biodata word format download",
    "Jeevansathi biodata pdf free download",
    "Free jeevansathi biodata maker online",
    "Download jeevansathi biodata template",
    "Editable jeevansathi biodata format",

    "Best jeevansathi profile headline examples",
    "Jeevansathi bio examples for girl",
    "Jeevansathi bio examples for boy",
    "Attractive jeevansathi profile description",
    "Jeevansathi profile summary samples",

    "Premium jeevansathi biodata design",
    "Creative jeevansathi biodata templates",
    "One page jeevansathi biodata format",
    "Latest jeevansathi biodata design 2026",
    "Trending matrimony biodata format india",

    "Jeevansathi profile for nri marriage",
    "Jeevansathi biodata for working traditionals",
    "Jeevansathi biodata for government job",
    "Jeevansathi biodata for software engineer",
    "Jeevansathi biodata for businessman",

    "Caste wise jeevansathi biodata format",
    "Community based jeevansathi biodata template",
    "Arranged marriage jeevansathi biodata",
    "Love marriage jeevansathi biodata format",
    "Indian matrimony jeevansathi profile format",
    "Jeevansathi profile headline for girl",
    "Jeevansathi profile headline for boy",
    "Best jeevansathi about me examples",
    "Jeevansathi about me for bride sample",
    "Jeevansathi about me for groom sample",

    "Jeevansathi profile description for working girl",
    "Jeevansathi profile description for working boy",
    "Simple jeevansathi profile summary for girl",
    "Simple jeevansathi profile summary for boy",
    "Short jeevansathi bio for marriage",

    "Jeevansathi biodata format for freshers",
    "Jeevansathi biodata for college students",
    "Jeevansathi biodata for first job",
    "Jeevansathi biodata for experienced traditionals",
    "Jeevansathi biodata for business owner",

    "Jeevansathi biodata for doctor",
    "Jeevansathi biodata for engineer",
    "Jeevansathi biodata for teacher",
    "Jeevansathi biodata for government employee",
    "Jeevansathi biodata for private job",

    "Jeevansathi biodata without photo",
    "Jeevansathi biodata with photo format",
    "Jeevansathi biodata with horoscope details",
    "Jeevansathi biodata with kundli details",
    "Jeevansathi biodata with family details",

    "Jeevansathi biodata for second marriage",
    "Jeevansathi biodata for divorcee",
    "Jeevansathi biodata for widow profile",
    "Jeevansathi biodata for widower profile",
    "Jeevansathi biodata for single parent",

    "Jeevansathi biodata for simple family",
    "Jeevansathi biodata for rich family",
    "Jeevansathi biodata for middle class family",
    "Jeevansathi biodata for joint family",
    "Jeevansathi biodata for nuclear family",

    "Jeevansathi biodata in english format",
    "Jeevansathi biodata in hindi format",
    "Jeevansathi biodata in marathi format",
    "Jeevansathi biodata in tamil format",
    "Jeevansathi biodata in telugu format",

    "Jeevansathi biodata design in word",
    "Jeevansathi biodata design in pdf",
    "Jeevansathi biodata format in docx",
    "Jeevansathi biodata editable template",
    "Jeevansathi biodata online maker free",

    "Jeevansathi profile tips for quick match",
    "How to get match on jeevansathi fast",
    "Best jeevansathi profile optimization tips",
    "Jeevansathi profile mistakes to avoid",
    "Jeevansathi profile seo tips",
    "Jeevansathi profile for nri bride",
    "Jeevansathi profile for nri groom",
    "Jeevansathi biodata for abroad marriage",
    "Jeevansathi biodata for usa groom",
    "Jeevansathi biodata for uk bride",

    "Jeevansathi biodata for canada marriage",
    "Jeevansathi biodata for australia groom",
    "Jeevansathi biodata for gulf jobs",
    "Jeevansathi biodata for nri traditionals",
    "Jeevansathi biodata for overseas match",

    "Jeevansathi biodata with salary details",
    "Jeevansathi biodata with job description",
    "Jeevansathi biodata with career goals",
    "Jeevansathi biodata with lifestyle details",
    "Jeevansathi biodata with hobbies and interests",

    "Jeevansathi biodata for fair complexion bride",
    "Jeevansathi biodata for tall groom",
    "Jeevansathi biodata for slim bride",
    "Jeevansathi biodata for fitness lover",
    "Jeevansathi biodata for vegetarian profile",

    "Jeevansathi biodata for non vegetarian profile",
    "Jeevansathi biodata for manglik",
    "Jeevansathi biodata for non manglik",
    "Jeevansathi biodata for horoscope matching",
    "Jeevansathi biodata for kundli match",

    "Jeevansathi biodata for early marriage",
    "Jeevansathi biodata for late marriage",
    "Jeevansathi biodata for 25 year old bride",
    "Jeevansathi biodata for 30 year old groom",
    "Jeevansathi biodata for 35 plus marriage",

    "Jeevansathi biodata for educated bride",
    "Jeevansathi biodata for highly educated groom",
    "Jeevansathi biodata for mba bride",
    "Jeevansathi biodata for btech groom",
    "Jeevansathi biodata for phd profile",

    "Jeevansathi biodata for simple lifestyle",
    "Jeevansathi biodata for modern lifestyle",
    "Jeevansathi biodata for traditional values",
    "Jeevansathi biodata for religious family",
    "Jeevansathi biodata for spiritual person",

    "Jeevansathi biodata format with parents details",
    "Jeevansathi biodata format with siblings details",
    "Jeevansathi biodata format with contact details",
    "Jeevansathi biodata format with address",
    "Jeevansathi biodata format with expectations",

    "Jeevansathi biodata for quick marriage",
    "Jeevansathi biodata for serious relationship",
    "Jeevansathi biodata for long term commitment",
    "Jeevansathi biodata for family oriented person",
    "Jeevansathi biodata for career focused individual",
    "Jeevansathi biodata format for arranged marriage india",
    "Jeevansathi biodata format for love marriage india",
    "Jeevansathi biodata for simple girl",
    "Jeevansathi biodata for simple boy",
    "Jeevansathi biodata for traditional bride india",

    "Jeevansathi biodata for modern groom india",
    "Jeevansathi biodata for indian culture marriage",
    "Jeevansathi biodata for cultural family background",
    "Jeevansathi biodata for family oriented bride",
    "Jeevansathi biodata for family oriented groom",

    "Jeevansathi biodata format with height and weight",
    "Jeevansathi biodata format with education details",
    "Jeevansathi biodata format with income details",
    "Jeevansathi biodata format with religion details",
    "Jeevansathi biodata format with caste details",

    "Jeevansathi biodata for vegetarian family india",
    "Jeevansathi biodata for non vegetarian family india",
    "Jeevansathi biodata for teetotaler profile",
    "Jeevansathi biodata for non smoker profile",
    "Jeevansathi biodata for no drinking habits",

    "Jeevansathi biodata for homely girl",
    "Jeevansathi biodata for career oriented girl",
    "Jeevansathi biodata for ambitious boy",
    "Jeevansathi biodata for responsible groom",
    "Jeevansathi biodata for caring bride",

    "Jeevansathi biodata format with partner expectations",
    "Jeevansathi biodata format with life goals",
    "Jeevansathi biodata format with personality traits",
    "Jeevansathi biodata format with hobbies section",
    "Jeevansathi biodata format with achievements",

    "Jeevansathi biodata for working woman india",
    "Jeevansathi biodata for housewife profile",
    "Jeevansathi biodata for startup founder",
    "Jeevansathi biodata for freelancer profile",
    "Jeevansathi biodata for self employed person",

    "Jeevansathi biodata format in one page pdf",
    "Jeevansathi biodata format in two page design",
    "Jeevansathi biodata minimal design template",
    "Jeevansathi biodata elegant design format",
    "Jeevansathi biodata traditional layout template",

    "Jeevansathi biodata for quick response profile",
    "Jeevansathi biodata for high match success",
    "Jeevansathi biodata for premium membership users",
    "Jeevansathi biodata for verified profiles",
    "Jeevansathi biodata for serious marriage seekers",
    "Best jeevansathi biodata format",
    "Best jeevansathi biodata template free",
    "Best jeevansathi biodata for bride",
    "Best jeevansathi biodata for groom",
    "Best jeevansathi profile format india",

    "Best jeevansathi profile for girl",
    "Best jeevansathi profile for boy",
    "Best jeevansathi bio examples",
    "Best jeevansathi about me for marriage",
    "Best jeevansathi profile description",

    "Best jeevansathi biodata design 2026",
    "Best jeevansathi biodata word format",
    "Best jeevansathi biodata pdf download",
    "Best jeevansathi biodata editable template",
    "Best jeevansathi biodata maker online",

    "Best jeevansathi biodata for arranged marriage",
    "Best jeevansathi biodata for love marriage",
    "Best jeevansathi biodata for indian marriage",
    "Best jeevansathi biodata for traditional family",
    "Best jeevansathi biodata for modern profile",

    "Best jeevansathi biodata for working traditionals",
    "Best jeevansathi biodata for government job",
    "Best jeevansathi biodata for software engineer",
    "Best jeevansathi biodata for businessman",
    "Best jeevansathi biodata for student",

    "Best jeevansathi biodata with photo format",
    "Best jeevansathi biodata without photo",
    "Best jeevansathi biodata with family details",
    "Best jeevansathi biodata with kundli details",
    "Best jeevansathi biodata with horoscope",

    "Best jeevansathi biodata one page format",
    "Best jeevansathi biodata two page format",
    "Best jeevansathi biodata simple format",
    "Best jeevansathi biodata modern design",
    "Best jeevansathi biodata traditional layout",

    "Best jeevansathi biodata for nri",
    "Best jeevansathi biodata for abroad marriage",
    "Best jeevansathi biodata for usa profile",
    "Best jeevansathi biodata for uk profile",
    "Best jeevansathi biodata for canada profile",

    "Best jeevansathi biodata format for quick match",
    "Best jeevansathi biodata for high response",
    "Best jeevansathi biodata for serious relationship",
    "Best jeevansathi biodata for premium users",
    "Best jeevansathi biodata for verified profile",
    "Biodata for marriage in delhi",
    "Best marriage biodata format in delhi",
    "Marriage biodata template in delhi free download",
    "Simple marriage biodata format in delhi",
    "Modern marriage biodata format in delhi",

    "Traditional marriage biodata format in delhi",
    "Marriage biodata for bride in delhi",
    "Marriage biodata for groom in delhi",
    "Indian marriage biodata format in delhi",
    "Traditional marriage biodata format in delhi",

    "Marriage biodata word format in delhi",
    "Marriage biodata pdf format in delhi",
    "Editable marriage biodata template in delhi",
    "Free marriage biodata maker in delhi",
    "Download marriage biodata format in delhi",

    "Marriage biodata with photo in delhi",
    "Marriage biodata without photo in delhi",
    "Marriage biodata with family details in delhi",
    "Marriage biodata with kundli in delhi",
    "Marriage biodata with horoscope in delhi",

    "Marriage biodata for arranged marriage in delhi",
    "Marriage biodata for love marriage in delhi",
    "Marriage biodata for working traditionals in delhi",
    "Marriage biodata for government job in delhi",
    "Marriage biodata for nri in delhi",

    "Best biodata for shaadi in delhi",
    "Best biodata for jeevansathi in delhi",
    "Matrimony biodata format in delhi",
    "Delhi marriage profile biodata format",
    "Delhi matrimony biodata template",
    "Biodata for marriage in mumbai",
    "Biodata for marriage in bangalore",
    "Biodata for marriage in hyderabad",
    "Biodata for marriage in chennai",
    "Biodata for marriage in kolkata",

    "Biodata for marriage in pune",
    "Biodata for marriage in ahmedabad",
    "Biodata for marriage in jaipur",
    "Biodata for marriage in lucknow",
    "Biodata for marriage in kanpur",

    "Biodata for marriage in nagpur",
    "Biodata for marriage in indore",
    "Biodata for marriage in bhopal",
    "Biodata for marriage in patna",
    "Biodata for marriage in ranchi",

    "Biodata for marriage in chandigarh",
    "Biodata for marriage in surat",
    "Biodata for marriage in vadodara",
    "Biodata for marriage in rajkot",
    "Biodata for marriage in varanasi",

    "Biodata for marriage in prayagraj",
    "Biodata for marriage in agra",
    "Biodata for marriage in meerut",
    "Biodata for marriage in ghaziabad",
    "Biodata for marriage in noida",

    "Biodata for marriage in faridabad",
    "Biodata for marriage in gurgaon",
    "Biodata for marriage in dehradun",
    "Biodata for marriage in haridwar",
    "Biodata for marriage in shimla",

    "Biodata for marriage in jammu",
    "Biodata for marriage in srinagar",
    "Biodata for marriage in amritsar",
    "Biodata for marriage in ludhiana",
    "Biodata for marriage in jalandhar",

    "Biodata for marriage in raipur",
    "Biodata for marriage in bilaspur",
    "Biodata for marriage in durg",
    "Biodata for marriage in bhilai",
    "Biodata for marriage in korba",

    "Biodata for marriage in visakhapatnam",
    "Biodata for marriage in vijayawada",
    "Biodata for marriage in tirupati",
    "Biodata for marriage in madurai",
    "Biodata for marriage in coimbatore",

    "Biodata for marriage in kochi",
    "Biodata for marriage in trivandrum",
    "Biodata for marriage in mysore",
    "Biodata for marriage in mangalore",
    "Biodata for marriage in hubli",
    "Biodata for marriage in nashik",
    "Biodata for marriage in aurangabad",
    "Biodata for marriage in solapur",
    "Biodata for marriage in kolhapur",
    "Biodata for marriage in sangli",

    "Biodata for marriage in ujjain",
    "Biodata for marriage in gwalior",
    "Biodata for marriage in jabalpur",
    "Biodata for marriage in sagar",
    "Biodata for marriage in rewa",

    "Biodata for marriage in ajmer",
    "Biodata for marriage in kota",
    "Biodata for marriage in bikaner",
    "Biodata for marriage in udaipur",
    "Biodata for marriage in alwar",

    "Biodata for marriage in muzaffarpur",
    "Biodata for marriage in gaya",
    "Biodata for marriage in bhagalpur",
    "Biodata for marriage in darbhanga",
    "Biodata for marriage in purnia",

    "Biodata for marriage in siliguri",
    "Biodata for marriage in durgapur",
    "Biodata for marriage in asansol",
    "Biodata for marriage in howrah",
    "Biodata for marriage in malda",

    "Biodata for marriage in panaji",
    "Biodata for marriage in margao",
    "Biodata for marriage in vasco da gama",
    "Biodata for marriage in mapusa",
    "Biodata for marriage in ponda",

    "Biodata for marriage in itanagar",
    "Biodata for marriage in naharlagun",
    "Biodata for marriage in pasighat",
    "Biodata for marriage in tawang",
    "Biodata for marriage in ziro",

    "Biodata for marriage in imphal",
    "Biodata for marriage in churachandpur",
    "Biodata for marriage in thoubal",
    "Biodata for marriage in kakching",
    "Biodata for marriage in bishnupur",

    "Biodata for marriage in aizawl",
    "Biodata for marriage in lunglei",
    "Biodata for marriage in champhai",
    "Biodata for marriage in kolasib",
    "Biodata for marriage in serchhip",

    "Biodata for marriage in shillong",
    "Biodata for marriage in tura",
    "Biodata for marriage in jowai",
    "Biodata for marriage in nongpoh",
    "Biodata for marriage in baghmara",
    "Biodata for marriage in tiruchirappalli",
    "Biodata for marriage in salem",
    "Biodata for marriage in erode",
    "Biodata for marriage in vellore",
    "Biodata for marriage in tirunelveli",

    "Biodata for marriage in warangal",
    "Biodata for marriage in nizamabad",
    "Biodata for marriage in karimnagar",
    "Biodata for marriage in khammam",
    "Biodata for marriage in adilabad",

    "Biodata for marriage in belgaum",
    "Biodata for marriage in davanagere",
    "Biodata for marriage in gulbarga",
    "Biodata for marriage in shimoga",
    "Biodata for marriage in tumkur",

    "Biodata for marriage in thrissur",
    "Biodata for marriage in kannur",
    "Biodata for marriage in kollam",
    "Biodata for marriage in alappuzha",
    "Biodata for marriage in palakkad",

    "Biodata for marriage in jamshedpur",
    "Biodata for marriage in dhanbad",
    "Biodata for marriage in bokaro",
    "Biodata for marriage in hazaribagh",
    "Biodata for marriage in deoghar",

    "Biodata for marriage in cuttack",
    "Biodata for marriage in rourkela",
    "Biodata for marriage in sambalpur",
    "Biodata for marriage in berhampur",
    "Biodata for marriage in balasore",

    "Biodata for marriage in guwahati",
    "Biodata for marriage in silchar",
    "Biodata for marriage in dibrugarh",
    "Biodata for marriage in tezpur",
    "Biodata for marriage in nagaon",

    "Biodata for marriage in agartala",
    "Biodata for marriage in udaipur tripura",
    "Biodata for marriage in dharmanagar",
    "Biodata for marriage in kailashahar",
    "Biodata for marriage in ambassa",

    "Biodata for marriage in port blair",
    "Biodata for marriage in diglipur",
    "Biodata for marriage in mayabunder",
    "Biodata for marriage in rangat",
    "Biodata for marriage in hut bay",

    "Biodata for marriage in leh",
    "Biodata for marriage in kargil",
    "Biodata for marriage in anantnag",
    "Biodata for marriage in baramulla",
    "Biodata for marriage in kupwara",
    "Biodata for marriage in rohtak",
    "Biodata for marriage in hisar",
    "Biodata for marriage in panipat",
    "Biodata for marriage in sonipat",
    "Biodata for marriage in ambala",

    "Biodata for marriage in bathinda",
    "Biodata for marriage in patiala",
    "Biodata for marriage in mohali",
    "Biodata for marriage in hoshiarpur",
    "Biodata for marriage in kapurthala",

    "Biodata for marriage in haldwani",
    "Biodata for marriage in rudrapur",
    "Biodata for marriage in kashipur",
    "Biodata for marriage in rishikesh",
    "Biodata for marriage in almora",

    "Biodata for marriage in satna",
    "Biodata for marriage in chhindwara",
    "Biodata for marriage in katni",
    "Biodata for marriage in singrauli",
    "Biodata for marriage in seoni",

    "Biodata for marriage in ratlam",
    "Biodata for marriage in khandwa",
    "Biodata for marriage in burhanpur",
    "Biodata for marriage in neemuch",
    "Biodata for marriage in mandsaur",

    "Biodata for marriage in siwan",
    "Biodata for marriage in chapra",
    "Biodata for marriage in arrah",
    "Biodata for marriage in bihar sharif",
    "Biodata for marriage in samastipur",

    "Biodata for marriage in katihar",
    "Biodata for marriage in begusarai",
    "Biodata for marriage in madhubani",
    "Biodata for marriage in sitamarhi",
    "Biodata for marriage in motihari",

    "Biodata for marriage in kalyan",
    "Biodata for marriage in thane",
    "Biodata for marriage in navi mumbai",
    "Biodata for marriage in ulhasnagar",
    "Biodata for marriage in virar",

    "Biodata for marriage in hosur",
    "Biodata for marriage in tiruppur",
    "Biodata for marriage in thoothukudi",
    "Biodata for marriage in nagapattinam",
    "Biodata for marriage in cuddalore",

    "Biodata for marriage in anantapur",
    "Biodata for marriage in kurnool",
    "Biodata for marriage in nellore",
    "Biodata for marriage in rajahmundry",
    "Biodata for marriage in eluru",

    "Biodata for marriage in colombo",
    "Biodata for marriage in kandy",
    "Biodata for marriage in galle",
    "Biodata for marriage in negombo",
    "Biodata for marriage in jaffna",

    "Biodata for marriage in trincomalee",
    "Biodata for marriage in anuradhapura",
    "Biodata for marriage in batticaloa",
    "Biodata for marriage in kurunegala",
    "Biodata for marriage in ratnapura",

    "Biodata for marriage in badulla",
    "Biodata for marriage in matara",
    "Biodata for marriage in kalutara",
    "Biodata for marriage in hambantota",
    "Biodata for marriage in puttalam",

    // Problem-solving style
    "How to create perfect marriage biodata",
    "What to include in marriage biodata",
    "Why your marriage biodata is not getting responses",
    "Mistakes to avoid in marriage biodata",
    "How to write attractive marriage biodata",

    // Comparison style
    "Simple vs modern marriage biodata format",
    "Word vs pdf marriage biodata which is better",
    "Traditional vs traditional marriage biodata",
    "One page vs two page biodata format",
    "Online vs offline marriage biodata creation",

    // Question-based (high CTR)
    "Which biodata format is best for marriage",
    "How to make biodata for arranged marriage",
    "What is the best bio for matrimony profile",
    "How to impress with marriage biodata",
    "What makes a biodata stand out for marriage",

    // Emotional / aspirational style
    "Perfect biodata to find ideal life partner",
    "Marriage biodata that gets instant responses",
    "Create biodata that families love",
    "Attractive biodata for successful marriage",
    "Biodata that increases match chances",

    // Action / CTA style
    "Create your marriage biodata in minutes",
    "Download ready to use marriage biodata",
    "Build traditional biodata for marriage online",
    "Generate marriage biodata instantly",
    "Start your matrimony profile today",

    // Niche / targeted style
    "Marriage biodata for introvert personality",
    "Marriage biodata for career focused individuals",
    "Marriage biodata for family oriented people",
    "Marriage biodata for simple lifestyle",
    "Marriage biodata for modern indian youth",

    // Authority / expert style
    "Expert approved marriage biodata format",
    "Top rated biodata templates for matrimony",
    "Recommended biodata structure for marriage",
    "Pro tips for writing marriage biodata",
    "Best practices for matrimony profile",

    // Trend / viral style
    "Latest marriage biodata trends 2026",
    "Trending biodata formats for matrimony",
    "Viral marriage biodata ideas",
    "New style biodata designs for marriage",
    "Updated matrimony profile formats",

    // Conversion focused style
    "Marriage biodata that converts to matches",
    "High response matrimony biodata format",
    "Biodata format that gets quick proposals",
    "Best biodata for maximum profile views",
    "Optimized biodata for matrimony success",

    // Long-tail hybrid style
    "Best simple marriage biodata format for quick response",
    "Modern matrimony biodata template for working traditionals",
    "Traditional indian marriage biodata with family details",
    "Traditional biodata format for arranged marriage india",
    "Free downloadable biodata template for bride and groom",

    // Storytelling style
    "Marriage biodata that tells your life story",
    "How to write a compelling marriage biodata story",
    "Personal story based biodata for matrimony",
    "Narrative style marriage biodata format",
    "Story driven biodata for better matches",

    // Result-driven style
    "Marriage biodata that gets 10x more responses",
    "Biodata format that increases match success rate",
    "High converting marriage biodata examples",
    "Biodata that attracts serious marriage proposals",
    "Optimized biodata for faster partner search",

    // Personal branding style
    "Personal branding in marriage biodata",
    "How to showcase personality in biodata",
    "Unique personal brand biodata for matrimony",
    "Standout biodata format for modern profiles",
    "Build a premium marriage profile identity",

    // Minimalist style
    "Minimalist marriage biodata format",
    "Clean and simple biodata for marriage",
    "Less text high impact biodata design",
    "Minimal biodata template for quick reading",
    "Modern minimalist matrimony profile format",

    // Luxury / premium style
    "Premium marriage biodata design ideas",
    "Luxury style biodata template for matrimony",
    "High end marriage biodata format",
    "Elite biodata design for premium profiles",
    "Traditional designer biodata for marriage",

    // Psychological trigger style
    "Marriage biodata that builds trust instantly",
    "How to create emotional connection through biodata",
    "Biodata that makes strong first impression",
    "Trust building matrimony biodata format",
    "Psychology based biodata writing tips",

    // Speed / convenience style
    "Create marriage biodata in 2 minutes",
    "Instant biodata generator for matrimony",
    "Quick and easy marriage biodata format",
    "Fast biodata builder for marriage profiles",
    "Ready made biodata templates for instant use",

    // SEO / digital angle
    "Seo optimized marriage biodata format",
    "How to rank your matrimony profile higher",
    "Profile optimization tips for matrimony sites",
    "Search friendly biodata format for marriage",
    "Boost visibility of marriage biodata online",

    // Hyper-specific use cases
    "Marriage biodata for late marriage profiles",
    "Marriage biodata for second chance relationships",
    "Marriage biodata for independent individuals",
    "Marriage biodata for urban lifestyle",
    "Marriage biodata for traditional values with modern outlook",

    // Hook / curiosity style
    "This marriage biodata format gets more matches",
    "Secret formula for perfect marriage biodata",
    "Why most marriage biodata fail and how to fix",
    "Hidden tips for successful matrimony profile",
    "Unknown tricks to improve biodata response rate",
    // Before / After transformation style
    "Before and after marriage biodata examples",
    "Transform your simple biodata into premium format",
    "Upgrade your marriage biodata for better matches",
    "Old vs new marriage biodata comparison",
    "Improve your biodata to get more responses",

    // Checklist style
    "Marriage biodata checklist for perfect profile",
    "Complete biodata checklist for arranged marriage",
    "Step by step marriage biodata creation guide",
    "Essential points to include in biodata",
    "Marriage biodata writing checklist for beginners",

    // Template bundle style
    "Free bundle of marriage biodata templates",
    "Top 10 marriage biodata formats collection",
    "All in one matrimony biodata templates pack",
    "Download multiple biodata designs for marriage",
    "Best biodata template collection for 2026",

    // Industry / niche positioning
    "Corporate style marriage biodata format",
    "Professional style marriage biodata format",
    "Portfolio style matrimony biodata",
    "Linkedin inspired marriage profile format",
    "Cv style biodata for traditional marriage",

    // Cultural fusion style
    "Modern plus traditional marriage biodata format",
    "Indian culture based biodata with modern design",
    "Fusion style matrimony biodata template",
    "Classic and modern mix biodata format",
    "Desi plus traditional marriage biodata",

    // Personality driven style
    "Marriage biodata for introverts and shy people",
    "Marriage biodata for extroverts and social personalities",
    "Marriage biodata for ambitious individuals",
    "Marriage biodata for calm and simple personalities",
    "Marriage biodata for creative and artistic people",

    // Outcome guarantee style
    "Marriage biodata designed for guaranteed responses",
    "Biodata format that improves matchmaking chances",
    "Proven biodata format for successful matches",
    "Biodata structure that gets noticed quickly",
    "Result oriented matrimony biodata format",

    // Micro-intent keywords
    "Best font for marriage biodata",
    "Ideal color combination for biodata design",
    "Perfect layout for matrimony biodata",
    "Best heading style for biodata",
    "How to structure biodata sections",

    // Language tone style
    "Formal tone marriage biodata format",
    "Friendly tone matrimony biodata examples",
    "Short and crisp biodata writing style",
    "Detailed biodata format for families",
    "Balanced tone marriage biodata format",

    // Future / AI angle
    "Ai generated marriage biodata format",
    "Smart biodata builder for matrimony",
    "Automated biodata creation for marriage",
    "Future of digital matrimony biodata",
    "Ai powered marriage profile generator",

    // Reverse psychology style
    "Why you should not use basic marriage biodata",
    "Stop using old marriage biodata formats",
    "Common biodata mistakes ruining your chances",
    "Why simple biodata fails in matrimony",
    "Things to avoid in marriage biodata",

    // Curiosity gap style
    "You are missing this in your marriage biodata",
    "One trick to improve your matrimony biodata",
    "Hidden secrets of successful marriage biodata",
    "Little known tips for biodata success",
    "What nobody tells you about marriage biodata",

    // Case study style
    "Real marriage biodata examples that worked",
    "Successful matrimony biodata case study",
    "Biodata that helped find perfect partner",
    "Winning biodata examples for marriage",
    "Top performing biodata samples india",

    // Trend hacking style
    "Instagram inspired marriage biodata format",
    "Modern social media style biodata design",
    "Viral format for matrimony biodata",
    "Trending biodata layouts used in 2026",
    "New age digital biodata format",

    // UX / readability style
    "Easy to read marriage biodata format",
    "User friendly biodata layout for families",
    "Readable biodata structure for quick scanning",
    "Clean layout biodata for better understanding",
    "Simple structure biodata for faster decisions",

    // Time-based urgency style
    "Last minute marriage biodata format",
    "Quick fix for marriage biodata today",
    "Update your biodata before sending proposal",
    "Fast improvement tips for biodata",
    "Instant upgrade for matrimony profile",

    // Authority + trust style
    "Scientifically structured marriage biodata",
    "Data driven biodata format for matrimony",
    "Research based biodata writing tips",
    "Expert backed matrimony profile format",
    "Trusted biodata structure for families",

    // Personalization style
    "Custom marriage biodata for unique personality",
    "Personalized biodata template for matrimony",
    "Tailor made biodata format for individuals",
    "Unique biodata style for every profile",
    "Individual focused matrimony biodata",

    // Engagement style
    "Interactive marriage biodata ideas",
    "Creative biodata format to impress families",
    "Engaging matrimony profile format",
    "Biodata design that captures attention",
    "High engagement biodata examples",

    // Experimental / bold style
    "Unconventional marriage biodata format",
    "Out of the box biodata ideas for marriage",
    "Different style matrimony biodata format",
    "Creative experiments in biodata design",
    "Next generation marriage biodata format",

    // Decision-making style
    "How families evaluate marriage biodata",
    "What parents look for in marriage biodata",
    "Key factors that influence biodata selection",
    "How biodata impacts marriage decisions",
    "Decision making tips for matrimony biodata",

    // Behavior-based style
    "Why people ignore marriage biodata",
    "What makes someone reply to biodata",
    "User behavior in matrimony profile selection",
    "How biodata affects first impression psychology",
    "What increases biodata response rate",

    // Funnel / journey style
    "From biodata to marriage journey guide",
    "First step to finding partner with biodata",
    "Marriage proposal journey with biodata",
    "How biodata fits in matrimony process",
    "Complete matrimony funnel using biodata",

    // Data / stats style
    "Marriage biodata trends and statistics india",
    "Most used biodata formats in matrimony",
    "Top biodata elements that get responses",
    "Data backed marriage biodata insights",
    "Statistics of successful matrimony profiles",

    // Personal audit style
    "Check your marriage biodata score",
    "Audit your biodata for better results",
    "Analyze your matrimony profile performance",
    "Self review checklist for biodata",
    "Improve your biodata step by step",

    // Rewriting / optimization style
    "Rewrite your marriage biodata for better matches",
    "Optimize your biodata for higher responses",
    "Improve wording in matrimony biodata",
    "Edit your biodata for clarity and impact",
    "Upgrade your profile with better biodata",

    // Communication style
    "How biodata communicates personality",
    "Writing style tips for matrimony biodata",
    "Best way to present yourself in biodata",
    "Communication techniques in marriage biodata",
    "How to express values in biodata",

    // Trust / credibility style
    "How to build trust through marriage biodata",
    "Credible biodata format for matrimony",
    "Authentic biodata writing tips",
    "Honest presentation in marriage biodata",
    "Trust signals in matrimony profile",

    // Family-focused style
    "Family expectations in marriage biodata",
    "How to present family background in biodata",
    "Writing family details in matrimony biodata",
    "Importance of family section in biodata",
    "Family oriented biodata examples",

    // Compatibility style
    "How biodata helps in partner compatibility",
    "Matching preferences through biodata",
    "Compatibility factors in matrimony biodata",
    "Partner expectations in biodata format",
    "Biodata for better compatibility matching"

];
const getTargetDescription = (target: string) =>
    target.replace(/^best marriage biodata for\s*/i, "").trim();

export function getBiodataDetailMetadata({ titleTarget, name, slug, biodataId, rawTitle }: BiodataSeoArgs): Metadata {
    const target = titleTarget || name || biodataSeoTargets[0];
    const normalizedTarget = target.trim();
    const title = rawTitle || !normalizedTarget.toLowerCase().startsWith("best marriage biodata for")
        ? toTitleCase(normalizedTarget)
        : normalizedTarget;
    const descriptionTarget = rawTitle
        ? normalizedTarget.replace(/biodata\s*(for)?\s*/i, "").trim()
        : getTargetDescription(normalizedTarget);
    const description = rawTitle
        ? `Download the ${title}. This marriage proposal biodata template is tailored for ${descriptionTarget}, with caste-aware, culturally respectful presentation.`
        : `Download the best marriage biodata for ${descriptionTarget}. This biodata template is tailored for ${descriptionTarget}, with caste-aware, culturally respectful presentation.`;
    const canonicalSlug = slug || createSlug(normalizedTarget);
    const canonicalPath = biodataId ? `/${biodataId}/${canonicalSlug}` : `/biodata1111/${canonicalSlug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: canonicalPath,
            siteName: "Ditvi Biodata",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: `${normalizedTarget} biodata template`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.png"],
        },
        alternates: {
            canonical: canonicalPath,
        },
    };
}

export function getBiodataTargetBySlug(slug: string): string | undefined {
    return biodataSeoTargets.find((target) => createSlug(target) === slug);
}

export function getBiodataDetailMetadataFromSlug(slug: string, biodataId?: string): Metadata {
    const titleTarget = getBiodataTargetBySlug(slug);

    if (titleTarget) {
        return getBiodataDetailMetadata({ titleTarget, slug, biodataId });
    }

    return getBiodataDetailMetadata({
        titleTarget: slug.replace(/-/g, " "),
        slug,
        biodataId,
        rawTitle: true,
    });
}

export function getBiodataDetailMetadataList(titleTargets: string[]): Metadata[] {
    return titleTargets.map((target) => getBiodataDetailMetadata({ titleTarget: target }));
}

