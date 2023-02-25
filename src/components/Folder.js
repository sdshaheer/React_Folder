
const Folder = (props) => {

  const addFolder = (id,level) =>{
    const folderName = prompt("Enter Folder Name")
    if(folderName===null){
      return
    }
    props.folderhandler2(folderName,id,level)
  }

  const addFile = (id,level) =>{
    const fileName = prompt("Enter File Name")
    if(fileName===null){
      return
    }
    props.filehandler2(fileName,id,level)
  }

  const removeFolder = (id,level) =>{
    props.folderremovehandler2(id,level-1) // parent level
  }
  
  const showHandler = (id) =>{
    props.showtree(id)
  }

  return (
    <div className="d-flex flex-row bg-primary m-3">
      <div className="p-3">
        <h1>{props.name}</h1>
        <button onClick={() => showHandler(props.id)}>{props.showlabel?"Show":"Hide"}</button>
      </div>
      <div className="p-3 m-3">
        <button className="m-3" onClick={() => addFolder(props.id,props.level)}>Folder</button>
        <button className="m-3" onClick={() => addFile(props.id,props.level)}>File</button>
        <button className="m-3" onClick={() => removeFolder(props.id,props.level)}>Remove</button>
      </div>
    </div>
  );
};

export default Folder;
