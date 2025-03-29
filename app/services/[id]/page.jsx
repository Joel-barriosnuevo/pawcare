// Import the client component
import ServiceDetailPageClient from "./ServiceDetailPageClient"

// Import any data fetching functions you need
// import { getServices } from '@/lib/services';

export async function generateStaticParams() {
  // Replace this with your actual data fetching logic
  // const services = await getServices();

  // This is an example - replace with your actual service IDs
  const serviceIds = ["1", "2", "3", "4", "5"]

  return serviceIds.map((id) => ({
    id: id,
  }))
}

export default function ServiceDetailPage({ params }) {
  return <ServiceDetailPageClient params={params} />
}



