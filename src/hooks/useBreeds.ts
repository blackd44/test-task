import { useEffect } from "react";
import useFetch from "./useFetch";

type State<T> = {
  data: T;
  loading: boolean;
  error: Error | null;
};

type breedType = {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  // reference_image_url: string
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: { imperial: string; metric: string };
  wikipedia_url: string;
};

type imageType = {
  url: string;
};

async function fetchImage(image_id: string): Promise<imageType> {
  const res = await fetch(`https://api.thecatapi.com/v1/images/${image_id}`);
  return res as imageType;
}

export default function useBreeds<T>(url: string): State<T> {
  const { data, loading, error } = useFetch<breedType[]>(url);

  useEffect(() => {
    if (!data) return;

    const out = data.map((breed) => {
      try {
        const image = Promise.all([fetchImage(breed.reference_image_id)]).then(
          async (values) => Promise.resolve(values[0])
        );
        return { ...breed, reference_image_url: image };
      } catch (error) {
        return breed;
      }
    });

    console.log({ out });
  }, [data]);

  return { data: data as T, loading, error };
}
