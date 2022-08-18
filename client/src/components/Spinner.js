


export default function Spinner({tip}) {
  return (
    <div className="d-flex justify-content-center">
        <div className={tip=='grow' ? 'spinner-grow text-success' : 'spinner-border text-danger'} role="status">
            <span className="sr-only"></span>
        </div>
    </div>
  )
}
