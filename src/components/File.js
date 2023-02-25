const File = (props) => {

  const removeFileHandler = (id,level) =>{
    props.fileremovehandler2(id,level-1)
  }
  return (
    <div className="d-flex flex-row bg-secondary m-3">
      <div className="m-3">
        <h1>{props.name}</h1>
      </div>
      <div className="p-3 m-3">
        <button className="m-2" onClick={() => removeFileHandler(props.id,props.level)}>Remove</button>
      </div>
    </div>
  );
};

export default File;
