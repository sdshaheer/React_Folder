import logo from "./logo.svg";
import "./App.css";
import Folder from "./components/Folder";
import Tree from "./components/Tree";
import { useState } from "react";

const Root = {
  id:Math.floor(Math.random()*10), 
  level: 1,
  FolderOrFile: "Folder",
  name: "root",
  show:true,
  showlabel:true,
  children: [
    {
      id:Math.floor(Math.random()*10),
      level: 2,
      name: "a",
      FolderOrFile: "Folder",
      show:false,
      showlabel:true,
      children: [],
    },
    {
      id:Math.floor(Math.random()*10),
      level: 2,
      name: "b",
      FolderOrFile: "file",
      show:false,
      children: [],
    },
  ],
};

function App() {
  const [tree, setTree] = useState(Root);

  const update = (node, Name, id, level, type) => {
    if (node.id === id) {
      console.log("present");
      node.children = [
        ...node.children,
        {
          id:Math.floor(Math.random()*100),
          level: level + 1,
          FolderOrFile: type,
          name: Name,
          show:!node.showlabel,
          showlabel:true,
          children: [],
        },
      ];
      return node;
    } else {
      node.children.forEach((child) => {
        update(child, Name, id, level, type);
      });
    }
    return node;
  };

  const deleteFile = (node,id,level) =>{
    if(node.level===level){
      node.children = node.children.filter((child) =>child.id!==id)
      return node
    }
    else{
      node.children.forEach((child) => {
        deleteFile(child,id, level);
      });
    }
    return node
  }

  const deleteFolder = (node,id,level) =>{
    if(level===0){
      alert("cant have access to delete root folder")
      return null
    }
    if(node.level===level){
      console.log("hello")
      const folder = node.children.filter((child) => child.id===id)
      console.log(folder)
      if(folder[0].children.length === 0){
        console.log(node.children)
        console.log(id)
        node.children = node.children.filter((child) =>child.id!==id)
        return node
      }
      else{
        alert("Folder contain other files")
        return null
      }

    }
    else{
      node.children.forEach((child) => {
        deleteFile(child,id, level);
      });
    }
    return node
  }

  const show = (node,id) =>{
    if (node.id === id) {
      node.showlabel=!node.showlabel
      if(node.children.length>0){
        node.children = node.children.map((child) => ({...child,show:!node.showlabel}))
      }
      return node;
    } else {
      node.children.forEach((child) => {
        show(child,id);
      });
    }
    return node
  }

  const folderHandler1 = (folderName, id, level) => {
    const duplicate = { ...tree };
    const updatedTree = update(duplicate, folderName, id, level, "Folder");
    setTree(updatedTree);
  };

  const fileHandler1 = (fileName, id, level) => {
    const duplicate = { ...tree };
    const updatedTree = update(duplicate, fileName, id, level, "file");
    setTree(updatedTree);
  };

  const fileRemoveHandler1 = (id,level) =>{
    const duplicate = { ...tree };
    const updatedTree = deleteFile(duplicate, id,level);
    setTree(updatedTree);
  }

  const folderRemoveHandler1 = (id,level) =>{
    const duplicate = { ...tree };
    const updatedTree = deleteFolder(duplicate, id,level);
    if(updatedTree!==null){
      setTree(updatedTree);
    }
  }

  const showTree1 = (id,level) =>{
    const duplicate = { ...tree };
    const updatedTree = show(duplicate, id);
    setTree(updatedTree);
  }

  console.log(tree);
  return (
    <div className="App">
      <Tree
        node={tree}
        folderhandler1={folderHandler1}
        filehandler1={fileHandler1}
        fileremovehandler1={fileRemoveHandler1}
        folderremovehandler1={folderRemoveHandler1}
        showtree1={showTree1}
      />
    </div>
  );
}

export default App;
