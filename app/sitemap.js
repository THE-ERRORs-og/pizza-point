export default function sitemap() {
  // Get the current date for lastModified
  const currentDate = new Date();

  // Your base URL - change this to your production domain when deploying
  const baseUrl = "https://pizzapoint.store";

  // Define all routes that should be in the sitemap
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return routes;
}
