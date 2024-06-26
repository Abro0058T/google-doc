import { Server, Socket } from "socket.io";
import Connection from "./database/db.js";
import { getDocument, updateDocument } from "./controller/docController.js";
import cors  from "cors";

const PORT=9000

Connection();
const io=new Server(PORT,{
    cors:{
        origin:["https://google-doc-qbd7.vercel.app","https://googledocclone.netlify.app","http://localhost:3000","https://google-doc-1-d2fd.onrender.com"],
        methods:['GET','POST']
    }
});

io.on('connection',socket=>{
    socket.on('get-document',async documentId=>{
        const document= await getDocument(documentId);

        socket.join(documentId);
        socket.emit('load-document',document.data);

    
        socket.on('send-changes',delta=>{
            socket.broadcast.to(documentId).emit('receive-changes',delta);
            })
        socket.on('save-document',async data=>{
            await updateDocument(documentId,data);
        })
    })

});
