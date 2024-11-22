import Image from "next/image";
import { forwardRef } from "react";
 import MenuLink from "./menuLink/menuLink";
 
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdRestaurantMenu,
  MdPayments,
} from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import { ScrollArea } from "@radix-ui/themes";



const Sidebar = forwardRef(({showNav, setShowNav, slug}, ref, searchParams) => {
  const user= JSON.parse(localStorage.getItem('user'))
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "New Entry",
          path: `/dashboard/${slug}/reg`,
          icon: <GoListOrdered />,
        },     
        {
          title: "Patient Entry",
          path: `/dashboard/${slug}/patient`,
          icon: <MdShoppingBag />,
        } ,      
          
        {
          title: "Group Entry",
          path: `/dashboard/${slug}/groups`,
          icon: <GoListOrdered />,
        },     
        {
          title: "Category Entry",
          path: `/dashboard/${slug}/categories`,
          icon: <MdPayments />,
        },     
        {
          title: "Test Entry",
          path: `/dashboard/${slug}/tests`,
          icon: <MdRestaurantMenu />,
        },     
        {
          title: "Referral Entry",
          path: `/dashboard/${slug}/referrals`,
          icon: <FaStoreAlt />,
        },     
        {
          title: "Clinic Entry",
          path: `/dashboard/${slug}/clinic`,
          icon: <MdShoppingBag />,
            
        }   
        ,     
        {
          title: "Reports",
          path: `/dashboard/${slug}/reports`,
          icon: <MdShoppingBag />,
        }    
        ,     
        {
          title: "Laboratory",
          path: `/dashboard/${slug}/laboratory`,
          icon: <MdShoppingBag />,
        }    
           
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: `/dashboard/${slug}/reports`,
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div  ref={ref} className="fixed w-56 shadow-sm h-full bg-black text-white">
      <ScrollArea type="always" scrollbars="vertical" size="1" style={{ height: 500 }}>
      <div className="flex flex-col mt-6 mb-14 justify-center items-center">
        <picture>
        <img
          className="w-16 h-auto rounded-full mb-2"
          src= {user?.img || "/logo.jpg"}
          alt={user?.img}      
          />
          </picture>
          <span className="text-sm font-bold uppercase">{user.name}</span>
          <span className="text-xs">{user.role}</span>
        </div>
        <div className="">
      </div>
       <ul className="flex flex-col" onClick={()=> setShowNav(!showNav)}>
        {menuItems.map((cat) => (
          <li key={cat.title} >
            <span className="ml-2 text-xl font-bold"></span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul> 
      <form
        action=""
      >
        <button className="">
          <MdLogout />
          Logout
        </button>
      </form>
    </ScrollArea>
    </div>
  );
});

Sidebar.displayName="Sidebar"
export default Sidebar;
