import connectToDB from "@/utils/connectDB";
import User  from '@/models/user';
// import order from "@/models/order";

//update post action
export async function updateFeedPostAction(data, pathToRevalidate) {
    await connectToDB();
    const { userId, userName, message, image, likes, _id } = data;
    await Feed.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        userId,
        userName,
        image,
        message,
        likes,
      },
      { new: true }
    );
  
    revalidatePath(pathToRevalidate);
  }
export async function updateUser(lab, _id  ) {
    await connectToDB();
    await User.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        labId:lab
      },
      { new: true }
    );
  
  }

 


// //update order payment
// export async function updateOrderPayment(idd, stock, qtyy, balanceStock, totalValue ) {
//   await connectToDB();
   
  //   await MenuStock.findOneAndUpdate(
  //     {
  //       _id: idd,
  //     },
  //     {
   
  //   stock, qty: qtyy, balanceStock, totalValue
  //     },
  //     { new: true }
  //   );
  
  // }