function ErrorMessage({ items }){
      return <>{items.length === 0 && <h3>No food available</h3>}</>;
};

export default ErrorMessage;