import 'semantic-ui-css/semantic.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
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