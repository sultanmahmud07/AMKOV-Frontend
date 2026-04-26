import { BASEURL } from "@/utils/constant";

export default async function getCategoriesForMetadata() {
    try {
        const response = await fetch(
            `${BASEURL}/category`,
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
        throw new Error("There was an error fetching Categories Data!")
    }
}