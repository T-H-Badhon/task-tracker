export default function Loader({ height = '200px' }: { height?: string }) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height, width: '100%' }}
      >
        <img
          src="/images/loading.gif"
          alt=""
          className="img-fluid"
          style={{ width: '50px' }}
        />
      </div>
    );
  }