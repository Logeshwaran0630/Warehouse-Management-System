export async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/warehouses"); // Replace with your API URL
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  