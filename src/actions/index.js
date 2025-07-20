"use server";
import {redirect } from "next/navigation";
import connectToDB from "@/utils/connectDB";
import Subscription from "@/models/subscription"
import Lab from "@/models/lab"
import Cart from "@/models/cart"
import  Referral  from '@/models/referral';
import MenuStock from "@/models/menuStock"
import Expenses from "@/models/expenses"
import Category from "@/models/category"
 import Patient from "@/models/patient"
 import Clinic from "@/models/clinic"
 import Order from "@/models/order"

import { revalidatePath } from "next/cache";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import User  from '@/models/user';
import payments from "@/models/payments";
import test from "@/models/test";
import cart from "@/models/cart";
import { fetchLab, fetchNewLab, fetchCountPatient , fetchCountRef, fetchCountOrder, fetchAllOrderTest,
  fetchSalesByOrderId, fetchPaymentByOrder} from "./fetch";
import { updateUser } from "./update";
import moment from 'moment'

    var date = moment();
const bDate = date.format('D/MM/YYYY')

export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
  await signIn("credentials", { email, password });
  //  redirect(`/dashboard/`)
  return{error:"Invalid Username or Password"}
  } catch (err) {
    console.log(err)
 
    if(!err.type){
      const user = await User.findOne({ email });
      if(!user)return{error:"Invalid Username or Password"}
    // if(user?.isAdmin) {return{success:true}, redirect(`/dashboard/`)}

    if(user){
      const lab = await fetchLab(user.labId)
      return{success:true}, redirect(`/dashboard/${lab?.slug}/reg`)}
    //  else{return{success:true}, redirect(`/dashboard/${user?.labId}`)}
    } 
    if (err) {
      switch (err.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return err.type;
      }
    }
    }
};


export const addSub = async (formData) => {
  const { name, maxStore } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newSubscription = new Subscription({
      name,
      maxStore,
    
    });

    await newSubscription.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }
}


//add new menu
export const addCategory= async (prevState, formData) => {
  const { name, group, slug, path} =
  Object.fromEntries(formData);
  try {   
    connectToDB(); 
      const newCategory = new Category({
        name, group, slug, 
      });
      
      await newCategory.save();
  
      revalidatePath(path); 
      return{success:true}
  } catch (err) {
    console.log(err);
   return {error:"Failed to create category!"}
  }

}; 

export const addClinic = async (prevState, formData) => {
  const { name, address, slug, user, path } =
    Object.fromEntries(formData);
   
    try {

    connectToDB();

    const newProduct = new Clinic({
      name, address, slug, user
    
    });

    await newProduct.save();
  revalidatePath(path);
    return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to create Referral!"}
  }

};

export const addReferral = async (prevState, formData) => {
  const { name, address, number, email,slug, clinic,  path } =
    Object.fromEntries(formData);
   
    try {
      const num = await fetchCountRef(slug) +1
      const regNumber = slug.substring(0, 4) + num 

    connectToDB();

    const newProduct = new Referral({
      name, regNumber, address, number, email, slug, clinic,
    
    });

    await newProduct.save();
  revalidatePath(path);
    return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to create Referral!"}
  }

};

export const addPatient = async (prevState, formData) => {
  const { name, age, gender, address, number, email,slug, labId, path } =
    Object.fromEntries(formData);
    console.log('gen', gender, 'l',labId)
    try {
      const num = await fetchCountPatient(labId) +1
      const regNumber = slug.substring(0, 4) + num 

    connectToDB();

    const newProduct = new Patient({
      name, regNumber, age, gender, address, number, email, slug, labId,
    
    });

    await newProduct.save();
  revalidatePath(path);
    return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to create Patient!"}
  }

};

export const addExpenses = async (prevState, formData) => {
  const { description, amount, receivedBy, authorisedBy, user, slug,  path } =
    Object.fromEntries(formData);

    try {
    

    connectToDB();

    const newProduct = new Expenses({
     description, amount, receivedBy, authorisedBy, user, bDate, slug,
    
    });

    await newProduct.save();
  revalidatePath(path);
    return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to add Expenses!"}
  }

};

//add new lab
export const addLab = async (prevState, formData) => {
  const { name, slug, address, phone, whatsapp, user, logo, imageUrl } =
  Object.fromEntries(formData);

  try {
    connectToDB();

    const newLab = new Lab({
      name, slug, address, phone, whatsapp, user, logo, imageUrl    
    });

    await newLab.save();
   const lab= await fetchNewLab(user)
   await updateUser(lab._id, user)

    return {
      success: true,
    };
  } catch (error) {
    console.log('Failed to add Lab room', error);
    return {
      error: 'Something went wrong creating lab',
    };
  }
  
};

//add new user
export const addUser= async (prevState, formData) => {
  const { name, email, password, image  } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const user = await User.findOne({ email: email });

    if (!user){
      
      const hashPasswrd = await hash(password, 12)
      
      const newUser = new User({
        name, email, password:hashPasswrd, image
      });
      
      await newUser.save();
    } else{
      return{
        error:`This ${user.name} user already exist`
      }
    }
    return{
      success:true
    }
  } catch (error) {
    console.log(error);
    return{
      error:"Failed to create user!"
    }
  }

  redirect("/login");
};

//add new menu
export const addGroup= async (prevState, formData) => {
  const {name, slug, createdBy, path} =
    Object.fromEntries(formData);
  try {   
    connectToDB(); 
      const newMenu = new Group({
        name, slug,  createdBy,
      });
      
      await newMenu.save();
  
      revalidatePath(path); 
      return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to create Menu!"}
  }
};

//add new menu
export const addPayment= async (prevState, formData) => {
  const {patient, order, orderNo, testAmount,amountPaid, mop, user, slug, path} =

    Object.fromEntries(formData);
    try {   
      const Payments = await fetchPaymentByOrder(order)
      let allPayments=[]
      allPayments =  Payments.map((i) => i.amountPaid)
     
            const amtTotal = allPayments.reduce((acc, item) => 
          acc + (item)
          ,0)
      const tests = await fetchAllOrderTest(order)

       if(amtTotal===0 && amountPaid <= testAmount || amountPaid <= (testAmount - amtTotal)){
          connectToDB(); 
     
           const newMenu = new payments({
            patient, order, orderNo, amount:testAmount, amountPaid, mop, user, slug,bDate,
           });
           
           await newMenu.save();

           //update test array in order
           const amt = parseInt(amountPaid) + parseInt(amtTotal)
           const bal = parseInt(testAmount) - parseInt(amt)
          
           await updateOrderBalance(order, testAmount, amt, bal, "Completed", tests)
           //update status in order
       
           revalidatePath(path); 
           return{success:"Payment Succesfull"}}
           else if(amtTotal===testAmount){
               return{
                 error : `Payment of ${amtTotal} has been made`
               }
             }
           else if(amountPaid >testAmount){
               return{
                 error : "Your Payment  is higher than your test Total. please enter the correct Amount"
               }
             }
           else{
             return{
               error : `Payment of ${amtTotal} has been made`
             }
           }
         } catch (error) {
           console.log(error);
           return{ error:"Failed to make Payment, Please try again"};
         }

};


//add new inventory
export const addMenuStock= async (formData) => {
  const {hotelId, menuId, menu,  uom, stock, action,  qty, balanceStock, price, totalValue, reOrder, user, location, businessDate, path} =
    Object.fromEntries(formData);
      
  console.log(menuId, menu, "uom",  uom, "stock",stock, "action", action,  "qty", qty, "balanceStock",balanceStock, "price",price, "totalValue",totalValue, "reodre",reOrder  )
  try {   
    connectToDB(); 
      const newMenu = new MenuStock({
        hotelId, menuId, menu,  uom, stock, action,  qty, balanceStock, price, totalValue, reOrder, user, location, businessDate,
      });
      
      await newMenu.save();
  
      revalidatePath(path); 
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Menu!");
  }

};
//add new test
export const addTest= async (prevState, formData) => {
  const {name, price, category,  slug, user, order, path} =
    Object.fromEntries(formData);  
    try {   
    connectToDB(); 
      const newMenu = new test({
         name, price,  category,   slug , user});
      
      await newMenu.save();

      //sum test amount
      // const sales = await fetchSalesByOrderId(order)

      // let allSaless=[]
      // allSaless =  Payments.map((i) => i.price)
     
      //       const amtTotal = sales.reduce((acc, item) => 
      //     acc + (item)
      //     ,0)
      // update order amount
      // await updateOrderAmount(order, amtTotal)
  
      revalidatePath(path); 
      return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to create Test!"}
  }

};

//add test to cart
export const addSales= async (prevState, formData) => {
  const {order, slug, orderNum, test,  price,  user,  path} =
    Object.fromEntries(formData);
  try{
    connectToDB(); 
      const newMenu = new Cart({
        order,  slug, orderNum, test,  price,  user,  });
      
      await newMenu.save();
  
      revalidatePath(path); 
  } catch (err) {
    console.log(err);
    return{error:"Failed to ADD Test!"}
  }
};

//add new order
export const addOrder= async (prevState, formData) => {
  const { patientId, name, phone, address, slug, user, path}= Object.fromEntries(formData);
  try {   
    connectToDB(); 
    const num = await fetchCountOrder(slug) +1
     const orderNum = slug.substring(0, 3) + num 
 
 
      const newMenu = new Order({
        patientId, name, phone, orderNum, address, slug, bDate, user });
      
      await newMenu.save();
  
      revalidatePath(path); 
      return{success:true}
  } catch (err) {
    console.log(err);
    return{error:"Failed to create Order!"}
  }

};







 //update order completed
 export async function updateOrderClinic(id, name,  ordId, path) {
  console.log("r", ordId, "id",id, "na",name, path)
  

      await connectToDB();
   
   await Order.findOneAndUpdate(
      {
        _id: ordId,
      },
      {
   
    clinicId: id,
     clinic: name
      },
      { new: true }
    );
    revalidatePath(path);
  }

//update order referral
export async function updateOrderRef( id, name, ordId, path ) {
console.log("r", ordId, "id", id,"nm", name, path )
      await connectToDB();
   
   await Order.findOneAndUpdate(
      {
        _id: ordId,
      },
      {
   
        referral: name,
        referralId: id,
      },
      { new: true }
    );
    revalidatePath(path);
  }

//update order billTo
export async function updateOrderBillTo( id, billTo, path ) {
  console.log("id", id,"nm", billTo, path )
  await connectToDB();

await Order.findOneAndUpdate(
  {
    _id: id,
  },
  {
    billTo
  },
  { new: true }
);
revalidatePath(path);
  
  }
//update order billTo
export async function updateOrderBalance( id, testAmount, amtTotal, bal, status, tests ) {
  await connectToDB();

await Order.findOneAndUpdate(
  {
    _id: id,
  },
  {
    amount:testAmount,
    amountPaid:amtTotal, 
    bal,
    tests,
    status
  },
  { new: true }
);  
  }
  
//update order billTo
export async function updateOrderAmount( id, amtTotal ) {
  await connectToDB();

await Order.findOneAndUpdate(
  {
    _id: id,
  },
  {
    amount:amtTotal, 
  },
  { new: true }
);
  
  }

 export async function updatePatient(id ) {
    await connectToDB();
 
    await Patient.findOneAndUpdate(
      {
        _id: id,
      },
      {
        isCancelled:  true,

      },
      { new: true }
    );
  
  }