import mongoose from 'mongoose';

const Connection = async(username='user1',password='userone')=>{
    const URL =`mongodb+srv://user1:${password}@googledoccluster.vaf00jy.mongodb.net/?retryWrites=true&w=majority`;
    try{
         await mongoose.connect(URL,{useUnifiedTopology:true})
         console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with database',error);
    }
}

export default Connection;