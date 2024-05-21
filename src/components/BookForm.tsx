import Input from "./Input";
import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseIBSN, chooseAuthor, chooseCategory, chooseImage, choosePublishedDate, chooseTitle } from "../redux/slices/RootSlice";

interface BookFormProps {
    id?: string[]
}

const BookForm = (props: BookFormProps) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();


    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id);
        console.log(data);
        if (props.id && props.id.length > 0){
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset();
        } else {
            dispatch(chooseIBSN(data.IBSN));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseCategory(data.category));
            dispatch(chooseImage(data.image));
            dispatch(choosePublishedDate(data.published_date));
            dispatch(chooseTitle(data.title))

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 500);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="IBSN">Book IBSN</label>
                    <Input {...register('IBSN')} name='IBSN' placeholder='Enter Your Book IBSN Number'/>
                </div>

                <div>
                    <label htmlFor="Author">Author</label>
                    <Input {...register('author')} name='author' placeholder='Enter The Author Name'/>
                </div>

                <div>
                    <label htmlFor="Category">Category</label>
                    <Input {...register('category')} name='category' placeholder='Enter The Book Category'/>
                </div>

                <div>
                    <label htmlFor="Image">Image URL</label>
                    <Input {...register('image')} name='image' placeholder='Enter The Book Image URL'/>
                </div>

                <div>
                    <label htmlFor="Published Date">Published Date</label>
                    <Input {...register('published_date')} name='published_date' placeholder='Enter The Published Date'/>
                </div>
        
                <div>
                    <label htmlFor="Title">Title</label>
                    <Input {...register('title')} name='title' placeholder='Enter Your Book Title'/>
                </div>
                <div className="flex p-1">
                    <button className="flex justify-start text-blue-700 border border-zinc-800 bg-zinc-800 hover:text-black hover:bg-purple-700 hover:border-black m-3 p-2 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookForm;
