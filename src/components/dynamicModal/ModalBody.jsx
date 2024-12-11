'use client'

import { useEffect, useState } from 'react';
import DynamicModal from "./DynamicModal"

export default function ModalBody() {

  const [user, setUser] = useState(null);

  useEffect(() => {

      async function getUserInfo() {
          const userInfo = await miro.board.getUserInfo();
          const userId = userInfo.id;
          return { userId };
      }

      getUserInfo().then((data) => {
          setUser(data.userId);
      });

  },[]);




  return (
    <>
      <DynamicModal
        image="https://www.erm.com/globalassets/homepage/erm-logo-1200x630.jpg"
        imagePosition="center"
        heading="Dynamic Modal"
        paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices, eros et venenatis pharetra, odio risus convallis lacus, eget pellentesque ex velit in risus. Maecenas viverra congue orci, at bibendum velit ullamcorper vestibulum. Morbi sagittis mauris in dui elementum, sit amet ullamcorper libero eleifend. Nulla sit amet massa et nisl bibendum euismod ac vitae enim. Fusce porta porta porttitor. Suspendisse potenti. Cras vehicula eros nec mi gravida, in eleifend nisi venenatis."
        paragraphTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices, eros et venenatis pharetra, odio risus convallis lacus, eget pellentesque ex velit in risus."
        linkOut="https://www.google.com"
        linkOutText={"Google"}
        cta={"Close"}
        user={ user }
        >

          <DynamicModal.ModalImage />
          <DynamicModal.Heading />
          <DynamicModal.ParagraphOne />
          <DynamicModal.ParagraphTwo />
          <DynamicModal.LinkOut />
          <DynamicModal.Button />

        </DynamicModal >
    </>
  )
}