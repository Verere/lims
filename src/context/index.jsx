"use client";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [pageLoader, setPageLoader] = useState(false);
  const [componentLoader, setComponentLoader] = useState({
    loading: false,
    id: "",
  });
  const [pageLevelLoader, setPageLevelLoader] = useState(true);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [CanOrders, setCanOrders] = useState([]);
  const [compOrders, setCompOrders] = useState([]);
  const [suspOrders, setSuspOrders] = useState([]);
  const [cCanOrders, setCCanOrders] = useState(null);
  const [cCompOrders, setCCompOrders] = useState(null);
  const [cSuspOrders, setCSuspOrders] = useState(null);
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);
  const [busDate, setBusDate] = useState("");
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [slug, setSlug] = useState(null)
  const [payment, setPayment] = useState(0)
const [bal, setBal] = useState(0)
  const [addressFormData, setAddressFormData] = useState([
    {
      fullName: "",
      address: "",
      city: "",
      state: "",
    },
  ]);
  const [cartTotal, setCartTotal] = useState(0);
  
  const [allOrdersForUser, setAllOrdersForUser] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [allOrdersForAllUsers, setAllOrdersForAllUsers] = useState([]);

  const pathname = usePathname();



useEffect(() => {
  const setUserToState = () => {

    setUser (
      localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')) : null
    )
  }
  setUserToState()
}, [])

useEffect(() => {
  const setSlotToState = () => {

    setUser (
      localStorage.getItem('slug')
      ? JSON.parse(localStorage.getItem('slug')) : null
    )
  }
  setSlotToState()
}, [])



  return (
    <GlobalContext.Provider
      value={{
        showNavModal,
        setShowNavModal,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        pageLoader,
        setPageLoader,
        componentLoader,
        setComponentLoader,
        isAdminView,
        setIsAdminView,
        isAdmin,
        setIsAdmin,
        files,
        setFiles,
        showLoading,
        setShowLoading,
        currentUpdatedProduct,
        setCurrentUpdatedProduct,       
        addressFormData,
        setAddressFormData,
        cartTotal,
        setCartTotal,
        selectedAddress,
        setSelectedAddress,
        pageLevelLoader,
        setPageLevelLoader,
        componentLevelLoader,
        setComponentLevelLoader,
        allOrdersForUser,
        setAllOrdersForUser,
        orderDetails,
        setOrderDetails,
        setOrderDetails,
        allOrdersForAllUsers,
        setAllOrdersForAllUsers,
        slug, setSlug,
        busDate, setBusDate,
      CanOrders, setCanOrders,
       compOrders, setCompOrders,
        suspOrders, setSuspOrders,
      cCanOrders, setCCanOrders,
      cCompOrders, setCCompOrders,
       cSuspOrders, setCSuspOrders,
       hotel, setHotel,
       payment, setPayment,
       bal, setBal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
