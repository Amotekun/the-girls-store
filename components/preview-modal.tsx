import React from 'react'
import Modal from './ui/modal'
import usePreviewModal from '@/hooks/use-preview-modal';
import Gallery from './gallery/gallery';
import Info from './info';

const PreviewModal = () => {
    
    const product = usePreviewModal((state) => state.data)
    const previewModal = usePreviewModal();

    if (!product) {
        return null;
    }

  return (
    <Modal
        open={previewModal.isOpen}
        onClose={previewModal.onClose}
    >
        <div className='w-full grid grid-cols-1 sm:grid-cols-12 lg:gap-x-8 items-start gap-x-6 gap-y-8'>
            <div className='sm:col-span-4 lg:col-span-5'>
                <Gallery 
                    images={product.images}
                /> 
            </div>
            <div className='sm:col-span-8 lg:col-span-7'>
                <Info 
                    data={product}
                />
            </div>
        </div>
    </Modal>
  )
}

export default PreviewModal;