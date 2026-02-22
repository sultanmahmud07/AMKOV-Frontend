'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IProduct } from '@/types/product.interface'
import SendQuoteModal from '@/components/module/Product/SendQuoteModal'

const GetQuoteButton = ({product}:{product:IProduct}) => {
      const [showModal, setShowModal] = useState(false)

      return (
            <>

                  <Button
                        onClick={() => setShowModal(true)}
                        className='px-10 cursor-pointer md:px-20 md:py-6 md:text-lg mt-5 md:mt-6 '>Get Quote</Button>
                  {/* Donation Modal */}
                  {showModal && <SendQuoteModal product={product} onClose={() => setShowModal(false)} />}
            </>
      )
}

export default GetQuoteButton
