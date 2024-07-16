import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe("your_stripe_secret_key", {
  apiVersion: "2020-08-27", // Specify the Stripe API version
});

// Function to create a product
export default async function createProduct() {
  try {
    const product = await stripe.products.create({
      name: "Your Product Name",
      description: "Description of your product",
      images: ["https://example.com/your-product-image.jpg"],
      metadata: {
        // Optional metadata
      },
    });

    console.log("Product created:", product);
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

// Call the function to create the product
createProduct();
