import 'semantic-ui-css/semantic.min.css'

const Body = (props) =>{
    return (
      <>
        <style jsx global>{`
            body {
            margin: 0;
            }
        `}</style>
        {props.children}
      </>
    )
}

export {Body}