const {MongoClient} =  require('mongodb')
    const uri = "mongodb+srv://ahsanhasnain321:2WpeETxQGAOdxVg2@Cluster0.rsgnt1z.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)


const AllFunctions = {
    createDocument: 
        async function Report(input, db, collection){
            try{
                await client.connect()
                async function createListing(client, newListing){
                 const result = await client.db(db).collection(collection).insertOne(newListing);
                 console.log(`New reprt created with the following id: ${result.insertedId}`);
                 
            }
            
            createListing(client, input).then(()=>{
                return ("response successfully inserted")
            })

            }catch(e){
                console.log(error);
                return (error)
            }
    },
    deleteDocument:
        async function delDocument(input, db, collection){
            try{
                await client.connect()
                const result = await client.db(db).collection(collection).deleteOne(input);
                console.log(`doc deleted `);
                return result
            }catch(err){
                console.log(err);
                return err
            }
    }

}
module.exports = AllFunctions