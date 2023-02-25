import Folder from "./Folder";
import File from "./File";

const Tree = ({ node, folderhandler1, filehandler1,fileremovehandler1,folderremovehandler1,showtree1 }) => {
  //console.log(node.name);
  //console.log(node.FolderOrFile)
  const folderHandler2 = (folderName, id, level) => {
    folderhandler1(folderName, id, level);
  };

  const fileHandler2 = (fileName, id, level) => {
    filehandler1(fileName, id, level);
  };

  const fileRemoveHandler2 = (id,level) => {
    fileremovehandler1(id,level)
  };

  const folderRemoveHandler = (id,level) =>{
    folderremovehandler1(id,level)
  }

  const showTree = (id) =>{
    showtree1(id)
  }

  let level = node.level * 40;
  let styles = {
    marginLeft: `${level}px`,
  };

  return (
    <div>
      <div style={styles}>
        {node.FolderOrFile === "Folder" && node.show && (
          <Folder
            name={node.name}
            id={node.id}
            level={node.level}
            folderhandler2={folderHandler2}
            filehandler2={fileHandler2}
            folderremovehandler2={folderRemoveHandler}
            showtree={showTree}
            showlabel={node.showlabel}
          />
        )}
        {node.FolderOrFile === 'file' && node.show && (
          <File
          name={node.name}
          id={node.id}
          level={node.level}
          fileremovehandler2={fileRemoveHandler2}
        />
        )
        }
      </div>
      {node.children.length === 0
        ? null
        : node.children.map((child) => (
            <Tree
              node={child}
              folderhandler1={folderhandler1}
              filehandler1={filehandler1}
              fileremovehandler1={fileremovehandler1}
              folderremovehandler1={folderremovehandler1}
              showtree1={showtree1}
            />
          ))}
    </div>
  );
};

export default Tree;
