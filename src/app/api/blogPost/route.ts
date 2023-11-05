// import { NextRequest, NextResponse } from "next/server";
// import mongoose from "mongoose";
// import connectDB from "@/lib/db/mongodb";
// import BlogPost from "@/model/blogPost";


// export async function GET(req: NextRequest, res: NextResponse) {
//   await connectDB();
//   const posts = await BlogPost.find();
//   return NextResponse.json(posts);
// }

// export async function POST(req: NextRequest) {
//   const { id, title, date, content, category, privacy } = await req.json();
//   console.log({ id, title, date, content, category, privacy })
//   if (req.method === "POST") {
//     try {
//       await connectDB();
//       await BlogPost.create({ id, title, date, content, category, privacy }); //문서 생성하고 바로 DB에 저장
//       return NextResponse.json({
//         msg: ["Message sent successfully"],
//         success: true,
//       });
//     } catch (error) {
//       if (error instanceof mongoose.Error.ValidationError) {
//         let errorList = [];
//         for (let e in error.errors) {
//           errorList.push(error.errors[e].message);
//         }
//         return NextResponse.json({ msg: errorList });
//       } else {
//         return NextResponse.json({ msg: ["Unable to send message."] });
//       }
//     }
//   }
// }


// export async function DELETE(req: NextRequest, res: NextResponse) {
//   const id = await req.json();
//   if (req.method === "DELETE") {
//     await connectDB();
//     await BlogPost.findOneAndDelete(id);
//     return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
//   }
// }

// export async function PUT(req: NextRequest, res: NextResponse) {
//   const newTodo = await req.json();
//   await connectDB();
//   console.log(newTodo);

//   const filter = {id: newTodo.id}
//   const update = {text: newTodo.editedTask}
//   await BlogPost.findOneAndUpdate(filter, update, {new: true});
//   return NextResponse.json({ message: "Todo updated" }, { status: 200 });
// }