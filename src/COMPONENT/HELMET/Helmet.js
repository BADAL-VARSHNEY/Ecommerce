
const Helmet = (props) => {
    document.title = 'Cloudmart -' + props.title
  return (
    <>
      <div style={{width: '100%'}} > {props.children} </div>
    </>
  )
}

export default Helmet;
