import { StaticImageData } from "next/image";

export interface INews  {
_id?: string;
title: string
slug: string
thambnail: string
content: string
category?: {
  _id: string
}
image: StaticImageData;
offer?: number
metaTitle: string
tags:string[]
metaDescription: string
description?: string
price?: number
createdAt: Date

}