'use client'
import Image from "next/image";
import Modal from '../components/modal'
import { Fragment } from "react";
import { useState } from "react";

export default function Home() {
  
   const [showModal, setShowModal]  = useState(false);

  return (
   <Fragment>
     <div className="justify-center text-center">
        <h1 className="text-white m-5">Create Custom Modal in React Js with Tailwind CSS</h1>

        <button class="bg-blue-600 pt-2 pb-2 pr-5 pl-5 rounded-md mr-3 " onClick={() => setShowModal(true)}>Open Modal</button>
     </div>
     <Modal isVisible = {showModal} onClose={() => setShowModal(false)}>
      <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-5">Modal Title</h3>

      <p className="mb-5 font-normal text-gray-500">
      Lorem ipsum dolor sit amet. Vel mollitia tempora aut quibusdam molestias id perferendis pariatur 33 iusto consequuntur aut dolor molestias. Et voluptatem ducimus qui quidem incidunt et sunt dignissimos nam deleniti officiis rem excepturi impedit est repellendus vero eos quibusdam dolorum.
      </p>
      <p className="mb-5 font-normal text-gray-500">
      Id dicta rerum sed voluptatem earum et magnam laboriosam nam quaerat eius non voluptatem possimus et libero labore et repellendus quasi. In optio iure rem eaque ratione ab harum dolores aut excepturi vitae vel galisum rerum vel debitis voluptas a quam fugiat? At maiores pariatur eos deserunt rerum est neque beatae est saepe quis qui minima Quis.
      </p>
      </div>
      
     </Modal>
     </Fragment >
  );
}
