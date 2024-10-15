import { Book } from "./books.model.js"
// addBook
export const addBook =async (req,res,next)=>{
    // get data
const {title,author,publishYear}=req.body
if (!title || !author || !publishYear) {
    return res.status(400).send({ message: 'Please send all fields' });
}

const book = new Book({
    title,
    author,
    publishYear

})

try {
    // save in db
    const createdBook = await book.save()
    return res.status(201).json({message:'created Book successfully',
        success: true,
        data:createdBook
    })
} catch (error) {
    console.error('Error creating book:', error); // Log the full error
    return res.status(500).send({ error: 'Internal server error', details: error.message });
}


}



// get all books
export const getAllBooks =async(req,res,next)=>{
try{

    const books = await Book.find({})
    return res.status(200).json({message:'get all books successfully',
        success: true,
        count:books.length,
        data:books
    })

}catch(error){
    console.error('Error getting all books:', error.message);
}
}


// get one books
export const getOneBooks =async(req,res,next)=>{
    try{
    const {id} = req.params
        const book = await Book.findById(id)
        return res.status(200).json({message:'get book successfully',
            success: true,
            data:book
        })
    
    }catch(error){
        console.error('Error getting all books:', error.message);
    }
    }




 // update book
 export const updateBook =async(req,res,next)=>{
    const {title,author,publishYear}=req.body
    try{
        if (!title && !author && !publishYear) {
            return res.status(400).send({ message: 'Please send all fields' });
        }

        const {id} = req.params
        const result = await Book.findByIdAndUpdate(id,req.body,{new:true})
        if (!result){
            return res.status(404).send({message:'Book not found'})
        }

        return res.status(200).json({message:'update book successfully',
            success: true,
            data:result
        })
    }catch(error){
        console.error('Error updating book');
        return res.status(500).send({message:error.message})

    }
 }



//  delete book
export const deleteBook =async(req,res,next)=>{
    try{
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id)
        if (!result){
            return res.status(404).send({message:'Book not found'})
        }
        return res.status(200).json({message:'delete book successfully',
            success: true,
            data:result
        })
    }catch(error){
        console.error('Error deleting book');
        return res.status(500).send({message:error.message})
    }
}
