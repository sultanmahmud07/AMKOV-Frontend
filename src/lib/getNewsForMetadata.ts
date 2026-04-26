import { BASEURL } from "@/utils/constant";

export default async function getNewsForMetadata() {
    try {
        const response = await fetch(
            `${BASEURL}/blog`,
            {
                // cache: "no-store",
                 next: {
                    revalidate: 5,
                }
            }
        )
        const data = await response.json();
        return data || null;

    }
    catch (error) {
        console.log(error);
        throw new Error("There was an error fetching News Data!")
    }
}