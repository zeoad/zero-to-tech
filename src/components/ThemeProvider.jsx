"use client";
import {createContext,useContext,useEffect,useState} from "react";
const ThemeContext=createContext({theme:"dark",toggleTheme:()=>{}});
export const useTheme=()=>useContext(ThemeContext);
export default function ThemeProvider({children}){const [theme,setTheme]=useState("dark");useEffect(()=>{const saved=localStorage.getItem("myspace-theme")==="light"?"light":"dark";setTheme(saved);document.documentElement.dataset.theme=saved},[]);function toggleTheme(){setTheme(current=>{const next=current==="dark"?"light":"dark";document.documentElement.dataset.theme=next;localStorage.setItem("myspace-theme",next);return next})}return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>}
