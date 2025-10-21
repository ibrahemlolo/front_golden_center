import Spinner from 'react-bootstrap/Spinner';



function Loader() {
     return (<>
          <Spinner animation="border"
               role="status"
               style={{
                    width: '150px',
                    height: '150px',
                    margin: 'auto',
                    display: 'block',
            }}>
          </Spinner>
          <span className="visually-hidden">Loading...</span>
     </>
     );
}

export default Loader;
