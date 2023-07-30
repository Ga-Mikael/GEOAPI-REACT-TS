import React from "react";
import ListCard from "../components/Listcard.tsx";

export interface IName {
    name: { common:string }
}

export interface IInfoCountry {
    country: IInfo

}

export interface IInfo {
    name : ICountry
    languages: string
    flags: ISvg
    capital: string
    population: number
}

interface ISvg {
    svg: string
}