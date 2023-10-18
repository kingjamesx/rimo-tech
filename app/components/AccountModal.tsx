"use client";
import SignIn from "./signIn";
import SignUp from "./SignUp";
import Image from "next/image";
import Acc from "../assets/images/join.png";
import close from "../assets/icons/close.svg";
import { useState } from "react";
const AccountModal = () => {
  const [signUp, setSignUp] = useState(true);
  const [closeModal, setCloseModal] = useState(false);
  const login = () => {
    setSignUp(false);
  };
  const create = () => {
    setSignUp(true);
  };
  const handleClose = () => {
    setCloseModal(true);
    console.log("hey");
  };
  return (
  
    <div
      className={`absolute w-[1003px] bg-[#050505] text-[white] rounded-[12px] top-2   ${
        closeModal ? "hidden" : ""
      }`}
    >
      <div
        className="flex items-end justify-end py-4 px-4 "
        onClick={handleClose}
      >
        <span className=" bg-[#333] rounded-full p-2">
          <Image src={close} alt="close" />
        </span>
      </div>
      <section className="flex items-center justify-center gap-[70px] ">
        <div className="basis-[40%] pb-10 ">
          <p className="text-center text-[24px] font-bold">
            {signUp ? "Create an account" : "Welcome Back"}
          </p>
          {signUp ? <SignUp /> : <SignIn />}

          {signUp ? (
            <p className="text-center font-bold mt-2">
              Already have an account? <button onClick={login}>Log in</button>
            </p>
          ) : (
            <p className="text-center font-bold mt-2">
              Dont have an account? <button onClick={create}>Sign Up</button>
            </p>
          )}
        </div>
        <div className="basis-[40%] ">
          <Image src={Acc} alt="create account" />
          <p className="font-bold text-[26px] text-[#7B61FF] text-center">
            Join a community of podcast lovers and creators
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccountModal;
