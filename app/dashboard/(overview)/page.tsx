//import { Card } from "@/app/ui/dashboard/cards";
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchRevenue, fetchLatestInvoices, fetchCardData, } from '@/app/lib/data';
import {fetchCardData, } from '@/app/lib/data';
import {Suspense} from 'react';
import { RevenueChartSkeleton,LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';


export default async function Page() {
//const revenue = await fetchRevenue();
// const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
/* const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData(); // wait for fetchLatestInvoices() to finish
 */
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-5xl`}>Dashboard page</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton/>}> 
        <RevenueChart /* revenue={revenue} ya no necesita props */ />
      </Suspense>
      <Suspense fallback={<LatestInvoicesSkeleton/>}> 
        <LatestInvoices /* latestInvoices={latestInvoices} */ /> 
      </Suspense>
      </div>
    </main>
   
  )
}