import './CommonSection.css'

const CommonSection = ({title}) => {
  return (
       <>
        <section className="common__section">
            <div className="common__container">
                <h1>{title}</h1>
            </div>
        </section>
       </>
  )
}

export default CommonSection