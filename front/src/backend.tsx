export const fetchCollectionPoints = async () => {
  try {
    const response = await fetch("http://localhost:3002/collectionpoints");
    if (!response.ok) {
      throw new Error("Get collection points failed...");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};

export const fetchOrganization = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3002/organizations/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error("Organization not found");
        return null;
      } else {
        throw new Error("Get organization failed...");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
