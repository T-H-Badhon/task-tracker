export default function Loader() {
    return (
      <div
        className="flex items-center justify-center h-screen w-screen"
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