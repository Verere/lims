"use server";
import {redirect } from "next/navigation";
import connectToDB from "@/utils/connectDB";
import Subscription from "@/models/subscription"
import Lab from "@/models/lab"
import Patient from "@/models/patient"
import Test from "@/models/test"
import Category from "@/models/category"
import Referral from "@/models/referral"
import Expenses from "@/models/expenses"
import Clinic from "@/models/clinic"
import Order from "@/models/order"
import Cart from "@/models/cart"

import { revalidatePath } from "next/cache";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import User  from '@/models/user';
import group from "@/models/group";
import payments from "@/models/payments";
import moment from 'moment'

    var date = moment();
const bDate = date.format('D/MM/YYYY')

//fetch labs
export async function fetchAllLab() {
    await connectToDB();
   
    try {
      const result = await Lab.find();
  
      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.log(err);
     return{error:"Failed to fetch lab!"}
    }
  }

  //fetch patients
export async function fetchAllPatients(slug) {
    await connectToDB();
   
    try {
      const result = await Patient.find({slug, isCancelled:false}).sort({name:'asc'});
  
      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch lab!");
    }
  }
  //fetch patientsbyLab
export async function fetchPatientListByLab(slug, patient) {
  const regex = new RegExp(patient, "i")

    await connectToDB();
   
    try {
      const result = await Patient.find({slug, isCancelled:false, name: { $regex: regex } }).sort({name:'desc'})
  
      return {
        success:true,
        result:JSON.parse(JSON.stringify(result))};
    } catch (err) {
      console.log(err);
      return {error: "Failed to fetch lab!"}
    }
  }
  //fetch referal lisst
export async function fetchReferralListByLab(slug, ref) {
  const regex = new RegExp(ref, "i")

    await connectToDB();
   
    try {
      const result = await Referral.find({slug, name: { $regex: regex } });
  
      return {
        success:true,
        result:JSON.parse(JSON.stringify(result))};
    } catch (err) {
      console.log(err);
      return {error: "Failed to fetch lab!"}
    }
  }
export async function fetchReferrals(slug) {

    await connectToDB();
   
    try {
      const result = await Referral.find({slug}).sort({name:'asc'})
  
      return {
        success:true,
        result:JSON.parse(JSON.stringify(result))};
    } catch (err) {
      console.log(err);
      return {error: "Failed to fetch lab!"}
    }
  }

  //fetch currentUser
export async function currentUser(email) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await User.findOne({email});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log('err', err);
  }
}
 //fetch Hotel by Id
 export async function fetchUser(id) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await User.findOne({email:id});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"};
  }
}

// fetch sub
export async function fetchMenu(storeid, location, category) {
  await connectToDB();

  try {
    connectToDB();
    if(category){

      const result = await Menu.find({$and:[{hotelId:storeid}, {location}, {category}]});
      return JSON.parse(JSON.stringify(result));
    }else{

      const result = await Menu.find({$and:[{hotelId:storeid}, {location}]});
      return JSON.parse(JSON.stringify(result));
    }
   
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch menu!");
  }
}
// fetch menu query
export async function fetchMenuSearch(storeid, location, q) {
  const regex = new RegExp(q, "i");
  await connectToDB();

  try {
    connectToDB();
    if(q){
      // const result = await Menu.find({$and:[{hotelId:storeid}, {location}, { menu: { $regex: regex } }]});
      const result = await Menu.find({hotelId:storeid, location, menu: { $regex: regex }})
      return JSON.parse(JSON.stringify(result));
    }
    // else{

    //   const result = await Menu.find({$and:[{hotelId:storeid}, {location}]});
    //   return JSON.parse(JSON.stringify(result));
    // }
   
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch menu!");
  }
}
// fetch menu query
export async function fetchMenuStockSearch(storeid, location) {
  // const regex = new RegExp(q, "i");
  await connectToDB();

  try {
    connectToDB();
    // if(q){
      // const result = await Menu.find({$and:[{hotelId:storeid}, {location}, { menu: { $regex: regex } }]});
      const result = await MenuStock.find({hotelId:storeid, location})
      return JSON.parse(JSON.stringify(result));
    // }
    // else{
    //   const result = await Menu.find({$and:[{hotelId:storeid}, {location}]});
    //   return JSON.parse(JSON.stringify(result));
    // }
   
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch menu!");
  }
}

//fetch category by slug
export async function fetchCategory(slug) {
 
  try {
    await connectToDB();

    const result = await Category.find({slug});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch menu!");
  }
}
//fetch by group and slug
export async function fetchCategoryByGrp(slug, group) {

  try {
    await connectToDB();

    const result = await Category.find({slug, group});
console.log(result)
    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch menu!");
  }
}

  //fetch sales by orderId
  export async function fetchSalesByOrderId(order) {
    await connectToDB();
   
    try {
      connectToDB();
      const result = await Cart.find({order, isCancelled:false})
  
      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.log(err);
      return{error:"Failed to fetch Order number!"};
    }
  }
  // //fetch sales by orderId
  // export async function fetchAllOrderTest(order) {
  //   await connectToDB();
   
  //   try {
  //     connectToDB();
  //     const result = await Order.find({order, isCancelled:false})
  
  //     return JSON.parse(JSON.stringify(result));
  //   } catch (err) {
  //     console.log(err);
  //     return{error:"Failed to fetch Order number!"};
  //   }
  // }


//fetch lab by user
export async function fetchLab(id) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Lab.findOne({_id:id});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}
//fetch Lab by Slug
export async function fetchLabSlug(id) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Lab.findOne({slug:id});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch slug!");
  }
}

export async function fetchLabs(id) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Lab.find({user:id});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}

//fetch tests by slug
export async function fetchTestsByLab(slug) {

  await connectToDB();
 
  try {
    connectToDB();
    const result = await Test.find({slug}).sort({createdAt:'desc'});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}
//fetch tests by slug
export async function fetchExpensesListByLab(slug) {

  await connectToDB();
 
  try {
    connectToDB();
    const result = await Expenses.find({slug, bDate, isCancelled:false}).sort({createdAt:'desc'});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}
//fetch tests by slug
export async function fetchTestsByLabTest(slug, test) {
  const regex = new RegExp(test, "i")

  await connectToDB();
 
  try {
    connectToDB();
    const result = await Test.find({slug, name: { $regex: regex } });

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}
//fetch tests by slug
export async function fetchTestsById(id) {

  await connectToDB();
 
  try {
    connectToDB();
    const result = await Test.find({_id:id});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}

 //fetch order
 export async function fetchOneOrder(slug) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Order.find({slug}).sort({createdAt:-1}).limit(1)

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}
 //fetch order
 export async function fetchAllOrders(slug) {
   
   try {
    await connectToDB();
 ;
    const result = await Order.find({slug}).sort({createdAt:'desc'});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}
 //fetch order
 export async function fetchAllOutstanding(slug) {
   
   try {
    await connectToDB();
 ;
    const result = await Order.find({slug, isCancelled:false,  bal: { $gt: 0 } }).sort({createdAt:'desc'});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}
 //fetch order
 export async function fetchAllReferralOrders(slug) {
 
 
 
  try {
    connectToDB();
    const result = await Order.find({slug, isCancelled:false}).sort({createdAt:'desc'});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}
 //fetch order
 export async function fetchAllReferralOrdersByName(slug, test) {
 const regex = new RegExp(test, "i")

 
    connectToDB();
 
  try {
    connectToDB();
    const result = await Order.find({slug, isCancelled:false, name: { $regex: regex }}).sort({createdAt:'desc'});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}
 //fetch order
 export async function fetchAllOrderTest(order) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Cart.find({order})

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}


//fetch clinics by slug
export async function fetchClinicListByLab(slug, clinic) {
  const regex = new RegExp(clinic, "i")
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Clinic.find({slug, name: { $regex: regex } });

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}
//fetch tests by slug
export async function fetchGroupsByLab(slug) {

  await connectToDB();
 
  try {
    connectToDB();
    const result = await group.find({slug});

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}
export async function fetchNewLab(user) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Lab.find({user}).sort({createdAt:-1}).limit(1)

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}

//count lab Patients
export async function fetchCountPatient(id) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Patient.find({labId:id}).countDocuments().exec()


    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}
//count lab Patients
export async function fetchCountRef(slug) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Referral.find({slug}).countDocuments().exec()


    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}
//count lab Patients
export async function fetchCountOrder(slug) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await Order.find({slug}).countDocuments().exec()


    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch user!"}
  }
}

 //fetch sales by orderId
 export async function fetchPaymentByOrder(order) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await payments.find({order})

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}
 //fetch sales by orderId
 export async function fetchAllPayments(slug) {
  await connectToDB();
 
  try {
    connectToDB();
    const result = await payments.find({slug, bDate}).sort({'createdAt':'desc'})

    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return{error:"Failed to fetch Order number!"};
  }
}

export async function updateSalesCancel(id, path) {
  console.log('i', id, path)
    await connectToDB();
 
    await Cart.findOneAndUpdate(
      {
        _id: id,
      },
      {
        isCancelled:  true,

      },
      { new: true }
    );
  
    revalidatePath(path);
  }