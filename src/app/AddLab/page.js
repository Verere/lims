import { addLab, currentUser } from "@/actions";
import { auth } from "@/auth";
import AddLabForm from "@/components/AddLabForm";
import { redirect } from "next/navigation";

const AddStorePage = async() => {
  // const user= await auth()
  //  const cUser = await currentUser(user?.user?.email)
  
  // if(!user) redirect('/login')
  return (
  
     <AddLabForm />
  );
};

export default AddStorePage;

