

import { Suspense } from 'react';
import Image from 'next/image';
import { mulish } from '@/app/ui/font';

import { LatestInvoicesSkeleton } from '../ui/skeletons';
import LatestInvoices from '../ui/dashboard/latest-invoices';



export default async function  Page(){



    return(
        <main className="">
            
            <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Image src='/topImg.png' width={922} height={262} className=' ' alt='' />
                <Image src='/asset.png' width={140} height={105} className='' alt='' />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                    {/* <Suspense fallback={<RevenueChartSkeleton />}>
                             <RevenueChart />
                    </Suspense> */}

                     <Suspense fallback={<LatestInvoicesSkeleton />}>
                    

                    </Suspense>
        
      </div>
        </main>
    )

}