import { Amaranth, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizza Point",
  keywords: [
    "Pizza Point",
    "Pizza Delivery",
    "West Seattle Pizza",
    "24/7 Pizza",
    "Online Pizza Ordering",
    "Halal Pizza",
    "Fresh Pizza",
    "Pizza Discounts",
    "Best Pizza in Seattle",
  ],
  description:
    "PizzaPoint.store is your go-to destination for hot, fresh, and flavorful pizzas in West Seattle. Open 24/7, we specialize in handcrafted pizzas made with premium ingredients, offering a variety of options to satisfy every craving. From our popular Delighted Veggie Top to the indulgent All Meat Pizza Top, and unique creations like Malai Tikka Paneer and Halal Malai Tikka Chicken, there's something for everyone. Enjoy a seamless online ordering experience and take advantage of our 25% discount on your favorite pizzas. With a 5-star rating on Google, PizzaPoint.store is committed to delivering delicious pizzas and exceptional service around the clock.",
  openGraph: {
    title: "Pizza Point - Your 24/7 Pizza Destination in West Seattle",
    description:
      "Enjoy hot, fresh pizzas made with premium ingredients. Order online now!",
    url: "https://pizzapoint.store", // Update with your actual URL
    siteName: "Pizza Point",
    images: [
      {
        url: "/logo/logo.png", // Update with your actual image path
        width: 800,
        height: 600,
        alt: "Pizza Point Logo",
      },
    ],
  },
  
};

const amaranth = Amaranth({
  weight: "400",
  subsets: ["latin"], // or ['latin-ext'] if needed
  preload: true, // Optional, but recommended if you want preloading
});

// Removed duplicate metadata declaration

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${amaranth.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
