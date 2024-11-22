import LoginForm from "@/components/loginForm/loginForm";
import MainNav from "@/components/mainNav";


const NextLoginPage =async () => {

  return (
     
         <div className="flex flex-col min-h-screen  bg-gray-50 items-center space-y-20 mt-0 pt-0">
          <MainNav/>
          <LoginForm/>
         </div>    
     
  );
};

export default NextLoginPage;