import DynamicModal from "../../components/dynamicModal/DynamicModal"

export default async function Page() {
    return (
        <div> 
        <DynamicModal
          title="Dynamic Modal"
          body="This is a dynamic modal"
          image="https://farm5.staticflickr.com/4404/36289482971_a3a77b523c.jpg"
          cta={"Click me"}
        />
      </div> 
    )
}