'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IProduct } from '@/types/product.interface'
import SendQuoteModal from '@/components/module/Product/SendQuoteModal'
interface SendInquiryButtonProps {
  product?: IProduct  // ✅ make product optional
}
const SendInquiryButton = ({ product }: SendInquiryButtonProps) => {
      const [showModal, setShowModal] = useState(false)

      return (
            <>
                  <Button
                        onClick={() => setShowModal(true)}
                        className='w-full cursor-pointer md:py-5 md:text-lg mt-5 md:mt-10 '>Inquiry</Button>
                  {/* Donation Modal */}
                  {showModal && <SendQuoteModal product={product} onClose={() => setShowModal(false)} />}
            </>
      )
}

export default SendInquiryButton
